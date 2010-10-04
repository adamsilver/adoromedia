(function(){
    var ajax = tddjs.ajax;
    
    TestCase("PollerTest", {
        setUp: function(){
            this.ajaxCreate = ajax.create;
            this.xhr = Object.create(fakeXMLHttpRequest);
            ajax.create = stubFn(this.xhr);
            this.ajaxRequest = ajax.request;
            this.poller = Object.create(ajax.poller);
            this.poller.url = "/url";
        },
        tearDown: function() {
            ajax.create = this.ajaxCreate;
            ajax.request = this.ajaxRequest;
            Clock.reset();
        },
        "test should be object": function(){
            assertObject(ajax.poller);
        },
        
        "test should define a start method": function(){
            assertFunction(ajax.poller.start);  
        },
        
        "test start should throw error exception for missing URL": function() {
            var poller = Object.create(ajax.poller);
            
            assertException(function(){
                poller.start();
            }, "TypeError");
        },
        
        "test should make XHR request with URL": function() {
            var poller = Object.create(ajax.poller);
            poller.url = "/url";
            poller.start();
            
            var expectedArgs = ["GET", poller.url, true];
            var actualArgs = [].slice.call(this.xhr.open.args);
            assert(this.xhr.open.called);
            assertEquals(poller.url, this.xhr.open.args[1]);
            assertEquals(expectedArgs, actualArgs);
            assert(this.xhr.send.called);
        },
        
        "test should schedule new request when complete": function() {
            var poller = Object.create(ajax.poller);
            poller.url = "/url";
            poller.start();
            
            this.xhr.complete();
            this.xhr.send = stubFn();
            Clock.tick(1000);
            // we stub the following code as poller.start already has requested xhr.send() with a stub
            // which would be set to called so we setup xhr.send with a new stub which guarantees
            // it hasn't been called, then we test it has been called after 1 second.
        
            assert(this.xhr.send.called);
        },
        "test should not make a new request until 1000 ms passed": function() {
            this.poller.start();
            this.xhr.complete();
            this.xhr.send = stubFn();
            Clock.tick(999);
            assertFalse(this.xhr.send.called);
        },
        "test should configure request interval": function() {
            this.poller.interval = 350;
            this.poller.start();
            this.xhr.complete();
            this.xhr.send = stubFn();
            Clock.tick(349);
            assertFalse(this.xhr.send.called);
            
            Clock.tick(1);
            assert(this.xhr.send.called);
        },
        "test should pass headers to request": function() {
            this.poller.headers = {
                "header-one": "1",
                "header-two": "2"
            };
            
            this.poller.start();
            
            var actual = this.xhr.headers;
            var expected = this.poller.headers;
            
            assertEquals(expected["header-one"], actual["header-one"]);
            assertEquals(expected["header-two"], actual["header-two"]);
        },
        "test should pass success callback": function() {
            this.poller.success = stubFn();
            this.poller.start();
            this.xhr.complete();
            assert(this.poller.success.called);
        },
        "test should pass failure callback": function() {
            this.poller.failure = stubFn();
            
            this.poller.start();
            this.xhr.complete(400);
            
            assert(this.poller.failure.called);
        },
        "test should pass the complete callback": function() {
            this.poller.complete = stubFn();
            this.poller.start();
            this.xhr.complete();
            assert(this.poller.complete.called);
        },
        "test should re-request immediately after long request": function() {
            
            this.poller.interval = 500;
            this.poller.start();
            var ahead = new Date().getTime() + 600;
            stubDateConstructor(new Date(ahead));
            ajax.request = stubFn();
            this.xhr.complete();
            Clock.tick(0);
            assert(ajax.request.called);
        }
    });
    
    TestCase("poll test", {
        setUp: function() {
            this.request = ajax.request;
            this.create = Object.create;
            ajax.request = stubFn();
        },
        tearDown: function() {
            ajax.request = this.request;
            Object.create = this.create;
        },
        "test should call start on poller object": function() {
            var poller = {start: stubFn()};
            Object.create = stubFn(poller);
            ajax.poll("/url");
            assert(poller.start.called);
        },
        "test should set url property on poller object": function() {
            var poller = ajax.poll("/url");
            assertSame("/url", poller.url);
        }
    });
    
})();
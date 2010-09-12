(function(){
    var ajax = tddjs.ajax;
    
    TestCase("PollerTest", {
        setUp: function(){
            this.ajaxCreate = ajax.create;
            this.xhr = Object.create(fakeXMLHttpRequest);
            ajax.create = stubFn(this.xhr);
        },
        tearDown: function() {
            ajax.create = this.ajaxCreate;
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
        }
    });
})();
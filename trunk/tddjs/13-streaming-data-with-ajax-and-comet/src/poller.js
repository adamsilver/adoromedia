(function(){
    var ajax = tddjs.namespace("ajax");
    
    function start(){
        if(!this.url) {
            throw new TypeError("Must specify url to poll");
        }
        
        var interval = 1000;
        
        if(typeof this.interval == "number") {
            interval = this.interval;
        }
        

        var poller = this;
        
        ajax.request(this.url, {
            complete: function(){
                setTimeout(function(){
                    poller.start();
                }, interval);
                if(typeof poller.complete == "function") {
                    poller.complete();
                }
            },
            headers: poller.headers,
            success: poller.success,
            failure: poller.failure
        });
    }
    
    ajax.poller = {
        start: start    
    };
    
    function poll(url) {
        var poller = Object.create(ajax.poller);
        poller.url = url;
        poller.start();
        return poller;
    }
    
    ajax.poll = poll;
    
})();
var Adoro = Adoro || {};
Adoro.History = new (function(){
	var members = {},
		delim = "&",
		timeout = null,
		timeoutLength = 100,
		iframe = null,
		currentUrl = getBrowserUrl();
	
	$(init);
	
	function init() {
		// start listening for the change in hash
		startCheckingUrl();
	}
	
	function update(key, value) {
		stopCheckingUrl();
		if(!members[key]) {
			addMember(key, value);
		}
		// at this point we need to update the url and set the current url to that too
		// so a "hash changed" event is not fired
		startCheckingUrl();
	}
	
	function listen(key, fn) {
		if(!members[key]) {
			addMember(key);
		}
		$(document).bind("url."+key, fn);
	}
	
	function stopCheckingUrl() {
		clearTimeout(timeout);		
	}
	
	function startCheckingUrl() {
		timeout = setTimeout(timeoutHandler, timeoutLength);
	}
	
	// every 100ms check the URL
	function timeoutHandler() {
		var browserUrl = getBrowserUrl();
		// if the hash portion of the URL has changed
		if(currentUrl !== browserUrl) {
			currentUrl = browserUrl;
			console.log(["hash changed", browserUrl]);
			
			// if the key in question has changed
			// i.e. #yourKey=someVal has changed to yourKey=someVal2
				// fire an event to say its changed
		}
			
		startCheckingUrl();
	}
	
	function addMember(key, value) {
		members[key] = {
			bhmValue: value ? value : ""
		}
	}
	
	function getBrowserUrl() {
		return location.hash.slice(1);
	}
	
	function setBrowserUrl(newUrl) {
		location.hash = newUrl;
	}
	
	this.listen = listen;
	this.update = update;
	
	function Member() {
	}
	Member.prototype = {
		currentValue : "",
		setCurrentValue: function(newVal) {
			this.currentValue = newVal;
		},
		getCurrentValue: function() {
			return this.currentValue;
		}
	}
	
	
});




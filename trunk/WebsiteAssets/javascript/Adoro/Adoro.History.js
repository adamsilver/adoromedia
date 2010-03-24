/**
* @fileOverview Adoro History object
* @name History
*/

/*
 LOGIC
 
if user clicks link
- stop checking url
- update the url (location.hash)
- update the current url variable
- (update iframe url) to create history point

check the hash
- if the location.hash != currentUrl
	- set current url variable to location.hash
	- (set iframe url) to create history point
	- loop through all members and trigger custom event with new URL value
- startCheckingUrl again
*/

/**
* @namespace Root namespace for holding all Adoro objects
* @name Adoro
*/
var Adoro = Adoro || {};

/**
 * History object
 * @constructor
 * @static
 */
Adoro.History = new (function(){
	// contains the names and values of history points to listen for changes
	var members = {};
	
	// the delimiter character for the hash i.e. www.example.com/#param1=value1&param2=value2
	var delim = "&";
	
	// the timout object to continuously check the URL hash value
	var timeout = null;
	
	// the amount of time to wait between polling
	var timeoutLength = 100;
	
	// set as nothing to begin with so that after startCheckingUrl() kicks in, a change will be recognised
	var currentUrl = ""; 
	
	// initialise
	$(init);
	
	/**
	 * Initalise...
	 * @name init
	 * @private
	 * @function
	 * @memberOf Adoro.History
	 */
	function init() {
		
		// if there is iframe (ie6/7)
		if (document.getElementById("URLFrame")) {
			// set iframe url to match URL address bar so that when checking the url occurs that a hash change occurs
			document.frames["URLFrame"].location.replace(document.frames["URLFrame"].location.pathname + "?" + location.hash.slice(1));
		}
	
		// start listening for the change in hash
		startCheckingUrl();
	}
	
	/**
	 * Will update the browser Url programatically - to stop firing a hash change
	 * event the checking will stop until this function has finished
	 * @name update
	 * @public
	 * @function
	 * @memberOf Adoro.History
	 */	
	function update(key, value) {
		stopCheckingUrl();
		var member = members[key]
		if(!member) {
			addMember(key, value);
		}
		else {
			member.bhmValue = value;
		}
		
		// TO DO URGENT
		// at this point we need to update the url and set the current url to that too
		// so a "hash changed" event is not fired
		updateBrowserUrl();
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
	
	/**
	 * check the url every xxx seconds to see if it has changed
	 * if the url has changed notify the listeners
	 * @name timeoutHandler
	 * @memberOf Adoro.History
	 * @private
	 * @function
	 */
	function timeoutHandler() {
		// uncommon: NOT CATERED FOR - user could change the URL manually by typing into it
		// common: they have clicked back or forward or book marked
		
		// get the browser url
		var browserUrl = getBrowserUrl();
		
		// if the hash portion of the URL has changed
		if(currentUrl !== browserUrl) {
			
			// if getting url from iframe then we need to manually update the
			// actual location.hash to match
			// all the functionality works without this but the location #value does not change
			if(document.getElementById("URLFrame")) {
				location.hash = browserUrl;
			}
			
			// because the url has changed update the stored currentUrl variable
			currentUrl = browserUrl;

			// a) set member.bhmValue to whatever value they are from the url
			// b) notify the listeners/fire the custom event
			var urlObj = getUrlObject();
			for(var key in members) {
				
				// set the member value to match the url value
				members[key].bhmValue = urlObj[key] || "";
				
				// TODO MAYBE: Check if member has changed before notifying
				
				// notify the listener with new value
				$(document).trigger("url."+key, [members[key].bhmValue, key]);
			}	
		}
		
		// start checking the Url again
		startCheckingUrl();
	}
	
	function getUrlObject() {
		var url = getBrowserUrl(), urlObject = {}, key, value, itemData;
		url = url.split(delim);
		for (var i = url.length-1; i>=0; i--) {
			itemData = url[i].split("=");
			key = itemData[0];
			urlObject[key] = itemData.slice(1).join("=");
		}
		return urlObject;
	}
	
	function addMember(key, value) {
		members[key] = {
			bhmValue: value ? value : ""
		}
	}
	
	function getBrowserUrl() {
		if(document.getElementById("URLFrame")) {
			return document.frames["URLFrame"].location.search.slice(1);		
		}
		return location.hash.slice(1);
	}
	
	function setBrowserUrl(newUrl) {
		if (document.getElementById("URLFrame")) {
			document.getElementById("URLFrame").setAttribute("src", document.frames["URLFrame"].location.pathname + "?" + newUrl);
			location.hash = newUrl;
		} else {
			location.hash = newUrl;
		}
	}
	
	function getIframeUrl() {
		return document.frames["URLFrame"].location.search.slice(1);
	}
	
	/**
	 * Update the browser url
	 * @name updateBrowserUrl
	 * @private
	 * @function
	 * @memberOf Adoro.History
	 */
	function updateBrowserUrl() {
		var newUrl = "";
		// form newUrl based on the members values which have already been set by this point
		for (var key in members) {
			newUrl = newUrl + (newUrl.length === 0 ? "" : delim);
			newUrl = newUrl + key + "=" + members[key].bhmValue;
		}
		setBrowserUrl(newUrl);
		
		// very important - if we change the URL address bar then we must change the stored currentUrl value
		// so that a hash changed event does not occur when we start checking the url again
		currentUrl = newUrl;
	}
	
	// public members
	this.listen = listen;
	this.update = update;
});
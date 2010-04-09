/**
* @fileOverview Adoro History object
* @name History
*/

var Adoro = Adoro || {};

/**
 * History object
 * @class (singleton) Represents the history object
 * @constructor
 * @static
 * @name History
 * @memberOf Adoro
 * @requires jQuery 1.4.2
 */
Adoro.History = new (function(){
	// contains the names and values of history points to listen for changes
	var members = {};
	
	// the delimiter character for the hash i.e. www.example.com/#param1=value1&param2=value2
	var delim = "&";
	
	// the timout object to continuously check the URL hash value
	var timeout = null;
	
	// the amount of time to wait between polling
	var timeoutLength = 10;
	
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
	 * Get the member from key
	 * <br/><br/>Note: Can interogate bhmValue as a property of the member to find currentValue
	 * @name getMember
	 * @public
	 * @function
	 * @memberOf Adoro.History
	 * @param {String} key The name of the member
	 * @return {Object} The member object or null if not found
	 */
	function getMember(key) {
		return members[key] || null;
	}
	
	/**
	 * Will update the browser Url programatically
	 * <br/><br/>Note: to stop firing a hash change event the checking will stop until this function has finished
	 * @name update
	 * @public
	 * @function
	 * @memberOf Adoro.History
	 * @param {string} key The name of the key to update
	 * @param {string} value The value the key is being updated to
	 * @example Adoro.History.update("myName", "myState1");
	 */	
	function update(key, value) {
		if(arguments.length !== 2) return;
		if(typeof key !== "string") return;
		if(typeof value !== "string") return;
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
	
	/**
	 * Listen to a particular key in URL, if it changes the callback function will be fired. This will
	 * be used to update the page based in the URL changing to maintain state.
	 * @name listen
	 * @public
	 * @function
	 * @memberOf Adoro.History
	 * @param {string} key The key in the url to listen for when it changes
	 * @param {function} fn The callback function that is fired when the key is notified of a change
	 * @example Adoro.History.listen("myName", function(e, itemValue, itemName) {})
	 */
	function listen(key, fn) {
		if(arguments.length !== 2) return;
		if(typeof key !== "string") return;
		if(typeof fn !== "function") return;
		stopCheckingUrl();
		if(!members[key]) {
			addMember(key);
		}
		$(document).bind("url."+key, fn);
		startCheckingUrl();
	}
	
	/**
	 * stop checking the url by clearing the timeout
	 * @name stopCheckingUrl
	 * @private
	 * @function
	 */
	function stopCheckingUrl() {
		clearTimeout(timeout);
	}
	
	/**
	 * start checking the url by setting the timeout
	 * @name startCheckingUrl
	 * @private
	 * @function
	 */	
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
		// NOT CATERED FOR IE6/7
		// If the user changes the URL manually by typing etc
		// the IFRAME URL has not changed, therefor this code
		// will not currently recognise a change in the URL
		// to get around this, we will have to check whether
		// location.hash does not equal currentUrl and if it doesnt
		// change the IFRAME URL before running all code that appears
		// after this comment - lets attempt with the following code:
		if(document.getElementById("URLFrame") && location.hash.slice(1) !== currentUrl) {
			document.getElementById("URLFrame").setAttribute("src", document.frames["URLFrame"].location.pathname + "?" + location.hash.slice(1));
		}
		
		// get the browser url
		var browserUrl = getBrowserUrl();
		
		// if the hash portion of the URL has changed
		if(currentUrl !== browserUrl) {
			//alert("location has changed");
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
				// if the particular member in the url hasn't changed from the
				// stored value then ignore
				if(members[key].bhmValue === urlObj[key]) continue;
				
				// set the member value to match the url value
				members[key].bhmValue = urlObj[key] || "";
				
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
	this.getMember = getMember;
});
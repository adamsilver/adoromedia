var Adoro = Adoro || {};
Adoro.History = new (function(){
	var members = {},
		delim = "&",
		timeout = null,
		timeoutLength = 1000,
		iframe = null,
		/*
		 * we want to set this as nothing so that after the page refreshes/reloads and
		 * we startCheckingUrl() that a change has occured
		 */
		currentUrl = ""; 
	
	$(init);
	
	var setBrowserUrl;
	
	function init() {
		
		setBrowserUrl = function() {
			if (document.getElementById("URLFrame")) {
				document.frames["URLFrame"].location.replace(document.frames["URLFrame"].location.pathname + "?" + location.hash.slice(1));
				return function(newUrl) {
					document.getElementById("URLFrame").setAttribute("src", document.frames["URLFrame"].location.pathname + "?" + newUrl);
					location.hash = newUrl;
				};
			} else {
				return function(newUrl) {
					location.hash = newUrl;
				};
			}
		}();
		
		// start listening for the change in hash
		startCheckingUrl();
	}
	
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
	
	// every 100ms check the URL
	function timeoutHandler() {
		var browserUrl = getBrowserUrl();
		
		
		
		// if the hash portion of the URL has changed
		if(currentUrl !== browserUrl) {
			
			// if getting url from iframe then we need to manually update the actual location.hash to match
			if(document.getElementById("URLFrame")) {
				location.hash = browserUrl;
			}
			
			currentUrl = browserUrl;
			//console.log(["hash changed", browserUrl]);
			
			// a) set member.bhmValue to whatever value they are
			// b) notify the listeners/fire the custom event
			var urlObj = getUrlObject();
			for(var key in members) {
				members[key].bhmValue = urlObj[key] || "";
				$(document).trigger("url."+key, [members[key].bhmValue, key]);
			}	
		}
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
	
	function updateBrowserUrl() {
		var newUrl = "";
		for (var key in members) {
			newUrl = newUrl + (newUrl.length === 0 ? "" : delim);
			newUrl = newUrl + key + "=" + members[key].bhmValue;
		}
		setBrowserUrl(newUrl);
		currentUrl = newUrl;
	}
	
	this.listen = listen;
	this.update = update;
});

function logIt(html) {
	document.getElementById("logger").innerHTML += "<br/>"+html;
}
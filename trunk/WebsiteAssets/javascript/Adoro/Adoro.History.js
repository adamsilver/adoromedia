var Adoro = Adoro || {};
Adoro.History = new (function(){
	var members = {},
		delim = "&",
		timeout = null,
		timeoutLength = 100,
		iframe = null,
		currentUrl = "";
	
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
		
		// TO DO URGENT
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
			//console.log(["hash changed", browserUrl]);
			
			// this is the same as currentUrl but as an object - easy to interrogate
			var urlObj = getUrlObject();
			
			var member = null, urlMemberValue = null;
			for(var key in urlObj) {
				// if there is a member in the url
				urlMemberValue = urlObj[key];
				member = members[key]
				if(member) {
					//console.log(["member", member]);
					
					// if the member has changed
					if(member.bhmValue !== urlMemberValue) {
						member.bhmValue = urlMemberValue;
						// fire an event
						//console.log(["member", urlMemberValue]);
						$(document).trigger("url."+key, [urlMemberValue, key]);
					}
				}
			}

			// split the url in to bits that can be interoggated
			//var urlParams = currentUrl.split(delim);
			//for(var i = 0; i < urlParams.length; i++) {
				//var keyValuePairs = urlParams[i].split("=");				
				//for(var j = 0; j < keyValuePairs.length; j++) {	
					// if the member exists in url				
					//console.log(["key", keyValuePairs[j][0]]);
					//var member = members[keyValuePairs[j][0]] || null;					
					//console.log(member);					
					//if(member) {
						//console.log(["key exists in members", keys[j]]);
						//if(member.bhmValue !=="") {						
						//}
					//}
				//}
			//}
			// i.e. #yourKey=someVal has changed to yourKey=someVal2
				// fire an event to say its changed
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
		return location.hash.slice(1);
	}
	
	function setBrowserUrl(newUrl) {
		location.hash = newUrl;
	}	
	
	this.listen = listen;
	this.update = update;
});




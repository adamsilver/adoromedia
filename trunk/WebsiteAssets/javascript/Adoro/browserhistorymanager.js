/*
	NOTE:
		For IE, add the following code somewhere in the HTML:
			<!--[if lt IE 8]>
			<iframe src="iframe.html" width="0" height="0" id="URLFrame" style="visibility:none;" />
			<![endif]-->
		The iframe src needs to point to a real URL, but the page can be completely blank.
*/
$.extend((function() {
		var delim = "&";
		var members = {};
		var started = false;
		var timeout, timeoutLength = 100;
		function listen(key, fn) {
			stopChecking();
			if (!members[key])
				members[key] = {};
			$(document).bind("url." + key, fn);
			members[key].bhmValue = "";
			if (started) timeoutHandler();
		}
		function update(key, value, dontUpdateUrl) {
			dontUpdateUrl = dontUpdateUrl || false;
			if (!members[key]) return false;
			stopChecking();
			members[key].bhmValue = value;
			if (!dontUpdateUrl) updateBrowserUrl();
			startChecking();
		}
		var getBrowserUrl, setBrowserUrl;
		$(document).ready(function() {
			getBrowserUrl = function() {
				if (document.getElementById("URLFrame")) {
					return function() {
						// when doing this, ie doesnt like it when its done all the time (polled)
						//location.hash = document.frames["URLFrame"].location.search.slice(1);
						return document.frames["URLFrame"].location.search.slice(1);
					};
				} else {
					return function() {
						return location.hash.slice(1);
					};
				}
			}();
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
			started = true;
			for (var m in members) {
				if (members[m]) {
					timeoutHandler();
					break;
				}
			}
		});
		
		function startChecking() {
			timeout = setTimeout(timeoutHandler, timeoutLength);
		}
		function stopChecking() {
			clearTimeout(timeout);
		}
		function timeoutHandler() {
			var currentURL = getURLObject(),
				currentURLVal;
			for (var key in members) {
				currentURLVal = currentURL[key] || "";
				if (members[key].bhmValue !== currentURLVal) {
					members[key].bhmValue = currentURLVal;
					$(document).trigger("url." + key, [currentURLVal, key]);
					
					// code added: (it's getting messy now)
					if (document.getElementById("URLFrame")) {
						if(currentURLVal !== "") {
							location.hash = document.frames["URLFrame"].location.search.slice(1);
						}
						else {
							location.hash = "#default";
						}
					}
				}
			}
			startChecking();
		}
		function getURLObject() {
			var url = getBrowserUrl(), urlObject = {}, key, value, itemData;
			url = url.split(delim);
			for (var i = url.length-1; i>=0; i--) {
				itemData = url[i].split("=");
				key = itemData[0];
				urlObject[key] = itemData.slice(1).join("=");
			}
			return urlObject;
		}
		function updateBrowserUrl() {
			var newUrl = "";
			for (var key in members) {
				newUrl = newUrl + (newUrl.length === 0 ? "" : delim);
				newUrl = newUrl + key + "=" + members[key].bhmValue;
			}
			setBrowserUrl(newUrl);
		}
		
		
		return {
			url: {
				listen: listen,
				update: update
			}
		}
		
	}
)());
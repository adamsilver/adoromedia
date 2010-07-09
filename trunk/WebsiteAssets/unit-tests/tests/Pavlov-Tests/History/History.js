$.scope = function(s, f) {
	return function scope() {
		f.apply(s, arguments);
	}
}

History = new (function(){
	function history() {
		this.timeout = null;
		this.members = {};
		this.currentUrl = "";
		this.timeoutLength = 10;
		this.delim = "&";
	}
	history.prototype.listen = function(key, fn) {
		this.stopCheckingUrl();
		if(!this.members[key]) {
			this.addMember(key);
		}
		$(document).bind("url."+key, fn);
		this.startCheckingUrl();
	}
	history.prototype.stopCheckingUrl = function() {
		clearTimeout(this.timeout);
	}
	history.prototype.startCheckingUrl = function() {
		this.timeout = setTimeout($.scope(this, this.timeoutHandler), this.timeoutLength);
	}
	history.prototype.timeoutHandler = function() {
		var browserUrl = this.getBrowserUrl();
		if(this.currentUrl !== browserUrl) {
			this.currentUrl = browserUrl;
			
			var urlObj = this.getUrlObject();

			for(var key in this.members) {
				// if the particular member in the url hasn't changed from the
				// stored value then ignore
				if(this.members[key].bhmValue === urlObj[key]) continue;
				
				// set the member value to match the url value
				this.members[key].bhmValue = urlObj[key] || "";
				
				// notify the listener with new value
				$(document).trigger("url."+key, [this.members[key].bhmValue, key]);
			}			
			
		}
		this.startCheckingUrl();
	}
	history.prototype.getBrowserUrl = function() {
		return this.getWindowHashValue();
	}
	history.prototype.addMember = function(key, value) {
		this.members[key] = {
			bhmValue: value ? value : ""
		}
	}
	history.prototype.getBrowserUrl = function() {
		//if(iframeHtmlNode) {
		//	return getIframeWindow().location.search.slice(1);		
		//}
		return this.getWindowHashValue();
	}
	history.prototype.getWindowHashValue = function() {
		return location.hash.slice(1);
	}
	history.prototype.getUrlObject = function() {
		var url = this.getBrowserUrl(), urlObject = {}, key, value, itemData;
		url = url.split(this.delim);
		for (var i = url.length-1; i>=0; i--) {
			itemData = url[i].split("=");
			key = itemData[0];
			urlObject[key] = itemData.slice(1).join("=");
		}
		return urlObject;
	}
	
	return new history;
})
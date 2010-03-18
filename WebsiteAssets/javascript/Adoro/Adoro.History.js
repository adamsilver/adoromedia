var Adoro = Adoro || {};
Adoro.History = new (function(){
	
	var currentHash = "";
	
	var members = {};
	
	var iframeNode = null;
	
	$(init);
	
	function init() {
		
		currentHash = location.hash || "";
		
		setInterval(function () {
			var newHash = location.hash || "";
			if(currentHash !== newHash) {
				currentHash = newHash;
				
				if(members[currentHash]) {
					members[currentHash]();
				}
				
				// when hash has changed we need to invoke the callback for that particular hash
			}
			
		}, 50);
		
	}
	
	this.update = function(itemName, itemValue) {
		
		
		
		// when we create a history point we need to create a member
		location.hash = itemName+"="+itemValue;
	}
	
	this.listen = function(e, itemName, callback) {
		members[itemName] = callback;
	}
});
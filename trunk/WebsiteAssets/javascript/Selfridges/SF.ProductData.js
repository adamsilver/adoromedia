$.namespace("SF");
SF.ProductData = new (function(){
	this.data = {};
	$.subscribe(Salmon.UI.CustomEvents.quickLookDataReceived, function(e){
		var newData = e.data[0] || null;
		addData(newData);
	});
	
	function addData(data) {
		for(var property in data){				
			SF.ProductData.data[property] = data[property];				
		};
	};
});
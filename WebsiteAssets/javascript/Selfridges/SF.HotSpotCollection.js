$.namespace("SF.HotSpotCollection");
SF.HotSpotCollection = new(function(){
	this.create = create;
	function create(data) {
		return new HotSpot(data);
	};
	
	function HotSpot(data){
		var params = data;				
		this.getXmlUrl = function() {
			return params.xmlUrl;
		};

		this.getVideoSkinUrl = function() {
			return params.videoSkinUrl;
		};
		
		this.debug = function(obj){
			//console.debug(obj);
		};
	
	};
	

});
var Site = Site || {};
Site.Content = new (function(){
	$(init);
	
	var defaultValues = {
		bgImage: null,
		bgColor: null
	};
	
	var content = null;
	
	function init() {
		content = document.getElementById("content");
		defaultValues.bgImage = $(content).css("background-image");
		defaultValues.bgColor = $(content).css("background-color");
		$(content).css("background-repeat", "repeat-x");
		$(content).css("background-position", "top left");
		$(content).css("background-color", getBodyBgColor());
		$(content).css("background-image", getBodyBgImage());
		$(content).css("padding-bottom", "0px");
	};
	
	function activate() {
		var time = 500;
		$(content).css("background-image", "none");
		//$(content).animate({
			//"background-color": { to: J2.Core.CSSColor.prototype.create(defaultValues.bgColor.getHex()), time: time }
		//},
		//activateComplete);
		
		activateComplete();
	};
	
	function activateComplete() {
		$(content).css("background-image", defaultValues.bgImage);
		$(content).css("background-repeat", "repeat");
	};
	
	function getBodyBgColor() {
		return $(document.getElementsByTagName("body")[0]).css("background-color");
	};
	
	function getBodyBgImage() {
		return $(document.getElementsByTagName("body")[0]).css("background-image");
	};
	
	this.activate = activate;
});

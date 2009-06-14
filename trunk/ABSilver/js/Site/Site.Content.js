var Site = Site || {};
Site.Content = new (function(){
	addDOMReadyEvent(init);
	
	var defaultValues = {
		bgImage: null,
		bgColor: null
	};
	
	var content = null;
	
	function init() {
		content = document.getElementById("content");
		defaultValues.bgImage = content.getStyle("background-image");
		defaultValues.bgColor = content.getStyle("background-color");
		content.setStyle("background-image", "none");
		content.setStyle("background-color", getBodyBgColor());
		content.setStyle("padding-bottom", "0px");
	};
	
	function activate() {
		var time = 500;
		content.animate({
			"background-color": { to: J2.Core.CSSColor.prototype.create(defaultValues.bgColor.getHex()), time: time }
		},
		activateComplete);
	};
	
	function activateComplete() {
		content.setStyle("background-image", defaultValues.bgImage);
	};
	
	function getBodyBgColor() {
		return document.getElementsByTagName("body")[0].getStyle("background-color");
	};
	
	this.activate = activate;
});

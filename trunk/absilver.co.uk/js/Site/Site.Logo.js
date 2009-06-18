var Site = Site || {};
Site.Logo = new (function(){
	addDOMReadyEvent(init);
	var defaultValues = {
		paddingTop: null,
		paddingBottom: null
	};
	
	var logo = null;
	
	function init() {
		logo = document.getElementById("logo");
		defaultValues.paddingTop = parseInt(logo.getStyle("padding-top"));
		defaultValues.paddingBottom = parseInt(logo.getStyle("padding-bottom"));
		logo.setStyle("padding-top", J2.Window.height()/3+"px");
		logo.setStyle("padding-bottom", "0px");
	};
	
	function activate() {
		var time = 500;
		logo.animate({
			"padding-top": { to: defaultValues.paddingTop, time: time },
			"padding-bottom": {	to: defaultValues.paddingBottom, time: time	}
		});
	};
	
	this.activate = activate;
});
var Site = Site || {};
Site.Logo = new (function(){
	$(init);
	var defaultValues = {
		paddingTop: null,
		paddingBottom: null
	};
	
	var logo = null;
	var time = 500;
	
	function init() {
		logo = document.getElementById("logo");
		defaultValues.paddingTop = parseInt($(logo).css("padding-top"));
		defaultValues.paddingBottom = parseInt($(logo).css("padding-bottom"));
		$(logo).css("padding-top", $(window).height()/3+"px");
		$(logo).css("padding-bottom", "0px");
	};
	
	function activate() {
		$(logo).animate({
			"paddingTop": defaultValues.paddingTop+"px",
			"paddingBottom": defaultValues.paddingBottom+"px"
		},{
			"duration":time
		});
	};
	
	this.activate = activate;
});

$("p").animate({
      left: "50px", opacity: 1
    }, { duration: 500, queue: false });
$(document).ready(function(){

	var panelHeight = $("#panel").outerHeight();
	$("#panel").css("height", "200px");
	
	
	$(document).bind("click", function() {
		$("#panel").animate({"height": panelHeight+"px"}, {duration: 700});
	})
	$("#panel").css("display", "block");
	
})
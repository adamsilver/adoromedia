if (typeof DG !== "object") { var DG = {}; }
$(document).ready(function() {
	DG.Accordian = new(function(){
		new Adoro.Accordian({
			container: $("div.accordian")[0], 
			animationShowSpeed: 300,
			animationHideSpeed: 300,
			activatorClass: "header",
			panelClass: "panel",
			activatorActiveClass: "headerOn",
			panelActiveClass: "panelOn"
		});	
	})
});
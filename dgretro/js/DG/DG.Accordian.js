if (typeof DG !== "object") { var DG = {}; }
$(document).ready(function() {
	DG.Accordian = new(function(){
		
		new Adoro.Accordion($("div.accordian div.header h2 a"), {
			animate: true
		});	
	})
});
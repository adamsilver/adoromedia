var Site = Site || {};
Site.Projects = Site.Projects || {};
Site.Projects.FieldContextualHelp = new (function(){

	$(document).ready(function(){ 
		var contextualHelpNodes = jQuery.makeArray($(".contextualHelp"));
		
		// apply a contextual help node to the full name field
		var fullname = document.getElementById("fullName");
		new Adoro.FieldContextualHelp(fullname, contextualHelpNodes[0], {
			offsetTop: 5,
			offsetLeft: 0,
			placement:"bottom"
		});
		
		// applying the same contextual help node  to each of the input fields
		var day01 = document.getElementById("day01");
		var month01 = document.getElementById("month01");
		var year01 = document.getElementById("year01");
		new Adoro.FieldContextualHelp(day01,contextualHelpNodes[1], {
			offsetTop: -5,
			offsetLeft: 0,
			placement: "top"
		});	
		new Adoro.FieldContextualHelp(month01,contextualHelpNodes[1], {
			offsetTop: 5,
			offsetLeft: 0,
			placement: "bottom"
		});	
		new Adoro.FieldContextualHelp(year01,contextualHelpNodes[1], {
			offsetTop: -15,
			offsetLeft: 5,
			placement: "right"
		});		
		
		// applying different contextualHelp nodes to different input fields
		var day02 = document.getElementById("day02");
		var month02 = document.getElementById("month02");
		var year02 = document.getElementById("year02");
		new Adoro.FieldContextualHelp(day02,contextualHelpNodes[2], {
			offsetTop: 5,
			offsetLeft: 0,
			placement: "bottom"
		});	
		new Adoro.FieldContextualHelp(month02,contextualHelpNodes[3], {
			offsetTop: 5,
			offsetLeft: 0,
			placement: "bottom"
		});	
		new Adoro.FieldContextualHelp(year02,contextualHelpNodes[4], {
			offsetTop: 5,
			offsetLeft: 0,
			placement: "bottom"
		});	
		
		var checkboxes = $('[name="searchEngine"]');
		new Adoro.FieldContextualHelp(checkboxes[0], contextualHelpNodes[5], {
			offsetTop: 5,
			offsetLeft: 70,
			placement: "right"
		});
		
		new Adoro.FieldContextualHelp(checkboxes[1], contextualHelpNodes[5], {
			offsetTop: -14,
			offsetLeft: 70,
			placement: "right"
		});	 
		
		new Adoro.FieldContextualHelp(checkboxes[2], contextualHelpNodes[5], {
			offsetTop: -33,
			offsetLeft: 70,
			placement: "right"
		});								
					
		
	});
	
});
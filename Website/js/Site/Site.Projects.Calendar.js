var Site = Site || {};
Site.Projects = Site.Projects || {};
Site.Projects.Calendar = new (function(){
	$(document).ready(function(){ 
		var myCalendar = new Adoro.Calendar({
			selectDay: document.getElementById("day"),
			selectMonth: document.getElementById("month"),
			selectYear: document.getElementById("year"),
			startHidden: true,
			closeOnDateSelection: false,
			appendCalendarTo: $(".cc div.multipleInput")[0],
			hasLinkActivator: true
		});
		
		var myCalendar2 = new Adoro.Calendar({
			selectDay: document.getElementById("day2"),
			selectMonth: document.getElementById("month2"),
			selectYear: document.getElementById("year2"),
			startHidden: true,
			closeOnDateSelection: false,
			appendCalendarTo: $(".cc div.multipleInput")[1],
			hasLinkActivator: true
		});
	});
});

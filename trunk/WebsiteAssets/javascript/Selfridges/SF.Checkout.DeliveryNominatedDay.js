$.namespace("SF.Checkout");

SF.Checkout.DeliveryNominatedDay = new (function(){
	$(document).ready(init);
	
	function init() {
		var divs = $("fieldset.deliveryOptions div.choice.nominatedday, fieldset.deliveryOptions div.choice.timeslot");
		for(var i = 0; i < divs.length; i++) {
			new CalendarTimeControl(divs[i]);
		};
	};
	
	function CalendarTimeControl(root) {
		var divSubChoices = $(root).find("div.subChoices")[0] || null;
		if(!divSubChoices) return;
		
		// 1. blitz the panel for the calendar and time control to go
		divSubChoices.innerHTML = "";
		
		// 2. create calendar inline
		var div = document.createElement("div");
		$(div).attr("class", "calendarControl");
		$(div).css("display", "block");
		$(div).css("overflow", "hidden");
		divSubChoices.appendChild(div);
		$(div).datepicker();
		
		// 3. 
		var timeSelect = document.createElement("select");
		divSubChoices.appendChild(timeSelect);

		// get the data for this particular div
		// create a time select
		// create a calendar with the available dates
		// calendar onclick populate the time select
	};
	
});



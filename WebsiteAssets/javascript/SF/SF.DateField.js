/**
 * Datefield Module
 * Requires jQuery UI
 * used to manage the datefield and datepicker for SF
 */
 
SF.DateField = (function(){
	// onDomReady events
	$(function() {
		SF.DateField.display();
		SF.DateField.init();
		addEvents();
	});

	// jQuery UI events
	var addEvents = function() {
		// Handles clicking the date picker button
		$(".datefield input[name^='showdatepicker']").bind("click",function(){
			var datePickField = $(this).parents(".datefield").find("input.datepicker");
			// Get the current date value from hidden input
			var newDate = new Date(datePickField.val());
			// Set datepicker date
			datePickField.datepicker("setDate",newDate);
			// Show datepicker
			datePickField.datepicker("show");
			return false;
		});
		// Handles changing the Day, Month, and Year drop downs
		$(".datefield select[name^='deliveryday'], .datefield select[name^='deliverymonth'], .datefield select[name^='deliveryyear']").bind("change",function(){
			var dateField = $(this).parents(".datefield");
			var dayField = dateField.find("select[name^='deliveryday']").val();
			var monthField = dateField.find("select[name^='deliverymonth']").val();
			var yearField = dateField.find("select[name^='deliveryyear']").val();
//----------THIS NEEDS SOME DATE VALIDATION
			if(dayField != 0 && monthField != 0 && yearField != 0){
				var datePickField = dateField.find("input.datepicker");
				var newDate = new Date(yearField,monthField - 1,dayField);
				datePickField.val(newDate);
			}
		});
	};

	// public methods
	return {
		// lazy intialisation
		init : function() {
			$("input.datepicker").datepicker({
				changeFirstDay: false,
				changeMonth: false,
				changeYear: false,
				showOn: "focus",
				onSelect: function(dateText){
					var selectedDate = new Date(dateText);
					var dateField = $(this).parents(".datefield");
					dateField.find("select[name^='deliveryday']").val(selectedDate.getDate());
					dateField.find("select[name^='deliverymonth']").val(selectedDate.getMonth() + 1);
					dateField.find("select[name^='deliveryyear']").val(selectedDate.getFullYear());
				}
			});
		},
		// handle display
		display : function() {
			// show the hidden input for the datepicker
			$(".datefield .day").each(function(i){
				$(this).before('<input type="hidden" class="datepicker" id="datepick' + i + '" name="datepick' + i + '" />');
			});

			// show the button for triggering datepicker
			$(".datefield .year").each(function(i){
				$(this).after('<div><input type="submit" class="secondary" name="showdatepicker' + i + '" title="Select date" value="..." /></div>');
			});
		}
	}// end return
})();
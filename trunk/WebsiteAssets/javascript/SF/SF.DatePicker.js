$.namespace("SF");

/*
 * This file is a wrapper class for the JQuery UI Date picker plugin.
 * It exists because the JQuery one only works with one text box, but this will work with 3 specified select boxes (day, month, year)
 * @class
 * @constructor
 * @name SF.DatePicker
 * @param {Object} options The options for the JQuery UI date picker - these match the JQuery UI documentation
 * - cannot use options.showOn, options.beforeShow, options.onSelect, due to them being used internally - script could be modified
 */
SF.DatePicker = function(selectDayNode, selectMonthNode, selectYearNode, appendButtonAfterNode, options) {
	if(!selectDayNode || !selectMonthNode || !selectYearNode || !appendButtonAfterNode) return null;
	
	// set options
	var options = options || {};
	options.showOn = "button";
	options.beforeShow = beforeShow;
	options.onSelect = onSelect;
	
	// bind events to select boxes
	$(selectDayNode).bind("change", selects_onChange);
	$(selectMonthNode).bind("change", selects_onChange);
	$(selectYearNode).bind("change", selects_onChange);
	
	// create hiddenNode (which acts like text box which JQuery UI needs)
	var hiddenNode = createHiddenNode();
	
	// create datepicker using JQuery UI
	$(hiddenNode).datepicker(options);
	
	
	/*
	 * @function
	 * @private
	 * @return {Node} As input element
	 */
	function createHiddenNode() {
		var input = document.createElement("input");
		input.classname = "hiddenDatePicker";
		input.type = "hidden";
		appendButtonAfterNode.appendChild(input);
		return input;
	};

	/*
	 * When the user changes a date via the select boxes, the calendar is updated
	 * @function
	 * @private
	 */		
	function selects_onChange() {
		var	day = $(selectDayNode).val(),
			month = $(selectMonthNode).val(),
			year = $(selectYearNode).val();
		
		if(day != 0 && month !=0 && year !=0) {
			var selectDate = new Date(year,month - 1,day);
			$(hiddenNode).val(selectDate);
			$(hiddenNode).datepicker("setDate", selectDate);
		}
		
	};
	
	/*
	 * When the user is about to show the calendar the selects on change is fired
	 * @function
	 * @private
	 */		
	function beforeShow() {
		selects_onChange();
	};
	
	/*
	 * When the user selects a date from the calendar, the select nodes are updated
	 * @function
	 * @private
	 */
	function onSelect(date) {
		var d = new Date(date);
		$(selectDayNode).val(d.getDate());
		$(selectMonthNode).val(d.getMonth()+1);
		$(selectYearNode).val(d.getFullYear());
	};

};



$.namespace("SF");


$(document).ready(function(){
	
	var availableDates = [];
	availableDates.push(new Date(2009, 11, 1));
	availableDates.push(new Date(2009, 11, 5));
	availableDates.push(new Date(2009, 5, 30));
	
	function beforeShowDate(date) {
		var returnValue = [false,'disabled'];
		for( var i = 0; i < availableDates.length; i++ ) {
			if( (date.getMonth() == availableDates[i].getMonth()) && (date.getDate() == availableDates[i].getDate())) {
				returnValue = [true, "available"];
				break;
			};
		};
		return returnValue;
	};
	
	/*
	var natDays = [
	  [1, 26, 'au'], [2, 6, 'nz'], [3, 17, 'ie'],
	  [4, 27, 'za'], [5, 25, 'ar'], [6, 6, 'se'],
	  [7, 4, 'us'], [8, 17, 'id'], [9, 7, 'br'],
	  [10, 1, 'cn'], [11, 22, 'lb'], [12, 12, 'ke']
	];

	function nationalDays(date) {
	    for (i = 0; i < natDays.length; i++) {
	      if (date.getMonth() == natDays[i][0] - 1
	          && date.getDate() == natDays[i][1]) {
	        return [false, natDays[i][2] + '_day'];
	      }
	    }
	  return [true, ''];
	};
	*/
	
	//$(".selector").datepicker({ minDate: new Date(2009,2,1), maxDate: new Date(2010,2,1) ,beforeShowDay: beforeShowDate});

	//var d = new SF.DatePicker(selectDayNode, selectMonthNode, selectYearNode, appendButtonAfterNode, { 
	//	minDate: new Date(2009,2,1), 
	//	maxDate: new Date(2010,2,1),
	//	beforeShowDay: beforeShowDate
	//});
	
	var container = $(".testMeUp")[0];
	var selectDayNode = $(".testMeUp .day")[0];
	var selectMonthNode = $(".testMeUp .month")[0];
	var selectYearNode = $(".testMeUp .year")[0];
	var options = {};
	var mypicker = new SF.DatePicker(selectDayNode, selectMonthNode, selectYearNode, container, options);
	
	
	
	var container2 = $(".testMeUp2")[0];
	var selectDayNode2 = $(".testMeUp2 .day")[0];
	var selectMonthNode2 = $(".testMeUp2 .month")[0];
	var selectYearNode2 = $(".testMeUp2 .year")[0];
	var options2 = {};
	var mypicker2 = new SF.DatePicker(selectDayNode2, selectMonthNode2, selectYearNode2, container2, options2);

	
	
});







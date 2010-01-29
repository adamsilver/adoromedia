SF.PrintHandler = new (function() {
	$(function() {
		init();
	});
	
	function init() {
		$("#pgOrderReceipt .print, #pgthankyou .print, #pgMyCalendar .print, #pgorderdetails .print, #pgReturns .print").bind("click", function() {
			window.print();
			return false;
		});
	}
});
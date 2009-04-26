$(document).ready(function(){
	var a = $('<a href="#" class="myPrintClass">Print page!</a>')
	$("div.printPlaceHolder p").replaceWith(a);
	var myprint = new Adoro.PrintButton(a);
});
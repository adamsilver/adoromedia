$(document).ready(function(){ 
	new Adoro.Accordion($("#horizontalAccordion div.header a"), {animate: true, horizontal: true, alwaysOpen: true});
	new Adoro.Accordion($("#verticalAccordion div.header a"), {animate: true});
});

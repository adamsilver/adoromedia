$(document).ready(function(){ 
	new Adoro.Accordion($("a.accordion1"), {animate: true});
	new Adoro.Accordion($("a.tabActivator"), {animate: false, alwaysOpen: true});
	new Adoro.Accordion($("a.accordion3"), {animationShowParams: {"width": "show"}, animationHideParams: {"width": "hide"}, animate: true, alwaysOpen: false});
});

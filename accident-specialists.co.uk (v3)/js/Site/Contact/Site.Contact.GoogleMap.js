var Site = Site || {};
Site.Contact = Site.Contact || {};
Site.Contact.GoogleMap = new (function(){
	$(document).ready(function(){
		new Adoro.GoogleMap(document.getElementById("map"), "NW11 6LB");
	});
});
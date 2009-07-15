var Site = Site || {};
Site.Contact = Site.Contact || {};
Site.Contact.GoogleMap = new (function(){
	$(document).ready(function(){
		new Adoro.GoogleMap(document.getElementById("map"), "9 The Rose Walk, Radlett, WD7 7JS");
	});
});
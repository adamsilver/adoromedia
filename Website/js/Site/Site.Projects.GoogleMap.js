var Site = Site || {};
Site.Projects = Site.Projects || {};
Site.Projects.GoogleMap = new (function(){
	$(document).ready(function(){
		var myMap1 = new Adoro.GoogleMap(document.getElementById("map1"), "9 The Rose Walk, Radlett, WD7 7JS");
		var myMap2 = new Adoro.GoogleMap(document.getElementById("map2"), "Selfridges, London");
	});
});
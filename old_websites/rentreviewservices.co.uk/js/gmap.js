/*
This function written by Simon Willison:
http://simon.incutio.com/archive/2004/05/26/addLoadEvent
*/

function addLoadEvent(func) {
var oldonload = window.onload;
if (typeof window.onload != 'function') {
window.onload = func;
} else {
window.onload = function() {
oldonload();
func();
		}
	}
}

// Gmap. 
addLoadEvent(loadmap);
function loadmap() {
	var map = new GMap(document.getElementById("map"));
	map.addControl(new GLargeMapControl());
	map.addControl(new GMapTypeControl());
	//map.centerAndZoom(new GPoint(-0.31582, 51.677385), 1); //radlett
	//var point = new GPoint(-0.31582, 51.677385);
	map.centerAndZoom(new GPoint(-0.1955, 51.6012), 1);// first for clive
	//map.centerAndZoom(new GPoint(-0.1981, 51.6043), 1);//second for clive
	var point = new GPoint(-0.1955, 51.6012);
	var marker = new GMarker(point);
	map.addOverlay(marker);
}
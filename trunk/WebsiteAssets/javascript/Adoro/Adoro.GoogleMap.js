//  ---------------------------------------------------------------------------------------------------------
//  --- license header; ---
//  ---------------------------------------------------------------------------------------------------------
/* Copyright (c) 2008 - 2009 by Adoro Media
	info@adoromedia.com
  	
  	This file is part of Adoro Media open source projects
  	
    Adoro Media projects are free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
 
    The projects are distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.
 
    See <http://www.gnu.org/licenses/> for information on the GNU Lesser General Public License.
*/
//  ---------------------------------------------------------------------------------------------------------
//  ---------------------------------------------------------------------------------------------------------

if (typeof Adoro !== "object") { var Adoro = {}; }
/**
 * @constructor
 * @class Populate an HTML element with an interactive Google Map from an address string
 * @param {Node} container Container node for the map to be injected
 * @param {String} address The address of the map you wish to show
 * @example
 * var container = document.getElementById("mapContainer");
 * var address = "10 Downing St, Westminster, London SW1A 2, UK"
 * new Adoro.GoogleMap(container, address);
 */
Adoro.GoogleMap = function(container, address) {
	if(container === null) return;
	if(!GBrowserIsCompatible()) return;
	var geocoder = new GClientGeocoder();
	var map = new GMap2(container);
	geocoder.getLatLng(address, function(point){
		if(!point) return;
		var marker = new GMarker(point);
		map.addControl(new GLargeMapControl());
		map.addControl(new GMapTypeControl());
		map.setCenter(point, 16);
		map.addOverlay(marker);
	});	
}
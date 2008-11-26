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

/** 
 * @fileOverview Adoro scripts
 * @author Adam Silver adam@adoromedia.com
 * @version 1
 */

/**
 * @namespace Root namespace for holding all Adoro objects
 * @static
 * @name Adoro
 */
if (typeof Adoro !== "object") { var Adoro = {}; }

/**
 * Add a namespace
 * @function
 * @name addNamespace
 * @memberOf Adoro
 * @param {String} namespace The comma delimited string
 * @example
 * Adoro.addNamespace("root.secondLevel.thirdLevel");
 * Adoro.addNamespace("MyWebsite.MyNamespace");
 */
Adoro.addNamespace = function(namespace) {
	var parts = namespace.split(".");
	var root = window;
	for(var i=0;i<parts.length;i++) {
		if(typeof root[parts[i]] != "object") {
			root[parts[i]] = {};
		}
		root = root[parts[i]];
	}
}

Adoro.getScrollbarWidth = function() {
	var div = $('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');
    // Append our div, do our calculation and then remove it
    $('body').append(div);
    var w1 = $('div', div).innerWidth();
    $(div).css('overflow-y', 'scroll');
    var w2 = $('div', div).innerWidth();
    $(div).remove();
    return (w1 - w2);
}

/**
 * Get node reference for HTML string
 * @function
 * @name getHTMLFirstChild
 * @memberOf Adoro
 * @param {String} html The html string
 * @return {HTMLElement} Reference to DOM element
 * @example
 * // return DOM reference to div
 * Adoro.getHTMLFirstChild("&lt;div&gt;&lt;span&gt;text&lt;/span&gt;&lt;/div&gt;");
 */
Adoro.getHTMLFirstChild = function(html) {
	var root = document.createElement("div");
	root.innerHTML = html;
	return root.firstChild;
}

/**
 * Get the mouse coordinates
 * @function
 * @name getMouseCoords
 * @memberOf Adoro
 * @param {Event} e The event object
 * @return {Object} object with x and y coordinates
 */
Adoro.getMouseCoords = function(e) {
	e = e || event;
	var coordinates = new Object();
	coordinates.x = 0;
	coordinates.y = 0;
	if (e.pageX || e.pageY) {
		coordinates.x = e.pageX;
		coordinates.y = e.pageY;
	}
	else if (e.screenX || e.screenY) {
		coordinates.x = e.clientX + document.documentElement.scrollLeft;
		coordinates.y = e.clientY + document.documentElement.scrollTop;
	}
	return coordinates;
}

/**
 * Get the view port dimensions
 * @function
 * @name getViewportDimensions
 * @memberOf Adoro
 * @return {Object} object with width and height properties
 */
Adoro.getViewportDimensions = function() {
	var vp = {};
	if (typeof window.innerWidth != "undefined") {
		vp.width = window.innerWidth;
		vp.height = window.innerHeight;
	}
	else if (typeof document.documentElement != "undefined" && typeof document.documentElement.clientWidth != "undefined" && document.documentElement.clientWidth != 0) {
		vp.width = document.documentElement.clientWidth;
		vp.height = document.documentElement.clientHeight;
	}
	return vp;
}

/**
 * Get scroll position for y axis
 * @function
 * @name getScrollPosition
 * @memberOf Adoro
 * @return {Number}
 */
Adoro.getScrollPosition = function() {
	var y = 0;
	if (self.pageYOffset) {
		y = self.pageYOffset;
	} 
	else if (document.documentElement && document.documentElement.scrollTop) {
		y = document.documentElement.scrollTop; 
	} 
	else if (document.body) {
		y = document.body.scrollTop;
	}
	return y;
}

/**
 * Check if the value is an array or not
 * @function
 * @name isArray
 * @memberOf Adoro
 * @return {Boolean} true when it is array otherwise false
 */
Adoro.isArray = function(value) {
	return Object.prototype.toString.apply(value) === '[object Array]';
}

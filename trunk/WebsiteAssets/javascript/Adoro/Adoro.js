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

var Adoro = Adoro || {};

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
 * Check if the value is an array or not
 * @function
 * @name isArray
 * @memberOf Adoro
 * @return {Boolean} true when it is array otherwise false
 */
Adoro.isArray = function(value) {
	return Object.prototype.toString.apply(value) === '[object Array]';
}

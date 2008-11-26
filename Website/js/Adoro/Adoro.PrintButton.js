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

if(typeof Adoro !== "object") var Adoro = {};

/**
 * Create a print button
 * @class represents a print button
 * @constructor
 * @param {Object} options The options for the instance
 * @param {Node} options.button The DOM reference to the button
 * @param {String} options.buttonHTML The innerHTML for the button
 * @param {String} options.buttonClass The class name for the anchor for styling in CSS
 * @param {Node} options.appendTo The node in which to append the print button
 * @param {Node} options.prependTo The node in which to prepend the print button
 */
Adoro.PrintButton = function(options) {
	var config = {
		button: null,
		buttonHTML: "Print",
		buttonClass: "print",
		appendTo: null,
		prependTo: null
	};
	
	if(typeof options === "object") {
		config.button = (typeof options.button === "object") ? options.button : $(Adoro.PrintButton.button).clone()[0];
		config.buttonHTML = (typeof options.buttonHTML === "string") ? options.buttonHTML : config.buttonHTML;
		config.buttonClass = (typeof options.buttonClass === "string") ? options.buttonClass : config.buttonClass;
		config.appendTo = options.appendTo || null;
		config.prependTo = options.prependTo || null;
	}
	
	if(config.button === null) return;
	
	if(config.appendTo !== null || config.prependTo !== null) {
		if(config.appendTo !== null) {
			$(config.appendTo).append(config.button);
		}
		else {
			$(config.prependTo).prepend(config.button);
		}
	}
	
	config.button.innerHTML = config.buttonHTML;
	config.button.onclick = print;
	$(config.button).addClass(config.buttonClass);
	function print() {
		window.print();
		return false;
	}
	
}
Adoro.PrintButton.button = $('<a href="#"></a>')[0];

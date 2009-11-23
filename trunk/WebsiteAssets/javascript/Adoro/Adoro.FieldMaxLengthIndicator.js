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
 * Create a new field max length indicator
 * @class Represents a FieldMaxLength
 * @constructor
 * @param {Node} field Reference to field element
 * @param {Object} options The options for the instance
 * @param {Number} options.max The max number of characters
 * @param {Node} options.statusIndicator Reference to indicator
 * @param {String} options.beforeText The text for the status indicator before the number is displayed
 * @param {String} options.afterText The text for the status indicator after the number is displayed 
 */
Adoro.FieldMaxLengthIndicator = function(field, options) {
	if(!field) return null;
	field.onkeypress = checkLength;
	field.onkeyup = checkLength;
	var config = {
		max: 100,
		statusIndicator: null,
		beforeText: "You have ",
		afterText: " characters remaining."
	}
	
	if(typeof options === "object") {
		config.max = (typeof options.max === "number") ? options.max : config.max;
		config.statusIndicator = (typeof options.statusIndicator === "object") ? options.statusIndicator : config.statusIndicator;
		config.beforeText = (typeof options.beforeText === "string") ? options.beforeText : config.beforeText;
		config.afterText = (typeof options.afterText === "string") ? options.afterText : config.afterText;
	}
	checkLength.call(field);
	function checkLength() {
		if( this.value.length > config.max ) {
			this.value = this.value.substr(0, config.max);
		}

		if(config.statusIndicator !== null) {
			config.statusIndicator.innerHTML = config.beforeText + (config.max-this.value.length) + config.afterText;
		}
	}
}
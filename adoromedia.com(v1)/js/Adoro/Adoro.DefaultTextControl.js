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
 * Creates a field thats default value is a placeholder
 * @class Represents an input default field.
 * @constructor
 * @param {Node} field The input field
 */
Adoro.DefaultTextControl = function(field) {
	if(field === null || field === "undefined" || field.type !== "text") return null;

	field.onfocus = function() {
		if(field.value === field.defaultValue) {
			field.value = "";
		}
	}
	
	field.onblur = function() {
		if(field.value === "" || field.value === field.defaultValue) {
			field.value = field.defaultValue;
		}
	}
}

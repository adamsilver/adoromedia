//  ---------------------------------------------------------------------------------------------------------
//  --- license header; ---
//  ---------------------------------------------------------------------------------------------------------
/* Copyright (c) 2007 - 2008 by James Norton
	info@j-squared.info
  
    This file is part of JSquared.
    
    JSquared is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
 
    JSquared is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.
 
    You should have received a copy of the GNU Lesser General Public License
    along with JSquared.  If not, see <http://www.gnu.org/licenses/>.
*/
//  ---------------------------------------------------------------------------------------------------------
//  ---------------------------------------------------------------------------------------------------------
/**
* @fileOverview FXSquared Style plugin
* @name FXStyle
*/
/**
* Style FX type
* @constructor
* @augments J2.FX
* @name J2.FX.Style
* @param {Node} element The element to act upon
* @param {Object} options The options for the effect.  Passed into the constructor of J2.FX
* @see J2.FX
* @see J2.FXOptions
*/
J2.FX.Style = function(element, options) {
	var FXBase = new J2.FX(options);
	var colors = {
		color: [],
		backgroundColor: [],
		borderColor: []
	};
	var colorIndexes = {red:0,green:1,blue:2};
	/**
	* Gets the current value of the specified CSS property on the element
	* @function
	* @name getCurrentValue
	* @memberOf J2.FX.Style
	* @param {String} property The CSS property to get the current value of
	* @return {String or Number} The curent value
	*/
	FXBase.getCurrentValue = function(property) {
		if (/color/i.test(property)) {
			var propertyReal = property.split("_")[0].hyphenatedToCamelCase();
			var thisColor = property.split("_")[1];
			colors[propertyReal] = element.getStyle(propertyReal).indexes;
			return colors[propertyReal][colorIndexes[thisColor]];
		}
		var val = element.getStyle(property);
		return parseFloat(val);
	};
	/**
	* Sets the CSS value on the element
	* @function
	* @name set
	* @memberOf J2.FX.Style
	* @param {String or Number or Array} value The value to set the property to.  If the property is a colour property, pass in an array.
	* @param {String} The name of the CSS property to set
	*/
	FXBase.set = function(value, property) {
		if (/color/i.test(property)) {
			var propertyReal = property.split("_")[0].hyphenatedToCamelCase();
			var thisColor = property.split("_")[1];
			colors[propertyReal][colorIndexes[thisColor]] = value;
			element.setStyle(propertyReal, colors[propertyReal].toCssColor());
		} else {
			element.setStyle(property, value);
		}
	};
	return FXBase.init();
};
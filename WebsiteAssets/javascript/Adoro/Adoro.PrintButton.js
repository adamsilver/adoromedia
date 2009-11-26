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
 * @param {Node} anchor The anchor DOM reference
 */
Adoro.PrintButton = function(anchor) {
	var anchor = anchor || null;
	if(!anchor) return;
	$(anchor).bind("click", this.print);
}
Adoro.PrintButton.prototype = {
	print: function() {
		window.print();
		return false;
	}	
}
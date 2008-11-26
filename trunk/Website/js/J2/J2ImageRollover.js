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
/*
Depends on core library
*/
/**
* @fileOverview JSquared ImageRollover Object
* @name ImageRollover
*/
//check if J2 namespace exists and if not, create it
if (typeof J2 !== "object") var J2 = {};
/**
* Create simple image rollovers
* @constructor
* @name J2.ImageRollover
* @param {Node} node The node to monitor mouse events on
* @param {Node} image The image node to change when mouse events are detected
* @param {String} hoverImagePath The path to the image which is to be treated as the hover image
*/
J2.ImageRollover = function(node, image, hoverImagePath) {
	if (hoverImagePath === "" || hoverImagePath == null || image == null) return;
	var hoverImage = document.createElement("img", {src:hoverImagePath} );
	var nonHoverImagePath = image.src;
	node.addEvent("mouseover", node_onMouseOver);
	node.addEvent("mouseout", node_onMouseOut);
	function node_onMouseOver() {
		image.src = hoverImagePath;
	}
	function node_onMouseOut() {
		image.src = nonHoverImagePath;
	}
};
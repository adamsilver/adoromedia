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
* @fileOverview Adoro DomHelper object
* @name DomHelper
*/

var Adoro = Adoro || {};

/**
 * Dom helper object
 * <br/><br/> Helps get valid XML/XHTML string from the DOM
 * <br/><br/> Useful for parsing valid XML/XHTML into Flash as .innerHTML doesn't parse
 * @constructor
 * @class (singleton) Represents the DomHelper object
 * @static
 * @name DomHelper
 * @memberOf Adoro
 * @requires jQuery 1.3.1
 */
Adoro.DomHelper = new (function() {
	
	/**
	 * get inner xml/xhtml
	 * @function
	 * @public
	 * @name getInnerXml
	 * @memberOf Adoro.DomHelper
	 * @param {DOMNode} node The node which is used to get the innerXml
	 * @returns {string} i.e. '<div id="theId">hello</div>'
	 */	
	function getInnerXml(node) {
		var s = "";
		
		var childNode = null;
		for(var i = 0; i<node.childNodes.length; i++) {
			childNode = node.childNodes[i];
			
			// 1 - element
			if(childNode.nodeType == 1) {
						
				
				if(childNode.tagName.toLowerCase() === "img") {
					// open tag
					s+='<';
					s+=childNode.tagName.toLowerCase();
					s+=getAttributesAsString(childNode);
					s+=' />';
				}
				else {
					// open tag
					s+='<';
					s+=childNode.tagName.toLowerCase();
					s+=getAttributesAsString(childNode);
					s+='>';
					
					s+=getInnerXml(childNode);
					
					// close tag
					s+='</';
					s+=childNode.tagName.toLowerCase();
					s+='>';	
				}
					
			
			}
			
			// 3 - text
			else {
				s+=childNode.nodeValue;
			}
		
		};
		
		return s;
	};
	
	/**
	 * get attributes as a string
	 * @function
	 * @public
	 * @name getAttributesAsString
	 * @memberOf Adoro.DomHelper
	 * @param {DOMNode} node Any attributes this node has will be returned as a string
	 * @returns {string} i.e. 'id="theId" src="path/to/img"'
	 */
	function getAttributesAsString(node) {
		var s = "";
		var allowedTags = ["id", "src", "href", "class", "alt"];
		var attributes = node.attributes ? node.attributes : node.getAttributes();
		var attribute;
		for(var i = 0; i<attributes.length; i++) {
			attribute = attributes[i];
						
			if(jQuery.inArray(attribute.nodeName, allowedTags) < 0) continue;
			s+= " ";
			s+= attribute.nodeName;
			s+= "=";
			s+= "'"+attribute.nodeValue+"'";
		};
		return s;
	};
	
	// public members
	this.getInnerXml = getInnerXml;
	this.getAttributesAsString = getAttributesAsString;
});
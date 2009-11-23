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

var Adoro = Adoro || {};

Adoro.DomHelper = new (function() {
	this.getInnerXml = getInnerXml;
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
	
	this.getAttributesAsString = getAttributesAsString;
	
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

});
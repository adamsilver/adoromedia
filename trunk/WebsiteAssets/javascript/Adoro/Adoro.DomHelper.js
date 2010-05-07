var Adoro = Adoro || {};

/**
 * @constructor
 * @namespace Container for Dom helper methods. Useful for parsing valid xml/xhtml into Flash as
 * .innerHTML doesn't parse
 * @static
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
	 * @requires jQuery 1.3.1 or above
	 */	
	function getInnerXml(node) {
		var s = "";
		
		if(!node) return s;
		
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
	 * @requires jQuery 1.3.1 or above
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
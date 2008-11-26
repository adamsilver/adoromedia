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
* @fileOverview JSquared Core Library
* @name JSquared
*/
/**
* @namespace Root namespace for holding all JSquared objects
* @name J2
*/
/**
* The version of the library in use
* @name version
* @memberOf J2
* @type Float
*/
var J2 = { version: 1.1 };
/**
* @namespace Container for core JSquared functions and objects
* @name J2.Core
* @memberOf J2
*/
J2.Core = new (function() {
	/**
	* Generic event handler for built-in or custom events.
	* Events are sorted based on sort index provided when adding a new event handler
	* with a default sort index of 99. Sort order is descending (higher numbers run first), 
	* range 999 to -999. 
	* Each instance gets a static class member - eventIndexes
	* @memberOf J2.Core
	* @name EventHandler
	* @constructor 
	*/
	this.EventHandler = function() {
		//create events array for storing the handlers
		var events = [];
		/**
		* Contains accessor methods for the first and last indexes.
		* Created automatically with each instance of J2.Core.EventHandler
		* @class
		* @static
		* @name eventIndexes
		* @memberOf J2.Core.EventHandler
		*/
		this.eventIndexes = new (function() {
			var first = 999, last = -999;
			/**
			* Retrieve the first index.
			* Decrements the value of the first index each time. 
			* @name first
			* @function
			* @memberOf J2.Core.EventHandler.eventIndexes
			* @return {Number}
			*/
			this.first = function() { return first--; };
			/**
			* Retrieve the last index.
			* Increments the value of the first index each time. 
			* @name last
			* @function
			* @memberOf J2.Core.EventHandler.eventIndexes
			* @return {Number}
			*/
			this.last = function() { return last++; };
		});
		/**
		* Calls the addHandler method
		* @name add
		* @memberOf J2.Core.EventHandler
		* @function
		* @deprecated addHandler
		*/
		/**
		* Add a new subscriber to this event 
		* @name addHandler
		* @memberOf J2.Core.EventHandler
		* @function
		* @param {Function} fn The function to subscribe to this event handler
		* @param {Number} [sortIndex] The sort index for this subscriber
		* @return {Function} The function subscribed to the event handler
		*/
		this.add = this.addHandler = function(fn, sortIndex) {
			events.push([fn, sortIndex || 99]);
			return fn;
		};
		/**
		* Calls the removeHandler method
		* @name remove
		* @memberOf J2.Core.EventHandler
		* @function
		* @deprecated removeHandler
		*/
		/**
		* Remove a subscriber from this event
		* @name removeHandler
		* @memberOf J2.Core.EventHandler
		* @function
		* @param {Function} fn The function to remove as a subscriber from the event handler
		*/
		this.remove = this.removeHandler = function(fn) {
			//find the event handler
			//the event handler could have been added multiple times hence loop through complete array
			for (var i = events.length - 1; i >= 0; i--) {
				if (events[i][0] === fn) {
					delete events[i][0];
					events.splice(i, 1);
				}
			}
		};
		/**
		* @name handleEvent
		* @memberOf J2.Core.EventHandler
		* @function
		* @deprecated fire
		*/
		/**
		* Event handler binding function.
		* Use this function to fire the event this instance of the J2.Core.EventHandler is being used for
		* Can be called directly to manually fire the event handling routing
		* @name fire
		* @memberOf J2.Core.EventHandler
		* @function
		* @param {Object} e Event object (or empty object for manual firing)
		* @return {Boolean} Subscriber return values.  Default return is true. If any subscriber returns false, handleEvent will return false
		*/
		this.handleEvent = this.fire = function() {
			var	returnVal = true, 
				funcReturnVal,
				i,
				j;
			//sort the event handlers by the event indexes
			events.sort(function(a, b) {
				return a[1] < b[1] ? 1 : -1;
			});
			//loop through the event handlers and call the function in the scope of source element
			for (i = 0, j = events.length; i < j; i++) {
				//store the return value from each handler.  If any are false, set the master event return value to false
				funcReturnVal = events[i][0].apply(this, arguments);
				if (returnVal && funcReturnVal === false) returnVal = false;
			}
			return returnVal;
		};
	};
	//load event handler
	var loadEventHandler = new this.EventHandler();
	/**
	* Add a load event subscriber 
	* @name addLoadEvent
	* @function
	* @type J2.Core.EventHandler
	* @param {Function} fn The function to subscribe to the load event
	* @param {Number} [sortIndex] The sort index for this subscriber
	* @return {Function} The function subscribed to the event handler
	* @see J2.Core.EventHandler
	*/
	window.addLoadEvent = loadEventHandler.addHandler;
	/**
	* Contains the first and last methods of J2.Core.EventHandler.eventIndexes.  
	* Specific to the load event handler
	* @name loadEventIndexes
	* @static
	* @see J2.Core.EventHandler.eventIndexes
	*/
	window.loadEventIndexes = loadEventHandler.eventIndexes;
	if (typeof window.onload === "function")
		loadEventHandler.addHandler(window.onload, loadEventHandler.eventIndexes.first());
	window.onload = loadEventHandler.fire;
	//DOMContentReady event handler
	var domReadyEventHandler = new this.EventHandler();
	/**
	* Add a DOMContentReady event subscriber
	* @name addDOMReadyEvent
	* @function
	* @type J2.Core.EventHandler
	* @param {Function} fn The function to subscribe to the DOMContentReady event
	* @param {Number} [sortIndex] The sort index for this subscriber
	* @return {Function} The function subscribed to the event handler
	* @see J2.Core.EventHandler
	*/
	window.addDOMReadyEvent = domReadyEventHandler.addHandler;
	/**
	* Contains the first and last methods of J2.Core.EventHandler.eventIndexes.  
	* Specific to the DOMContentReady event handler
	* @name DOMReadyEventIndexes
	* @static
	* @see J2.Core.EventHandler.eventIndexes
	*/
	window.DOMReadyEventIndexes = loadEventHandler.eventIndexes;
		/* Internet Explorer */
	if (window.ActiveXObject) {
		document.write("<script id=\"ieScriptLoad\" defer src=\"//:\"><\/script>");
		document.getElementById("ieScriptLoad").onreadystatechange = function() {
			if (this.readyState === "complete") {
				document.getElementById("ieScriptLoad").parentNode.removeChild(document.getElementById("ieScriptLoad"));
				domReadyEventHandler.fire({});
			}
		};
	} else if (navigator.userAgent.search(/WebKit/i) !== -1) {
	    window.DOMLoadTimer = setInterval(function () {
			if (document.readyState.search(/loaded|complete/i) !== -1) {
				clearInterval(window.DOMLoadTimer);
				domReadyEventHandler.fire({});
			}
		}, 10);
	}
	if (document.addEventListener) {
		document.addEventListener("DOMContentLoaded", function(e) {clearInterval(window.DOMLoadTimer);domReadyEventHandler.fire.call(this,e);}, false);
	} else {
		window.addLoadEvent( domReadyEventHandler.fire, 1000 );
	}
	//Element binding tools
	var boundElements = [];
	/**
	* Bind the JSquared element tools to the provided node.
	* Basic binding will only bind the core tools and will not bind the enahnced DOM methods to the element.
	* The default is for full binding.
	* @name bindElementTools
	* @memberOf J2.Core
	* @function
	* @param {Node} o  The DOM node to bind to - can be an Object
	* @oaram {Boolean} [isBasicBinding] Define the extent of binding to take place
	*/
	this.bindElementTools = function(o, isBasicBinding) {
		if (!o || o == null) return;
		//if the element is not bound, copy the methods onto the element
		if (o.isElementBound !== true) {
			copyMethods(J2.Element, o);
			boundElements.push(o);
		}
		if (isBasicBinding === true) return;
		//if the event binding is to be a full set of bindings, enhance the built in DOM nodes
		if (o.isExtraOverridesBound !== true) {
			try {
				o.getElementsByClass = o.getElementsByClassName = J2.Core.newDOMMethods.getElementsByClassName(o.querySelectorAll ? o.querySelectorAll : o.getElementsByClassName || null);
				o.getElementsByTagName = J2.Core.newDOMMethods.getElementsByTagName(o.getElementsByTagName);
				o.appendChild = J2.Core.newDOMMethods.appendChild(o.appendChild);
				o.replaceChild = J2.Core.newDOMMethods.replaceChild(o.replaceChild);
				o.insertBefore = J2.Core.newDOMMethods.insertBefore(o.insertBefore);
				o.isExtraOverridesBound = true;
			} catch (e) { }
		}
	};
	function copyMethods(source, target) {
		//copy all items in the source object to the target object overriding any that already exist
		if (typeof source === "object") {
			for (var method in source)
				target[method] = source[method];
		}
	}
	/**
	* Removes the JSquared element bindings from an element.
	* Should be used before removing an element from the DOM tree ideally.
	* @function
	* @name removeElementBindings
	* @memberOf J2.Core
	* @param {Node} o The node to remove the bindings from
	* @param {Boolean} [fullRemove] Defines whether to fully remove the bindings or just remove the node from the JSquared bound elements list
	*/
	this.removeElementBindings = function(o, fullRemove) {
		if (typeof o !== "object") return;
		for (var i = boundElements.length-1; i>=0; i--) {
			if (boundElements[i] === o) {
				boundElements.splice(i,1);
				break;
			}
		}
		if (fullRemove !== true) return;
		for (var method in J2.Element) {
			if (o[method])
				delete o[method];
		}
	}
	/**
	* Unbinds all currently bound elements.
	* @function
	* @name unbindAllElements
	* @memberOf J2.Core
	*/
	this.unbindAllElements = function() {
		for (var i = boundElements.length - 1; i >= 0; i--)
			this.removeElementBindings(boundElements[i], true);
	}
	/**
	* Add a new element bound tool.
	* Will add the method to J2.Element to make available to all future bound DOM nodes.
	* Will add the method to all previously bound nodes.
	* If a method with the same name already exists, it will be overwritten
	* @name addElementTool
	* @memberOf J2.Core
	* @function
	* @param {String} id The name of the new element tool
	* @param {Function} func The function to assign as the new element tool
	*/
	this.addElementTool = function(id, func) {
		if (typeof func !== "function" || typeof id !== "string") return;
		J2.Element[id] = func;
		//loop through all bound elements and attach the new element tool
		for (var i = boundElements.length - 1; i >= 0; i--)
			boundElements[i][id] = func;
	};
	/**
	* Sort array of DOM nodes to their document order
	* @name sortToDocumentOrder
	* @function
	* @memberOf J2.Core
	* @param {Array} elements DOM nodes to be sorted
	* @return {Array} The sorted array
	*/
	this.sortToDocumentOrder = function(elements) {
		return elements.sort(function(a, b) {
			return 3 - (comparePosition(a, b) & 6);
		});
	};
	function comparePosition(a, b) {
		return a.compareDocumentPosition ? a.compareDocumentPosition(b) : a.contains ? (a !== b && a.contains(b) && 16) + (a !== b && b.contains(a) && 8) + (a.sourceIndex >= 0 && b.sourceIndex >= 0 ? (a.sourceIndex < b.sourceIndex && 4) + (a.sourceIndex > b.sourceIndex && 2) : 1) + 0 : 0;
	}
	/**
	* Enhanced DOM methods which are applied to the document and to each DOM node (where relevant).
	* Where these methods replace existing methods, they will act exactly as per the existing methods with the enhancements as detailed.
	* @class
	* @static
	* @name newDOMMethods
	* @memberOf J2.Core
	*/
	this.newDOMMethods = new (function() {
		//store references to the old DOM functions
		document.oldGetElementById = document.getElementById;
		document.oldCreateElement = document.createElement;
		/**
		* Enhancement - binds element tools to returned node
		* @function
		* @name getElementById
		* @memberOf J2.Core.newDOMMethods
		* @param {String} id The id of the element to return
		* @return {Node} The matching DOM node or null if not found
		*/
		this.getElementById = function(id) {
			var el = document.oldGetElementById(id);
			J2.Core.bindElementTools(el);
			return el;
		};
		/**
		* Enhancement - binds element tools to new node and applies options to new node
		* @function
		* @name createElement
		* @memberOf J2.Core.newDOMMethods
		* @param {String} type The type (tag name) of the new node
		* @param {Object} options The properties to apply to the new DOM node.
		* @config {String} property The name of the property to apply to the new DOM node. Its value will be the properties value
		* @return {Node} The new DOM node
		* @example 
		* //Each item in the options gets applied to the element
		* var myElement = document.createElement("div", {
		*	cssClass: "myClass",
		*	id: "myElement",
		*	innerHTML: "This is my element"
		* } );
		*/
		this.createElement = function(type, options) {
			var el = document.oldCreateElement(type);
			//go through the options and bind the values to the created node
			if (typeof options === "object") {
				//special handling for cssClasses
				if (options.cssClass != null) {
					el.setCssClass(options.cssClass);
					delete options.cssClass;
				}
				for (var item in options)
					el[item] = options[item];
			}
			J2.Core.bindElementTools(el);
			return el;
		};
		/**
		* Enhancement - binds element tools to returned nodes
		* @function
		* @name getElementByTagName
		* @memberOf J2.Core.newDOMMethods
		* @param {String} tag The tag type to select
		* @return {LiveNodeList} The matching DOM nodes
		*/
		this.getElementsByTagName = function(f) {
			return function(tag) {
				this.getElementsByTagName = f;
				var els = this.getElementsByTagName(tag),
					i;
				for (i = els.length - 1; i >= 0; i--)
					J2.Core.bindElementTools(els[i]);
				this.getElementsByTagName = J2.Core.newDOMMethods.getElementsByTagName(this.getElementsByTagName);
				return els;
			};
		};
		/**
		* Enhancement - binds element tools to returned nodes.
		* Access nodes by class name and type.
		* The function either accepts a string parameter or an object literal.
		* If a string is passed in, all nodes matching that class name will be returned.
		* @function
		* @name getElementsByClassName
		* @memberOf J2.Core.newDOMMethods
		* @param {Object or String} options The options for selecting nodes or the class name to select on
		* @config {String} cssClass The class name to match and select nodes on
		* @config {String or Array} [tags] Comma delimeted list of tag types or array of tag types
		* @config {Function} [callback] Callback function called each time a matching node is found - saved iterating over the list twice
		* @return {Array} The matching DOM nodes
		* @example
		* //Returns all nodes of all types with the class name "myClass"
		* var myNodes = document.getElementsByClassName("myClass");
		* @example
		* //Returns all nodes of types "div" and "h2" only with the class name "myClass"
		* var myNodes = document.getElementsByClassName( { cssClass: "myClass", tags: "div,h2" } );
		* @example
		* //Returns all nodes of type "span" or "a" only with the class name "myClass"
		* //For each matching node will call the callback function in the scope of the node itself.
		* var myNodes = document.getElementsByClassName( { cssClass: "myClass", tags: ["span", "a"], callback: function() {
		*	alert(this.tagName);
		* } } );
		*/
		this.getElementsByClassName = function(f) {
			//argument handling function to ensure that all argument properties are set properly
			var handleArguments = function(args) {
				var cssClass = arguments[0].cssClass || arguments[0], tags = arguments[0].tags || "*", callback = arguments[0].callback || null;
				return { tags: isArray(tags) ? tags.join(",").toLowerCase().split(",") : tags.toLowerCase().split(","), cssClass: cssClass, callback: callback };
			};
			if (f == null) {
				//getElementsByClassName and the selector API is not supported by the users browser
				//use the legacy function - worst performance
				return function() {
					var args = handleArguments(arguments[0]);
					return getElementsByClassNameLegacy.call(this, args.cssClass, args.tags, args.callback);
				};
			} else if (document.querySelectorAll) {
				//selector API is supported by the users browser
				return function() {
					var args = handleArguments(arguments[0]);
					this.getElementsByClassName = f;
					//build the query text to pass into querySelectorAll
					var queryText = "";
					if (args.tags === "*") {
						queryText = "." + args.cssClass;
					} else {
						for (var i = 0, j = args.tags.length; i < j; i++) {
							if (i !== 0) {
								queryText += ",";
							}
							queryText += args.tags[i] + "." + args.cssClass;
						}
					}
					//get the elements selected via querySelectorAll into a standard array
					var els = Array.prototype.copy.call(this.getElementsByClassName(queryText));
					//bind returned elements and call callback
					for (var i = 0, j = els.length; i < j; i++) {
						J2.Core.bindElementTools(els[i]);
						if (typeof args.callback === "function")
							args.callback.call(els[i], els[i]);
					}
					//reset the getElementsByClassName method on this node
					//this will ensure that querySelectorAll always runs as native code being called by a non-native function
					this.getElementsByClassName = J2.Core.newDOMMethods.getElementsByClassName(this.getElementsByClassName);
					return els;
				};
			} else {
				return function() {
					//getElementsByClassName is supported by users browser but not the selectors API
					var args = handleArguments(arguments[0]);
					this.getElementsByClassName = f;
					//get all elements of the specified class into a standard array
					var	els = Array.prototype.copy.call(this.getElementsByClassName(args.cssClass)), 
						result = [],
						bind = false,
						isAllTags = args.tags.contains("*");
					//loop through all elements and match to specified tag names to build results and call callback
					for (var i = 0, j = els.length; i < j; i++) {
						bind = false;
						if (args.tags.contains(els[i].tagName.toLowerCase()) || isAllTags) {
							bind = true;
						}
						if (bind) {
							J2.Core.bindElementTools(els[i]);
							result.push(els[i]);
							if (typeof args.callback === "function")
								args.callback.call(els[i], els[i]);
						}
					}
					return result;
				};
			}
		};
		/**
		* Enhancement - binds element tools to new node.
		* Allows new node to be retrieved via AJAX if J2.AJAX module is loaded.
		* @function
		* @name appendChild
		* @memberOf J2.Core.newDOMMethods
		* @param {Node or J2.AJAX} el Element to be added or J2.AJAX object to be used to retrieve HTML to append
		* @return {Node or null} The new node added or null if J2.AJAX object used
		* @example
		* //Add new DIV to element
		* var myNewElement = element.appendChild( document.createElement("div") );
		* @example
		* //Retrieve new node using J2.AJAX module.
		* element.appendChild( new J2.AJAX( { url: "page.html" } ) );
		*/
		this.appendChild = function(f) {
			return function(el) {
				this.appendChild = f;
				//if a J2.AJAX object has been supplied, call the setup the callback and call the send method
				if (typeof J2.AJAX === "function" && el instanceof J2.AJAX) {
					el.setSuccessHandler(function(ajax) {
						var tempNode = document.createElement("span", { innerHTML: ajax.getResponseText() });
						this.appendChild(tempNode);
						tempNode.remove(true);
					});
					el.setScope(this);
					el.send();
				} else {
					if (el.nodeType === 1)
						J2.Core.bindElementTools(el);
					return this.appendChild(el);
				}
			};
		};
		/**
		* Enhancement - binds element tools to new node.
		* Allows new node to be retrieved via AJAX if J2.AJAX module is loaded.
		* @function
		* @name replaceChild
		* @memberOf J2.Core.newDOMMethods
		* @param {Node or J2.AJAX} newEl Element to be added or J2.AJAX object to be used to retrieve element
		* @param {Node or J2.AJAX} oldEl Element to be replaced
		* @return {Node or null} The new node added or null if J2.AJAX object used
		*/
		this.replaceChild = function(f) {
			return function(newEl, oldEl) {
				this.replaceChild = f;
				//if a J2.AJAX object has been supplied, call the setup the callback and call the send method
				if (typeof J2.AJAX === "function" && newEl instanceof J2.AJAX) {
					newEl.setSuccessHandler(function(ajax) {
						var tempNode = document.createElement("span", { innerHTML: ajax.getResponseText() });
						this.replaceChild(tempNode, oldEl);
						tempNode.remove(true);
					});
					newEl.setScope(this);
					newEl.send();
				} else {
					J2.Core.bindElementTools(newEl);
					return this.replaceChild(newEl, oldEl);
				}
			};
		};
		/**
		* Enhancement - binds element tools to new node.
		* Allows new node to be retrieved via AJAX if J2.AJAX module is loaded.
		* @function
		* @name appendChild
		* @memberOf J2.Core.newDOMMethods
		* @param {Node or J2.AJAX} newNode Element to be added or J2.AJAX object to be used to retrieve element
		* @param {Node or J2.AJAX} refNode Reference element
		* @return {Node or null} The new node added or null if J2.AJAX object used
		*/
		this.insertBefore = function(f) {
			return function(newNode, refNode) {
				this.insertBefore = f;
				//if a J2.AJAX object has been supplied, call the setup the callback and call the send method
				if (typeof J2.AJAX === "function" && newNode instanceof J2.AJAX) {
					newNode.setSuccessHandler(function(ajax) {
						var tempNode = document.createElement("span", { innerHTML: ajax.getResponseText() });
						this.insertBefore(tempNode, refNode);
						tempNode.remove(true);
					});
					newNode.setScope(this);
					newNode.send();
				} else {
					J2.Core.bindElementTools(newNode);
					return this.insertBefore(newNode, refNode);
				}
			};
		};
		function getElementsByClassNameLegacy(cssClass, tags, callback) {
			//legacy function for getting elements by class name
			var results = [];
			//get all elements with the correct tags
			var elements = this.getElementsByTagNames(tags);
			//loop through all elements and check if it has the correct class name
			for (var i = 0, j = elements.length; i < j; i++) {
				if (J2.Element.hasCssClass.call(elements[i], cssClass)) {
					J2.Core.bindElementTools(elements[i]);
					results.push(elements[i]);
					if (typeof callback === "function")
						callback.call(elements[i], elements[i]);
				}
			}
			return results;
		}
	});
	/**
	* Handles colours for use in CSS styles.
	* A CSS Colour can be retrieved as a hex value or as RGB values.
	* @memberOf J2.Core
	* @name CSSColor
	* @constructor
	* @param {Number} r The red index value for the colour.  Range 0 - 255
	* @param {Number} g The green index value for the colour.  Range 0 - 255
	* @param {Number} b The blue index value for the colour.  Range 0 - 255
	*/
	this.CSSColor = function(r, g, b) {
		/**
		* The indexes of this colour
		* @name indexes
		* @type Array
		* @memberOf J2.Core.CSSColor
		*/
		this.indexes = [parseInt(r), parseInt(g), parseInt(b)];
	};
	/**
	* @static
	* @class
	* @prototype
	* @name J2.Core.CSSColor.prototype
	* @memberOf J2.Core.CSSColor
	*/
	this.CSSColor.prototype = new (function() {
		/**
		* Get the hex value of this colour with the # symbol
		* @function
		* @memberOf J2.Core.CSSColor.prototype
		* @name getHex
		* @return {String} The hex value
		*/
		this.getHex = function() {
			var	hexVal = "#",
				partVal,
				i;
			for (i = 0; i < 3; i++) {
				partVal = this.indexes[i].toString(16);
				hexVal += partVal.length === 1 ? "0" + partVal : partVal;
			}
			return hexVal;
		};
		/**
		* Get the RGB format value of this colour eg rgb(255,255,255)
		* @function
		* @memberOf J2.Core.CSSColor.prototype
		* @name getRGB
		* @return {String} The RGB value
		*/
		this.getRGB = function() {
			return "rgb(" + this.indexes.join(",") + ")";
		}
		/**
		* Get the difference between this and another colour
		* @function
		* @name diff
		* @memberOf J2.Core.CSSColor.prototype
		* @param {Array or J2.Core.CSSColor} otherColor The colour to compare this colour to
		* @return {J2.Core.CSSColor} A new CSSColor object representing the difference between the two colours
		* 
		*/
		this.diff = function(otherColor) {
			if (otherColor instanceof J2.Core.CSSColor)
				otherColor = otherColor.indexes;
			if (!isArray(otherColor)) return null;
			var diff = [],
				i;
			for (i = 0; i < 3; i++)
				diff.push(parseInt(this.indexes[i]) - parseInt(otherColor[i]));
			return diff.toCssColor();
		}
		/**
		* Creata a J2.Core.CSSColor object from an RGB or hex representation of the color.
		* @function
		* @name create
		* @memberOf J2.Core.CSSColor.prototype
		* @static
		* @param {String} value RGB or hex representation of a colour
		* @return {J2.Core.CSSColor}
		* @example
		* var myColour = J2.Core.CSSColor.prototype.create( "#ffffff" );
		* @example
		* var myColour = J2.Core.CSSColor.prototype.create( "#fff" );
		* @example
		* var myColour = J2.Core.CSSColor.prototype.create( "rgb(255,255,255)" );
		*/
		this.create = function(value) {
			if (arguments.length < 1) return this;
			var args = [0, 0, 0];
			if (value !== "" && value !== null) {
				if (/rgb/.test(value)) {
					//this is an rgb() style
					args = value.match(/\d{1,3}/g);
				} else {
					value = (value + "").replace(/#/, "");
					if (value.length === 3 || value.length === 6) {
						args = [];
						for (var i = 0, j = value.length; i < j; i += (1 / (3 / j))) {
							args.push(value.slice(i, (1 / (3 / j)) + i));
							args[args.length - 1] = parseInt(args[args.length - 1].length === 1 ? args[args.length - 1] + args[args.length - 1] : args[args.length - 1], 16);
						}
					} else {
						return null;
					}
				}
			}
			return args.toCssColor();
		}
	});
	//Built-in object extensions
	/**
	* Trim white space from the start and end of a string
	* @return {String} Trimmed string
	* @example
	* var trimmedString = "  my string  ".trim();
	*/
	String.prototype.trim = function() {
		return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
	};
	/**
	* Convert a hyphenated string to camel case
	* @return {String}
	* @example
	* //Returns "backgroundColor"
	* var camelCasedString = "background-color".hyphenatedToCamelCase()
	*/
	String.prototype.hyphenatedToCamelCase = function() {
		return this.replace(/-\D/g, function(match) { return match.charAt(1).toUpperCase(); });
	}
	/**
	* Convert an array of 3 colour indexes to a J2.Core.CSSColor
	* @return {J2.Core.CSSColor}
	* @example
	* var myNewColor = [255,255,255].toCssColor();
	*/
	Array.prototype.toCssColor = function() {
		if (this.length !== 3) return this;
		for (var i = this.length - 1; i >= 0; i--) {
			if (isNaN(parseInt(this[i]))) return this;
		}
		return new J2.Core.CSSColor(this[0], this[1], this[2]);
	}
	/**
	* Check if an array contains a particular value
	* @param {Any type} val The value to check
	* @return {Boolean} Returns true if any item in the array contains the value
	*/
	Array.prototype.contains = function(val) {
		for (var i = this.length - 1; i >= 0; i--) {
			if (this[i] === val) return true;
		}
		return false;
	};
	/**
	* Copy an array to a new disconnected array.
	* Use to convert array like objects to a standard array, such as an arguments list to a function or a live node list as returnd by getElemenetsByTagName
	* @return {Array} The copy
	* @example
	* myCopy = [1,2,3].copy();
	* @example
	* function(a,b,c) {
	*	//copy arguments list (an array type object) to a real array
	*	var argumentsArray = Array.prototype.copy.call(arguments);
	* }
	*/
	Array.prototype.copy = function() {
		if (this.length == null || this.length === 0) return [];
		var newArray;
		//try to use the slice method to create a new array - most efficient
		try {
			newArray = Array.prototype.slice.call(this, 0);
			if (newArray[0] == null) throw "";
		} catch (e) {
			newArray = [];
			for (var i = 0, j = this.length; i < j; i++)
				newArray.push(this[i]);
		}
		return newArray;
	};
	/**
	* Check if an object is an Array
	* @name isArray
	* @function
	* @param {Object} The object to test
	* @return {Boolean}
	*/
	window.isArray = function(o) {
		return o instanceof Array;
	};
});
/**
* @namespace Container for JSquared element tools.  
* These are the tools which will get bound to each DOM node accessed using a JSquared enhanced method.
* Adding a method to this namespace manually will not add the method to DOM nodes.  Use J2.Core.addElementTool.
* @name J2.Element
* @memberOf J2
*/
J2.Element = new (function() {
	/**
	* Check to see if element is bound to J2.Element
	* @name isElementBound
	* @static
	* @type Boolean
	* @memberOf J2.Element
	*/
	this.isElementBound = true;
	/**
	* Returns an array of nodes matching a list of tag names.
	* Can be used to return multiple node types.
	* @name getElementsByTagNames
	* @memberOf J2.Element
	* @function
	* @param {String or Array} list The node types to return.  Comma separated list or array of values.
	* @return {Array} Matching nodes in document order
	* @example
	* //get all DIVs and SPANs in the document
	* var nodes = document.getElementsByTagNames("div,span");
	* @example
	* //get all lists inside a specific node
	* var lists = document.getElementById("myElement").getElementsByTagNames( ["ul", "ol", "dl"] );
	*/
	this.getElementsByTagNames = function(list) {
		if (typeof list === "string") {
			if (arguments.length === 1) {
				var tagNames = list.split(",");
			} else {
				var tagNames = [];
				for (var i = 0, j = arguments.length; i<j; i++) {
					if (typeof arguments[i] === "string") {
						tagNames.push(arguments[i]);
					}
				}
			}
		} else if ( isArray(list) ) {
			var tagNames = list;
		} else {
			return null;
		}
		var results = null;
		for (var i=0, j=tagNames.length; i<j; i++) {
			var elements = Array.prototype.copy.call(this.getElementsByTagName(tagNames[i].trim()));
			results = (results == null) ? elements : results.concat(elements);
		}
		return J2.Core.sortToDocumentOrder(results);
	};
	/**
	* Check if a node has a particular CSS class
	* @name hasCssClass
	* @memberOf J2.Element
	* @function
	* @param {String} cssClass The CSS class name to check for
	* @return {Boolean}
	*/
	this.hasCssClass = function(cssClass) {
		return new RegExp("\\b" + cssClass + "\\b").test(this.className);
	};
	/**
	* Add a CSS class to the CSS classes applied to a node
	* @function
	* @name addCssClass
	* @memberOf J2.Element
	* @param {String} cssClass The CSS class name to add
	* @return {Node} The node this method acts upon
	*/
	this.addCssClass = function(cssClass) {
		if ( !this.hasCssClass(cssClass) )
			this.className = this.className.trim() + " " + cssClass.trim();
		return this;
	};
	/**
	* Remove a CSS class form the CSS classes applied to a node
	* @function
	* @name removeCssClass
	* @memberOf J2.Element
	* @param {String} cssClass The CSS class name to remove
	* @return {Node} The node this method acts upon
	*/
	this.removeCssClass = function(cssClass) {
		if ( this.hasCssClass(cssClass) )
			this.className = this.className.replace(cssClass.trim(), "").trim();
		return this;
	};
	/**
	* Set the opacity of a node. 
	* Can also be accessed via setStyle.
	* @function
	* @name setOpacity
	* @memberOf J2.Element
	* @param {Float} opacityLevel The opacity level (0-1)
	* @return {Node} The node this method acts upon
	*/
	this.setOpacity = function() {
		//browser detect one time only
		if (window.ActiveXObject) {
			return function(opacityLevel) {
				this.style.filter = (opacityLevel == 1) ? '' : "alpha(opacity=" + opacityLevel * 100 + ")";
				return this;
			};
		} else {
			return function(opacityLevel) {
				this.style.opacity = opacityLevel;
				return this;
			};
		}
	}();
	/**
	* Set a CSS style value on a node.
	* If the property being set is a colour, use a J2.Core.CSSColor object
	* @function
	* @name setStyle
	* @memberOf J2.Element
	* @param {String} property The property to set
	* @param Value The value to set the supplied property to - can be of multiple types dependant on the property
	* @return {Node} The node this method acts upon
	* @example
	* document.getElementById("myElement").setStyle("top", 200);
	* @example
	* document.getElementById("myElement").setStyle("opacity", 0.5);
	* @example
	* document.getElementById("myElement").setStyle("float", "left");
	* @see J2.Core.CSSColor
	*/
	this.setStyle = function(property, value) {
		property = property.hyphenatedToCamelCase();
		//detect special cases for properties
		if (property === "opacity")
			return this.setOpacity(value);
		if (property === "float")
			property = (window.ActiveXObject) ? "styleFloat" : "cssFloat";
		if (/color/i.test(property)) {
			if (!(value instanceof J2.Core.CSSColor))
				value = J2.Core.CSSColor.prototype.create(value);
			if (!(value instanceof J2.Core.CSSColor))
				return false;
			value = value.getHex();
		}
		//detect special cases for values
		if (typeof value === "number" && (!["zIndex", "zoom"].contains(property)))
			value = value + "px";
		this.style[property] = value;
		return this;
	};
	/**
	* Calls the getStyle method
	* @function
	* @name getComputedStyle
	* @memberOf J2.Element
	* @deprecated getStyle
	*/
	/**
	* Get the computed style of a node for a particular property.
	* Note: this method relies on browser implementations which are not consistent and it is not possible to code around.
	* @function
	* @name getStyle
	* @memberOf J2.Element
	* @param {String} property The propert name to retrieve the computed style from
	* @return {Variant} The value (a J2.Core.CSSColor if a colour property is requested)
	* @see J2.Core.CSSColor
	*/
	this.getComputedStyle = this.getStyle = this.getOpacity = function(property) {
		property = property.hyphenatedToCamelCase();
		//detect special cases for properties
		if (property === "backgroundColor" && !window.ActiveXObject)
			property = "background-color";
		if (property === "opacity" && window.ActiveXObject) {
			var opacityLevel = this.getComputedStyle("filter");
			return opacityLevel === "" ? 1 : parseFloat(opacityLevel.split("=")[1]) / 100;
		}
		if (property === "float")
			property = (window.ActiveXObject) ? "styleFloat" : "cssFloat";
		if (window.ActiveXObject && ["width", "height"].contains(property)) {
			return this["offset"+property.replace(/./, function(match) {return match.toUpperCase();})];
		}
		var property_value = null;
		//get the value as best as the browser will allow
		if (this.currentStyle) {
			property_value = this.currentStyle[property];
		} else if (window.getComputedStyle) {
			property_value = document.defaultView.getComputedStyle(this,null).getPropertyValue(property);
		}
		//if the property is a colour property, convert to a J2.Core.CSSColor object
		if (/color/i.test(property))
			property_value = J2.Core.CSSColor.prototype.create(property_value);
		return property_value;
	};
	/**
	* Get the on-screen position of a node relative to any other node.  
	* Default comparison node is window.
	* @function
	* @name position
	* @memberOf J2.Element
	* @param {Node} [relativeTo] The node to compare this nodes position to.  Defaults to window.
	* @return {Object} Object containing properties for left and top.
	*/
	this.position = function(relativeTo) {
		var relative = {left:0, top:0},
			position = {left:parseInt(this.offsetLeft) - relative.left, top:parseInt(this.offsetTop) - relative.top},
			o = this;
		if (typeof relativeTo === "object" && relativeTo.isElementBound)
			relative = relativeTo.position();
		while (o = o.offsetParent) {
			position.left += parseInt(o.offsetLeft);
			position.top += parseInt(o.offsetTop);
		}
		return position;
	};
	/**
	* Check if a node as any child elements
	* @function
	* @name hasChildElements
	* @memberOf J2.Element
	* @param {String} [type] The type (tag name) of child to look for.  Defaults to all types.
	* @return {Boolean}
	*/
	this.hasChildElements = function(type) {
		return this.getElementsByTagName(type || "*").length > 0;
	};
	/**
	* Remove all child nodes.
	* @function
	* @name removeAllChildren
	* @memberOf J2.Element
	* @return {Node} The node this method acts upon
	*/
	this.removeAllChildren = function() {
		while (this.hasChildNodes())
			this.removeChild( this.firstChild );
		return this;
	};
	/**
	* Get the next sibling optionally of a particular type.
	* Will only return element nodes.
	* @function
	* @name getNextSibling
	* @memberOf J2.Element
	* @param {String} [type] The tag name of the next sibling to find.
	* @return {Node} The next sibling or this if there is no next sibling.
	*/
	this.getNextSibling = function(type) {
		var o = this;
		//keep looking through each next sibling to find the correct node
		while (o = o.nextSibling) {
			if (o.nodeType !== 1) continue;
			if (type == null) break;
			if (type.toLowerCase() === o.tagName.toLowerCase()) break;
		}
		if (o == null || o.nodeType !== 1) return null;
		J2.Core.bindElementTools(o);
		return o;
	};
	/**
	* Get the previous sibling optionally of a particular type.
	* Will only return element nodes.
	* @function
	* @name getPreviousSibling
	* @memberOf J2.Element
	* @param {String} [type] The tag name of the previous sibling to find.
	* @return {Node} The previous sibling or this if there is no previous sibling.
	*/
	this.getPreviousSibling = function(type) {
		var o = this;
		//keep looking through each next sibling to find the correct node
		while (o = o.previousSibling) {
			if (o.nodeType !== 1) continue;
			if (type == null) break;
			if (type.toLowerCase() === o.tagName.toLowerCase()) break;
		}
		if (o == null || o.nodeType !== 1) o = this;
		J2.Core.bindElementTools(o);
		return o;
	};
	/**
	* Calls the getParentByType method
	* @function
	* @name getParent
	* @memberOf J2.Element
	* @deprecated getParentByType
	*/
	/**
	* Get the parent node optionally of a type.
	* @function
	* @name getParentByType
	* @memberOf J2.Element
	* @param {String} [type] The tag name of the parent to find.
	* @return {Node} The parent node or null if there is no parent of the specified type.
	*/
	this.getParentByType = this.getParent = function(type) {
		var o = this;
		//if no type is specified, just return the parent node
		if (type == null) {
			Tools.Core.bindElementTools(this.parentNode);
			return this.parentNode;
		}
		//loop through the parent nodes looking for the right type
		while (o = o.parentNode) {
			if (o.nodeType !== 1) continue;
			if (o.tagName.toLowerCase() === type.toLowerCase()) {
				J2.Core.bindElementTools(o);
				return o;
			}
		}
		return null;
	};
	/**
	* Get the parent node which has a specific style
	* @function
	* @name getParentByStyle
	* @memberOf J2.Element
	* @param {String} property The CSS property to check for
	* @param {String} value The value the property needs to match
	* @return {Node} The parent node or null if there is no matching parent.
	*/
	this.getParentByStyle = function(property, value) {
		var o = this;
		//loop through all the parent nodes checking if the node has the correct style
		while (o = o.parentNode) {
			if (J2.Element.getStyle.call(o, property) === value) {
				J2.Core.bindElementTools(o);
				return o;
			}
		}
		return null;
	};
	/**
	* Insert a node after a reference node. 
	* The opposite of the standard DOM method insertBefore
	* @function
	* @name insertAfter
	* @memberOf J2.Element
	* @param {Node} newNode The new node to append to the document
	* @param {Node} refNode The reference node to insert the new node after
	*/
	this.insertAfter = function(newNode, refNode) {
		//if a J2.AJAX object has been supplied, call the setup the callback and call the send method
		if (typeof J2.AJAX === "function" && newNode instanceof J2.AJAX) {
			newNode.setSuccessHandler( function(ajax) {
				var tempNode = document.createElement("span", {innerHTML:ajax.getResponseText()});
				this.insertAfter(tempNode, refNode);
				tempNode.remove(true);
			} );
			newNode.setScope(this);
			newNode.send();
		} else {
			var sibling = refNode.getNextSibling();
			if (refNode == null || sibling === refNode) {
				this.appendChild(newNode);
			} else {
				this.insertBefore(newNode, sibling);
			}
		}
	};
	/**
	* Remove this node from the document.
	* Optionally, this method will retain the children within the document in their current position whilst removing this node.
	* @function
	* @name remove
	* @memberOf J2.Element
	* @param {Boolean} [retainChildren] Specify whether to retain the children of this node
	* @example
	* The following examples will act on this markup:
	* <div style="font-family: Consolas; font-size: 12px; color: black; background: #e1e1e1; padding:10px;"><p style="margin: 0px;"><span style="color: blue;">&lt;</span><span style="color: #a31515;">div</span><span style="color: blue;">&gt;</span></p><p style="margin: 0px;">&nbsp;&nbsp;&nbsp; <span style="color: blue;">&lt;</span><span style="color: #a31515;">div</span> <span style="color: red;">id</span><span style="color: blue;">="RefNode"&gt;</span></p><p style="margin: 0px;">&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <span style="color: blue;">&lt;</span><span style="color: #a31515;">p</span><span style="color: blue;">&gt;</span>Test paragraph<span style="color: blue;">&lt;/</span><span style="color: #a31515;">p</span><span style="color: blue;">&gt;</span></p><p style="margin: 0px;">&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <span style="color: blue;">&lt;</span><span style="color: #a31515;">p</span><span style="color: blue;">&gt;&lt;</span><span style="color: #a31515;">a</span> <span style="color: red;">href</span><span style="color: blue;">="#"&gt;</span>Test link<span style="color: blue;">&lt;/</span><span style="color: #a31515;">a</span><span style="color: blue;">&gt;&lt;/</span><span style="color: #a31515;">p</span><span style="color: blue;">&gt;</span></p><p style="margin: 0px;">&nbsp;&nbsp;&nbsp; <span style="color: blue;">&lt;/</span><span style="color: #a31515;">div</span><span style="color: blue;">&gt;</span></p><p style="margin: 0px;"><span style="color: blue;">&lt;/</span><span style="color: #a31515;">div</span><span style="color: blue;">&gt;</span></p></div>
	* @example
	* document.getElementById("RefNode").remove();
	* The node structure will now be:
	* <div style="font-family: Consolas; font-size: 12px; color: black; background: #e1e1e1; padding:10px;"><p style="margin: 0px;"><span style="color: blue;">&lt;</span><span style="color: #a31515;">div</span><span style="color: blue;">&gt;</span></p><p style="margin: 0px;">&nbsp;</p><p style="margin: 0px;"><span style="color: blue;">&lt;/</span><span style="color: #a31515;">div</span><span style="color: blue;">&gt;</span></p></div>
	* @example
	* document.getElementById("RefNode").remove(true);
	* The node structure will now be:
	* <div style="font-family: Consolas; font-size: 12px; color: black; background: #e1e1e1; padding:10px;"><p style="margin: 0px;"><span style="color: blue;">&lt;</span><span style="color: #a31515;">div</span><span style="color: blue;">&gt;</span></p><p style="margin: 0px;">&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <span style="color: blue;">&lt;</span><span style="color: #a31515;">p</span><span style="color: blue;">&gt;</span>Test paragraph<span style="color: blue;">&lt;/</span><span style="color: #a31515;">p</span><span style="color: blue;">&gt;</span></p><p style="margin: 0px;">&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <span style="color: blue;">&lt;</span><span style="color: #a31515;">p</span><span style="color: blue;">&gt;&lt;</span><span style="color: #a31515;">a</span> <span style="color: red;">href</span><span style="color: blue;">="#"&gt;</span>Test link<span style="color: blue;">&lt;/</span><span style="color: #a31515;">a</span><span style="color: blue;">&gt;&lt;/</span><span style="color: #a31515;">p</span><span style="color: blue;">&gt;</span></p><p style="margin: 0px;"><span style="color: blue;">&lt;/</span><span style="color: #a31515;">div</span><span style="color: blue;">&gt;</span></p></div>
	*/
	this.remove = function(retainChildren) {
		retainChildren = retainChildren || false;
		if (this.parentNode) {
			//if we are to retain the children, rebuild the DOM tree
			if (retainChildren === true && this.hasChildElements()) {
				while (this.childNodes.length > 0)
					this.parentNode.insertBefore( this.childNodes[0], this );
			}
			J2.Core.removeElementBindings(this);
			this.parentNode.removeChild(this);
		}
	};
	//create a special event handler for DOM events
	function DOMEventHandler() {
		var eventHandler = new J2.Core.EventHandler();
		var oldFire = eventHandler.fire;
		eventHandler.fire = function(e) {
			//normalise the event object for browser compatability
			e = e || event;
			//normalise the source element
			e.sourceNode = (e.target || e.srcElement) || null;
			//normalise which key has been pressed
			if (/key/.test(e.type))
				e.keyPressed = (e.which || e.keyCode) || null;
			//normalise mouse position
			if (/click/i.test(e.type) || /mouse/i.test(e.type) || /menu/i.test(e.type)) {
				e.mouse = {
					x: e.pageX || e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
					y: e.pageY || e.clientY + document.body.scrollTop + document.documentElement.scrollTop
				};
			}
			//normalise related target
			if (/over/i.test(e.type))
				e.relatedTarget = e.relatedTarget || e.fromElement;
			if (/out/i.test(e.type))
				e.relatedTarget = e.relatedTarget || e.toElement;
			//normalise mouse wheel
			if (/DOMMouseScroll|mousewheel/.test(e.type))
				e.wheel = (event.wheelDelta) ? event.wheelDelta / 120 : -(event.detail || 0) / 3;
			//normalise for right click
			e.rightClick = (e.which == 3) || (e.button == 2);
			//normalise stopping propogation
			if (!e.stopPropagation) {
				e.stopPropagation = function() {
					this.cancelBubble = true;
				};
			}
			//normalise prevent default
			if (!e.preventDefault) {
				e.preventDefault = function() {
					this.returnValue = false;
				};
			}
			//call the old fire method
			return oldFire.call(this, e);
		};
		return eventHandler;
	};
	/**
	* Add an event handler to a DOM node for an event type.
	* This is for adding event handlers for standard DOM events.
	* Each event type implements an instance of J2.Core.EventHandler.
	* @function
	* @name addEvent
	* @memberOf J2.Element
	* @param {String} type The type of event to handle.  Eg click, mouseover, keyup
	* @param {Function} fn The handler to add to the event type
	* @param {Number} [sortIndex] The sort index for the event.  See J2.Core.EventHandler.eventIndexes
	* @return {Function} The function handler added to the event type
	* @see J2.Core.EventHandler
	* @see J2.Core.EventHandler.eventIndexes
	* @example
	* document.getElementById("myElement").addEvent("click", function(e) { alert(this); });
	*/
	this.addEvent = function(type, fn, sortIndex) {
		if (typeof fn !== "function") return;
		if (!this.events) this.events = {};
		if (!this.events[type]) {
			this.events[type] = new DOMEventHandler();
			this["on" + type] = this.events[type].fire;
		}
		this.events[type].addHandler(fn, sortIndex);
		return fn;
	};
	/**
	* Remove an event handler from a DOM node for an event type.
	* @function
	* @name removeEvent
	* @memberOf J2.Element
	* @param {String} type The type of event.  Eg click, mouseover, keyup
	* @param {Function} fn The handler to remove from the event type
	*/
	this.removeEvent = function(type, fn) {
		var events = this.events;
		if (events && events[type] instanceof J2.Core.EventHandler)
			events[type].removeHandler(fn);
	};
	/**
	* Add a delegate handler to a DOM node for an event type.
	* This is for adding event handlers for standard DOM events.
	* Each event type implements an instance of J2.Core.EventHandler.
	* @function
	* @name addDelegate
	* @memberOf J2.Element
	* @param {String} type The type of event to handle.  Eg click, mouseover, keyup
	* @param {Function} check The checking function to determine if the node which activates the event is one to handle
	* @param {Function} handler The event handler
	* @example
	* function checkNode() {
	* 	//runs in the scope of the event source
	* 	return this.tagName.toLowerCase === "div";
	* }
	* function handler(e) {
	* 	//runs in the scope of the delegate node
	* 	//e.target references the firing node
	* 	e.target.addCssClass("clicked");
	* }
	* document.getElementById("myElement").addDelegate("click", checkNode, handler);
	*/
	this.addDelegate = function(type, check, handler) {
		if (typeof check !== "function" || typeof handler !== "function") 
			return;
		if (this.delegateFunctions == null)
			this.delegateFunctions = {};
		this.delegateFunctions[type] = {check: check, handler: handler};
		this.addEvent(type, delegateHandler, 1000);
	};
	function delegateHandler(e) {
		var delegateFunctions = this.delegateFunctions[e.type];
		if (delegateFunctions.check.call(e.target))
			return delegateFunctions.handler.call(this, e);
		return true;
	}
});
//final bindings
(function() {
	if (typeof HTMLElement === "function")
		J2.Core.bindElementTools( HTMLElement.prototype, true );
	document.getElementsByTagName = J2.Core.newDOMMethods.getElementsByTagName( document.getElementsByTagName );
	document.getElementsByClass = document.getElementsByClassName = J2.Core.newDOMMethods.getElementsByClassName( document.querySelectorAll ? document.querySelectorAll : document.getElementsByClassName || null );
	document.getElementById = J2.Core.newDOMMethods.getElementById;
	document.createElement = J2.Core.newDOMMethods.createElement;
	document.getElementsByTagNames = J2.Element.getElementsByTagNames;
	window.addEvent = function(type, fn, sortIndex) {
		type = type.toLowerCase();
		if (type === "load") {
			window.addLoadEvent(fn, sortIndex);
		} else if (type === "domcontentloaded" || type === "domready") {
			window.addDOMReadyEvent(fn, sortIndex);
		} else {
			J2.Element.addEvent.apply(this, arguments);
		}
	};
})();
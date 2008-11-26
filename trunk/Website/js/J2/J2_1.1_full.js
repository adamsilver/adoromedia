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
					var els = Array.prototype.copy.call(this.getElementsByClassName(args.cssClass)), result = [], bind = false;
					//loop through all elements and match to specified tag names to build results and call callback
					for (var i = 0, j = els.length; i < j; i++) {
						bind = false;
						if (args.tags === "*") {
							bind = true;
						} else if (args.tags.contains(els[i].tagName.toLowerCase())) {
							bind = true;
						}
						if (bind) {
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
			oldFire.call(this, e);
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
/**
* @fileOverview JSquared AJAX Object
* @name AJAX
*/
//check if J2 namespace exists and if not, create it
if (typeof J2 != "object") var J2 = {};
/**
* AJAX Object.  For sending AJAX requests and handling their responses.
* @constructor
* @name J2.AJAX
* @param {Object} [options] The options for this ADIJ instance
* @config {String} URL The URL for the src of the script tag
* @config {String} method The HTTP verb for this AJAX request (eg GET, POST)
* @config {Function} onSuccess The callback function for a successful AJAX request
* @config {Function} onFail The callback function for a failed AJAX request
* @config {Object} scope The scope for the callback function
* @config {Number} timeoutLength The time in milliseconds to wait for the request to be completed before failing the request with a timeout error.  Defaults to 12000 (12 seconds).
* @config {Array} headers An array of objects or arrays of headers to add to the request.
*/
J2.AJAX = function(options) {
	var timeoutLength = 12000;
	var requestObj = null;
	var requestDetails = { method: "get" };
	var timeout = null;
	var failed = false;
	var me = this;
	
	/* allow the passing in of an object literal */
	if (typeof options == "object") {
		requestDetails.URL = options.URL || null;
		requestDetails.method = options.method || requestDetails["method"];
		requestDetails.onSuccess = (typeof options.onSuccess == "function") ? options.onSuccess : null;
		requestDetails.onFail = (typeof options.onFail == "function") ? options.onFail : null;
		requestDetails.scope = (typeof options.scope == "object") ? options.scope : null;
		requestDetails.timeoutLength = options.timeoutLength || timeoutLength;
		if ( options.headers instanceof Array ) {
			for (var i = options.headers.length-1; i>=0; i--)
				addRequestHeader( options.headers[i][0] || options.headers[i]["key"] || null, options.headers[i][1] || options.headers[i]["value"] || null );
		}
	}
	
	function addRequestHeader(key, value) {
		if (key != null && value != null) {
			requestDetails.requestHeaders = requestDetails.requestHeaders || {};
			requestDetails.requestHeaders[key] = value;
		}
	}
	/**
	* Add an HTTP header to the request
	* @function
	* @name addRequestHeader
	* @memberOf J2.AJAX
	* @param {String} key The name of the HTTP header
	* @param {String} value The value of the HTTP header
	*/
	this.addRequestHeader = addRequestHeader;
	/**
	* Set or reset the URL for the request
	* @function
	* @name setUrl
	* @memberOf J2.AJAX
	* @param {String} url The URL for the request
	*/
	this.setUrl = function(url) {
		requestDetails.URL = url;
	}
	/**
	* Set or reset the callback function for a successful AJAX request
	* @function
	* @name setSuccessHandler
	* @memberOf J2.AJAX
	* @param {Function} func The callback function
	*/
	this.setSuccessHandler = function(func) {
		if (typeof func == "function")
			requestDetails.onSuccess = func;
	}
	/**
	* Set or reset the callback function for a failed AJAX request
	* @function
	* @name setFailHandler
	* @memberOf J2.AJAX
	* @param {Function} func The callback function
	*/
	this.setFailHandler = function(func) {
		if (typeof func == "function")
			requestDetails.onFail = func;
	}
	/**
	* Set the time in milliseconds to wait for the request to be completed before failing the request with a timeout error
	* @function
	* @name setTimeoutLength
	* @memberOf J2.AJAX
	* @param {Number} length The timeout length in milliseconds
	*/
	this.setTimeoutLength = function(length) {
		timeoutLength = length;
	}
	/**
	* Set or reset the scope for the callback functions
	* @function
	* @name setScope
	* @memberOf J2.AJAX
	* @param {Object} scope The scope for the callback functions
	*/
	this.setScope = function(o) {
		if (typeof o == "object")
			requestDetails.scope = o;
	}
	/**
	* Send the AJAX request.  If no URL has been provided, the send method will fail.
	* @function
	* @name send
	* @memberOf J2.AJAX
	* @param {String} [data] The data for the body of the request
	*/
	this.send = function(data) {
		//reset the failed notifier
		failed = false;
		//checl that a URL has been specified
		if (requestDetails.URL == null || requestDetails.URL == "")
			return false;
		//check for data and if not provided, set to the empty string
		if (arguments.length < 1 || data == null)
			data = "";
		//get an XMLHttpRequest object
		requestObj = requestObj || this.getRequestObject();
		//open the request
		requestObj.open(requestDetails.method, requestDetails.URL, true);
		//set the correct encoding type for post requests
		if (requestDetails.method.toLowerCase() == "post")
			requestObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
		//add the supplied headers to the request
		for (var key in requestDetails.requestHeaders)
			requestObj.setRequestHeader(key, requestDetails.requestHeaders[key]);
		//set the onreadystatechange handler
		requestObj.onreadystatechange = this.handleReadyStateChange;
		//initiate the timeout for handling request timeouts
		timeout = setTimeout(this.handleTimeout, requestDetails.timeoutLength);
		//send the request
		requestObj.send(data);
	}
	/**
	* Close the request object
	* @function
	* @name close
	* @memberOf J2.AJAX
	*/
	this.close = function() {
		requestObj.abort();
	}
	/**
	* Handle the timeout for timing out the request.  Will cause the timeout failure to be fired and will close the AJAX request.
	* @function
	* @name handleTimeout
	* @memberOf J2.AJAX
	*/
	this.handleTimeout = function() {
		me.clearTimeout();
		if (typeof requestDetails.onFail == "function") {
			failed = true;
			me.close();
			fail(J2.AJAX.FailureCodes.timeout);
		}
	}
	/**
	* Clear the timeout handling AJAX request timing.  Only call this method if the timout error should never fire or if it has already been fired.
	* @function
	* @name clearTimeout
	* @memberOf J2.AJAX
	*/
	this.clearTimeout = function() {
		clearTimeout(timeout);
	}
	//fail the request with the given fail code or with a general error if none is supplied
	function fail(failCode) {
		failed = true;
		requestDetails.onFail.call( requestDetails.scope || requestDetails.onFail, me, failCode || J2.AJAX.FailureCodes.general );
	}
	/**
	* Handles ready state changes for the AJAX request.
	* @function
	* @name handleReadyStateChange
	* @memberOf J2.AJAX
	*/
	this.handleReadyStateChange = function() {
		//if the request has already failed, dont bother going any further
		if (failed == true) return;
		//if the response has arrived
		if (requestObj.readyState == 4) {
			//clear the timeout to avoid firing a timeout error
			me.clearTimeout();
			//if the request has returned OK
			if (requestObj.status == 200) {
				//if a success handler has been provided, call it now and pass back in the AJAX object
				if (typeof requestDetails.onSuccess == "function")
					requestDetails.onSuccess.call( requestDetails.scope || requestDetails.onSuccess, me );
			} else {
				//set the failed notifier
				failed = true;
				//if a fail handler has been provided, call it
				if (typeof requestDetails.onFail == "function") {
					var status = requestObj.status;
					var failureCode = J2.AJAX.FailureCodes.general;
					//calculate if a fail code matches the status of the request
					for (var failType in J2.AJAX.FailureCodes) {
						if (J2.AJAX.FailureCodes[failType] == status) {
							failureCode = J2.AJAX.FailureCodes[failType];
							break;
						}
					}
					fail(failureCode);
				}
			}
		}
	}
	/**
	* Get a response header from the response to the request.
	* @function
	* @name getResponseHeader
	* @memberOf J2.AJAX
	* @return {String} The value of the response header
	*/
	this.getResponseHeader = function(headerName) {
		return requestObj.getResponseHeader(headerName);
	}
	/**
	* Get all the response headers.
	* @function
	* @name getAllResponseHeaders
	* @memberOf J2.AJAX
	* @return {String} The full list of response headers from the request
	*/
	this.getAllResponseHeaders = function() {
		return requestObj.getAllResponseHeaders();
	}
	/**
	* Get the response text returned from the request.
	* @function
	* @name getResponseText
	* @memberOf J2.AJAX
	* @return {String} The response text
	*/
	this.getResponseText = function() {
		return requestObj.responseText;
	}
	/**
	* Get the response XML if the response uses an XML mime type and is valid.
	* @function
	* @name getResponseXML
	* @memberOf J2.AJAX
	* @return {Document} The response XML
	*/
	this.getResponseXML = function() {
		return requestObj.responseXML;
	}
	/**
	* Gets the URL the request was made to.
	* @function
	* @name getUrl
	* @memberOf J2.AJAX
	* @return {String} The URL the request was sent to
	*/
	this.getUrl = function() {
		return requestDetails.URL;
	}
}
/**
* @static
* @class
* @prototype
* @name J2.AJAX.prototype
* @memberOf J2.AJAX
*/
/**
* Get an XMLHttpRequest object or a compatable object depending on the users browser 
* @function
* @name getRequestObject
* @memberOf J2.AJAX.prototype
* @return {XMLHttpRequest}
*/
J2.AJAX.prototype.getRequestObject = function() {
	J2.AJAX.supported = true;
	if (typeof XMLHttpRequest != "undefined" && typeof XMLHttpRequest != null) {
		return function() {
			return new XMLHttpRequest();
		}; 
	} else if (window.ActiveXObject) {
		return function() {
			return new ActiveXObject("Microsoft.XMLHTTP");
		};
	} else {
		J2.AJAX.supported = false;
		return function() {
			return null;
		}
	}
} ();
/**
* The J2.AJAX failure codes
* @static
* @class
* @name FailureCodes
* @memberOf J2.AJAX
*/
J2.AJAX.FailureCodes = {
	/**
	* A general failure
	* @type FailureCode
	* @name general
	* @memberOf J2.AJAX.FailureCodes
	*/
	general: "xx1",
	/**
	* HTTP response code 401
	* @type FailureCode
	* @name unauthorised
	* @memberOf J2.AJAX.FailureCodes
	*/
	unauthorised: 401,
	/**
	* HTTP response code 404
	* @type FailureCode
	* @name notFound
	* @memberOf J2.AJAX.FailureCodes
	*/
	notFound: 404,
	/**
	* HTTP response code 408.  Can also be created by the request timeout being fired.
	* @type FailureCode
	* @name timeout
	* @memberOf J2.AJAX.FailureCodes
	*/
	timeout: 408,
	/**
	* HTTP response code 500
	* @type FailureCode
	* @name server
	* @memberOf J2.AJAX.FailureCodes
	*/
	server: 500	
}
/**
* @fileOverview JSquared ADIJ Object
* @name ADIJ
*/
//check if J2 namespace exists and if not, create it
if (typeof J2 != "object") var J2 = {};
/**
* ADIJ object for dynamically creating script tags and appending them to the HEAD of the document.
* Used for asynchronously loading JavaScript and calling REST API's.
* @constructor
* @name J2.ADIJ
* @param {Object} [options] The options for this ADIJ instance
* @config {String} URL The URL for the src of the script tag
* @config {Function} onSuccess The callback function for the ADIJ request
* @config {Object} scope The scope for the callback function
* @config {Boolean} isJSONP Defines whether this request should conform to the JSON-P standard
* @config {String} JSONPParam The name of the callback querystring parameter for JSON-P style requests.  Defaults to "callback"
*/
J2.ADIJ = function(options) {
	//create requestDetails object and fulfill shared interface with AJAX object with getResponseText method
	var requestDetails = {
		getResponseText: function() {
			return this.json || "";
		}
	};
	//initialise requestDetails member values
	if (typeof options == "object") {
		requestDetails.URL = options.URL || null;
		requestDetails.scope = (typeof options.scope == "object") ? options.scope : null;
		requestDetails.onSuccess = (typeof options.onSuccess == "function") ? options.onSuccess : null;
		requestDetails.isJSONP = options.JSONP || false;
		requestDetails.JSONPParam = (typeof options.JSONPParam == "string") ? options.JSONPParam : "callback";
	}
	/**
	* Set or reset the URL for the request
	* @function
	* @name setUrl
	* @memberOf J2.ADIJ
	* @param {String} url The URL for the src of the script tag
	*/
	this.setUrl = function(url) {
		requestDetails.URL = url;
	}
	/**
	* Set or reset the callback function for the ADIJ request
	* @function
	* @name setSuccessHandler
	* @memberOf J2.ADIJ
	* @param {Function} func The callback function for the ADIJ request
	*/
	this.setSuccessHandler = function(func) {
		if (typeof func == "function")
			requestDetails.onSuccess = func;
	}
	/**
	* Set or reset the scope for the callback function
	* @function
	* @name setScope
	* @memberOf J2.ADIJ
	* @param {Object} scope The scope for the callback function
	*/
	this.setScope = function(scope) {
		if (typeof scope == "object")
			requestDetails.scope = scope;
	}
	/**
	* Send the ADIJ request - will write the script tag into the document
	* @function
	* @name send
	* @memberOf J2.ADIJ
	*/
	this.send = function() {
		this.sendRequest(requestDetails);
	}
}
// Create a prototype instance closure to hide shared Requests object
/**
* @static
* @class
* @prototype
* @name J2.ADIJ.prototype
* @memberOf J2.ADIJ
*/
J2.ADIJ.prototype = new (function() {
	//static references
	var headTag = null;
	var requestCount = 0;
	//storage for the requests
	var Requests = {};
	//get a new and unique ADIJ ID
	var getID = function() {
		requestCount++;
		return "ADIJ_" + requestCount;
	};
	var generateJSONPFunction = function(id) {
		window[id] = function(json) {
			J2.ADIJ.prototype.handleResponse(id, json);
			delete window[id];
		}
	};
	/**
	* Send the request by adding the script tag based on a series of request details.
	* @function
	* @name sendRequest
	* @memberOf J2.ADIJ.prototype
	* @param {Object} requestDetails The request details for this request.  Created via the J2.ADIJ.send method.
	*/
	this.sendRequest = function(requestDetails) {
		if (typeof requestDetails != "object") return;
		if (requestDetails.URL == null || requestDetails.URL == "") return false;
		if (requestDetails.id == null) requestDetails.id = getID();
		requestDetails.scriptTag = document.createElement("script");
		requestDetails.scriptTag.type = "text/javascript";
		requestDetails.scriptTag.src = requestDetails.URL + (requestDetails.URL.indexOf("?") > -1 ? "&" : "?") + "uqid=" + (new Date()).getTime() + "&rid=" + requestDetails.id;
		if (requestDetails.isJSONP) {
			requestDetails.scriptTag.src += "&" + requestDetails.JSONPParam + "=" + requestDetails.id;
			generateJSONPFunction(requestDetails.id);
		}
		if (headTag == null)
			headTag = document.getElementsByTagName("head")[0];
		headTag.appendChild(requestDetails.scriptTag);
		Requests[requestDetails.id] = requestDetails;
	}
	/**
	* Handles the ADIJ response.
	* @function
	* @name handleResponse
	* @memberOf J2.ADIJ.prototype
	* @param {Number} id The id of the ADIJ request being handled
	* @param {Object} json The JSON object returned from the request
	*/
	this.handleResponse = function(id, json) {
		if (Requests[id] == null) return false;
		Requests[id].json = json;
		if (Requests[id].scriptTag.parentNode)
			Requests[id].scriptTag.parentNode.removeChild(Requests[id].scriptTag);
		if (typeof Requests[id].onSuccess == "function")
			Requests[id].onSuccess.apply(Requests[id].scope || Requests[id].onSuccess, [Requests[id]].concat(Array.prototype.slice.call(arguments, 2)));
	}
});
/**
* @fileOverview JSquared AutoComplete Object
* @name AutoComplete
*/
//check if J2 namespace exists and if not, create it
if (typeof J2 !== "object") var J2 = {};
/**
* Auto complete/filter object for filtering lists based on user input.
* Can be used for making suggest lists on search boxes etc
* @constructor
* @name J2.AutoComplete
* @param {Node} field The field to be managed by the object
* @param {Array} data The data to filter
* @param {Object} [options] The options for the filtering of the list
* @config {Boolean} matchAnyCharacter Defines whether to match any character in the data for filtering, or just from the start of the data.  For example, setting this to true would make "Sq" match JSquared.  Defaults to false.
* @config {Number} minLength The minimum number of characters the user has to enter before the filtering is activated.  Defaults to 1.
* @config {String} objectMemeber If the array of data is an array of objects, define the name of the member of each object to filter the list against
* @config {String} hoverCssClass The CSS class to apply to a filtered list item when the user hovers over it.  Default to "hover".
* @config {Boolean} display Specifies whether to add the filtered list as a set of DOM nodes to the document or not.  Defaults to true.
* @config {Function} onFilteredListDraw An optional callback function to call when the filtered list is added to the document or updated within the document.  The filtered data set is passed as an argument.  Runs in the scope of the root display node (an unordered list).
* @config {Function} onItemBound An optional callback function to call when an item in the original dataset is found to match the filtering characters.  The newly bound data item is passed as an argument.  Runs in the scope of the DOM node representing this data item (a list item).
* @config {Function} onItemSelect An optional callback function to call when an item in the filtered list is selected by the user.  The data item selected is passed as an argument.  Runs in the scope of the DOM node representing the seleced data item (a list item).
*/
J2.AutoComplete = function(field, data, options) {
	options = options || {};
	var objectMember = options.objectMember || null, workWithObjects = typeof objectMember === "string", minLength = options.minLength || 1;
	var rootDisplayNode = document.createElement("ul", {cssClass: "autoCompleteList"} );
	var fullDataSet = new J2.AutoComplete.DataSet(createInitialDataSet(), objectMember, options.matchAnyCharacter || false);
	var active = false;
	var hoverCssClass = options.hoverCssClass || "hover";
	/**
	* Activates the filtering.
	* All events will be bound to the field specified.
	* @function
	* @name activate
	* @memberOf J2.AutoComplete
	* @param {Boolean} [buildList] Specifies whether to immediately show the filtered list on activation
	*/
	this.activate = function(buildList) {
		if (active === false) {
			//add events to the field
			field.addEvent( "keyup", field_onKeyUp );
			field.addEvent( "keypress", field_onKeyPress );
			active = true;
			//display the filtered list if asked to
			if (buildList === true)
				buildNodeList(fullDataSet.getFilteredSet(field.value.trim()));
		}
	};
	/**
	* Deactivate the filtering.
	* All events will be removed from the field specified.
	* The filtered list will be removed from the DOM if it is there.
	* @function
	* @name deactivate
	* @memberOf J2.AutoComplete
	*/
	this.deactivate = function() {
		if (active === true) {
			//remove events from field
			field.removeEvent( "keyup", field_onKeyUp);
			field.removeEvent( "keypress", field_onKeyPress );
			active = false;
			//remove the filtered list
			rootDisplayNode.remove();
		}
	};
	//activate the filtered list object
	this.activate(false);
	
	function field_onKeyPress(e) {
		var charCode = e.charCode || e.keyCode;
		//if enter has been pressed
		if (charCode === 13) {
			e.cancelBubble = true;
			//cancel the event
			return !selectHighlightedItem();
		}
	}
	
	function field_onKeyUp(e) {
		var nodeHighlightSuccess = true;
		//if the down arrow has been pressed
		if (e.keyCode === 40) {
			if (options.display !== false && highlightNextNode(1)) return;
			nodeHighlightSuccess = false;
		}
		//if the up arrow has been pressed
		if (e.keyCode === 38) {
			if (options.display !== false && highlightNextNode(-1)) return;
			nodeHighlightSuccess = false;
		}
		//if enter has been pressed
		if (options.display !== false && e.keyCode === 13) {
			e.cancelBubble = true;
			return !selectHighlightedItem();
		}
		//if escape has been pressed
		if (options.display !== false && e.keyCode === 27) {
			//remove the list by asking it to build an empty list - ensures the firing of the onFilteredListDraw event
			buildNodeList(J2.AutoComplete.DataSet.prototype.Empty);
			return true;
		}
		if (this.value.trim().length >= minLength) {	
			buildNodeList(fullDataSet.getFilteredSet(this.value.trim()));
		} else {
			//remove the list by asking it to build an empty list - ensures the firing of the onFilteredListDraw event
			buildNodeList(J2.AutoComplete.DataSet.prototype.Empty);
		}
		//check if the up or down arrow has been pressed and there is another node to highlight then do it
		if (options.display !== false && nodeHighlightSuccess === false) {
			if (e.keyCode === 40)
				highlightNextNode(1);
			if (e.keyCode === 38)
				highlightNextNode(-1);
		}
	};
	function buildNodeList( dataSet ) {
		var filter = field.value.trim();
		rootDisplayNode.removeAllChildren();
		//if there are no nodes to display
		if (dataSet.nodes.length === 0) {
			//remove the root node
			rootDisplayNode.remove();
			var allNodes = fullDataSet.getSet().nodes;
			//remove the hover class from all nodes
			for (var i = allNodes.length-1; i>=0; i--)
				allNodes[i].removeCssClass(hoverCssClass);
			//fire the onfilteredlistdraw event
			if (typeof options.onFilteredListDraw === "function")
				options.onFilteredListDraw.call(rootDisplayNode, dataSet);
			return;
		}
		//if we are to match any character, setup the regular expression to select the portion of the data that matches the filter value
		if (options.matchAnyCharacter === true)
			var regEx = new RegExp(filter, "i");
		var nodeValue;
		for (var i = 0, j = dataSet.nodes.length, node; i<j, node = dataSet.nodes[i]; i++) {
			nodeValue = workWithObjects ? dataSet.values[i][objectMember] : dataSet.values[i];
			//wrap the matching portion of the data in strong tags
			if (options.matchAnyCharacter === true) {
				node.innerHTML = nodeValue.replace(regEx, "<strong>" + nodeValue.match(regEx) + "</strong>");
			} else {
				node.innerHTML = "<strong>" + nodeValue.substr(0, filter.length) + "</strong>" + nodeValue.substr(filter.length);
			}
			//setup alternate row handling
			if (i % 2 === 0) {
				node.addCssClass("alternateRow");
			} else {
				node.removeCssClass("alternateRow");
			}
			//add the node to the root node
			rootDisplayNode.appendChild(node);
			//fire the onitembound event
			if (typeof options.onItemBound === "function")
				options.onItemBound.call(node, dataSet.values[i]);
		}
		//put the root display node into the document
		if (options.display !== false && rootDisplayNode.parentNode != field.parentNode)
			field.parentNode.insertAfter(rootDisplayNode, field);
		//call the onfilteredlistdraw event
		if (typeof options.onFilteredListDraw == "function")
			options.onFilteredListDraw.call(rootDisplayNode, dataSet, options.display);
	}
	//create the initial data set whcih will be used for filtering off of
	function createInitialDataSet() {
		var newDataSet = {};
		newDataSet.values = data;
		var nodeSet = [], node;
		//loop through all data items and build the elements to represent them
		for (var i = 0,j = data.length; i<j; i++) {
			nodeSet[i] = document.createElement("li");
			nodeSet[i].addEvent("mouseover", node_MouseOver);
			nodeSet[i].addEvent("mouseout", node_MouseOut);
			nodeSet[i].addEvent("click", node_Click);
			nodeSet[i].rootValue = workWithObjects ? data[i][objectMember] : data[i];
			nodeSet[i].rootData = data[i];
		}
		newDataSet.nodes = nodeSet;
		return newDataSet;
	}
	//highlight the next node in a particular direction - up or down.
	//used to handle keyboard interactions
	function highlightNextNode(direction) {
		var currentlyHighlightedNode = null;
		var currentNodes = rootDisplayNode.getElementsByTagName("li");
		var nodeToHighlight = null;
		if (currentNodes.length === 0) return false;
		//check if there is a currently highlighted node
		for (var i = currentNodes.length-1; i>=0; i--) {
			if (currentNodes[i].hasCssClass(hoverCssClass)) {
				currentlyHighlightedNode = currentNodes[i];
				break;
			}
		}
		if (currentlyHighlightedNode == null) {
			//if there is no currently highlighted node, select the first or last node depending on direction
			if (direction === 1) {
				nodeToHighlight = currentNodes[0];
			} else {
				nodeToHighlight = currentNodes[currentNodes.length-1];
			}
		} else {
			if (direction === 1) {
				if (currentlyHighlightedNode !== currentNodes[currentNodes.length]) {
					nodeToHighlight = currentlyHighlightedNode.getNextSibling("li");
				} else {
					nodeToHighlight = currentNodes[currentNodes.length];
				}
			} else {
				if (currentlyHighlightedNode !== currentNodes[0]) {
					nodeToHighlight = currentlyHighlightedNode.getPreviousSibling("li");
				} else {
					nodeToHighlight = currentNodes[0];
				}
			}
		}
		
		var allNodes = fullDataSet.getSet().nodes;
		for (var i = allNodes.length-1; i>=0; i--) {
			if (allNodes[i] === nodeToHighlight) {
				allNodes[i].addCssClass(hoverCssClass);
			} else {
				allNodes[i].removeCssClass(hoverCssClass);
			}
		}
		return true;
	}
	//used when the user presses enter on a highlighted node
	function selectHighlightedItem() {
		var currentNodes = rootDisplayNode.getElementsByTagName("li");
		var currentlyHighlightedNode = null;
		if (currentNodes.length === 0) return false;
		for (var i = currentNodes.length-1; i>=0; i--) {
			if (currentNodes[i].hasCssClass(hoverCssClass)) {
				currentlyHighlightedNode = currentNodes[i];
				break;
			}
		}
		if (currentlyHighlightedNode == null) return false;
		selectNode(currentlyHighlightedNode);
		return true;
	}
	function node_MouseOver() {
		var allNodes = fullDataSet.getSet().nodes;
		for (var i = allNodes.length-1; i>=0; i--)
			allNodes[i].removeCssClass(hoverCssClass);
		this.addCssClass(hoverCssClass);
	}
	function node_MouseOut() {
		this.removeCssClass(hoverCssClass);
	}
	function node_Click(e) {
		selectNode(this);
		e.cancelBubble = true;
		return false;
	}
	function selectNode(node) {
		field.value = node.rootValue;
		buildNodeList(J2.AutoComplete.DataSet.prototype.Empty);
		if (typeof options.onItemSelect === "function")
			options.onItemSelect.call(node, node.rootData);
		rootDisplayNode.remove();
	}
}

J2.AutoComplete.DataSet = function(data, objectMember, matchAnyCharacter) {
	var filteredSets = {};
	this.getFilteredSet = function(filter) {
		if (filteredSets[filter] == null)
			filteredSets[filter] = new J2.AutoComplete.DataSet( this.filterSet(filter, data, objectMember, matchAnyCharacter) );
		return filteredSets[filter].getSet();
	}
	this.getSet = function() {
		return data;
	}
}
J2.AutoComplete.DataSet.prototype = {
	Empty: {values:[], nodes:[], isEmpty: true},
	filterSet: function(filter, data, objectMember, matchAnyCharacter) {
		var workWithObjects = typeof objectMember == "string";
		var filteredSet = {values:[], nodes:[]};
		var expression = matchAnyCharacter === true ? filter : "^" + filter + ".*$";
		var regEx = new RegExp(expression, "i"), regExResult = false;
		for (var i = 0, j = data.values.length; i<j; i++) {
			if (workWithObjects) {
				regExResult = regEx.test(data.values[i][objectMember])
			} else {
				regExResult = regEx.test(data.values[i]);
			}
			if (regExResult === true) {
				filteredSet.values.push(data.values[i]);
				filteredSet.nodes.push(data.nodes[i]);
			}
		}
		return filteredSet;
	}
}
/**
* @fileOverview JSquared Cache Object
* @name Cache
*/
//check if J2 namespace exists and if not, create it
if (typeof J2 !== "object") var J2 = {};
/**
* Generic caching object for storing any values.
* @constructor
* @name J2.Cache
*/
J2.Cache = function() {
	var	cache = {},
		me = this;
	/**
	* Puts an item in the cache.  Will overwrite if the item already exists
	* @function
	* @name put
	* @memberOf J2.Cache
	* @param {String} id The name of the cache item
	* @param {Any} value The value of the cache item
	* @param {Number} [time] Defines how long an item should exist in the cache
	*/
	this.put = function(id, value, time) {
		this.remove(id);
		cache[id] = value;
		if (time && !isNaN(time)) {
			cache[id].time = setTimeout( function() { me.remove(id) }, time );
		}
	}
	/**
	* Get an item from the cache
	* @function
	* @name get
	* @memberOf J2.Cache
	* @param {String} id The name of the cache item to get
	* @return {Any or undefined} The value stored in the cache
	*/
	this.get = function(id) {
		return cache[id];
	}
	/**
	* Delete an item from the cache
	* @function
	* @name delete
	* @memberOf J2.Cache
	* @param {String} id The name of the cache item to delete
	*/
	this.remove = function(id) {
		delete cache[id];
	}
}
/**
* @fileOverview JSquared Cookie Object
* @name Cookie
*/
//check if J2 namespace exists and if not, create it
if (typeof J2 !== "object") var J2 = {};
/**
* Cookie object for adding, getting, setting and deleting cookies.
* @constructor
* @name J2.Cookie
* @static
*/
J2.Cookie = new (function() {
	var Collection = null;
	function init() {
		Collection = {};
		var cookies = document.cookie.split(";");
		var cookie;
		for (var i = cookies.length - 1; i >= 0; i--) {
			cookie = cookies[i].split("=");
			if (cookie.length >= 2)
				Collection[cookie[0]] = cookie[1];
		}
		init = function() {};
	}
	/**
	* Set the value of a cookie
	* @function
	* @name set
	* @memberOf J2.Cookie
	* @param {String} name The name of the cookie
	* @param {String} value The value of the cookie
	* @param {Number} [days] The number of days this cookie should last
	*/
	this.set = function(name, value, days) {
		init();
		var expires = "";
		if (days) {
			var date = new Date();
			date.setDate(date.getDate() + (days || -1));
			expires = "expires=" + date.toGMTString();
		}
		var cookie = name + "=" + value + ";expires=" + expires + ";path=/";
		document.cookie = cookie;
		Collection[name] = value;
	}
	/**
	* Get the value of a cookie
	* @function
	* @name get
	* @memberOf J2.Cookie
	* @param {String} name The name of the cookie to get
	* @return {String} The value of the cookie
	*/
	this.get = function(name) {
		init();
		return Collection[name];
	}
	/**
	* Remove a cookie
	* @function
	* @name remove
	* @memberOf J2.Cookie
	* @param {String} name The name of the cookie to remove
	*/
	this.remove = function(name) {
		init();
		this.set(name, "", -1);
		delete Collection[name];
	}
});
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
/**
* @fileOverview JSquared QueryString Object
* @name QueryString
*/
//check if J2 namespace exists and if not, create it
//can support multiple querystring items with the same key
if (typeof J2 !== "object") var J2 = {};
/**
* Object for accessing data on the QueryString of the current document
* @constructor
* @name J2.QueryString
* @static
*/
J2.QueryString = new ( function() {
	var queryString = null;
	/**
	* Get the value of an item on the QueryString
	* @function
	* @name get
	* @memberOf J2.QueryString
	* @param {String} key The name of the item to retrieve
	* @return {String or Array} The value or null if the item does not exist.  If multiple items exist with the same name, an array is returned
	* @example
	* The following examples are based on a document with this URL:
	* http://www.example.com/page.html?item1=firstValue&item2=secondValue&item2=anotherSecondValue&item3=&item4=fourthValue
	* @example
	* J2.QueryString.get("item1");
	* //returns "firstValue"
	* @example
	* J2.QueryString.get("item2");
	* //returns ["secondValue", "anotherSecondValue"]
	* @example
	* J2.QueryString.get("item3");
	* //returns ""
	* @example
	* J2.QueryString.get("item5");
	* //returns null
	*/
	this.get = function(key) {
		if (key == null || key === "") return null;
		if (queryString == null) {
			queryString = {};
			var qs = location.search.slice(1).split("&"), qsElements;
			for (var i = 0, j = qs.length; i<j; i++) {
				qsElements = qs[i].split("=");
				if (queryString[qsElements[0]]) {
					if (queryString[qsElements[0]] instanceof Array) {
						queryString[qsElements[0]].push(qsElements[1] || "")
					} else {
						queryString[qsElements[0]] = [queryString[qsElements[0]], qsElements[1]];
					}
				} else {
					queryString[qsElements[0]] = qsElements[1] || "";
				}
			}
		}
		return queryString[key];
	};
} )();
/**
* @fileOverview JSquared TabSet Object
* @name TabSet
*/
//check if J2 namespace exists and if not, create it
if (typeof J2 !== "object") var J2 = {};
window.addDOMReadyEvent( function() {
	/**
	* Tabset object which will scan the DOM for all tabsets specified in the DOM and provides a create method.
	* @constructor
	* @static
	* @name J2.TabSet
	*/
	J2.TabSet = new (function() {
		var tabsets = document.getElementsByClass({	cssClass: "tabset",	callback: function() {
			create(this);
		}});
		/**
		* Create a new tabset
		* @function
		* @memberOf J2.TabSet
		* @name create
		* @param {Node} node The root node of the tabset
		*/
		this.create = create;
		function create(node) {
			new TabSet(node);
		}
		function TabSet(tabset) {
			var tabActivators = tabset.getElementsByClass({cssClass: "tabActivator", tags: "a"});
			var tabActivatorCssClass = "selected";
			var tabCssClass = "unselected";
			var selectedTab = "";
			for (var i=0; i < tabActivators.length; i++) {
				tabActivators[i].relatedTab = document.getElementById(tabActivators[i].hash.slice(1));
				tabActivators[i].addEvent( "click", tabClicked );
				if (tabActivators[i].hasCssClass(tabActivatorCssClass))
					selectedTab = tabActivators[i].relatedTab;
			}
			hideAllTabs(selectedTab);
		
			function hideAllTabs(nodeToIgnore) {
				for ( var i = tabActivators.length-1; i >= 0; i--) {
					if (tabActivators[i].relatedTab !== nodeToIgnore) {
						tabActivators[i].removeCssClass(tabActivatorCssClass);
						tabActivators[i].relatedTab.addCssClass(tabCssClass);
					}
				}
			}
		
			function tabClicked() {
				hideAllTabs(this.relatedTab);
				this.addCssClass(tabActivatorCssClass);
				this.relatedTab.removeCssClass(tabCssClass);
				return false;
			}
		}
	});
}, window.DOMReadyEventIndexes.first());
/*
	NOTE:
		Currently working in Firefox, IE 6+, Safari 3 Mac+PC only.
		For IE, add the following code somewhere in the HTML:
			<!--[if IE]>
			<iframe src="iframe.html" width="0" height="0" id="URLFrame" style="visibility:none;" />
			<![endif]-->
		The iframe src needs to point to a real URL, but the page can be completely blank.
	NOTE:
		JSquared Core Library is required
*/

/**
* @fileOverview JSquared URL Object - A browser history manager
* @name URL
*/
//check if J2 namespace exists and if not, create it
if (typeof J2 !== "object") var J2 = {};
/**
* Browser history manager object
* @constructor
* @static
* @name J2.URL
*/
J2.URL = new (function() {
		var delim = ";";
		var members = {};
		var started = false;
		var timeout, timeoutLength = 100;
		/**
		* Set the polling interval to check the URL of the document.  
		* Defaults to 100.
		* Range must be between 35 and 2500
		* @function
		* @name setPollingInterval
		* @memberOf J2.URL
		* @param {Number} length The length of the polling interval in milliseconds
		*/
		this.setPollingInterval = function(length) {
			timeoutLength = length < 35 ? 35 : (length > 2500 ? 2500 : length);
			alert(timeoutLength);
		};
		/**
		* Get a new or existing member object to register with the URL manager.
		* A member manages its own data for a single key.
		* If an existing member with the given key exists, that will be returned.
		* @function
		* @name getMember
		* @memberOf J2.URL
		* @param {String} key The key for this member.  Becomes the name of the data item in the URL
		* @param {Function} callback The function to call when the data item value in the URL changes (when the user presses back or forwards or arrives from a bookmark etc)
		* @param {Object} [options] Options for the member
		* @config {Object} scope The scope for the callback function
		* @config {String} initialValue The initial value of the member
		* @return {J2.URL.Member} The member created or retrieved from the list of members
		*/
		this.getMember = function( key, callback, options ) {
			if (members[key] == null) {
				if (typeof callback !== "function") return null;
				return new Member( key, callback, options, update );
			} else {
				return members[key];
			}
		};
		/**
		* Register a member with the URL manager.
		* Cannot register a member more than once.
		* @function
		* @name register
		* @memberOf J2.URL
		* @param {J2.URL.Member} member The member to register
		* @return {Boolean} Has the member been registered successfully.
		*/
		this.register = function( member ) {
			if (!member instanceof Member) return false;
			//does this member already exist in the list of members?
			if (members[member.key()] != null) return true;
			stopChecking();
			member.registered = true;
			members[member.key()] = member;
			//if the URL object has already been started by its own initialisation then restart the URL monitoring
			if (started)
				startChecking();
			return true;
		};
		this.start = function() {
			timeoutHandler();
			started = true;
			delete this.start;
		};
		
		var getBrowserUrl = function() {
			if (document.getElementById("URLFrame")) {
				return function() {
					location.hash = document.frames["URLFrame"].location.search.slice(1);
					return document.frames["URLFrame"].location.search.slice(1);
				};
			} else {
				return function() {
					return location.hash.slice(1);
				};
			}
		}();
		
		var setBrowserUrl = function() {
			if (document.getElementById("URLFrame")) {
				document.frames["URLFrame"].location.replace(document.frames["URLFrame"].location.pathname + "?" + location.hash.slice(1));
				return function(newUrl) {
					document.getElementById("URLFrame").setAttribute("src", document.frames["URLFrame"].location.pathname + "?" + newUrl);
					location.hash = newUrl;
				};
			} else {
				return function(newUrl) {
					location.hash = newUrl;
				};
			}
		}();
		
		function update() {
			stopChecking();
			var newUrl = "";
			for (var key in members) {
				newUrl = newUrl + (newUrl.length === 0 ? "" : delim);
				newUrl = key + "=" + members[key].getValue();
			}
			setBrowserUrl(newUrl);
			startChecking();
		}
		
		function startChecking() {
			timeout = setTimeout(timeoutHandler, timeoutLength);
		}
		function stopChecking() {
			clearTimeout(timeout);
		}
		
		function timeoutHandler() {
			var currentURL = getURLObject();
			for (var key in members) {
				if (currentURL[key] == null) continue;
				if (members[key].getValue() !== currentURL[key]) 
					members[key].callback(currentURL[key]);
			}
			startChecking();
		}
		function getURLObject() {
			var url = getBrowserUrl(), urlObject = {}, key, value, itemData;
			url = url.split(delim);
			for (var i = url.length-1; i>=0; i--) {
				itemData = url[i].split("=");
				key = itemData[0];
				urlObject[key] = itemData.slice(1).join("=");
			}
			return urlObject;
		}
		/**
		* This constructor cannot be initiated directly.  Call J2.URL.getMember to create.
		* @static
		* @constructor
		* @name J2.URL.Member
		*/
		var Member = function(key, callback, options, update) {
			/**
			* Identify whether this member has already been registered
			* @name registered
			* @memberOf J2.URL.Member
			* @type Boolean
			*/
			this.registered = false;
			var scope = window;
			var currentValue = "";
			if (typeof options === "object") {
				scope = options.scope || scope;
				currentValue = options.initialValue || currentValue;
			}
			/**
			* Get the key for this member
			* @function
			* @name key
			* @memberOf J2.URL.Member
			* @return {String} The key.
			*/
			this.key = function() {
				return key;
			};
			/**
			* Update the value of this member.  This will cause the actual URL of the page to be updated as well.
			* Calling this function will create a history point and update the URL of the page.
			* @function
			* @name updateValue
			* @memberOf J2.URL.Member
			* @param {String} data The new value of this member
			*/
			this.updateValue = function(data) {
				currentValue = data;
				if (typeof update === "function")
					update();
			};
			/**
			* Get the current value of this member
			* @function
			* @name getValue
			* @memberOf J2.URL.Member
			* @return {String} The current value
			*/
			this.getValue = function() {
				return currentValue;
			};
			/**
			* Set the current value without causing the URL of the page to change or creating a history point.
			* Will call the callback function specified for this member indicating a change in value.
			* @function
			* @name callback
			* @memberOf J2.URL.Member
			* @param {String} newValue The new value of this member
			*/
			this.callback = function( newValue ) {
				currentValue = newValue;
				callback.call(scope, {"value": newValue, "key": key});
			};
		};
		
	}
)(); 
window.addLoadEvent( function() {J2.URL.start();}, -1000 );

/**
* @fileOverview FXSquared core objects
* @name FXSquared
*/
/**
* The base class for all FX
* @constructor
* @name J2.FX
* @param {Array} options The array of J2.FXOptions that define the options for this FX
*/
/**
* Anonymous function to add tools to the J2.Element object.
* The methods defined here are added to each DOM node bound to the J2.Element object.
* @class
* @static
* @name Element
* @memberOf J2.FX
* @see J2.Element
*/
J2.FX = new (function() {
		/** 
	* Add the animate element tool.
	* Directly calls the Style FX type.
	* @function
	* @name animate
	* @memberOf J2.FX.Element
	* @see J2.FX.Style
	* @see J2.FX.Transitions
	* @param {Object} types The style types to animate.  Passed as an object of CSS style names and end values.
	* @param {Number} [timeToComplete] The time taken to complete the animation in milliseconds.  Default to 500.
	* @param {J2.FX.Transitions or String} [transition] The transitional effect to use for the animation.  Passed as either the transition object or as a string representing the transition object.  Defaults to linear.
	* @param {Function} [callback]  The function to call when the animation completes.
	* @return {J2.FX} The effect created
	* @example
	* //Animate the opacity to zero (a fade out effect) over 1 second and using a Quadratic easeIn effect
	* document.getElementById("myElemet").animate( {
	*	opacity: 0
	* }, 1000, J2.FX.Transitions.Quad.easeIn );
	* @example
	* //Animate the height and width to zero and the background color to black over the default time period using an Exponential easeOut effect
	* document.getElementById("myElement").animate( {
	* 	width: 0,
	* 	height: 0,
	* 	"background-color": new J2.Core.CSSColor( 0, 0, 0 )
	* }, null, "Exp.easeOut" );
	*/
	J2.Core.addElementTool("animate", function(types, timeToComplete, transition, callback) {
		if (typeof types !== "object") return false;
		var FXOptions = [];
		for (var animation in types) {
			FXOptions.push( new J2.FXOptions(types[animation], {property:animation, timeToComplete: timeToComplete, transition: transition}) );
		}
		var fx = this.createFX("Style", FXOptions, callback);
		if (fx !== false)
			fx.start();
		return fx;
	});
	/**
	* Add the createFX element tool
	* @function
	* @name createFX
	* @memberOf J2.FX.Element
	* @see J2.FXOptions
	* @param {String} type The effect type to run.  The effect type must be created as a plugin to be created in this way.
	* @param {Array or J2.FXOptions} options An array of J2.FXOptions or an instance of J2.FXOptions defining how the effect should run.
	* @param {Function} [onFXEnd] The function to call when the effect is complete
	* @return {J2.FX} The effect created
	*/
	J2.Core.addElementTool("createFX", function(type, options, onFXEnd) {
		if (typeof J2.FX[type] !== "function") return false;
		var thisFX = this.FX;
		if (thisFX == null)
			thisFX = this.FX = {FXCallbacks:{}};
		if (typeof thisFX[type] === "object") {
			thisFX[type].stop();
			this.removeFX(type);
		}
		if (typeof onFXEnd === "function")
			thisFX.FXCallbacks[type] = onFXEnd;
		options = isArray(options) ? options : [options];
		thisFX[type] = J2.FX[type](this, options);
		thisFX[type].element = this;
		thisFX[type].type = type;
		return thisFX[type];
	});
	/**
	* Add the getFX element tool.
	* Will return the J2.FX object for the effect type specified if one is already running for this DOM node
	* @function
	* @name getFX
	* @memberOf J2.FX.Element
	* @param {String} type The effect type to get.
	* @return {J2.FX or null} The effect if it exists or null
	*/
	J2.Core.addElementTool("getFX", function(type) {
		var thisFX = this.FX;
		return thisFX == null ? null : (thisFX[type] ? thisFX[type] : null);
	});
	/**
	* Add the removeFX element tool
	* @function
	* @name removeFX
	* @memberOf J2.FX.Element
	* @param {String} type The effect type to remove
	*/
	J2.Core.addElementTool("removeFX", function(type) {
		var thisFX = this.FX;
		if (thisFX !== null) {
			delete thisFX[type];
			delete thisFX.FXCallbacks[type];
		}
	});
	/**
	* Add the removeAllFX element tool
	* @function
	* @name removeAllFX
	* @memberOf J2.FX.Element
	*/
	J2.Core.addElementTool("removeAllFX", function() {
		var thisFX = this.FX;
		if (thisFX !== null) {
			for (var type in thisFX) {
				if (type === "FXCallbacks") continue;
				this.removeFX(type);
			}
		}
	});
		function FXBase(options) {
		var interval = null, progress = 0, currentFXOptions = [], me = this;
		/**
		* The start time for this running of the effect
		* @name startTime
		* @memberOf J2.FX
		* @type Number
		*/
		this.startTime = null;
				/**
		* Initialises this FX.  Will cause a complete reset
		* @function
		* @name init
		* @memberOf J2.FX
		* @return {J2.FX} This J2.FX object
		*/
		this.init = function() {
			//go through each option and set the start value
			for (var i = options.length-1; i>=0; i--) {
				//if the option type if for a color property, create 3 separate colour options, one for each index to make the difference in colour in each step calculable
				if (/color/i.test(options[i].getProperty())) {
					//split the color one down...
					var colorVal = options[i].getEndValue(), thisColor;
					for (var j = colorVal.length-1;j>=0;j--) {
						switch (j) {
							case 2:
								thisColor = "blue";
								break;
							case 1:	
								thisColor = "green";
								break;
							case 0:
								thisColor = "red";
								break;
						}
						options.push( new J2.FXOptions(colorVal[j], {
										property: options[i].getProperty() + "_" + thisColor, 
										timeToComplete: options[i].getTimeToComplete(), 
										transition: options[i].transition
									}) );
						options[options.length-1].setStartValue(this.getCurrentValue(options[options.length-1].property));
					}
					options.splice(i,1);
					continue;
				}
				//set the start value
				options[i].setStartValue(this.getCurrentValue(options[i].getProperty()));
			}
			return this;
		};

		/**
		* Reset all options to their start value.  Does not affect timing values or effects in progress
		* @function
		* @name reset
		* @memberOf J2.FX
		*/
		this.reset = function() {
			for (var i = options.length-1; i>=0; i--)
				this.set(options[i].getNewValue(0), options[i].getProperty());
		};
		/**
		* Start the effect.
		* Will call the reset method and restart the effect if previously started.
		* @function
		* @name start
		* @memberOf J2.FX
		*/
		this.start = function() {
			this.stop();
			this.reset();
			currentFXOptions = options.copy();
			progress = 0;
			this.startTime = new Date().getTime();
			interval = setInterval( step, 10 );
		};
		/**
		* Stops the effect and set the progress to complete but will not set the option values to their end value.
		* @function
		* @name stop
		* @memberOf J2.FX
		*/
		this.stop = function() {
			clearInterval(interval);
			interval = null;
		};
		/**
		* Stops the effect and fires the onFXEnd event
		* @function
		* @name end
		* @memberOf J2.FX
		*/
		this.end = function() {
			this.stop();
			var FXCallback = this.element.FX.FXCallbacks;
			if (typeof FXCallback[this.type] === "function")
				FXCallback[this.type].call(this.element, this.type);
		};
		/**
		* Sets each option to its end value
		* @function
		* @name goToEnd
		* @memberOf J2.FX
		*/
		this.goToEnd = function() {
			this.stop();
			for (var i = currentFXOptions.length - 1; i >= 0; i--) {
				this.set(currentFXOptions[i].getNewValue(1), currentFXOptions[i].getProperty());
			}
			currentFXOptions = [];
		};
		/**
		* Check if the effect is currently running
		* @function
		* @name isRunning
		* @memberOf J2.FX
		* @return {Boolean}
		*/
		this.isRunning = function() {
			return interval !== null;
		};
		/**
		* Check if the effect has been run since its creation
		* @function
		* @name hasBeenRun
		* @memberOf J2.FX
		* @return {Boolean}
		*/
		this.hasBeenRun = function() {
			return this.startTime !== null;
		};
		/**
		* Check if the effect is complete
		* @function
		* @name isComplete
		* @memberOf J2.FX
		* @return {Boolean}
		*/
		this.isComplete = function() {
			return currentFXOptions.length === 0;
		};
		var step = function() {
			var elapsedTime = new Date().getTime() - me.startTime, timeToComplete;
			if (elapsedTime === 0) return;
			//go through all of the FX options for this animation run
			for (var i = currentFXOptions.length - 1; i >= 0; i--) {
				timeToComplete = currentFXOptions[i].getTimeToComplete();
				if (elapsedTime < timeToComplete) {
					progress = elapsedTime / timeToComplete;
					me.set(currentFXOptions[i].getNewValue(progress), currentFXOptions[i].getProperty());
				} else {
					me.set(currentFXOptions[i].getNewValue(1), currentFXOptions[i].getProperty());
					currentFXOptions.splice(i, 1);
				}
				if (currentFXOptions.length === 0) {
					me.end();
					return;
				}
			}
		};
	}
	return FXBase;
});
/**
* A single options set for an FX type.  FX types can handle multiple options.
* @constructor
* @name J2.FXOptions
* @param {Number or J2.Core.CSSColor} endValue The end value of this effect options.  This defines the value which represents the final state of the effect.  Will be used to calculate range.
* @param {Object} options The options that define this FXOptions object
* @config {String} [property] The property name for this FXOption.  The property name can be used by the FX type to define how the effect works.  Default to the empty string
* @config {Number} [timeToComplete] The time taken to complete the effect in milliseconds.  Defaults to 500
* @config {String or J2.FX.Transitions} [transition] The transition type as a transition object or its string representation.  This is used when calculating the value to be applied to this property by the FX type as the animation is in progress.  Default to linear.
*/
J2.FXOptions = function(endValue, options) {
	if (typeof options !== "object") options = {};
	var timeToComplete = isNaN(parseFloat(options.timeToComplete)) ? 500 : options.timeToComplete;
	var property = options.property || "";
	var startValue;
	var range;
	var direction = 1;
	var transition = getTransitionType();
	/**
	* Get the time to complete the effect represented by this FXOptions
	* @function
	* @name getTimeToComplete
	* @memberOf J2.FXOptions
	* @return {Number} The time to complete in milliseconds
	*/
	this.getTimeToComplete = function() {
		return timeToComplete;
	}
	/**
	* Get the name of the property represnting this FXOptions
	* @function
	* @name getProperty
	* @memberOf J2.FXOptions
	* @return {String} The property name
	*/
	this.getProperty = function() {
		return property;
	}
	/**
	* Get the end value
	* @function
	* @name getEndValue
	* @memberOf J2.FXOptions
	* @return {Number} The end value for this effect
	*/
	this.getEndValue = function() {
		return endValue;
	};
	/**
	* Set a new end value for this effect representation
	* @function
	* @name setEndValue
	* @memberOf J2.FXOptions
	* @param {Number} val The end value
	*/
	this.setEndValue = function(val) {
		endValue = val;
		setDirection();
		setRange();
	};
	/**
	* Set a start value for this effect representation - this is normally calculated when the J2.FX object containing this FXOptions initialises.
	* @function
	* @name setStartValue
	* @memberOf J2.FXOptions
	* @param {Number} val The start value
	*/
	this.setStartValue = function(val) {
		startValue = val;
		setDirection();
		setRange();
	};
	/**
	* Get the new value for the property within this effect representation based on the completed portion of the effect
	* @function
	* @name getNewValue
	* @memberOf J2.FXOptions
	* @param {Float} proportion The proportion of the effect completed ranging from 0 to 1
	* @return {Number} The proprtion value for this effect
	*/
	this.getNewValue = function(proportion) {
		return proportion === 1 ? endValue : (proportion === 0 ? startValue : transition(startValue, range, proportion, direction));
	};
	function getTransitionType() {
		var defaultTransition = J2.FX.Transitions.linear;
		if (typeof options.transition === "function") return options.transition;
		if (typeof options.transition === "string") {
			var transitionSplit = options.transition.split(".");
			switch (transitionSplit.length) {
				case 2:
					return J2.FX.Transitions[transitionSplit[0]][transitionSplit[1]] || defaultTransition;
				case 1:
					return J2.FX.Transitions[transitionSplit[0]] ? J2.FX.Transitions[transitionSplit[0]].easeIn : defaultTransition;
			}
		}
		return defaultTransition;
	}
	function setDirection() {
		direction = (startValue < endValue) ? -1 : 1;
	};
	function setRange() {
		range = Math.abs(startValue - endValue);
	};
};
/**
* Container for transition types.  All should be treated as static.
* @constructor
* @static
* @name J2.FX.Transitions
*/
J2.FX.Transitions = new (function() {
	/*
		s:	startValue
		r:	range
		p:	proportion
		d:	direction
	*/
	/**
	* Linear transition. 
	* @name linear
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	this.linear = function(s, r, p ,d) {
		return s-(r*p*d);
	};
	var transitionType = function(exp) {
		this.easeIn = function(s, r, p ,d) {
			return s-(r*exp(p)*d);
		};
		this.easeOut = function(s, r, p ,d) {
			return s-(r* (1 - exp(1-p)) *d);
		};
		this.easeInOut = function(s, r, p, d) {		
			return p <= 0.5 ? s - ((exp(2*p)/2)*r*d) : s - (((2 - exp(2 * (1-p))) / 2)*r*d);
		};
	}
	/**
	* Quadratic easeIn transition type
	* @name Quad.easeIn
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	/**
	* Quadratic easeOut transition type
	* @name Quad.easeOut
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	/**
	* Quadratic easeInOut transition type
	* @name Quad.easeInOut
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	
	/**
	* Cubic easeIn transition type
	* @name Cubic.easeIn
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	/**
	* Cubic easeOut transition type
	* @name Cubic.easeOut
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	/**
	* Cubic easeInOut transition type
	* @name Cubic.easeInOut
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	
	/**
	* Quartic easeIn transition type
	* @name Quart.easeIn
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	/**
	* Quartic easeOut transition type
	* @name Quart.easeOut
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	/**
	* Quartic easeInOut transition type
	* @name Quart.easeInOut
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	
	/**
	* Quintic easeIn transition type
	* @name Quint.easeIn
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	/**
	* Quintic easeOut transition type
	* @name Quint.easeOut
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	/**
	* Quintic easeInOut transition type
	* @name Quint.easeInOut
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	
	/**
	* Back easeIn transition type - will force the effect to step backwards at the start of its run
	* @name Back.easeIn
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	/**
	* Back easeOut transition type  - will force the effect to step backwards at the end of its run
	* @name Back.easeOut
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	/**
	* Back easeInOut transition type - will force the effect to step backwards at the start and end of its run
	* @name Back.easeInOut
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	
	/**
	* Exponential easeIn transition type
	* @name Exp.easeIn
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	/**
	* Exponential easeOut transition type
	* @name Exp.easeOut
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	/**
	* Exponential easeInOut transition type
	* @name Exp.easeInOut
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	
	/**
	* Bounce easeIn transition type - will force the effect to bounce in and out at the start of its run
	* @name Bounce.easeIn
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	/**
	* Bounce easeOut transition type - will force the effect to bounce in and out at the end of its run
	* @name Bounce.easeOut
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	/**
	* Bounce easeInOut transition type - will force the effect to bounce in and out at the start and end of its run
	* @name Bounce.easeInOut
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	this.Quad	= new transitionType(function(p) {return Math.pow(p, 2);});
	this.Cubic	= new transitionType(function(p) {return Math.pow(p, 3);});
	this.Quart	= new transitionType(function(p) {return Math.pow(p, 4);});
	this.Quint	= new transitionType(function(p) {return Math.pow(p, 5);});
	this.Back	= new transitionType(function(p) {return Math.pow(p, 2) * (3 * p - 2);});
	this.Exp	= new transitionType(function(p) {return Math.pow(2, 8*(p-1));});
	this.Bounce = new transitionType(
		function (p) {
			var a = 0, b = 1;
			while (p < (7 - 4 * a) / 11) {
				a += b;
				b /= 2;
			}
			return - Math.pow((11 - 6 * a - 11 * p) / 4, 2) + b * b;
		}
	);
});
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
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
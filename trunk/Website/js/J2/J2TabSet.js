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
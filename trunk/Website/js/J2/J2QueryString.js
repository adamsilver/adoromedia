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
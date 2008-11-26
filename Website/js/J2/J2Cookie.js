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
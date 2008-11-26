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
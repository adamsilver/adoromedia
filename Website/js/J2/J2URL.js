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

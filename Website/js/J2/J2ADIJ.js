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
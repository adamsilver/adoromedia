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
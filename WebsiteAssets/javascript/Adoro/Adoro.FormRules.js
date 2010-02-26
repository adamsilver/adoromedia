//  ---------------------------------------------------------------------------------------------------------
//  --- license header; ---
//  ---------------------------------------------------------------------------------------------------------
/* Copyright (c) 2008 - 2009 by Adoro Media
	info@adoromedia.com
  	
  	This file is part of Adoro Media open source projects
  	
    Adoro Media projects are free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
 
    The projects are distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.
 
    See <http://www.gnu.org/licenses/> for information on the GNU Lesser General Public License.
*/
//  ---------------------------------------------------------------------------------------------------------
//  ---------------------------------------------------------------------------------------------------------
var Adoro = Adoro || {};
/**
 * @namespace Holds all the rules as functions to be used in Adoro.Form form validation
 * @name Adoro.FormRules
 * @static
 */
Adoro.FormRules = {
	/**
	 * @description 
	 * Checks to see if a field is empty or not.
	 * @return {boolean} true when not empty otherwise false
	 */
	notEmpty: function(){
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		if (field[0].value === "") {
			valid = false;
		}
		return valid;
	},
	/**
	 * @description
	 * Checks to see if the field value is a specific length
	 * @param {Object} params The parameters for the function
	 * @param {Number} params.length The length of characters the field should have
	 * @return {Boolean} true when the length is correct otherwise false
	 */
	isLength: function(params){
		var length = 10;
		if(typeof params === "object") {
			length = (typeof params.length === "number") ? params.length : length;
		}
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		if (field[0].value.length !== length) {
			valid = false;
		}
		return valid;
	},
	minLength: function(params) {
		var params = params || {}
		var length = params.length || 2;
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		if (field[0].value.length < length && field[0].value !== "") {
			valid = false;
		}
		return valid;
	},
	luhn: function(params) {
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		valid = (function(){
		
			var number = field[0].value;
			
			// Set the string length and parity
			var number_length=number.length;
			var parity=number_length % 2;
			
			// Loop through each digit and do the maths
			var total=0;
			for (i=0; i < number_length; i++) {
				var digit=number.charAt(i);
				
				// Multiply alternate digits by two
				if (i % 2 == parity) {
					digit=digit * 2;
					
					// If the sum is two digits, add them together (in effect)
					if (digit > 9) {
						digit=digit - 9;
					}
				}
				
				// Total up the digits
				total = total + parseInt(digit);
			}
			
			// If the total mod 10 equals 0, the number is valid
			if (total % 10 == 0) {
				return true;
			} else {
				return false;
			}
		}());
		return valid;
	},

	/**
	 * Checks to see if the amount of checked items is the above or equal to the minChecked argument
	 * @param {Object} params The parameters for the function
	 * @param {Number} params.minChecked The number of items to be checked in field collection
	 * @return {Boolean} true when the minimum has been checked otherwise false
	 */
	minChecked: function(params){
		var minChecked = 0;
		if(typeof params === "object") {
			minChecked = (typeof params.minChecked === "number") ? params.minChecked : minChecked;
		}
		var valid = true;
		var field = this;
		var checkedCount = 0;
		for (var i = 0; i < field.length; i++) {
			if (field[i].checked) {
				checkedCount++;
			}
		}
		if (checkedCount < minChecked) {
			valid = false;
		}
		return valid;
	},
	
	/**
	 * Checks to see if the amount of checked items is more than the maxChecked argument
	 * @param {Object} params The parameters for the function
	 * @param {Number} params.maxChecked The number of items to be checked in field collection
	 * @return {Boolean} true when less than the max has been checked otherwise false
	 */
	maxChecked: function(params){
		var maxChecked = 0;
		if(typeof params === "object") {
			maxChecked = params.maxChecked || maxChecked;
		}
		var valid = true;
		var field = this;
		var checkedCount = 0;
		for (var i = 0; i < field.length; i++) {
			if (field[i].checked) {
				checkedCount++;
			}
		}
		if (checkedCount > maxChecked) {
			valid = false;
		}
		return valid;
	},		
	
	/**
	 * Checks to see if the field is a valid string in the pattern of an email address.
	 * @return {Boolean} true when the value field value is an email address otherwise false
	 */
	emailAddress: function(){
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		var regex = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$|^$");
		if (!regex.test(field[0].value)) {
			valid = false;
		}
		return valid;
	},
	/**
	 * Check to see if the field is made of valid "name characters" only
	 * @return {Boolean} true when contains valid name characters otherwise false
	 */
	nameCharacters: function(){
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		var regex = new RegExp("^([a-zA-Z0-9- '`])+$");
		if (!regex.test(field[0].value)) {
			valid = false;
		}		
		return valid;
	},
	/**
	 * Checks to see if the field is a valid phone number
	 * @return {Boolean} true when the value is a valid phone number otherwise false
	 */
	phoneNumber: function() {
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		var regex = new RegExp("^[+]?[0-9 ]*\\({1}[0-9]+\\){1}[0-9 ]+$|^[+]?[0-9 ]+$");
		if (!regex.test(field[0].value)) {
			valid = false;
		}		
		return valid;		
	},
	/**
	 * Check to see if the field value is a valid password
	 * @return {Boolean} true when the value is a valid password otherwise false
	 */
	password: function() {
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		var regex = new RegExp("(^[A-Za-z0-9]{6,12}$)");
		if (!regex.test(field[0].value)) {
			valid = false;
		}		
		return valid;		
	},
	
	/**
	 * Check to see if the field value is a valid password
	 * @return {Boolean} true when the value is a valid password otherwise false
	 */
	passwordVersion2: function() {
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		var regex = new RegExp("(^[A-Za-z0-9]{6,12}$)");
		if (!regex.test(field[0].value)) {
			valid = false;
		}		
		return valid;		
	},	
	
	/**
	 * Check to see if the field value is a valid number
	 * @return {Boolean} true when the field is a number otherwise false
	 */
	number: function() {
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		var regex = new RegExp("^([0-9])+$|^$");
		if (!regex.test(field[0].value)) {
			valid = false;
		}		
		return valid;		
	},	
	/**
	 * Check to see if the field value is a string made up of alpha digit special characters, full stops
	 * @return {Boolean} true when regex is matched otherwise false
	 */
	alphadigitsspecialfullstop: function() {
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		var regex = new RegExp("^([a-zA-Z0-9- '`.])+$|^$");
		if (!regex.test(field[0].value)) {
			valid = false;
		}		
		return valid;		
	},
	/**
	 * Check to see if the value of the field is the same as the matchField argument value
	 * @param {Object} matchField
	 * @return {Boolean} true when the two fields match otherwise false
	 */
	matches: function(params) {
		var matchField = null;
		if(typeof params === "object") {
			matchField = params.matchField || matchField;
		}
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		if(matchField === null) return valid;
		if(field[0].value !== matchField.value && field[0].value !== "") {
			valid = false;
		}	
		return valid;
	},
	/**
	 * Check to see if the field is made of valid "name characters" only
	 * @return {Boolean} true when contains valid name characters otherwise false
	 */
	lettersNumbers: function(){
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		var regex = new RegExp("^([a-zA-Z0-9])+$");
		if (!regex.test(field[0].value)) {
			valid = false;
		}		
		return valid;
	},
	letters: function(){
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		var regex = new RegExp("^([a-zA-Z])+$");
		if (!regex.test(field[0].value)) {
			valid = false;
		}		
		return valid;
	},
	argosPhoneNumber: function() {
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		
		// if it is 100
		if(field[0].value === "100") return valid;
		
		if(field[0].value.length < 10 && field[0].value !=="") {
			valid = false;
		}
		
		var regex = new RegExp("^[+]?[0-9 ]*\\({1}[0-9]+\\){1}[0-9 ]+$|^[+]?[0-9 ]+$|^$");
		if (!regex.test(field[0].value)) {
			valid = false;
		}		
		return valid;		
	},
		/**
	 * Check to see if the field is made of valid "name characters" only
	 * @return {Boolean} true when contains valid name characters otherwise false
	 */
	argosNameCharacters: function(){
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		var regex = new RegExp("^([a-zA-Z- '`])+$|^$");
		if (!regex.test(field[0].value)) {
			valid = false;
		}		
		return valid;
	},
	ukPostcode: function(){
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		var regex = new RegExp("^([A-PR-UWYZ]([0-9]{1,2}|([A-HK-Y][0-9]|[A-HK-Y][0-9]([0-9]|[ABEHMNPRV-Y]))|[0-9][A-HJKS-UW])\ [0-9][ABD-HJLNP-UW-Z]{2}|(GIR\ 0AA)|(SAN\ TA1)|(BFPO\ (C\/O\ )?[0-9]{1,4})|((ASCN|BBND|[BFS]IQQ|PCRN|STHL|TDCU|TKCA)\ 1ZZ))$");
		//var regex = new RegExp("^([A-Za-z]{1,2})([0-9]{2,3})([A-Za-z]{2})$")
		                             
		if (!regex.test(field[0].value)) {
			valid = false;
		}		
		return valid;
	},
	notEmptyWhenFieldChecked: function(params) {
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		var params = params || {};
		var checkedField = params.checkedField || null;

		if(checkedField && checkedField.checked) {
			valid = Adoro.FormRules.notEmpty.call(field);
		}

		return valid;
	},
	argosPassword: function() {
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		//var regex = new RegExp(/^(?=(.*\d){2,})(?=(.*[a-zA-Z]){2,})[a-zA-Z0-9]{6,}$|^$/);
		//var regex_2digits = new RegExp(/^(?=(.*[0-9]){2,})$/);
		//var regex_2alpha = new RegExp(/^(?=(.*[a-zA-Z]){2,})$/);
		//if (!regex_2digits.test(field[0].value) ) {
			//valid = false;
		//}		
		return valid;
	},
	argosChallengeAnswer: function() {
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		var regex = new RegExp(/^([a-zA-Z0-9]){2,}$|^$/);
		if (!regex.test(field[0].value)) {
			valid = false;
		}		
		return valid;
	}
}




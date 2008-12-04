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

if(typeof Adoro !== "object") var Adoro = {};

/**
* Create a new form validator object
* @class Represents a form validator object
* @constructor
* @name Adoro.FormValidator
* @param {HTMLElement} form as DOM reference
* @param {Object} options
* @param {String} options.errorClass
* @param {String} options.errorSummaryID
* @param {String} options.hideClass
* @param {String} options.errorSpanClass
*/
Adoro.FormValidator = function(form, options) {
	var docTitle = document.title;

	var config = { 
		errorClass: "error", 
		errorSummaryID: "errorMessage",
		hideClass: "hide", 
		errorSpanClass: "errorText",
		errorSummaryHeaderSingleErrorBeforeHTML: "<h3>The form has ",
		errorSummaryHeaderSingleErrorAfterHTML: " error. Please check.</h3>",
		errorSummaryHeaderMultiErrorBeforeHTML: "<h3>The form has ",
		errorSummaryHeaderMultiErrorAfterHTML: " errors. Please check.</h3>",
		errorTitleSingleErrorBeforeHTML: "The form has ",
		errorTitleSingleErrorAfterHTML: " error. Please check. ",
		errorTitleMultiErrorBeforeHTML: "The form has ",
		errorTitleMultiErrorAfterHTML: " errors. Please check. "
	};
	
	if (typeof options === "object") {
		config.errorClass = (typeof options.errorClass === "string") ? options.errorClass : config.errorClass;
		config.errorSummaryID = (typeof options.errorSummaryID === "string") ? options.errorSummaryID : config.errorSummaryID;
		config.hideClass = (typeof options.hideClass === "string") ? options.hideClass : config.hideClass;
		config.errorSpanClass = (typeof options.errorSpanClass === "string") ? options.errorSpanClass: config.errorSpanClass;
	}
	
	$(form).bind("submit", function(e){
		return validate.call(form);
	});
	
	// yuck contextual submit hack.
	$(form).find("input").keypress(function (e) { 
		// if user presses enter i want to validate the whole form
		// not the form according to the submit button that is first in the flow		
		if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
			// submit the form normally without context of what triggered it.
			$(form).submit();
			return false;
		}
		return true;
	});  	

	var validators = [];
	var errors = [];
	var groups = []; // stores contextual groups for the form
	var lastFired = null; // because after several days of googling I cannot cross browser get the dom element that triggered the form submit which is essential for contextual submits.
	var errorSummary = document.getElementById(config.errorSummaryID);
	prepareErrors(); // if errors coming from server side
	
	/**
	 * prepare form errors by binding events
	 * @function
	 * @private
	 */
	function prepareErrors() {
		if(errorSummary === null) return;
		$(errorSummary).find("ul li a").bind("click", error_onClick);
	}
	
	/**
	 * when an error is clicked focus on its related field.
	 * @function
	 * @private
	 * @return {Boolean} true when field is not focusable otherwise false to prevent default action
	 */
	function error_onClick() {
		var field = document.getElementById(this.hash.slice(1));
		if(field === null) return;
		var tag = field.tagName.toUpperCase();
		if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") {
			field.focus();
			return false;
		}
		return true;
	}
	
	/**
	 * add a new validator to the form
	 * @function
	 * @public
	 * @param {string} fieldName (which references element name)
	 * @param {Object[]} rule
	 * @param {Function} rule.method
	 * @param {Array} rule.params
	 * @param {String} rule.message
	 */
	function addValidator(fieldName, rules) {
		var field = $(form).find("[name='"+fieldName+"']");
		if(field.length === 0) return;
		if(!Adoro.isArray(rules)) return;
		var validRules = [];
		var rule;
		for(var i = 0; i < rules.length; i++) {
			rule = rules[i];
			if(isRuleValid(rule)) {
				validRules.push(rule);
			}
		}
		if (validRules.length > 0) {
			validators.push(new Validator(field, validRules));
		}
		return this;
	}
	
	/**
	 * remove a validator from the form
	 * remove the whole validator or remove particular rules for the validator
	 * @param {String} key The key for the validator being the name of the field
	 * @param {String[]} ruleKeys Array of strings representing the names of the rule methods
	 * @return {Object} this To enable chaining
	 */
	function removeValidator(key, ruleKeys) {
		var ruleKeys = ruleKeys || null;
		var validator, rule;
		var numberOfItemsToRemoveFromArray = 1;
		for(var i = 0; i<validators.length; i++) {
			validator = validators[i];
			// at this point we get the key i.e name of field
			// and if there are ruleKeys
			if(validator.key === key) {
				// remove just the key in question
				if(Adoro.isArray(ruleKeys)) {
					// loop thru rules in validator
					for(var j = 0; j < validator.rules.length; j++) {
						rule = validator.rules[j];
						for(var k = 0; k < ruleKeys.length; k++) {
							if(Adoro.FormRules[ruleKeys[k]] === rule.method) {
								validator.rules.splice(j,numberOfItemsToRemoveFromArray);
								j--; //we altered the array so carry on looping from the same point.
							}
						}
					}
				}
				// remove whole validator
				else {
					validators.splice(i, numberOfItemsToRemoveFromArray);
				}
			}
		}
		return this;
	}
	
	/**
	 * is rule valid
	 * @function
	 * @private
	 * @param {Object} rule The rule object which containes two properties, method and message
	 * @return {boolean} true when valid otherwise false
	 */
	function isRuleValid(rule) {
		var valid = true;
		if(typeof rule !== "object" || Adoro.isArray(rule)) {
			valid = false;
		}
		if(typeof rule.method !== "function") {
			valid = false;
		}
		if(typeof rule.message !== "string") {
			valid = false;
		}
		return valid;
	}
	
	/**
	 * Create a new form validator object
	 * @class Represents a validator object
	 * @constructor
	 * @name Adoro.FormValidator
	 * @param {Node[]} field An array of nodes
	 * @param {Array} rules The rules for the validator
	 */
	function Validator(field, rules) {
		this.key = $(field).attr("name");
		this.field = field;
		this.rules = rules;
		// this is the visual indicator for the field for highlighting errors
		var fieldContainer = $(field).parents("div.field")[0];
		// this is the label/legend for the field/fieldset
		// can be the same as the indicator in some instances
		var label = (function(){
			var singleInputLabel = $(field).parents("div.singleInput").prev("div.indicator").find("label")[0];
			if(singleInputLabel !== undefined){
				return singleInputLabel;
			}
			var checkboxesLegend = $(field).parents("div.checkboxes").find("legend")[0];
			if(checkboxesLegend !== undefined){
				return checkboxesLegend;
			}
			var checkboxesLabel = $(field).parents("div.checkboxes").find("div.input label")[0];
			if(checkboxesLabel !== undefined) {
				return checkboxesLabel;
			}
			var multipleInputLabel = $(field).parents("div.multipleInput")[0];
			if(multipleInputLabel !== undefined) {
				return $(field).prev("label")[0] || $(field).next("label")[0];
			}
			return null;
		}());
		var errorSpan = (function(){
			var es = $(label).find("span."+config.errorSpanClass)[0];
			if(es === undefined) {
				es = $('<span class="'+ config.errorSpanClass +'">Error</span>')[0];
			}
			return es;
		}());
				
		function highlightFieldContainer() {
			$(fieldContainer).addClass(config.errorClass);
			$(this.field).addClass(config.errorClass);
		}
		
		function unhighlightFieldContainer() {
			$(fieldContainer).removeClass(config.errorClass);
			$(this.field).removeClass(config.errorClass);
		}	
		
		function insertErrorSpan() {
			$(label).append(errorSpan);
		}
		
		function removeErrorSpan() {
			$(errorSpan).remove();
		}
		
		// public methods
		this.highlightFieldContainer = highlightFieldContainer;
		this.unhighlightFieldContainer = unhighlightFieldContainer;
		this.insertErrorSpan = insertErrorSpan;
		this.removeErrorSpan = removeErrorSpan;
	}
	
	/**
	 * validate the form
	 * @function
	 * @private
	 * @return {Boolean} false when errors otherwise true
	 */
	function validate() {		
		clearErrors();
		var trigger = getLastFired();
		var isContextualSubmit = (function(){
			var b = false;
			// may wanna check here to see if group even exists
			if(trigger !== null) {
				b = true;
			}			
			return b;
		}());
		
		var validator, field, key, params, rule, valid;
		for (var i = 0; i < validators.length; i++) {
			validator = validators[i];
			field = validator.field;
			key = validator.key;
			
			if((isContextualSubmit && !inGroupRuleKeys(trigger, key))) continue;

			rules = validator.rules;
			for (var j = 0; j < rules.length; j++) {
				rule = rules[j];
				params = rule.params || {};
				valid = rule.method.call(field, params);
				if (!valid) {
					validator.highlightFieldContainer();
					validator.insertErrorSpan();
					errors.push(new Error(key, rule.message));
					break;
				}
			}
		}
		if(errors.length > 0) {
			showErrorSummary();
			showErrorTitle();
		}
		resetLastFired();
		return (errors.length === 0);
	}
	
	/**
	 * get the last fired contextual submit
	 * @function
	 * @private
	 * @return {Node} lastFired The DOM reference to the last fired contextual submit.
	 */
	function getLastFired() {
		return lastFired;
	}
	
	/**
	 * resets the last fired context button
	 * @function
	 * @private
	 */
	function resetLastFired() {
		lastFired = null;
	}
	
	/**
	 * clear errors
	 * @function
	 * @private
	 */
	function clearErrors() {
		document.title = docTitle;
		
		errors = [];
		
		// remove validator highlighting and span injection
		for(var i = 0; i < validators.length; i++) {
			validators[i].unhighlightFieldContainer();
			validators[i].removeErrorSpan();
		}
		
		// empty and hide the error summary container.
		if (errorSummary !== null) {
			errorSummary.innerHTML = '';
			$(errorSummary).addClass(config.hideClass);
		}
	}
	
	/**
	 * add a new contextual group for the form
	 * @function
	 * @public
	 * @param {String} triggerID The ID of the contextual submit button
	 * @param {String[]} ruleKeys Array of keys that reference existing form fields
	 */
	function addGroup(triggerID, ruleKeys) {
		var trigger = document.getElementById(triggerID);
		if(trigger === null) return;
		groups.push(new Group(trigger, ruleKeys));
	}
	
	/**
	 * Create a new contextual group
	 * @class Represents a contextual group
	 * @constructor
	 * @private
	 * @param {Node} trigger DOM reference to contextual submit button
	 * @param {String[]} ruleKeys Array of keys that reference existing form fields
	 */
	function Group(trigger, ruleKeys) {
		this.trigger = trigger;
		this.ruleKeys = ruleKeys;
		$(trigger).bind("click", trigger_onClick);
		
		function trigger_onClick() {
			lastFired = this;
		}
	}
	
	/**
	 * check if the validator should be validated for this contextual group activation
	 * @function
	 * @private
	 * @param {Node} trigger To check trigger
	 * @param {String} key To check rule
	 * @return {Boolean} true when it should be validated false otherwise
	 */
	function inGroupRuleKeys(trigger, key) {
		var isInRuleKeys = false;
		var group, groupKey;
		for(var i = 0; i < groups.length; i++) {
			group = groups[i];
			if(group.trigger === trigger) {
				for(var j = 0; j < group.ruleKeys.length; j++) {
					groupKey = group.ruleKeys[j];
					if(groupKey === key) {
						isInRuleKeys = true;
						break;
					}
				}
				break;
			}
		}
		return isInRuleKeys;
	}
	
	function showErrorTitle() {
		if(errors.length === 1) {
			document.title = config.errorTitleSingleErrorBeforeHTML + errors.length + config.errorTitleSingleErrorAfterHTML + docTitle;
		}
		else {
			document.title = config.errorTitleMultiErrorBeforeHTML + errors.length + config.errorTitleMultiErrorAfterHTML + docTitle;
		}
	}
	
	/**
	 * show errors
	 * @function
	 * @private
	 */
	function showErrorSummary() {
		if(errorSummary === null) return;
		var length = errors.length;
		var html = 	'';
		if(length === 1) {
			html += config.errorSummaryHeaderSingleErrorBeforeHTML + errors.length + config.errorSummaryHeaderSingleErrorAfterHTML;
		}
		else {
			html += config.errorSummaryHeaderMultiErrorBeforeHTML + errors.length + config.errorSummaryHeaderMultiErrorAfterHTML;
		}
		html +=	'<ul>';
		for(var i = 0; i < length; i++) {
			html +=	'<li><a href="#'+ errors[i].id + '">'+ errors[i].message +'</a></li>';
		}
		html +=	'</ul>';
		errorSummary.innerHTML = html;
		$(errorSummary).removeClass(config.hideClass);
		window.location.hash = config.errorSummaryID;
		prepareErrors();
	}
	
	/**
	 * Create a new error object
	 * @class Represents an error
	 * @name Error
	 * @constructor
	 * @private
	 * @param {String} id The id for the field that caused the error
	 * @param {String} message The message for the error
	 */
	function Error(id, message) {
		this.id = id;
		this.message = message;
	}
	
	/**
	 * set message for a rule - useful for messages coming from the server.
	 * @public
	 * @function
	 * @param {String} key Reference the field
	 * @param {String} rule Reference the rule for the field
	 * @param {String} message The message for the rule
	 */
	function setMessage(key, rule, message) {
		var v, r;
		for(var i = 0; i < validators.length; i++) {
			v = validators[i];
			if (v.key === key) {
				for (var j = 0; j < v.rules.length; j++) {
					r = v.rules[j];
					if(r.method === Adoro.FormRules[rule]) {
						r.message = message;
						break;
					}
				}
				break;
			}
		}
	}
	
	// public methods
	this.addValidator = addValidator;
	this.removeValidator = removeValidator;
	this.addGroup = addGroup;
	this.setMessage = setMessage;
}
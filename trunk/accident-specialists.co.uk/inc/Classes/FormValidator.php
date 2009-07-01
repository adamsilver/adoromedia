<?php

class FormValidator {
	var $validators = array();
	var $errors = array();
	
	public function addValidator($name, $rules) {
		$this->validators[] = new Validator($name, $rules);
	}
	
	function validate() {
		// this will loop through all the $validators collection
		// if an error is found then it will push a new error instance
		
		foreach ($this->validators as $validator) {
			echo $validator->name;
		}
		
		echo "validate";
		
		//return $errors.length;
	}
	
	function isNameInRequest() {
		
	}
	
};

class Validator {
	var $name;
	var $rules;
	
	function __construct($name, $rules) {
		$this->name = $name;
		$this->rules = $rules;
	}
	
};

class Rule {
	var $method;
	var $message;
	
	function __construct($method, $message) {
		$this->method = $method;
		$this->$message = $message;
	}
	
};

class Error {
	var $id;
	var $message;
	
	function __construct($id, $message) {
		$this->id = $id;
		$this->message = $message;
	}
};

class Rules {

	static public function isNotEmpty() {
		var valid = false;
		return valid;
	}
	
	static public function isNumber() {
		var valid = false;
		return valid;
	}
	
	static public function isEmailAddress() {
		var valid = false;
		return valid;
	}
	
};

?>

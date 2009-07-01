<?php

class FormValidator {
	var $validators;
	var $errors;
	
	public function addValidator() {
	}
	
	function validate() {
		// this will loop through all the $validators collection
		// if an error is found then it will push a new error instance
		
		return $errors.length;
	}
	
	function isNameInRequest() {
		
	}
	
};

class Validator {
	var $name;
	var $rule;
	
	function __construct($name, $rule) {
		$name = $name;
		$rule = $rule;
	}
	
};

class Error {
	var $id;
	var $message;
	
	function __construct($id, $message) {
		$id = $id;
		$message = $message;
	}
};

class Rules {

	static public function isEmpty() {
	}
	
	static public function isNumber() {
	}
	
	static public function isEmailAddress() {
	}
	
};

// access 
//Rules::isEmpty();

?>

<?php
	// test code
	$quoteForm = new FormValidator();
	$quoteForm->addValidator();

?>
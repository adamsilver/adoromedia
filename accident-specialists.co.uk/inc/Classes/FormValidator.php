<?php

class FormValidator {
	var $validators = array();
	var $errors = array();
	
	public function addValidator($name, $rules) {
		$this->validators[] = new Validator($name, $rules);
	}
	
	public function validate() {
		foreach ($this->validators as $validator) {
			foreach($validator->rules as $rule) {
				if(!$this->isNameInRequest($validator->name)) continue;
				
				if(!call_user_func( array( "Rules", $rule->method), $_POST[$validator->name])) {
					$this->errors[] = new Error($validator->name, $rule->message);
					break;
				}
			}
		}
		return count($this->errors) == 0;
	}
	
	public function displayErrors() {
		$html = '';
			
		if(count($this->errors)==0) return;
		
		$html .='<div id="errorMessage">';
		$html .='<h2>The form has ' . count($this->errors) . ' error(s). Please check.</h2><ul>';
		foreach($this->errors as $error) {
			$html .= '<li>'.$error->message.'</li>';
		}
		$html .='</ul></div>';
		echo $html;
	}
	
	private function isNameInRequest($name) {
		return isset($_POST[$name]);
	}
	
	public function getErrors() {
		return $this->errors;
	}
	
	public function getErrorCount() {
		return count($this->errors);
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
		$this->message = $message;
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

?>



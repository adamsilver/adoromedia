<?php
	// test code
	$quoteForm = new FormValidator();
	$quoteForm->addValidator("firstName", array(new Rule("isNotEmpty", "First name cannot be empty"), new Rule("isNumber", "First name must be a number")));
	$quoteForm->addValidator("lastName", array(new Rule("isNotEmpty", "Last name cannot be empty"),new Rule("isEmailAddress", "Last name must be email")));
	$quoteForm->addValidator("basicDescription", array(new Rule("isNotEmpty", "Basic description cannot be empty")));
	//$quoteForm->validate();
	
	//$quoteForm->getErrors();
	//$quoteForm->getErrorCount();
?>

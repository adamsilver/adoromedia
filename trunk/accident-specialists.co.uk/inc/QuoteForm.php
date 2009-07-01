<?php
	// test code
	$quoteForm = new FormValidator();
	$quoteForm->addValidator("username", array(new Rule("isNotEmpty", "username cannot be empty"), new Rule("isNumber", "username must be a number")));
	$quoteForm->validate();
	
?>

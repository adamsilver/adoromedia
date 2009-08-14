<?php
	$formCallMeBack = new FormValidator();
	$formCallMeBack->addValidator("firstName", array(new Rule("isNotEmpty", "First name cannot be empty")));
	$formCallMeBack->addValidator("telephone", array(new Rule("isNotEmpty", "Telephone cannot be empty")));
	$formCallMeBack->addValidator("email", array(new Rule("isNotEmpty", "Email cannot be empty")));
?>

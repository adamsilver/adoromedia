<?php
	$formEnquiry = new FormValidator();
	$formEnquiry->addValidator("yourname", array(new Rule("isNotEmpty", "Your name cannot be empty")));
	$formEnquiry->addValidator("email", array(new Rule("isNotEmpty", "Email cannot be empty")));
	$formEnquiry->addValidator("message", array(new Rule("isNotEmpty", "Message cannot be empty")));
?>

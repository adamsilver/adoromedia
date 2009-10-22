<?php
	$siteURL = "localhost/standrews-house/";
	
	function formValue($value) {
		$returnVal = "";
		if(isset($_POST[$value])) {
			$returnVal = $_POST[$value];
		}
		return $returnVal;
	}
?>
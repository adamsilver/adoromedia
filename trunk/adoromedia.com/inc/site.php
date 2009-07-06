<?php
	$siteURL = "localhost/accident-specialists.co.uk/";
	
	function formValue($value) {
		$returnVal = "";
		if(isset($_POST[$value])) {
			$returnVal = $_POST[$value];
		}
		return $returnVal;
	}
?>
<?php

class Rules {

	static public function isNotEmpty($field) {
		$valid = true;
		if($field == "") {
			$valid = false;
		}
		return $valid;
	}
	
	static public function isNumber($field) {
		$valid = true;
		if($field != "1") {
			$valid = false;
		}
		return $valid;
	}
	
	static public function isEmailAddress($field) {
		$valid = true;
		if($field != "2") {
			$valid = false;
		}
		return $valid;
	}
	
};

?>

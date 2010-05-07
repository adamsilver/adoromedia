var Adoro = Adoro || {};

/**
 * @class For a given checkbox group, this control will ensure that there is a maximum amount of
 * checkboxes that can be checked.
 * @constructor
 */
Adoro.CheckboxDisabler = new(function(){
	function toggleCheckboxes(checkboxes) {
		var count = getCheckedCount(checkboxes);
		if (count>=maxSize) {
			disableRemainingCheckboxes(checkboxes);
		}
		else {
			enableCheckboxes(checkboxes);
		}
	}	
	
	function getCheckedCount(checkboxes) {
		var count = 0;
		for (var i=0;i<checkboxes.length; i++) {
			if (checkboxes[i].checked) {
				count++
			}
		}
		return count;
	}
	
	function disableRemainingCheckboxes(checkboxes) {
		for (var i=0;i<checkboxes.length; i++) {
			if (!checkboxes[i].checked) {
				checkboxes[i].disabled = true;
			}
		}	
	}
	
	function enableCheckboxes(checkboxes) {
		for (var i=0;i<checkboxes.length; i++) {
			checkboxes[i].disabled = false;
		}
	}	
	
	function Constructor(checkboxes, maxSize) {
		if(checkboxes.length < 1) {
			throw new Error("There must be at least 1 checkbox")
		}
		toggleCheckboxes(checkboxes);
		$(checkboxes).bind("click", function() {
			toggleCheckboxes(checkboxes);
		});
	}
	
	return Constructor;
});
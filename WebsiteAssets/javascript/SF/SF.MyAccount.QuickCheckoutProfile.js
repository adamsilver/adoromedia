$.namespace("SF.MyAccount");
SF.MyAccount.QuickCheckoutProfile = new (function(){
	$(document).ready(init);
	
	var selectPaymentAddress = null,
		checkboxSameAsPayment = null;
	
	function init() {
		selectPaymentAddress = document.getElementById("billtoAddressId");
		checkboxSameAsPayment = document.getElementById("sameaspayment");
		if(!selectPaymentAddress || !checkboxSameAsPayment) return;
		$(selectPaymentAddress).bind("change", toggleCheckbox);
		toggleCheckbox();
	};
	
	function toggleCheckbox() {
		var val = selectPaymentAddress.value;
		if(isValueNonUk(val)) {
			$(checkboxSameAsPayment).attr("disabled", "disabled");
		}
		else {
			$(checkboxSameAsPayment).attr("disabled", "");
		}
	};
	
	function getOptionNode(value) {
		var o = null;
		for(var i = 0; i < selectPaymentAddress.options.length; i++) {
			if(selectPaymentAddress.options[i].value === value) {
				o = selectPaymentAddress.options[i];
				break;
			};
		};
		return o;
	};
	
	function isValueNonUk(value) {
		var returnVal = false;
		var val = $.trim($(getOptionNode(value)).attr("class"));
		if(val === "non_uk") {
			returnVal = true;
		};
		return returnVal;
	};
	
});
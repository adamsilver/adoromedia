/**
 * B2B Module
 */
$.namespace("SF.B2B"); 

SF.B2B.AddressLookup = new (function(){
	$(function(){
		if (document.getElementById("pgB2BRegisterCompany"))
			init();
	});

	function init(){
		$("input#org_findaddress, input#usr_findaddress").bind("click",function(){
			var buttonClicked = this;
			var form = $(buttonClicked).parents("form").get(0);
			var hiddenInput = document.createElement("input");
			hiddenInput.setAttribute("type","hidden");
			hiddenInput.setAttribute("name","qasReturnView");
			hiddenInput.value = "OrganisationRegistrationView";
			form.appendChild(hiddenInput);
		});
		if (SF.AddressLookup){
			var addressLookup = new SF.AddressLookup();
			addressLookup.addAddressChangeEvents("usr_addressList","usr_address1","usr_address2","usr_city","usr_state");
			addressLookup.addAddressChangeEvents("org_addressList","org_address1","org_address2","org_city","org_state");
		}
	}
});




SF.B2B.CountryCodeHandler = new (function() {
	var select, checkboxes, countryCode = "GB";

	$(init);

	function init() {
		select = $("#b2bCompanyRegistration .country");
	 	checkboxes = $("#b2bCompanyRegistration .deliveryAddress");
        if(!select || !checkboxes) return;
 		for (i=0; i<select.length; i++) {
 			new TheHandler(select[i], checkboxes[i]);
 		}
	}
	
	function TheHandler(select, checkbox) {

        $(select).bind("change", checkState);
		checkState(select, countryCode);	
	
		function enable() {
			$(checkbox).removeAttr("disabled");
		};
	
		function disable() {
			$(checkbox).attr("disabled", "disabled");
	        $(checkbox).removeAttr("checked");
		};	
	
		function checkState() {
			var selected = $(select).val();
	
	        if(selected === countryCode) {
	        	enable();
	        } else {
	        	disable();
	        }
		};
	}
	
});





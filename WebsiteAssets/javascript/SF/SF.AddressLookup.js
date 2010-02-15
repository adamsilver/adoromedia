$.namespace("SF"); 
SF.AddressLookup = function() {
	this.addAddressChangeEvents = addAddressChangeEvents;
	function addAddressChangeEvents(addressListID,addressOneID,addressTwoID,cityID,stateID){
		$("#" + addressListID).bind("change", function(){
			var addressLines = $(this).val().split("|");
			if (addressLines.length >= 4){
				$("#" + addressOneID).val(addressLines[0]);
				$("#" + addressTwoID).val(addressLines[1]);
				$("#" + cityID).val(addressLines[2]);
				$("#" + stateID).val(addressLines[3]);
			}
			$(this).parents(".addressselector").addClass("hide");
		});
	}
}

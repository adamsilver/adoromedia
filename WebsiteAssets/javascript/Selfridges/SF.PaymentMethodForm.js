/**
 * PaymentMethodForm
 * used to manage events on the Add/Edit payment form
 */


$.namespace("SF");
SF.PaymentMethodForm = new (function(){
	
	$(function(){
		init();
	});

	this.init = init;
	function init(){
		return;
		
		// Adam S:  added return as to not add js functionality to this
		// discussions took place with Adam S, Anthony J, Iain Clarke etc
		// functionality removed and form becomes easier to use with no complexities.
		
		var cardTypeField = document.getElementById("cardtype");
		// Exit if no card type field
		if (!cardTypeField) return;

		// Event handling
		$(cardTypeField).bind("change",function(){
			setCardType(this);
		});

		// Set the Card Type when we start
		setCardType(cardTypeField);
	}

	function setCardType(cardTypeField){
		switch($(cardTypeField).val()){
			/* List of credit cards */
			case "10610": /* VISA */
			case "11651": /* Mastercard */
			case "11652": /* AMEX */
				$("form .cardfields").addClass("creditcard");
				break;
			default:
				$("form .cardfields").removeClass("creditcard");
		}
	}
});

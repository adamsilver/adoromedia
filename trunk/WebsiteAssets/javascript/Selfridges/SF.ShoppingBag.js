$.namespace("SF");
SF.ShoppingBag = new (function(){
	$(document).ready(initQuantity);
	
	function initQuantity() {
		var	cells = $("div.items table td.quantity"),
			field = null,
			add = null,
			minus = null;
		for(var i = cells.length-1; i>=0; i--) {
			
			field = $(cells[i]).find("input.text")[0] || null;
			add = $(cells[i]).find("p.increment a")[0] || null;
			minus = $(cells[i]).find("p.decrement a")[0] || null;
			new SF.QuantityChanger(field, {
				increaseButton: add, 
				decreaseButton: minus,
				onIncrement: function() {
					$.publish(Salmon.UI.CustomEvents.shoppingBagQuantityChanged);
				},
				onDecrement: function() {
					$.publish(Salmon.UI.CustomEvents.shoppingBagQuantityChanged);
				},
				range: {lowerLimit: 0, upperLimit: null}
			});

		};
	};		
});

SF.ShoppingBag.ContinueWarning = new (function(){
	$(document).ready(init);
	
	var changed = false;
	
	function init() {
		$("a.continueShopping").bind("click", check);
		
		$("td.quantity input.text").bind("change", quantityChange);
	};
	
	$.subscribe(Salmon.UI.CustomEvents.shoppingBagQuantityChanged, quantityChange);
	
	function quantityChange() {
		changed = true;
	};
	
	function check() {
		var yes = false;
		if(changed) {
			yes = confirm("Do you wish to leave the shopping bag without saving?");
		} else {
			yes = true;
		}
		return yes;		
	};
});


SF.ShoppingBag.StoreCardHandler = new (function(){
	$(function(){
		init();
	});

	function init(){
		$(".promotionalCode input[name='submitPromotion']").bind("click", function(){
			var prefix = Salmon.PageContext.STAFFCARDPREFIX.toUpperCase();
			var exp = new RegExp(prefix);
			var promoCode = $("#promoCode1").val();
			promoCode = promoCode.toUpperCase();

			if(!promoCode.match(exp)) return;
			
			var form = $(this).parents('form')[0];
			var data = $(form).serialize();
//			data += "&paymentForm=AjaxPaymentMethodFormView&successView=OrderSummaryView&errorViewName=AjaxGenericMessageOverlayView";
			data += "&paymentForm=AjaxPaymentMethodFormView&successView=OrderItemDisplay&errorViewName=AjaxGenericMessageOverlayView&submitPromotion=Y";			
			
			$.ajax({
				url: form.action,
				type: "post",
				data: data,
				dataType: "html",
				success: function(response) {
					Adoro.Dialogue.setHTML(response);
					Adoro.Dialogue.showDialogue();
					var addForm = document.getElementById("PaymentMethodAddForm");
					$(addForm).bind("submit", form_onSubmit);
				},
				error: Salmon.UI.AjaxError
			});
			return false;
		});
	}
	
	function form_onSubmit() {
		var url = this.action;
		var data = $(this).serialize();
	
		$.ajax({
			url: url,
			type: "post",
			data: data,
			dataType: "json",
			success: function(response) {
				Adoro.Dialogue.setHTML(response.pageHtml);
				Adoro.Dialogue.showDialogue();
				var addForm = document.getElementById("PaymentMethodAddForm");
				$(addForm).bind("submit", form_onSubmit);
			},
			error: Salmon.UI.AjaxError
		});
		return false;
	};
	
	
});

SF.ShoppingBag.ContinueShoppingLocation = new (function(){

	$(setTargetLocation);
	
	function setTargetLocation() {
		var id = document.getElementsByTagName("body")[0].id;
		if(id == "pgthankyou" || id == "pgShoppingBag" || id == "pgSavedItems") {
			var location = readCookie("SELFRIDGES_PREVIOUS_LOCATION");
			if (location) {
				$(".continueshopping a").attr("href", location);
				$("a.continueShopping").attr("href", location);
			}	
		}
	}

	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}

});


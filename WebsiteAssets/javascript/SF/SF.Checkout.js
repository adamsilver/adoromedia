/**
 * Checkout Module
 * used to manage other objects and page display
 * apply common page events, independant of components
 */
$.namespace("SF.Checkout"); 
 
SF.Checkout = (function(){
	// onDomReady events
	$(function() {
		SF.Checkout.init();
		SF.Checkout.display();
	});

	// public methods
	return {
		// lazy intialisation
		init : function() {
			/* Set up validation */
			if (SF.FormValidation) { 
				SF.FormValidation();
			}
			/* Gift wrap message viewer */
			SF.Checkout.GiftMessageViewer.init();
			/* Gift wrap large image overlay */
			SF.Checkout.ViewLargeGiftWrap.addEvents(); 
			/* Delivery Options */
			SF.Checkout.DeliveryOptions.init(); 
		},
		// handle display
		display : function() {
			// hides elements not required when JS is on
			$(".deliverysubmit").addClass("js");
		}
	}// end return
})(); // end SF.Checkout

/* Checkout features */

/*
 *  View Large Giftwrap Image
 *  Looks for anchors with classname "viewenlarged"
 *  Binds a click event to the anchor to display an Adoro dialogue box
 *  which contains the image that the anchor points to
 */
SF.Checkout.ViewLargeGiftWrap = {
	addEvents : function() {
		$("a.viewenlarged").bind("click", SF.Checkout.ViewLargeGiftWrap.display);
	},
	display : function() {
		var imagePath = $(this).attr('href');
		
		var html = '';
		html +=		'<div class="giftWrapImage">';
		html +=			'<div class="giftWrapImageInner">';
		html +=				'<a href="#" class="closeDialogue">Close</a>';
		html +=				'<img src="'+ imagePath +'" alt="" />';
		html +=			'</div>';
		html +=		'</div>';
		
		Adoro.Dialogue.setHTML(html);
		Adoro.Dialogue.showDialogue({y: $("#content").position().top, showOverlay: false});
		return false;
	}
}; // end SF.Checkout.ViewLargeGiftWrap	


/*
 *  Gift Message Viewer
 *  Hides the gift messages in the summary page, displaying a "View"
 *  link in it's place, and then handles the displaying of the
 *  message when the link is clicked.
 */
SF.Checkout.GiftMessageViewer = {
	init : function() {
		SF.Checkout.GiftMessageViewer.display();
		SF.Checkout.GiftMessageViewer.addEvents();
	},
	addEvents : function() {
		// Events for viewing and hiding gift message
		$("table.summary .giftmessage a.viewmessage").bind("click",function(){
			SF.Checkout.GiftMessageViewer.show($(this));
			return false;
		});
		$("table.summary .giftmessage a.hidemessage").bind("click",function(){
			SF.Checkout.GiftMessageViewer.hide($(this));
			return false;
		});
	},
	display: function() {
		// Hides the gift messages and adds a link before each gift message in
		// the summary table, used to show and hide the message
		$("table.summary .giftmessage .message").before('<span class="yes"><a href="#" class="viewmessage" title="View gift message">View</a><a href="#" class="hidemessage" style="display:none;" title="Hide gift message">Hide</a></span>');
		// Adds a wrapper for smooth revealing of gift message
		$("table.summary .giftmessage .message").wrap('<div class="slidewrapper" style="height:0;"></div>');
	},
	show: function(jqElem) {
		var messageParent = jqElem.parents(".giftmessage");
		var slideHeight = messageParent.find(".message").height() + "px";
		messageParent.find("a.viewmessage, a.hidemessage").toggle();
		messageParent.find(".slidewrapper").animate({height: slideHeight},500);
	},
	hide: function(jqElem) {
		var messageParent = jqElem.parents(".giftmessage");
		messageParent.find("a.viewmessage, a.hidemessage").toggle();
		messageParent.find(".slidewrapper").animate({height: "0"},500);
	}
}; // end SF.Checkout.GiftMessageViewer

/*
 *  Delivery Options
 *  Handles the changing and display of delivery options.
 */
SF.Checkout.DeliveryOptions = {
	init : function() {		
		// Choose either Home Delivery or Collect in Store
		$("input[name^='deliverto']:checked").each(function(){
			SF.Checkout.DeliveryOptions.show($(this),"deliverOrCollect");
		});
		SF.Checkout.DeliveryOptions.addEvents();
	},
	addEvents : function() {
		$("input[name^='deliverto']").bind("focus click",function(){
			SF.Checkout.DeliveryOptions.show($(this),"deliverOrCollect");
		});
		$("input[name^='deliverytype']").bind("focus click",function(){
			SF.Checkout.DeliveryOptions.show($(this),"deliveryMethod");
		});
	},
	show: function(jqElem,optionType) {
		switch (optionType) {
			case "deliverOrCollect":
				switch (jqElem.val()) {
					case "store":
						jqElem.parents(".formstyle").siblings(".storeDelivery").removeClass("hide");
						jqElem.parents(".deliveryOptionsDetails").find(".estimatedCollection").removeClass("hide");						
						jqElem.parents(".formstyle").siblings(".addressDelivery").addClass("hide");
						jqElem.parents(".deliveryOptionsDetails").find(".deliveryTypeOptions, .estimatedDelivery, .deliveryTimeOption, .deliveryDateOption").addClass("hide");
						break;
					case "address":
						jqElem.parents(".formstyle").siblings(".addressDelivery").removeClass("hide");
						jqElem.parents(".deliveryOptionsDetails").find(".deliveryTypeOptions, .estimatedDelivery").removeClass("hide");
						jqElem.parents(".formstyle").siblings(".storeDelivery").addClass("hide");
						jqElem.parents(".deliveryOptionsDetails").find(".estimatedCollection, .deliveryTimeOption, .deliveryDateOption").addClass("hide");
						SF.Checkout.DeliveryOptions.show(jqElem.parents(".deliveryOptionsDetails").find("input[name^='deliverytype']:checked"),"deliveryMethod");
						break;
				}
			break;
			
			case "deliveryMethod":
				switch (jqElem.val()) {
					case "12301": //12301 = Standard 
						// Get and Show estimated delivery
						jqElem.parents(".formstyle").siblings(".estimatedDelivery").removeClass("hide");
						jqElem.parents(".formstyle").siblings(".deliveryTimeOption, .deliveryDateOption").addClass("hide");
						break;
					case "12302": //12302 = Same day
						jqElem.parents(".formstyle").siblings(".deliveryTimeOption").removeClass("hide");
						jqElem.parents(".formstyle").siblings(".estimatedDelivery, .deliveryDateOption").addClass("hide");
						break;
					case "12303": //12303 = Nominated day
						jqElem.parents(".formstyle").siblings(".deliveryDateOption").removeClass("hide");
						jqElem.parents(".formstyle").siblings(".deliveryTimeOption, .estimatedDelivery").addClass("hide");
						break;
				}
				break;	
		}
	}
}; // end SF.Checkout.DeliveryOptions

/*
 *  PaymentGiftCardHandler
 *  Handles the entering of a Gift Card on the payment page.
 */
SF.Checkout.PaymentGiftCardHandler = new (function(){
	var giftCardLoader = null;

	$(init);

	function init() {
		if(Salmon.PageContext.JSPNAME != "pgpayment") return;
		var giftCardNode = document.getElementById("GiftCardDisplayDiv");
		giftCardLoader = new Salmon.UI.LoadingHtml(giftCardNode);
		addEvents();
	}
	function addEvents() {
		addButtonEvents();

		$(".giftcards input[name='usecard'], .giftcards input[name='apply']").bind("click",function(){
			giftCardLoader.show();
			submitGiftCard($(this));
			return false;
		});

		$.subscribe("giftcards_usecard_success giftcards_remove_success giftcards_apply_success giftcards_load_success", function(e) {
			var giftCardsInUse = $(".giftcards .inuse");
			$("#giftcardnumber, #giftcardpin").val("");
			giftCardLoader.hide();
			giftCardsInUse.html(e.data[0].giftCardHtml);
			if(giftCardsInUse.find(".item").length){
				giftCardsInUse.removeClass("hide");
			} else {
				giftCardsInUse.addClass("hide");
			}
			addButtonEvents();
			
			SF.Checkout.GiftCardQuantity.init();
			
		});

		$.subscribe("giftcards_usecard_success giftcards_remove_success giftcards_apply_success", function(e) {
			$("#primary .errormessage").replaceWith(e.data[0].messageHtml);
		});
	}
	function addButtonEvents(){
		$(".giftcards input[name^='remove']").bind("click",function(){
			giftCardLoader.show();
			submitGiftCard($(this));
			return false;
		});
	}
	// Used for refreshing the Gift Card section
	this.refreshGiftCardSection = refreshGiftCardSection;
	function refreshGiftCardSection(){
		var url = "AjaxGiftCardDisplayView";
		var orderId = $("input[name='orderId']").val();
		if (orderId){
			url += "?orderId=" + orderId;
		}
		var giftCardLoader = new Salmon.Comms.xhrLoad({
			url : url,
			cache : false,
			contentType : "appliction/ajax",
			dataType : "json",
			type: "GET",
			successEvent : "giftcards_load_success"
		});
	}
	// Used for submitting Gift Card fields
	function submitGiftCard(formButton){
		/* Dave's Code converted to jQuery.
		 * Not sure why we need it */
		var origURL = $("input[name='URL']").val();
		$("input[name='URL']").val("AjaxGiftCardDisplayView");
		
		var origFwd = $("input[name='fwd']").val();
		$("input[name='fwd']").val("1");

		var origErrorView = $("input[name='errorViewName']").val();
        $("input[name='errorViewName']").val("AjaxGiftCardDisplayView");

		var params = $(formButton.get(0).form).serialize();
		$("input[name='URL']").val(origURL);
		$("input[name='fwd']").val(origFwd);
		$("input[name='errorViewName']").val(origErrorView);
		/* End of Dave's code */

		// Gets the button name before the hyphen
		var exp = new RegExp("[^\-]*");
		var buttonAction = formButton.attr("name").match(exp);

		var url = "GiftCardPayment?" + formButton.attr("name") + "=1&" + params;
		var giftCardLoader = new Salmon.Comms.xhrLoad({
			url : url,
			cache : false,
			contentType : "appliction/ajax",
			dataType : "json",
			type: "POST",
			successEvent : "giftcards_" + buttonAction[0] + "_success"
		});
	}
}); // end SF.Checkout.PaymentGiftCardHandler

/*
 *  PaymentVoucherHandler
 *  Handles the entering of E Vouchers on the payment page.
 */
SF.Checkout.PaymentVoucherHandler = new (function(){
	var voucherLoader = null;

	$(init);

	function init() {
		if(Salmon.PageContext.JSPNAME != "pgpayment") return;
		var voucherNode = $(".vouchers").get(0);
		voucherLoader = new Salmon.UI.LoadingHtml(voucherNode);
		addEvents();
	}

	function addEvents() {
	
		$(".vouchers input[name='submitvoucher']").bind("click",function(){
			voucherLoader.show();
			submitVoucher($(this).parents("form").get(0),$(this));
			return false;
		});	
	
		addButtonEvents();

		$.subscribe("vouchers_submitvoucher_success vouchers_removeVoucher_success", function(e) {
			var vouchersInUse = $(".vouchers .inuse");
			$("#vouchercode").val("");
			$("#errorMessage").replaceWith(e.data[0].messageHtml);
			voucherLoader.hide();
			vouchersInUse.html(e.data[0].voucherHtml);
			if(vouchersInUse.find(".item").length){
				vouchersInUse.removeClass("hide");
			} else {
				vouchersInUse.addClass("hide");
			}
			addButtonEvents();
			SF.Checkout.PaymentGiftCardHandler.refreshGiftCardSection();
		});
	}
	function addButtonEvents(){


		$(".vouchers input[name^='removeVoucher']").bind("click",function(){
			voucherLoader.show();
			submitVoucher($(this).parents("form").get(0),$(this));
			return false;
		});
	}
	function submitVoucher(form,formButton){
		var data = $(form).serialize();
		data += "&" + formButton.attr("name") + "=1";
		
		// Gets the button name before the hyphen
		var exp = new RegExp("[^\-]*");
		var buttonAction = formButton.attr("name").match(exp);
		var url = $(form).attr("action");
		var voucherLoader = new Salmon.Comms.xhrLoad({
			url : url,
			cache : false,
			contentType: "application/x-www-form-urlencoded",
			data: data,
			dataType : "json",
			type: "POST",
			successEvent : "vouchers_" + buttonAction[0] + "_success"
		});
	}
}); // end SF.Checkout.PaymentVoucherHandler

SF.Checkout.PaymentTotalHandler = new (function() {
	$(init);
	
	function init(){
		var summaryDiv = $("div.orderSummary div.details01")[0] || null;
		if (!summaryDiv) return;
		$.subscribe("giftcards_remove_success giftcards_apply_success vouchers_submitvoucher_success vouchers_removeVoucher_success", function(e) {
			loadPaymentTotal();
		});
	}
	function loadPaymentTotal(){
		
		var currentUrl = window.location.href.split("?",2);
		if (currentUrl.length > 1) {
			var url = "OrderSummaryByDeliveryGroupView?";
			url += currentUrl[1];

			var totalLoader = $.ajax({
				url : url,
				cache : false,
				contentType : "appliction/ajax",
				dataType : "html",
				timeout: (4000),  // use an appropriate value
				success : function(data){
					$("div.orderSummary div.details01").html(data);
				}
			});
		}
	}
});


SF.Checkout.GiftCardQuantity = new (function(){
	$(document).ready(init);
	this.init = init;
	function init() {
		var	cells = $("#GiftCardDisplayDiv div.giftCardQuantity"),
			field = null,
			add = null,
			minus = null,
			upperLimit = null;
		for(var i = cells.length-1; i>=0; i--) {
			upperLimit = parseFloat($(cells[i]).find("input.hiddenUpperLimit").val()) || null;
			field = $(cells[i]).find("input.text")[0] || null;
			add = $(cells[i]).find("p.increment a")[0] || null;
			minus = $(cells[i]).find("p.decrement a")[0] || null;
			new SF.QuantityChanger(field, {
				increaseButton: add, 
				decreaseButton: minus,
				isFloat: true,
				range: {upperLimit: upperLimit, lowerLimit: 0}
			});
		};
	};
	
	
});

SF.Checkout.GuestDeliveryAddressLookup = new (function(){
	$(function(){
		if (document.getElementById("pgdeliverynoaddress"))
			init();
	});

	function init(){
		$("input#findaddress").bind("click",function(){
			var buttonClicked = this;
			var form = $(buttonClicked).parents("form").get(0);
			var hiddenInput = document.createElement("input");
			hiddenInput.setAttribute("type","hidden");
			hiddenInput.setAttribute("name","qasReturnView");
			hiddenInput.value = "DeliveryOptionsGuestAddressView";
			form.appendChild(hiddenInput);
		});
		if (SF.AddressLookup){
			var addressLookup = new SF.AddressLookup();
			addressLookup.addAddressChangeEvents("addressList","address1","address2","city","state");
		}
	}
});


SF.Checkout.StoreCardHandler = new (function(){
	$(function(){
		init();
	});

	function init(){
		$(".promocode .multipleInput input[type='submit']").bind("click", function(){
			var prefix = Salmon.PageContext.STAFFCARDPREFIX.toUpperCase();
			var exp = new RegExp(prefix);
			var promoCode = $("#promoCode1").val();
			promoCode = promoCode.toUpperCase();
			
			if(!promoCode.match(exp)) return;
			
			var form = $(this).parents('form')[0];
			var data = $(form).serialize();
			data += "&paymentForm=AjaxPaymentMethodFormView&successView=OrderSummaryView&errorViewName=AjaxGenericMessageOverlayView&submitPromotion=Y";
			
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


SF.Checkout.ContinueShoppingLocation = new (function(){

	$(setTargetLocation);
	
	function setTargetLocation() {
		
		if(document.getElementById("pgthankyou")) {
			var location = readCookie("SELFRIDGES_PREVIOUS_LOCATION");
			if (location) {
				$(".continueshopping a").attr("href", location);
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

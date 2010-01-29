/**
 * My Account Module
 * used to manage other objects and page display
 * apply common page events, independant of components
 */
SF.MyAccount = (function(){
	// onDomReady events
	$(function() {
		SF.MyAccount.init();
		SF.MyAccount.display();
		addEvents();
	});

	// jQuery UI events
	var addEvents = function() {
		$(".signup a.terms").bind("click",function(){
			window.open($(this).attr("href"),'popup','width=600,height=400,menubar=yes,scrollbars=yes')
			return false;
		});
		SF.MyAccount.MyDetails.init();


	};
	
	// public methods
	return {
		// lazy intialisation
		init : function() {
			/* Set up validation */
			if (SF.FormValidation) { 
				SF.FormValidation();
			}

			/* Set up Tree View */
			if (Salmon.TreeView && Salmon.PageContext.JSPNAME == "pgpersonalisation") { 
				//Salmon.TreeView(".tree",{slideEffect:true});
			}
		},
		// handle display
		display : function() {
		}
	}// end return
})();


SF.MyAccount.MyDetails = {
	init : function() {
		this.display();
		this.addEvents();
	},
	addEvents : function() {
		$(".gender .radio input").bind("click focus",function(){
			/* If statement needed for when the user clicks the button down but moves the mouse
			 * away from the radio button, which gives it focus, but doesn't visibly select it */
			if ($(this).attr("checked")){
				SF.MyAccount.MyDetails.showGenderSpecificFields($(this));
			}
		});
	},
	showGenderSpecificFields : function(jqElem) {
		var fieldset = jqElem.parents("fieldset");
		if (jqElem.attr("id") == "genderfemale") {
			fieldset.removeClass("malesizes");
			fieldset.addClass("femalesizes");
		} else {
			fieldset.removeClass("femalesizes");
			fieldset.addClass("malesizes");
		}
	},
	display: function(elementIndex) {
		// Show fields according to what gender is currently selected
		SF.MyAccount.MyDetails.showGenderSpecificFields($(".gender .radio input:checked"));
	}	
};

SF.MyAccount.SizeSelector = new(function(){
	$(function(){
		if (SF.SizeSelector) SF.SizeSelector.init();
	});
});


SF.MyAccount.AvatarSelector = new (function(){
	$(function(){
		init();
	});
	
	function init() {
		// checks whether to run or not
		var avatarContainer = document.getElementById("imagelist");
		if (!avatarContainer) return;

		// Create carousel
		$(avatarContainer).find(".clip").addClass("carousel");
		new Adoro.Carousel(avatarContainer, {
			isCircular: false,
			indicators: false,
			scrollCount: 1,
			stopButton: false,
			startButton: false,
			forwardButton: true,
			backButton: true,
			automaticDirectionBackwards: false,
			animateSpeed: 300,
			automaticDelay: 500,
			onComplete: function(){
				$(avatarContainer).find(".clip ul li:first-child input").attr("checked","checked");
			}
		});
	}
});

/*
 *  Gift Message Viewer
 *  Hides the gift messages in the summary page, displaying a "View"
 *  link in it's place, and then handles the displaying of the
 *  message when the link is clicked.
 */
SF.MyAccount.GiftMessageViewer = new (function(){
	$(function(){
		init();
	});

	function init() {
		// checks whether to run or not
		if (!$("table.summary")) return;

		display();
		addEvents();
	}
	function addEvents() {
		// Events for viewing and hiding gift message
		$("table.summary .giftmessage a.viewmessage").bind("click",function(){
			show($(this));
			return false;
		});
		$("table.summary .giftmessage a.hidemessage").bind("click",function(){
			hide($(this));
			return false;
		});
	}
	function display() {
		// Hides the gift messages and adds a link before each gift message in
		// the summary table, used to show and hide the message
		$("table.summary .giftmessage .message").before('<span class="yes"><a href="#" class="viewmessage" title="View gift message">View</a><a href="#" class="hidemessage" style="display:none;" title="Hide gift message">Hide</a></span>');
		// Adds a wrapper for smooth revealing of gift message
		$("table.summary .giftmessage .message").wrap('<div class="slidewrapper" style="height:0;"></div>');
	}
	function show(jqElem) {
		var messageParent = jqElem.parents(".giftmessage");
		var slideHeight = messageParent.find(".message").height() + "px";
		messageParent.find("a.viewmessage, a.hidemessage").toggle();
		messageParent.find(".slidewrapper").animate({height: slideHeight},500);
	}
	function hide(jqElem) {
		var messageParent = jqElem.parents(".giftmessage");
		messageParent.find("a.viewmessage, a.hidemessage").toggle();
		messageParent.find(".slidewrapper").animate({height: "0"},500);
	}
});

SF.MyAccount.AddStoreReceiptOverlayHandler = new (function(){
	$(document).ready(init);

	function init(){
		return;
		if (!SF.ShowFormOverlay) return;

		$("#pgOrderHistory a.addStoreReceipt").bind("click",function(){
			var formUrl = $(this).attr("href");
			
		/*formUrl = ajaxFormPage + formUrl.substr(formUrl.indexOf("?")) + "&returnView=AjaxAddressFormResponse&errorViewName=AjaxAddressFormErrorResponse";

			SF.ShowFormOverlay({
				url:formUrl,
				loadMethod:"GET",
				submitMethod:"POST",
				submitReturnDataType:"html"
			});*/
			
			
			
			return false;
		});
	}
});

SF.MyAccount.EditGiftwrapOverlayHandler = new (function(){
	$(function(){
		init();
	});

	function init(){
		if (!SF.ShowFormOverlay) return;

		$("#pgorderdetails a.editgiftwrap").bind("click",function(){
			var formUrl = $(this).attr("href");

			SF.ShowFormOverlay({
				url:formUrl,
				loadMethod:"GET",
				submitMethod:"POST",
				submitReturnDataType:"json",
				onFormLoad:function(){
					if (SF.GiftWrapViewer)
						SF.GiftWrapViewer.addEvents();
				}
			});
			return false;
		});
	}
});

SF.MyAccount.ConfirmationHandler = new (function(){
	$(function(){
		init();
	});

	function init(){
		// Order Details - Cancel order confirmation overlay
		// Address Book - Delete address confirmation overlay
		// Payment Methods - Delete payment method confirmation overlay
		$("#pgorderdetails a.track, #pgorderdetails .orderactions a.cancelOrder, #pgorderdetails .orderactions a.adjustOrder, #pgorderdetails a.removeItem, #pgaddressbook .addressactions a.delete, #pgpaymentinfo .paymentactions a.delete, #pgMyConnections a.delete, #pgMyConnectionsDetail a.delete").bind("click",function(){
			var formUrl = $(this).attr("href");

			SF.ShowFormOverlay({
				url:formUrl,
				loadMethod:"GET",
				submitMethod:"POST",
				submitReturnDataType:"json"
			});
			return false;
		});
	}
});

SF.MyAccount.addEventOverlayHandler = new (function() {
	$(function() {
		init();
	});
	
	function init() {
		$("#pgMyCalendar a.date, #pgMyCalendar ul.entries a").bind("click", function(){
			var url = $(this).attr("rel");
			
			if (url == null) return;

			var actionContainer = $(this).parents("div").get(0);
			var overlayLoader = new Salmon.UI.LoadingHtml(actionContainer);
			overlayLoader.show();

			SF.ShowFormOverlay({
				url: url,
				submitReturnDataType: "html",
				loadMethod: "GET",
				submitMethod:"POST",
				onFormLoad: function(){
					overlayLoader.hide();
					var continueButton = $("#dialogue .actions .closeDialogue");
					$(continueButton).unbind();
					$(continueButton).bind("click", function() {
						pageRefresh();
						return false;
					});
				}
			});
			return false;
		});
	}
	
	function pageRefresh() {
		var href = location.href;
		window.location = href;
	}
});

SF.MyAccount.EditDeliveryAddressHandler = new (function(){

	$(init);

	function init(){
		if(document.getElementById("pgEditOrderDeliveryAddress")) {
			bindDeliveryOptions();
		} else {
			$("#pgorderdetails a.editAddress").bind("click",function(){
			
				var formUrl = $(this).attr("href");
				
				var actionContainer = $(this).parents("li").get(0);
				var overlayLoader = new Salmon.UI.LoadingHtml(actionContainer);
				overlayLoader.show();
			
				SF.ShowFormOverlay({
					url:formUrl,
					loadMethod:"GET",
					submitMethod:"POST",
					submitReturnDataType: "json",
					onFormLoad: function() {
						bindDeliveryOptions();
						overlayLoader.hide();
						SF.AddressFormOverlayHandler.initialiseOverlay();
					}
				});
				return false;
			});
		}
	}
	
	function bindDeliveryOptions() {
		var inputs = $(".editDeliveryAddress .radios input").bind("click", bindDeliveryOptions);
		var deliveryRadio = $(inputs).get(0);
		var collectionRadio = $(inputs).get(1);
		
		if(!deliveryRadio || !collectionRadio) return;
				
		if(deliveryRadio.checked) {
			$(".storeDelivery").addClass("hide");
			$(".addressDelivery").removeClass("hide");
		} else if(collectionRadio.checked) {
			$(".storeDelivery").removeClass("hide");
			$(".addressDelivery").addClass("hide");
		}
	}
});

SF.MyAccount.InputHover = new (function () {
	
	$(bindEvents);
	
	function bindEvents() {
		var inputs = $("input[type=submit]");
		$(inputs).bind("mouseover", function() {
			$(this).addClass("hover");
		});
		$(inputs).bind("mouseout", function() {
			$(this).removeClass("hover");
		});
	}
});


SF.MyAccount.NickNameDisplayHandler = new (function() {
	$(init);
	
	var infoIcon, nickNameInfo, visible=false;
	
	function init() {
		infoIcon = document.getElementById("infoIcon") || null;
		nickNameInfo = document.getElementById("nickNameInfo") || null;
		
		if(!infoIcon || !nickNameInfo) {
			return;
		} else {
			bindEvents();
		}
	};
	
	function bindEvents() {
		$(infoIcon).bind("mouseenter", showNickName);
		$(infoIcon).bind("mouseleave", hideNickName);
	}
	
	function hideNickName() {
		if(visible) {
			$(nickNameInfo).addClass("hide");
			visible = false; 
		}
	}
	
	function showNickName() {
		if(!visible) {
			$(nickNameInfo).removeClass("hide"); 
			visible = true;
		}
	}
});
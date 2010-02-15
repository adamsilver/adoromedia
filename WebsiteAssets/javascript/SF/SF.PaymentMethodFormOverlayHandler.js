SF.PaymentMethodFormOverlayHandler = new (function(){
	var ajaxFormPage = "AjaxPaymentMethodFormView";

	$(function(){
		init();
	});

	function init(){
		if (!SF.ShowFormOverlay) return;

		/* Add/Edit address overlay handling for scenarios where the stored
		 * payment to be edited is chosen from a drop-down. HTML for this
		 * should look like:
		 * <div class="paymentselect">
		 *   <whatever field markup you need>
		 *     <select attributes="" ... >
		 *       <option attributes="" ... >
		 *       <option attributes="" ... >
		 *       ...
		 *     </select>
		 *   </whatever field markup you need>
		 *   <ul class="paymentactions">
		 *     <li><a href="#" class="add">Add payment</a></li>
		 *     <li><input class="edit" name="whatever" value="Edit payment" /></li>
		 *   </ul>
		 * </div>
		 */
		$(".paymentselect").find(".paymentactions a.add, .paymentactions .edit").bind("click",function(){
			var linkClicked = this;
			var paymentField = $(linkClicked).parents(".paymentselect").get(0);

			var updateType = $(linkClicked).hasClass("edit") ? "edit" : ($(linkClicked).hasClass("add") ? "add" : "");
			if (!updateType) return;

			var formUrl = $(linkClicked).attr("href") || "";
			var queryString = "";

			switch (linkClicked.tagName){
				case "A":
					queryString = formUrl.substr(formUrl.indexOf("?"));
					break;
				case "INPUT":
					queryString = "?" + $("input[name='storeId'],input[name='catalogId'],input[name='langId']").serialize();
					break;
			}

			var exp = new RegExp("&returnView=[^&]*");
			queryString = queryString.replace(exp,"");
			queryString += "&errorViewName=AjaxPaymentMethodFormErrorResponse&ajaxPaymentMethodFormListResponse=y";

			if (updateType == "edit"){
				// Add the ID of the address we want to edit onto the querystring
				var paymentToEdit = $(linkClicked).parents(".paymentselect").find("select").val();
				queryString += "&securedDataStoreId=" + paymentToEdit;
			}

			var paymentOverlayLoader = new Salmon.UI.LoadingHtml(paymentField);
			paymentOverlayLoader.show();

			formUrl = ajaxFormPage + queryString;
			SF.ShowFormOverlay({
				closeWhenDone: ( (document.body.id === "pgquickcheckout") ? false : true),
				url:formUrl,
				loadMethod:"GET",
				submitMethod:"POST",
				submitReturnDataType:"json",
				onFormLoad:function(){
					paymentOverlayLoader.hide();
					if (SF.PaymentMethodForm)
						SF.PaymentMethodForm.init();
						
					$("body#pgquickcheckout #paymentForm a.successClose").bind("click", function(e){
						window.location = location.href;
						return false;
					});	
						
				},
				callback:function(){
					var data = this;
					
				
					
					// Re-populate all stored payment dropdowns
					$(".paymentselect select").each(function(){
						var selectVal = $(this).val();
						// Since a new address ID is given when an address is edited,
						// we check to see if any of the other dropdowns had the edited
						// address selected so we can give them the new id.
						if (updateType == "edit" && selectVal == paymentToEdit)
							selectVal = data.selectedPayment;
						$(this).empty();
						$(this).append(data.success);
						$(this).val(selectVal);
					});

					// Set the value of the dropdown related to the address action
					if (updateType == "add"){
						var selectToUpdate = $(linkClicked).parents(".paymentselect").find("select");
						selectToUpdate.val(data.selectedPayment);
					}
				}
			});
			return false;
		});

		// Address Book - Add/Edit address overlay
		$("#pgpaymentinfo .actions a.add, #pgpaymentinfo .paymentactions a.edit").bind("click",function(){
			var formUrl = $(this).attr("href");
			formUrl = ajaxFormPage + formUrl.substr(formUrl.indexOf("?")) + "&errorViewName=AjaxPaymentMethodFormErrorResponse";

			var paymentActionContainer = $(this).parents(".paymentactions, .actions li").get(0);
			var paymentOverlayLoader = new Salmon.UI.LoadingHtml(paymentActionContainer);
			paymentOverlayLoader.show();

			SF.ShowFormOverlay({
				url:formUrl,
				loadMethod:"GET",
				submitMethod:"POST",
				submitReturnDataType:"json",
				onFormLoad:function(){
					paymentOverlayLoader.hide();
					if (SF.PaymentMethodForm)
						SF.PaymentMethodForm.init();
				}
			});
			return false;
		});
	}
});

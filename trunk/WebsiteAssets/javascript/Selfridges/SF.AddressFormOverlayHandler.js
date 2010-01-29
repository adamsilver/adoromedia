$.namespace("SF");
SF.AddressFormOverlayHandler = new (function(){
	var ajaxFormPage = "AjaxAddressForm";

	$(init);
	
	this.initialiseOverlay = init;
	
	function init(){
		if (!SF.ShowFormOverlay) return;

		/* Add/Edit address overlay handling for scenarios where the
		 * address to be edited is chosen from a drop-down. HTML for this
		 * should look like:
		 * <div class="addressfield">
		 *   <whatever field markup you need>
		 *     <select attributes="" ... >
		 *       <option attributes="" ... >
		 *       <option attributes="" ... >
		 *       ...
		 *     </select>
		 *   </whatever field markup you need>
		 *   <ul class="addressactions">
		 *     <li><a href="#" class="add">Add address</a></li>
		 *     <li><input class="edit" name="whatever" value="Edit address" /></li>
		 *   </ul>
		 * </div>
		 */
		$(".addressfield").find(".addressactions a.add, .addressactions .edit").bind("click",function(){
			var linkClicked = this;
			var addressField = $(linkClicked).parents(".addressfield").get(0);

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
			queryString += "&returnView=AjaxAddressListResponse&errorViewName=AjaxAddressFormErrorResponse&qasReturnView=AjaxAddressFormQASResponse";

			if (updateType == "edit"){
				// Add the ID of the address we want to edit onto the querystring
				var addressToEdit = $(addressField).find("select").val();
				queryString += "&addressId=" + addressToEdit;
			}

			formUrl = ajaxFormPage + queryString;

			var addressOverlayLoader = new Salmon.UI.LoadingHtml(addressField);
			addressOverlayLoader.show();

			SF.ShowFormOverlay({
				closeWhenDone: ( (document.body.id === "pgquickcheckout" || document.body.id === "pgpayment") ? false : true),
				url:formUrl,
				loadMethod:"GET",
				submitMethod:"POST",
				submitReturnDataType:"json",
				callback:function(){
					var data = this;

					// Re-populate all delivery address dropdowns
					$(".addressfield select").each(function(){
						var selectVal = $(this).val();
						// Since a new address ID is given when an address is edited,
						// we check to see if any of the other dropdowns had the edited
						// address selected so we can give them the new id.
						if (updateType == "edit" && selectVal == addressToEdit)
							selectVal = data.selectedAddress;
						$(this).empty();
						$(this).append(data.success);
						$(this).val(selectVal);
					});

					// Set the value of the dropdown related to the address action
					if (updateType == "add"){
						var selectToUpdate = $(addressField).find("select");
						selectToUpdate.val(data.selectedAddress);
					}
				},
				onFormLoad:function(){
					addressOverlayLoader.hide();
					SF.DefaultDeliveryDisabler.init();
					
					var overlayContainer = this;
					var addressList = $(overlayContainer).find("select#addressList").get(0);
					if (addressList) {
						addressList.focus();
						addAddressListEvents(addressList);
					};
				}
			});
			return false;
		});

		// Address Book - Add/Edit address overlay
		$("#pgaddressbook .actions a.add, #pgaddressbook .addressactions a.edit").bind("click",function(){
			var formUrl = $(this).attr("href");
			formUrl = ajaxFormPage + formUrl.substr(formUrl.indexOf("?")) + "&returnView=AjaxAddressFormResponse&errorViewName=AjaxAddressFormErrorResponse&qasReturnView=AjaxAddressFormQASResponse";

			var addressActionContainer = $(this).parents(".addressactions, .actions li").get(0);
			var addressOverlayLoader = new Salmon.UI.LoadingHtml(addressActionContainer);
			addressOverlayLoader.show();

			SF.ShowFormOverlay({
				url:formUrl,
				loadMethod:"GET",
				submitMethod:"POST",
				submitReturnDataType:"json",
				onFormLoad:function(){
					addressOverlayLoader.hide();

					SF.DefaultDeliveryDisabler.init();
					var overlayContainer = this;
					var addressList = $(overlayContainer).find("select#addressList").get(0);
					if (addressList) {
						addressList.focus();
						addAddressListEvents(addressList);
					};
				}
			});
			return false;
		});
	}

	function addAddressListEvents(addressList) {
		if (SF.AddressLookup){
			var addressLookup = new SF.AddressLookup();
			addressLookup.addAddressChangeEvents(addressList.id,"address1","address2","city","state");
		}
	}
});

SF.DefaultDeliveryDisabler = new (function() {
	this.init = init;
	
	var country = null;
	var delivery = null;
	
	function init() {
		country = document.getElementById("country");
		delivery = document.getElementById("addressField2");
		if(!country || !delivery) return;
		$(country).bind("change", countryChange);
		countryChange();
	};
	
	function countryChange() {
		if(getCountryValue() !== "GB") {
			disableDelivery();
		}
		else {
			enableDelivery();
		}
	};
	
	function disableDelivery() {
		delivery.disabled = true;
	};
	
	function enableDelivery() {
		delivery.disabled = false;
	};
	
	
	function getCountryValue() {
		return country.value;
	};
	
});


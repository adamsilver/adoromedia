$.namespace("SF");

SF.AuctionForm = new (function(){
	$(document).ready(init);
	
	var form, overlayLoader = null;
		
	function init() {
		 form = document.forms["AuctionBidForm"];
		 $(form).bind("submit", submitBid);
	};
	
	function submitBid() {
		var action = "/webapp/wcs/stores/servlet/BidSubmit";
    	var viewParams = "&URL=AjaxBidSubmitConfirmView&errorViewName=GenericApplicationError";
    	var formData = $(form).serialize();
    	var buttonData = "&submitBidx=1";
    	var data = formData + viewParams + buttonData;
    	
    	var actionContainer = $(this).find(".field").get(0);
		overlayLoader = new Salmon.UI.LoadingHtml(actionContainer);
		overlayLoader.show();

		var ajax = $.ajax({
			url: action,
			contentType : "application/x-www-form-urlencoded",
			cache: false,
			dataType: "html",
			type: "post",
			success: onSuccess,
			data: data,
			error: Salmon.UI.AjaxError
		});
		return false;
	};
	
	function onSuccess(response) {
		Adoro.Dialogue.hideDialogue();
		Adoro.Dialogue.setHTML(response);
		Adoro.Dialogue.showDialogue();
		SF.ImageRollovers.add("dialogue");
		overlayLoader.hide();
	};
});
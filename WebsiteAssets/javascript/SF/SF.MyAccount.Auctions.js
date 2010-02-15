$.namespace("SF.MyAccount.Auctions");

SF.MyAccount.Auctions.QuickBidHover = new (function() {
	
	$(init);
	
	function init() {
		
		var quickBidTag, auctions = $(".quickbid a");
		
		for(var i=0; i<auctions.length; i++) {
			quickBidTag = document.createElement("span");
			auctions[i].appendChild(quickBidTag);
			$(quickBidTag).hide();

			$(auctions[i]).bind("mouseenter", function() {
				$(this).find("span").show();
			});
			$(auctions[i]).bind("mouseleave", function() {
				$(this).find("span").hide();
			});
		}
	}
});


SF.MyAccount.Auctions.SoldHover = new (function() {

	$(init);
	
	function init() {
	
		var soldAuctions = $("div.closed");
		
		for(var i=0; i<soldAuctions.length; i++) {
			$(soldAuctions[i]).find(".sold").hide();
			
			$(soldAuctions[i]).bind("mouseenter", function() {
				$(this).find(".sold").show();
			});
			$(soldAuctions[i]).bind("mouseleave", function() {
				$(this).find(".sold").hide();
			});
			
		}
		
	}

});	

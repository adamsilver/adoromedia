var App = App || {};
App.Heroes = new (function() {
	$(init);
	function init() {
		
		var heroDivs = $("div.hero");
		for(var i = heroDivs.length-1; i>=0; i--) {
			new Hero(heroDivs[i]);
		}
		
		
		
		
		
		
		
	};
	
	function Hero(heroDiv) {
		var opening = false, closing = false;
		var textPart = $(heroDiv).find("div.textual")[0];
		
		//$(textPart).find("p").css("opacity", "0");
		$(textPart).find("p").css("display", "none");
		
		
		var originalHeight = $(textPart).height();		
		
		$(heroDiv).bind("mouseenter", function() {
			$(this).addClass("heroOn");
			if(closing) return;
			opening = true;
			$(textPart).animate({"height":"75px"}, {complete: function() {
				opening = false;
				if(closing) return;
				$(textPart).find("p").css("display", "block");
			}});
		});
		
		$(heroDiv).bind("mouseleave", function() {
			closing = true;
			$(this).removeClass("heroOn");
			$(textPart).find("p").css("display", "none");
			$(textPart).animate({"height":originalHeight }, {complete: function(){
				closing = false;
				$(textPart).find("p").css("display", "none");
			}});
		});
		
	}
	
});

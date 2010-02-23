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
		var textPart = $(heroDiv).find("div.textual")[0];
		
		$(textPart).find("div").css("display", "none");
		$(textPart).find("div").css("opacity", "0");
		
		var originalHeight = $(textPart).css("height");
		//alert(originalHeight);
		
		
		
		$(heroDiv).bind("mouseenter", function() {
			$(this).addClass("heroOn");
			$(textPart).animate({"height":"100px"}, {complete: function() {
				$(textPart).find("div").css("display", "block");
				$(textPart).find("div").css({"opacity":"1"});
			}});
		});
		
		$(heroDiv).bind("mouseleave", function() {
			$(this).removeClass("heroOn");
			$(textPart).find("div").css("display", "none");
			$(textPart).find("div").css({"opacity":"0"});
			$(textPart).animate({"height":originalHeight }, {complete: function(){
				
			}});
		});
		
	}
	
});

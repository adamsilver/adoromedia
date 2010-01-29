$.namespace("SF.ShopByBrand");

SF.ShopByBrand.Pagination = new (function(){
	
	$(init);
	
	function init() {
		var paginationNode = $(".brandGroup div.pagination")[0] || null;
		var carouselNode = $(".brandGroup div.gallery")[0] || null;
		if(!carouselNode || !paginationNode) return;
//		new SF.AjaxPagination(paginationNode, carouselNode, {});
	};
	
});


SF.ShopByBrand.SecondaryNavigationStyle = new (function() {
	
	$(init);
	
	var navigation, links;
	
	function init() {	
		styleCheck("brandNavigation");
		styleCheck("brandCategoryNavigation");
	}
	
	function styleCheck(el) {
		nav = document.getElementById(el);
		if(nav === null) return;
		
		links = nav.getElementsByTagName("li");
		if(links === null || links.length < 4) return;
		
		addStyle(nav,links);
	};
	
	function addStyle(nav, links) {
		var whiteSpace = nav.offsetWidth - getLetterSpace();
		var padding = (Math.round(whiteSpace / (links.length - 1))-1).toString() + "px";
		
		for (var i = 0; i < links.length - 1; i++) {
			if(i == 0) {
				links[i].style.paddingLeft = "16px";
			}
			links[i].style.paddingRight = padding;
		}
	
		function getLetterSpace() {
			var letterSpace = 0;
			for (var i = 0; i < links.length; i++) {
				links[i].style.paddingLeft = 0;
				links[i].style.paddingRight = 0;
				letterSpace += links[i].offsetWidth;
			}
			return letterSpace;
		};
	};
});
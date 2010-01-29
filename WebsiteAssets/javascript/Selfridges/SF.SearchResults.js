$.namespace("SF");

/*
 * Search results
 * @constructor
 * @static
 */
SF.SearchResults = new (function(){
	$(document).ready(initAjaxPaginators);
	$(document).ready(initAccordions);
	
	
	function initAccordions() {
		var root = document.getElementById("searchResults");
		if(!root) return;
		var anchors = $(root).find("a.level1");
		var sections = $(root).find("div.section");
		var innerAnchors = null;
		for(var i = 0; i < sections.length; i++) {
			innerAnchors = $(sections[i]).find("div.header h3 a");
			if(innerAnchors.length === 0) continue;
			new Adoro.Accordion(innerAnchors, {animate: true, alwaysOpen: false});
		};

		var anchorSet2 = jQuery.makeArray($("#secondaryNavigation div.header h2 a"));
		new Adoro.Accordion(anchors, {extraSets: [anchorSet2], animate: true});	
	};
	
	
	function initAjaxPaginators() {
		var panels = jQuery.makeArray($("#shoppingResults div.department div.panel"));
		var carouselNode = null;
		var paginationNode = null;
		var resultsDetailsNode = null;
		for(var i = 0; i<panels.length;i++) {
			carouselNode = $(panels[i]).find("div.gallery")[0] || null;
			paginationNode = $(panels[i]).find("div.pagination")[0] || null;
			resultsDetailsNode = $(panels[i]).parents("div.department").find("div.header p.info")[0] || null;
			new SF.AjaxPagination(paginationNode, carouselNode, {resultsDetailsNode: resultsDetailsNode, pageNumberKey:paginationNode.id, CustomEventBefore: "searchPageRequested"+i, CustomEventAfter: "searchPageChanged"+i});
		};
	};
	
});

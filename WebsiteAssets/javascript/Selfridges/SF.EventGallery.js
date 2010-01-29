$.namespace("SF");
SF.EventGallery = new (function(){
	$(document).ready(init);
	
	function init() {
		var paginationNode = $("div.pagination")[0] || null;
		var carouselNode = $("#eventGallery div.gallery")[0] || null;
		var displayType = $(carouselNode).find("#eventGallery div.displayType3")[0] || null;
		if(!carouselNode || !paginationNode || displayType) return;
		new SF.AjaxPagination(paginationNode, carouselNode,{});
	};
	
});
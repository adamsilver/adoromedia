var Site = Site || {};
Site.Team = Site.Team || {};
Site.Team.Gallery = new (function(){
	$(document).ready(init);
	function init() {
		var galleryItems = $('#teamMember .gallery ul li a');
		$(galleryItems).lightBox();
		
		var viewGalleryLink = $("#teamMember p.viewGallery a")[0] || null;
		
		$(viewGalleryLink).bind("click", function(e){
			$(galleryItems[0]).trigger("click");
			return false;
		});
	};
});
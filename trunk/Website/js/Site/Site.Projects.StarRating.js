var Site = Site || {};
Site.Projects = Site.Projects || {};
Site.Projects.StarRating = new (function(){
	$(document).ready(function(){
		var myStarRating = new Adoro.StarRating($("input[name='starRating']"));
	});
});
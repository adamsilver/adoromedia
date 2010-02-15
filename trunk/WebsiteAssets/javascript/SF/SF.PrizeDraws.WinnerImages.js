$.namespace("SF.PrizeDraws");

SF.PrizeDraws.WinnerImages = new (function() {
	$(document).ready(function() {
		var $winnerImages = $('#prizeDrawWinnersList a').each(function() {
			
			var hoverHtml = null;
			var imagePath = getPath($(this).find('img'));
			var parentNode = $(this).parent();
			
			(function() {
				hoverHtml = document.createElement('div');
				$(hoverHtml).addClass('imageHover hide');
				$(hoverHtml).prepend('<img src="' + imagePath + '" />');
			})();
			
			function getPath(image) {
				return $(image).attr('src');
			}
			
			var hoverImage = new Adoro.Tooltip($(this), $(hoverHtml).html(), {delay: 0,followMouse: true});		
		});
	});
});
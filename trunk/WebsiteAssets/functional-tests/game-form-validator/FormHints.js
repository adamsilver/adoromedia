$(function() {
	
	$("div.hint").each(function() {
		var a = $("<a href='#'>??</a>")
		
		var div = $(this).find("div");
		div.addClass("hintTipAdam");
		var html = $(this).html();
		div.remove();
		$(this).prepend(a);
		new Adoro.Tooltip(a[0], html, {followMouse: true, delay: 0});
		
		
	});
	
});






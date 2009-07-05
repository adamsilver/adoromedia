var Site = Site || {};
Site.Projects = Site.Projects || {};
Site.Projects.ToolTip = new (function(){
	$(document).ready(function(){
		var myTip1 = new Adoro.Tooltip($("a.tooltipAnchor")[0], '<div class="myTooltip">This is my default tooltip with a delay</div>');
		
		$("div.tooltipContainer div.tooltip").hide();
		var myTip2 = new Adoro.Tooltip($("div.tooltipContainer a.tooltipAnchor")[0], $("div.tooltipContainer div.tooltip")[0].innerHTML, {delay: 0,followMouse: true});
		
	});
});
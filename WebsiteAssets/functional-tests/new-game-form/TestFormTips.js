
var TestFormTips = new (function(){
	$(init);
	
	function init() {
		var $tips = $("div.tooltip");
		for(var i = 0; i < $tips.length; i++) {
			new ToolTip($($tips[i]));
		}
	}
	
	function ToolTip($tip) {
		$tip.bind("mouseenter", tip_mouseEnter);
		$tip.bind("mouseleave", tip_mouseLeave);
		
		var $tipInner = $tip.find("div.tooltipInner");
		$tipInner.hide();
		function tip_mouseEnter(e) {
			$tipInner.show();
		}
		
		function tip_mouseLeave(e) {
			$tipInner.hide();
		}		
		
	}
	
	
	

	
});


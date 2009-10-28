var Site = Site || {};
Site.Panel = new (function(){
	var panels = [];
	var panelActivated = false;
	var panelTime = 200;
	
	$(init);
	
	function init() {
		var anchors = $("a.panelActivator").each(function(){
			var panel = new Panel(this);
			panels.push(panel);
		});
	};
	
	function Panel(anchor) {
		var me = this;
		var defaultValues = {
			marginBottom: null,
			fontSize: null,
			color: "#0A0B10"
		};
		var time = 500;
		var li = $(anchor).parents("li")[0] || null;
		if(!li) return;
		//console.log(li);
		
		var container = document.getElementById(anchor.hash.split("#")[1]);
		var containerHeight = $(container).height();
		
		
		$(container).css("height","0");
		$(container).css("overflow","hidden");
		$(container).css("position","relative");
		
		defaultValues.marginBottom = $(li).css("margin-bottom");
		defaultValues.fontSize = $(li).css("font-size");
		defaultValues.color = $(anchor).css("color");
		
		$(li).css("font-size", "1.3em");
		$(li).css("margin-bottom", "0px");
		$(anchor).bind("click", panelClick);
		
		function panelClick() {
			if(!isPanelActivated()) {
				
				Site.Logo.activate();
				Site.Content.activate();
				listItemsActivate();
				panelActivated = true;
			};
			closePanels(me)
			expandButton();
			this.blur();
			return false;
		};
		
		function expandButton() {
			//anchor.animate({
			//	"color": {
			//		to: J2.Core.CSSColor.prototype.create("#0A0B10"),
			//		time: time
			//	}
			//});
			
			
			$(li).animate({"fontSize": "3em"},{complete: openPanel})
			
		};
		
		function collapseButton() {
		
		
			//anchor.animate({
			//	"color": {
			//		to: J2.Core.CSSColor.prototype.create(defaultValues.color.getHex()),
			//		time: time
			//	}
			//});
		
			
			$(li).animate({"fontSize": "1.2em"},{})
			
			//li.animate({
			//	"fontSize": {
			//		to: 20,
			//		time: time,
			//		transition: J2.Transitions.Exp.easeOut
			//	}
			//});
		};
		
		function openPanel() {
			
			$(container).animate({
				"height": containerHeight+"px"
			},{})
			
			return;
			container.animate({
				"height":{
						to: containerHeight,
						time: panelTime
					}
			});
		};
		
		function closePanel() {
			$(container).animate({
				"height": "0px"
			},{})
		
			return;
			container.animate({
				"height":{
						to: 0,
						time: panelTime
					}
			});
		};
		
		function activate() {
			$(li).animate({"margin-bottom":"-8px"});
		
			//li.animate({
			//	"margin-bottom":{
			//		to: -8,
			//		time: panelTime
			//	}
			//})
		};
		
		this.closePanel = closePanel;
		this.openPanel = openPanel;
		this.expandButton = expandButton;
		this.collapseButton = collapseButton;
		this.activate = activate;
	};
	
	function isPanelActivated() {
		return panelActivated;
	}
	
	function closePanels(panelToIgnore) {
		for(var i = 0; i<panels.length;i++) {
			if(panelToIgnore===panels[i]) continue;
			panels[i].collapseButton();
			panels[i].closePanel();
		};
	};
	
	function listItemsActivate() {
		for(var i = 0; i<panels.length;i++) {
			panels[i].activate();
		};
	};
	
	function getActivePanel() {
	};
	
	function closeActivePanel() {
	};

	return Panel;
});

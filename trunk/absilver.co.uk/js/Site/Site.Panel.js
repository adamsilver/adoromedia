var Site = Site || {};
Site.Panel = new (function(){
	var panels = [];
	var panelActivated = false;
	var panelTime = 200;
	
	addDOMReadyEvent(init);
	
	function init() {
		var anchors = document.getElementsByClassName({cssClass:"panelActivator", tags:"a", callback: function(){
			var panel = new Panel(this);
			panels.push(panel);
		}});
	};
	
	function Panel(anchor) {
		var me = this;
		var defaultValues = {
			marginBottom: null,
			fontSize: null,
			color: "#0A0B10"
		};
		var time = 500;
		var li = anchor.getParent();
		var container = document.getElementById(anchor.hash.split("#")[1]);
		var containerHeight = container.offsetHeight;
		
		container.setStyle("height",0);
		container.setStyle("overflow","hidden");
		container.setStyle("position","relative");
		
		defaultValues.marginBottom = li.getStyle("margin-bottom");
		defaultValues.fontSize = li.getStyle("font-size");
		defaultValues.color = anchor.getStyle("color");
		
		li.setStyle("font-size", "1.3em");
		li.setStyle("margin-bottom", "0px");
		anchor.addEvent("click", panelClick);
		
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
			anchor.animate({
				"color": {
					to: J2.Core.CSSColor.prototype.create("#0A0B10"),
					time: time
				}
			});
			li.animate({
				"fontSize": {
					to: 80,
					time: time,
					transition: J2.Transitions.Exp.easeOut
				}
			},
			function(){
				openPanel();
			});	
		};
		
		function collapseButton() {
			anchor.animate({
				"color": {
					to: J2.Core.CSSColor.prototype.create(defaultValues.color.getHex()),
					time: time
				}
			});
		
			
			li.animate({
				"fontSize": {
					to: 20,
					time: time,
					transition: J2.Transitions.Exp.easeOut
				}
			});
		};
		
		function openPanel() {
			container.animate({
				"height":{
						to: containerHeight,
						time: panelTime
					}
			});
		};
		
		function closePanel() {
			container.animate({
				"height":{
						to: 0,
						time: panelTime
					}
			});
		};
		
		function activate() {
			li.animate({
				"margin-bottom":{
					to: -8,
					time: panelTime
				}
			})
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

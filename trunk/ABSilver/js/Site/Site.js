var Site = Site || {};
Site.Test = new (function() {
	addDOMReadyEvent(init);
	
	var panels = [];
	
	function init() {
		/*(var el = document.getElementById("content");
		var colour = "#36373C";
		
		el.animate({"backgroundColor": {
			to: J2.Core.CSSColor.prototype.create(colour),
			time: 500,
			transition: J2.Transitions.linear
		}});*/
		
		
		var contactZone = document.getElementById("contact");
		var aboutZone = document.getElementById("about");
		var contactButton = document.getElementById("btnContact");
		var aboutButton = document.getElementById("btnAbout");
		var workZone = document.getElementById("work");
		var workButton = document.getElementById("btnWork");
		
		
		var c = new Panel(contactButton, contactZone);
		panels.push(c);
		var a = new Panel(aboutButton, aboutZone);
		panels.push(a);
		var w = new Panel(workButton, workZone);
		panels.push(w);
		
	};
	
	function Panel(button, panel) {
		var panelHeight = panel.offsetHeight;
		panel.setStyle("height",0);
		panel.setStyle("overflow","hidden");
		
		button.addEvent("click",buttonClick);
		
		var me = this;
		
		function buttonClick(e) {
			this.animate({"fontSize": {
				to: 80,
				time: 500,
				transition: J2.Transitions.Exp.easeOut
			}});
			closeOtherPanels();
			openPanel();
			
			return false;
		};
		
		function closeOtherPanels() {
			for(var i = 0; i<panels.length;i++) {
			
				if( me===panels[i]) continue;
				panels[i].closePanel();
			}
		};
		
		function openPanel() {
			panel.animate({"height":{
				to: panelHeight,
				time: 500}
			});
		};
		
		function closePanel() {
			panel.animate({"height":{
				to: 0,
				time: 500,
				transition: J2.Transitions.Exp.easeOut
			}
			});
			
			button.animate({"fontSize": {
				to: 20,
				time: 500,
				transition: J2.Transitions.Exp.easeOut
			}})
		};
		
		this.closePanel = closePanel;
		
	};
	
	
	
});
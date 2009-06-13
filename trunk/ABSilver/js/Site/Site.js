var Site = Site || {};
Site.Test = new (function() {
	addDOMReadyEvent(init);
	
	var panels = [];
	
	var started = false;
	var originalLogoPaddingTop = null;
	var logo = null;
	var originalContentBgColor = null;
	var content = null;
	var originalContentBgImage = null;
		
	function init() {
		
		logo = document.getElementById("logo");
		originalLogoPaddingTop = logo.getStyle("padding-top");
		logo.setStyle("padding-top", "300px");
		
		content = document.getElementById("content");
		originalContentBgImage = content.getStyle("background-image");
		originalContentBgColor = content.getStyle("background-color");
		var bodyBgColor = document.getElementsByTagName("body")[0].getStyle("background-color");
		
		content.setStyle("background-image", "none");
		content.setStyle("background-color", bodyBgColor);
		
		
		var contactZone = document.getElementById("contact");
		var aboutZone = document.getElementById("about");
		var contactButton = document.getElementById("btnContact");
		var aboutButton = document.getElementById("btnAbout");
		var workZone = document.getElementById("work");
		var workButton = document.getElementById("btnWork");
		
		aboutButton.setStyle("font-size", "1.3em");
		workButton.setStyle("font-size", "1.3em");
		contactButton.setStyle("font-size", "1.3em");
		
		aboutButton.setStyle("margin-bottom", "0px");
		workButton.setStyle("margin-bottom", "0px");
		contactButton.setStyle("margin-bottom", "0px");
		
		
		var c = new Panel(contactButton, contactZone);
		panels.push(c);
		var a = new Panel(aboutButton, aboutZone);
		panels.push(a);
		var w = new Panel(workButton, workZone);
		panels.push(w);
		
	};
	
	function start(link) {
		buttonsStart();
		logo.animate({
			"padding-top": {
				to: parseInt(originalLogoPaddingTop),
				time: 500
			}
		});
		
		content.animate({
			"background-color": {
				to: J2.Core.CSSColor.prototype.create(originalContentBgColor.getHex())
			}
		},
		function(){
			content.setStyle("background-image", originalContentBgImage);
		});
		started = true;
	};
	
	function buttonsStart() {
		for(var i = panels.length-1; i>=0; i--) {
			panels[i].button.animate({
				"margin-bottom": {
					to: -8,
					time: 500
				}
			})
		};
	};
	
	
	function Panel(button, panel) {
		this.button = button;
		var panelHeight = panel.offsetHeight;
		panel.setStyle("height",0);
		panel.setStyle("overflow","hidden");
		panel.setStyle("position","relative");
		
		var link = button.getElementsByTagName("a")[0];
		
		link.addEvent("click",buttonClick);
		
		var me = this;
		
		var originalColor = link.getStyle("color");
		
		function buttonClick(e) {
			if(!started) {
				start();
			};
			link.animate({
				"color": {
					to: J2.Core.CSSColor.prototype.create("#0A0B10"),
					time: 500,
					transition: J2.Transitions.Exp.easeOut
				}
			});
			
			link.blur();
						
			button.animate({
				"fontSize": {
					to: 80,
					time: 500,
					transition: J2.Transitions.Exp.easeOut
				}
			},
			function() {
				openPanel();
			});
			closeOtherPanels();

			
			return false;
		};
		
		function closeOtherPanels() {
			for(var i = 0; i<panels.length;i++) {
			
				if( me===panels[i]) continue;
				panels[i].closePanel();
			}
		};
		
		function openPanel() {
			panel.animate({
				"height":{
					to: panelHeight,
					time: 200
				}
			});
		};
		
		function closePanel() {
			panel.animate({
				"height":{
					to: 0,
					time: 500,
					transition: J2.Transitions.Exp.easeOut
				}				
			});
			
			button.animate({
				"fontSize": {
					to: 20,
					time: 500,
					transition: J2.Transitions.Exp.easeOut
				}
			})
			
			link.animate({
				"color": {
					to: J2.Core.CSSColor.prototype.create(originalColor.getHex()),
					time: 500,
					transition: J2.Transitions.Exp.easeOut
				}
			});
			
			
		};
		
		this.closePanel = closePanel;
		
	};
});

Site.ShowReel = new (function() {
	addDOMReadyEvent(init);
	
	var showreel = null;
	var clip = null;
	var ul = null;
	
	function init() {
		showreel = document.getElementById("work").getElementsByClassName({ cssClass: "showreel", tags: "div" })[0] || null;
		clip = showreel.getElementsByClassName({ cssClass: "clip", tags: "div" })[0] || null;
		ul = clip.getElementsByClassName({cssClass: "pages", tags:"div"})[0] || null;
	};
	
	function getTotalWidthOfListItems() {
		var listItems = ul.getElementsByTagName("li");
			
	};
	
});

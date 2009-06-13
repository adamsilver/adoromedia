var Site = Site || {};

Site.Logo = new (function(){
	addDOMReadyEvent(init);
	var defaultValues = {
		paddingTop: null,
		paddingBottom: null
	};
	
	var logo = null;
	
	function init() {
		logo = document.getElementById("logo");
		defaultValues.paddingTop = parseInt(logo.getStyle("padding-top"));
		defaultValues.paddingBottom = parseInt(logo.getStyle("padding-bottom"));
		logo.setStyle("padding-top", J2.Window.height()/3+"px");
		logo.setStyle("padding-bottom", "0px");
	};
	
	function activate() {
		var time = 500;
		logo.animate({
			"padding-top": { to: defaultValues.paddingTop, time: time },
			"padding-bottom": {	to: defaultValues.paddingBottom, time: time	}
		});
	};
	
	this.activate = activate;
});

Site.Content = new (function(){
	addDOMReadyEvent(init);
	
	var defaultValues = {
		bgImage: null,
		bgColor: null
	};
	
	var content = null;
	
	function init() {
		content = document.getElementById("content");
		defaultValues.bgImage = content.getStyle("background-image");
		defaultValues.bgColor = content.getStyle("background-color");
		content.setStyle("background-image", "none");
		content.setStyle("background-color", getBodyBgColor());
	};
	
	function activate() {
		var time = 500;
		content.animate({
			"background-color": { to: J2.Core.CSSColor.prototype.create(defaultValues.bgColor.getHex()), time: time }
		},
		activateComplete);
	};
	
	function activateComplete() {
		content.setStyle("background-image", defaultValues.bgImage);
	};
	
	function getBodyBgColor() {
		return document.getElementsByTagName("body")[0].getStyle("background-color");
	};
	
	this.activate = activate;
});


Site.Panel = new (function(){
	var panels = [];
	var panelActivated = false;
	var defaultValues = {
		marginBottom: null,
		fontSize: null
	};
	
	addDOMReadyEvent(init);
	
	function init() {
		var anchors = document.getElementsByClassName({cssClass:"panelActivator", tags:"a", callback: function(){
			
			var panel = new Panel(this);
			panels.push(panel);
		}})
	};
	
	function Panel(anchor) {
		this.anchor = anchor;
		this.li = anchor.getParent();
		
		this.container = document.getElementById(anchor.hash.split("#")[1]);
		
		this.container.setStyle("height",0);
		this.container.setStyle("overflow","hidden");
		this.container.setStyle("position","relative");
		
		this.li.setStyle("font-size", "1.3em");
		this.li.setStyle("margin-bottom", "0px");
		
		anchor.addEvent("click", panelClick);
		
		
	};
	
	function panelClick() {
		if(!isPanelActivated()) {
			Site.Logo.activate();
			Site.Content.activate();
		};
		closePanels();
	};
	
	function isPanelActivated() {
		return panelActivated;
	}
	
	function closePanels() {
	};
	
	function openPanel() {
	};
	
	function closePanel(panel) {
		
	};
	
	return Panel;
});

Site.Test = new (function() {

	addDOMReadyEvent(init);
	
	var panels = [];
	
	var started = false;

		
	function init() {
		

		
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
	
	function start(link) {
		buttonsStart();

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

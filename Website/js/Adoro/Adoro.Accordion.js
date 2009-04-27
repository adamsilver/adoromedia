var Adoro = Adoro || {};
Adoro.Accordion = function(anchors, options) {
	var animating = false;
	var options = options || {};
	var extraSets = options.extraSets || [];
	var cssActiveClass = options.cssActiveClass || "selected";
	var alwaysOpen = options.alwaysOpen || false;
	var animate = options.animate || false;
	//var animateShowParams = options.animateShowParams || {height: "show"};
	//var animateHideParams = options.animateHideParams || {height: "hide"};
	
	var horizontal = options.horizontal || false;
	
	
	var animateTime = options.animateTime || 300;	
	var sets = extraSets;
	sets.push(anchors);

	var anchorsSets = [];
	var panelHandlers = [], handler;
	
	for(var i = 0; i<sets[0].length; i++) {
		anchorsSets=[];
		for(var j = 0; j < sets.length; j++) {
			anchorsSets.push(sets[j][i]);
		}
		handler = new PanelHandler(anchorsSets);
		panelHandlers.push(handler);
	};
	
	if(alwaysOpen) {		
		if(getCurrentlyOpened()===null) {
			if(panelHandlers.length > 0) {
				panelHandlers[0].expand();
			}
		}
	}	
	
	
	function PanelHandler(anchors) {
		var me = this;
		var singlePanels = [];
		
		
		
		var isOpen = false;
		this.isOpen = isOpen;
		
		for(var i = 0; i<anchors.length;i++) {
			$(anchors[i]).hasClass(cssActiveClass);
			singlePanels.push(new SinglePanel(anchors[i], this));
		};
		
		if(!isOpen) {
			collapse();
		};
		
		this.collapse = collapse;
		function collapse() {
			for(var i = 0; i < singlePanels.length; i++) {
				singlePanels[i].collapse();
			};
		};
		
		this.expand = expand;
		function expand() {
			for(var i = 0; i < singlePanels.length; i++) {
				singlePanels[i].expand();
			};
		};
	
		this.collapseAnimate = collapseAnimate;
		function collapseAnimate() {
			for(var i = 0; i < singlePanels.length; i++) {
				singlePanels[i].collapseAnimate();
			};
		};	
	
		this.expandAnimate = expandAnimate;
		function expandAnimate() {
			for(var i = 0; i < singlePanels.length; i++) {
				singlePanels[i].expandAnimate();
			};			
		}
		
		function anchor_onClick() {
			toggle.call(me);
			return false;
		}
		
		function SinglePanel(anchor, panelHandler) {
			$(anchor).bind("click", anchor_onClick);
			var section = document.getElementById(anchor.hash.slice(1));
			var dimension = (horizontal) ? "width" : "height";
			var animParamsHide = ( horizontal ) ? {"width":0} : {"height":0};
			$(section).css("overflow", "hidden");
			
			this.collapse = function() {
				$(anchor).removeClass(cssActiveClass);
				$(section).css(dimension, 0);
				$(section).css("display", "none");
				panelHandler.isOpen = false;
			};
			this.expand = function() {
				$(anchor).addClass(cssActiveClass);
				panelHandler.isOpen = true;
				$(section).css("display", "block");
				$(section).css(dimension, "auto");
			};
			
			this.collapseAnimate = function() {
				$(anchor).removeClass(cssActiveClass);
				$(section).animate(animParamsHide, {duration: animateTime, complete: function(){
					panelHandler.isOpen = false;
					$(section).css("display", "none");
				}});				
			};			
			
			this.expandAnimate = function() {
				animating = true;
				$(anchor).addClass(cssActiveClass);
				
				$(section).css("display", "block");
				var valueToMove = (horizontal) ? getWidthOfChildren() : getHeightOfChildren();
				
				var animParamsShow = (horizontal) ? {"width":valueToMove} : {"height":valueToMove};
				
				$(section).animate(animParamsShow, {duration: animateTime, complete: function(){
					animating = false;
					panelHandler.isOpen = true;
					$(this).css(dimension, "auto");
				}});
			};
			
			function getHeightOfChildren() {
				var children = $(section).find("> *");
				var h = 0;
				for(var i = children.length-1; i>=0; i--) {
					h += $(children[i]).outerHeight({margin: true});
				}
				return h+"px";
			};
			
			function getWidthOfChildren() {
				var children = $(section).find("> *");
				
				var w = 0;
				for(var i = children.length-1; i>=0; i--) {
					w += $(children[i]).outerWidth({margin: true});
				}
				return w+"px";
			};			
			
		};	
	};
	
	function toggle() {
		if(animating) return;
		var currentlyOpened = getCurrentlyOpened();
		if(alwaysOpen && currentlyOpened === this) return;

		if(currentlyOpened !== null) {
			if(animate) {
				currentlyOpened.collapseAnimate();
			}
			else {
				currentlyOpened.collapse();
			}
		}
		
		// don't open what we just closed
		if(currentlyOpened !== this) {
			if(animate) {
				this.expandAnimate();
			}
			else {
				this.expand();
			}
		}
	};
	
	function getCurrentlyOpened() {
		var o = null;
		for(var i = panelHandlers.length-1; i>=0; i--){
			if(panelHandlers[i].isOpen) {
				o = panelHandlers[i];
				break;
			}
		}
		return o;		
	};	

};
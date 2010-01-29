$.namespace("SF");

SF.Footer = new (function() {
	var footerID = "footer";
	var footer = null;
	var enhancedClass = "footerJSon";
	var IE6 = ($.browser.msie && parseInt($.browser.version) === 6);
	
	$(document).ready(init);
	
	function init() {
		footer = document.getElementById(footerID) || null;
		if(!footer) return;
		$(footer).addClass(enhancedClass);

		if(IE6) {
			$(window).resize(positionFooter);
			$(window).scroll(positionFooter);
			positionFooter();
		};
		
		
	};
	this.positionFooter = positionFooter;
	function positionFooter() {
		if(IE6) {
			var top = $(window).height()-$(footer).height()+$(window).scrollTop()+"px";
			$(footer).css({
				"position":"absolute",
				"left":"0",
				"top": top
			});
		}
	};
	
});

SF.Footer.Showcase = new (function() {
	var closeDelay = 2000;
	var foldHeight = 550;
	var open = true;
	var openClass = "open";
	var activator = null;
	var showcase = null;
	var showcaseHeight = 0;
	var timer = null;
	var mouseInside = false;
	var state = ""; // 1) "closeOnDelay", 2) "open" 3) "" (blank == closed)		
	var maxWindowHeight = 790;
	var windowHeight = 0;
	
	$(document).ready(init);
	
	var carouselRoot;
	
	function init() {
		activator = $("#showcaseActivator a")[0] || null;
		showcase = document.getElementById("showcase") || null;
		
		if(!activator || !showcase) return;

		windowHeight = $(window).height();
	
		/*
			SEEMS TO WORK NOW
			$(showcase).css("zoom", "1"); // horrible hack for ie6 that doesnt work with css only - needs a weird render trigger (not hasLayout)
		*/
		$(showcase).bgiframe();
		showcaseHeight = $(showcase).height();
		carouselRoot = $(showcase).find(".carousel")[0] || null;
		
		closeDelay = Salmon.PageContext.SHOWCASEDISPLAYTIMEOUT * 1000 || closeDelay;
		
		$(showcase).bind("mouseenter", showcaseMouseenter);
		$(showcase).bind("mouseleave", showcaseMouseleave);
		
		if(carouselRoot) {
			var backContainer = document.createElement("div");
			backContainer.className = "backContainer";
			$(carouselRoot).prepend(backContainer);
			
			var forwardContainer = document.createElement("div");
			forwardContainer.className = "forwardContainer";
			$(carouselRoot).append(forwardContainer);
		
			var indicatorsContainer = document.createElement("div");
			indicatorsContainer.className = "indicatorsContainer";
			$(carouselRoot).append(indicatorsContainer);
		
			var carousel = new Adoro.Carousel(carouselRoot, { 
				scrollCount: 1, 
				stopButton: false,
				startButton: false,	
				animateSpeed: 1000,
				isCircular: false, 
				indicators: true,
				backButtonAppendTo: backContainer,
				forwardButtonAppendTo: forwardContainer,
				indicatorsContainerAppendTo: indicatorsContainer,
				indicatorsContainerClass: "indicatorsContainerInner"
			});
			
			centerIndicators();
		}
		
		state = showcase.className;
		
		// commented out as annoying requirement
		//overrideState();
		/*
		switch(state) {
			case "open":
				me.open = true;
				break;
			case "closeOnDelay":
				window.setTimeout(closeShowcase, closeDelay);
				break;
			default:
				$(showcase).css("display", "none");
				me.open = false;
		}*/
		
		$(showcase).addClass(openClass);
		$(activator).addClass(openClass);
		
		if(windowHeight < maxWindowHeight) {
			timer = window.setTimeout(closeShowcase, closeDelay);
		}
		
		$(activator).bind("click", toggle);
		SF.Footer.positionFooter();	
	};
	
	function showcaseMouseenter(e) {
		mouseInside = true;
	};
	
	function showcaseMouseleave(e) {
		mouseInside = false;
	};	
	
	function centerIndicators() {
		$(carouselRoot).find(".indicatorsContainerInner").css("float", "left");
		var width = $(carouselRoot).find(".indicatorsContainerInner").outerWidth({margin:true});
		
		$(carouselRoot).find(".indicatorsContainerInner").css("width", width+"px");
		$(carouselRoot).find(".indicatorsContainerInner").css("margin-left", "auto");
		$(carouselRoot).find(".indicatorsContainerInner").css("margin-right", "auto");
		$(carouselRoot).find(".indicatorsContainerInner").css("float", "");
	};
	
	function overrideState() {
		var viewportHeight = $(window).height();
		if(showcaseHeight + foldHeight < viewportHeight) {
			state = "open";
		}
	};
	
	function toggle() {
		if(open) {
			closeShowcase();
		}
		else {
			openShowcase();
		}
		return false;
	};
	
	function openShowcase() {
		$.publish("showcaseOpening");
		$(showcase).animate({"height":"show"},{
			complete: function(){
				SF.Footer.positionFooter();
			},
			duration: 1000,
			step: function(step){
				SF.Footer.positionFooter();
			}
		});
		$(showcase).addClass(openClass);
		$(activator).addClass(openClass);
		open = true;
	};
	
	function closeShowcase() {
		if(mouseInside) return;
		$(showcase).animate({"height":"hide"},{
			complete: function(){
				SF.Footer.positionFooter();
			},
			duration: 1000,
			step: function(step){
				SF.Footer.positionFooter();
			}
		});
		$(showcase).removeClass(openClass);
		$(activator).removeClass(openClass);
		open = false;
	};
	
	$.subscribe("moreFromOpening", adjust);
	function adjust() {
		if(open) {
			hideShowcase();
		}
	}
	
	function hideShowcase() {
		$(showcase).css("display", "none");
		$(activator).removeClass(openClass);
	}
	
});

SF.Footer.MoreFrom = new (function() {
	var activator = null;
	var open = false;
	var openClass = "open";
	var moreFrom = null;

	$(document).ready(init);
	
	function init() {
		activator = $("#moreFromActivator a")[0] || null;
		moreFrom = document.getElementById("moreFrom") || null;
		if(!activator || !moreFrom) return;
		$(moreFrom).css("zoom", "1"); // horrible hack for ie6 that doesnt work with css only - needs a weird render trigger (not hasLayout)
		$(moreFrom).bgiframe();
		$(moreFrom).css("display", "none");
		$(activator).bind("click", toggle);
		SF.Footer.positionFooter();
	};
	
	function toggle() {
		if(open) {
			closeMoreFrom();
		}
		else {
			openMoreFrom();
		}
		return false;
	};
	
	function openMoreFrom() {
		$.publish("moreFromOpening");
		$(moreFrom).animate({
				"height": "show"
			}, 
			{
				complete: function(){
					SF.Footer.positionFooter();
				},
				duration: 1000,
				step: function(step){
					SF.Footer.positionFooter();
				}
			}
		);
		
		$(moreFrom).addClass(openClass);
		$(activator).addClass(openClass);
		open = true;
	};
	
	function closeMoreFrom() {
		$(moreFrom).animate({"height": "hide"}, {duration: 1000, step: function(){SF.Footer.positionFooter()}});
		$(moreFrom).removeClass(openClass);
		open = false;
		$(activator).removeClass(openClass);
	};
	
	$.subscribe("showcaseOpening", adjust);
	function adjust() {
		if(open) {
			hideMoreFrom();
		}
	};
	
	function hideMoreFrom() {
		$(moreFrom).css("display", "none");
		$(activator).removeClass(openClass);
	};
	
});

SF.Footer.Ticker = new (function() {
	$(document).ready(init);
	function init() {
		var ticker = document.getElementById("ticker");
		if(!ticker) return;
		var carousel = $(ticker).find(".carousel")[0] || null;
		if(!carousel) return;
		new Adoro.Carousel(carousel, { 
			automaticDelay: 8000, 
			scrollCount: 1, 
			indicators: false,
			stopButton: false,
			startButton: false,
			animateSpeed: 1800,
			isCircular: false,
			backButton: false,
			forwardButton: false,
			automatic:true,
			isCircular:true,
			animateEasing: "swing"
		});
		SF.Footer.positionFooter();
	};
	
});
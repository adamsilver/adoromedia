if(typeof Adoro !== "object") Adoro = {};
Adoro.Carousel2 = function(container, options) {
	var state = { 
		currentSlideIndex: 0, // starts from 0 as in 0, 1, 2, 3 etc
		animating: false
	};
	var config = {
		automaticDelay: 0,
		automatic: false,
		automaticDirectionBackwards: false,
		scrollCount: 1,
		clipType: "div",
		clipClass: "clip",
		vertical: false,
		offsetReveal: 0,
		isCircular: true,
		animate: true,
		animateEasing: "linear",
		animateSpeed: 300,
		
		forwardButton: true,
		forwardButtonHTML: "<span>Forward</span>",
		forwardButtonClass: "forward",
		forwardButtonDisabledClass: "forwardDisabled",
		forwardButtonAppendTo: container,
		
		backButton: true,
		backButtonHTML: "<span>Back</span>",
		backButtonClass: "back",
		backButtonDisabledClass: "backDisabled",
		backButtonAppendTo: container,
		
		startButton: true,
		startButtonHTML: "<span>Start</span>",
		startButtonDisabledHTML: "<span>Start disabled</span>",
		startButtonClass: "start",
		startButtonDisabledClass: "startDisabled",
		startButtonAppendTo: container,
		
		stopButton: true,
		stopButtonHTML: "<span>Stop</span>",
		stopButtonClass: "stop",
		stopButtonDisabledClass: "stopDisabled",
		stopButtonAppendTo: container,
		
		indicators: true,
		indicatorsContainerClass: "indicatorsContainer",
		indicatorsContainerAppendTo: container,
		indicatorButtonHTML: "<span>Indicator</span>",
		indicatorButtonSelectedHTML: "<span>Indicator selected</span>",
		indicatorButtonClass: "indicator",
		indicatorButtonSelectedClass: "indicatorSelected"
		
	};
	var container = container || null;
	var clip = $(container).find(config.clipType+"."+config.clipClass)[0] || null;
	var ul = $(clip).find("ul")[0] || null;
	
	if(!ul) return;
	
	if(typeof options === "object") {
		// set config
	}
	
	setULStyle();
	
	function setULStyle() {
		if(config.vertical) {
			$(ul).find("li").css({"display": "block","float": "none"});
			$(ul).css({
				"height": getSlidesDimensions(getSlides()).height + "px",
				"top": config.offsetReveal + "px",
				"position": "relative"
			});
		}
		else {
			$(ul).find("li").css({"display": "inline","float": "left"});
			$(ul).css({
				"width": getSlidesDimensions(getSlides()).width + "px",
				"left": config.offsetReveal + "px",
				"position": "relative"
			});
		}
	}
	
	setClipStyle();
	
	function setClipStyle() {
		$(clip).css({"overflow": "hidden", "position":"relative"});
	}
	
	function move(move) {
		if(state.animating || move === 0) return;
		if(move < 0) {
			move = move * -1;
			// adjust the move
			// check isCircular
			config.animate ? moveBackwardsAnimate(move) : moveBackwards(move);
		}
		else {
			// adjust the move
			// check isCircular
			config.animate ? moveForwardsAnimate(move) : moveForwards(move);
		}
	}
	
	function moveBackwards(move) {
		if(config.automatic) play();
	}
	
	function moveForwards(move) {
		if(config.automatic) play();
	}
	
	function moveBackwardsAnimate(move) {
		var allSlides = getSlides();
		var slidesFrom = allSlides.length-move;
		var slidesTo = allSlides.length;
		var slides = getSlides(slidesFrom, slidesTo);
		$(ul).prepend(slides);
		$(ul).css(config.vertical ? {"top": -getSlidesDimensions(slides).height } : { "left": -getSlidesDimensions(slides).width });
		setState("animating", true);
		$(ul).animate(config.vertical ? {"top": config.offsetReveal+"px"} : {"left": config.offsetReveal+"px"},{"duration": config.animateSpeed, "easing": config.animateEasing, "complete": function(){
			setState("animating", false);
			if(getState("currentSlideIndex") - move < 0) {
				setState("currentSlideIndex", allSlides.length - move + getState("currentSlideIndex"))
			}
			else {
				setState("currentSlideIndex", getState("currentSlideIndex") - move);
			}
			indicatorsCollection.setSelected();
			if(config.automatic) play();
		}});
	}
	
	function moveForwardsAnimate(move) {
		var allSlides = getSlides();
		var slidesFrom = 0;
		var slidesTo = move;
		var slides = getSlides(slidesFrom, slidesTo);
		setState("animating", true);
		$(ul).animate(config.vertical ? {"top": -getSlidesDimensions(slides).height+config.offsetReveal+"px"} : {"left": -getSlidesDimensions(slides).width+config.offsetReveal+"px"}, {"duration": config.animateSpeed,"easing": config.animateEasing,"complete": function(){
			$(ul).append(slides);
			$(ul).css(config.vertical ? "top":"left", config.offsetReveal+"px");
			setState("animating", false);
			if(getState("currentSlideIndex") + move > allSlides.length-1) {
				setState("currentSlideIndex", getState("currentSlideIndex") - allSlides.length + move);
			}
			else {
				setState("currentSlideIndex", getState("currentSlideIndex") + move);
			}
			indicatorsCollection.setSelected();
			if(config.automatic) play();
		}});
	}
	
	function onSlideChanged() {
		// change state of indicator
		// change state of back button
		// change state of forward button
	}
	
	function getSlides(from, to) {
		var slides = [];
		var allSlides = $(ul).find("li");
		var slide = null;
		for(var i = allSlides.length-1; i>=0; i--) {
			slide = allSlides[i];			
			if(	(typeof from === "number" && i < from) ||
				(typeof to === "number" && i>to-1) ||
				(slide.parentNode !== ul) ) continue;
			slides.push(slide);
		}
		slides = slides.reverse();
		return slides;
	}
	
	function getSlidesDimensions(slides) {
		var dimensions = {width:0, height: 0};
		var slide;
		for(var i = slides.length-1; i>=0; i--) {
			slide = slides[i];
			if (slide.parentNode !== ul) continue;
			dimensions.height = dimensions.height + $(slide).outerHeight({margin: true});
			dimensions.width = dimensions.width + $(slide).outerWidth({margin: true});
		}
		return dimensions;
	}
	
	this.setOption = setOption;
	function setOption(key, value) {
		config[key] = value;
	}
	
	this.getOption = getOption;
	function getOption(key) {
		return config[key];
	}
	
	this.setState = setState;
	function setState(key, value) {
		state[key] = value;
	}
	
	this.getState = getState;
	function getState(key) {
		return state[key];
	}
	
	var indicatorsCollection = new(function(){
		var indicators = [];
		
		var slides = getSlides(),
			indicator,
			indicatorsContainer = $('<div></div>')[0];
			
		indicatorsContainer.className = config.indicatorsContainerClass;
		config.indicatorsContainerAppendTo.appendChild(indicatorsContainer);
		for(var i = 0; i<slides.length; i++) {
			if(i % config.scrollCount > 0) continue;
			indicator = new Indicator(i);
			indicators.push(indicator);
			indicatorsContainer.appendChild(indicator.el);
		}
		
		this.setSelected = setSelected;
		function setSelected() {
			for(var i = 0; i < indicators.length; i++) {
				if(indicators[i].value === getState("currentSlideIndex")) {
					indicators[i].setSelected();
				}
				else {
					indicators[i].setUnselected();
				}
			}
		}
		
		function Indicator(value) {
			var el = $('<a href="#"></a>')[0];
			this.el = el;
			el.innerHTML = config.indicatorButtonHTML;
			el.className = config.indicatorButtonClass;
			$(el).bind("click", fire);
			this.value = value;
			function fire(){
				move(value - state.currentSlideIndex);
				return false;
			}
			
			this.setSelected = setSelected;
			function setSelected() {
				$(el).addClass(config.indicatorButtonSelectedClass);
				el.innerHTML = config.indicatorButtonSelectedHTML;
			}
			
			this.setUnselected = setUnselected;
			function setUnselected() {
				$(el).removeClass(config.indicatorButtonSelectedClass);
				el.innerHTML = config.indicatorButtonHTML;
			}
		}
	});

	var backButton = new (function(){
		var el = $('<a href="#"></a>')[0];
		el.className = config.backButtonClass;
		el.innerHTML = config.backButtonHTML;
		config.backButtonAppendTo.appendChild(el);
		$(el).bind("click", fire);
		function fire() {
			move(-config.scrollCount);
			return false;
		}
		
		this.enable = enable;
		function enable() {
			$(el).removeClass(config.backButtonDisabledClass);
		}
		
		this.disable = disable;
		function disable() {
			$(el).addClass(config.backButtonDisabledClass);
		}
	});
	
	var forwardButton = new (function(){
		var el = $('<a href="#"></a>')[0];
		el.className = config.forwardButtonClass;
		el.innerHTML = config.forwardButtonHTML;
		config.forwardButtonAppendTo.appendChild(el);
		$(el).bind("click", fire);
		function fire() {
			move(config.scrollCount);
			return false;
		}
		
		this.enable = enable;
		function enable() {
			$(el).removeClass(config.forwardButtonDisabledClass);
		}
		
		this.disable = disable;
		function disable() {
			$(el).addClass(config.forwardButtonDisabledClass);
		}
	});
	
	var startButton = new (function() {
		var el = $('<a href="#"></a>')[0];
		el.className = config.startButtonClass;
		el.innerHTML = config.startButtonHTML;
		config.startButtonAppendTo.appendChild(el);
		$(el).bind("click", fire);
		function fire() {
			play();
			return false;
		}
		
		this.enable = enable;
		function enable() {
			$(el).removeClass(config.startButtonDisabledClass);
		}
		
		this.disable = disable;
		function disable() {
			$(el).addClass(config.startButtonDisabledClass);
		}
	});

	var stopButton = new (function() {
		var el = $('<a href="#"></a>')[0];
		el.className = config.stopButtonClass;
		el.innerHTML = config.stopButtonHTML;
		config.stopButtonAppendTo.appendChild(el);
		$(el).bind("click", fire);
		function fire() {
			stop();
			return false;
		}
		this.enable = enable;
		function enable() {
			$(el).removeClass(config.stopButtonDisabledClass);
		}
		this.disable = disable;
		function disable() {
			$(el).addClass(config.stopButtonDisabledClass);
		}
	});
	
	var timer = null;
	function play() {
		setOption("automatic", true);
		timer = window.setTimeout(function(){
			move(config.automaticDirectionBackwards ? -config.scrollCount : config.scrollCount);
		}, config.automaticDelay);
		startButton.disable();
		stopButton.enable();
	}
	
	function stop() {
		setOption("automatic", false);
		clearTimeout(timer);
		startButton.enable();
		stopButton.disable();
	}
	
	if(config.automatic) play();
}
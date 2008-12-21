if(typeof Adoro !== "object") Adoro = {};
Adoro.Carousel2 = function(container, options) {
	var state = { 
		currentSlide: 0, // starts from 0 as in 0, 1, 2, 3 etc
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
		forwardButtonClassDisabled: "forwardDisabled",
		forwardButtonAppendTo: container,
		
		backButton: true,
		backButtonHTML: "<span>Back</span>",
		backButtonClass: "back",
		backButtonClassDisabled: "backDisabled",
		backButtonAppendTo: container,
		
		startButton: true,
		startButtonHTML: "<span>Start</span>",
		startButtonClass: "start",
		startButtonClassDisabled: "startDisabled",
		startButtonAppendTo: container,
		
		stopButton: true,
		stopButtonHTML: "<span>Stop</span>",
		stopButtonClass: "stop",
		stopButtonClassDisabled: "stopDisabled",
		stopButtonAppendTo: container,
		
		indicators: true,
		indicatorsContainerClass: "indicatorsContainer",
		indicatorsContainerAppendTo: container,
		indicatorButtonHTML: "<span>Indicator</span>",
		indicatorButtonClass: "indicator",
		indicatorButtonClassSelected: "indicatorSelected"
		
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
				"top": config.offsetReveal + "px"
			});
		}
		else {
			$(ul).find("li").css({"display": "inline","float": "left"});
			$(ul).css({
				"width": getSlidesDimensions(getSlides()).width + "px",
				"left": config.offsetReveal + "px"
			});
		}
	}
	
	setClipStyle();
	
	function setClipStyle() {
		$(clip).css({"overflow": "hidden"});
	}
	
	/**
	 * move the carousel left or right
	 * @param {Number} move The number of slides to move the carousel by
	 */
	function move(move) {
		if(state.animating || move === 0) return;
		if(move < 0) {
			// may want to change -value  into positive and let the function handle it as it knows its backwards etc
			config.animate ? moveBackwardsAnimate(move) : moveBackwards(move);
		}
		else {
			config.animate ? moveForwardsAnimate(move) : moveForwards(move);
		}
	}
	
	/**
	 * move the carousel backwards (non-animated)
	 * @param {Number} move the number of slides to move backwards by
	 */
	function moveBackwards(move) {
		// 1. adjustMove
		// 2. get slides to move
		// 3. prepend slides
		// 4. set current slide
		// 5. set indicator selected state
		if(config.automatic) play();
	}
	
	function moveForwards(move) {
		// 1. adjustMove
		// 2. get slides to move
		// 3. append slides
		// 4. set current slide
		// 5. set indicator selected state
		if(config.automatic) play();
	}
	
	function moveBackwardsAnimate(move) {
		
	}
	
	function moveForwardsAnimate(move) {
		
	}
	
	function getSlides(from, to) {
		var slides = [];
		var allSlides = $(ul).find("li");
		var slide = null;
		for(var i = allSlides.length-1; i>=0; i--) {
			slide = allSlides[i];
			if(typeof from === "number" && i<from) continue;
			if(typeof to === "number" && i>to-1) continue;
			if (slide.parentNode !== ul) continue;
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
	
	var indicators = [];
	(function(){
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
	}());
	
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
			$(el).addClass(config.inicatorButtonSelectedClass);
		}
		
		this.setUnselected = setUnselected;
		function setUnselected() {
			$(el).removeClass(config.inicatorButtonSelectedClass);
		}
	}

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
			$(el).removeClass(config.backButtonClassDisabled);
		}
		
		this.disable = disable;
		function disable() {
			$(el).addClass(config.backButtonClassDisabled);
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
			$(el).removeClass(config.forwardButtonClassDisabled);
		}
		
		this.disable = disable;
		function disable() {
			$(el).addClass(config.forwardButtonClassDisabled);
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
			$(el).removeClass(config.startButtonClassDisabled);
		}
		
		this.disable = disable;
		function disable() {
			$(el).addClass(config.startButtonClassDisabled);
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
			$(el).removeClass(config.stopButtonClassDisabled);
		}
		this.disable = disable;
		function disable() {
			$(el).addClass(config.stopButtonClassDisabled);
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
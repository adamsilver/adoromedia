if(typeof Adoro !== "object") Adoro = {};
Adoro.Carousel = function(container, options) {
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
		isCircular: false,
		animate: true,
		animateEasing: "linear",
		animateSpeed: 300,
		
		forwardButton: true,
		forwardButtonHTML: "<span>Forward</span>",
		forwardButtonDisabledHTML: "<span>Forward disabled</span>",
		forwardButtonClass: "forward",
		forwardButtonDisabledClass: "forwardDisabled",
		forwardButtonAppendTo: container,
		
		backButton: true,
		backButtonHTML: "<span>Back</span>",
		backButtonDisabledHTML: "<span>Back disabled</span>",
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
	
	if(typeof options === "object") {
		config.automaticDelay = typeof options.automaticDelay === "number" ? options.automaticDelay : config.automaticDelay;
		config.automatic = typeof options.automatic === "boolean" ? options.automatic : config.automatic;
		config.automaticDirectionBackwards = typeof options.automaticDirectionBackwards === "boolean" ? options.automaticDirectionBackwards : config.automaticDirectionBackwards;
		config.scrollCount = typeof options.scrollCount === "number" ? options.scrollCount : config.scrollCount;
		config.clipType = typeof options.clipType === "string" ? options.clipType : config.clipType;
		config.clipClass = typeof options.clipClass === "string" ? options.clipClass : config.clipClass;
		config.vertical = typeof options.vertical === "boolean" ? options.vertical : config.vertical;
		config.offsetReveal = typeof options.offsetReveal === "number" ? options.offsetReveal : config.offsetReveal;
		config.isCircular = typeof options.isCircular === "boolean" ? options.isCircular : config.isCircular;
		config.animate = typeof options.animate === "boolean" ? options.animate : config.animate;
		config.animateEasing = typeof options.animateEasing === "string" ? options.animateEasing : config.animateEasing;
		config.animateSpeed = typeof options.animateSpeed === "number" ? options.animateSpeed : config.animateSpeed;
		
		config.forwardButton = typeof options.forwardButton === "boolean" ? options.forwardButton : config.forwardButton;
		config.forwardButtonHTML = typeof options.forwardButtonHTML === "string" ? options.forwardButtonHTML : config.forwardButtonHTML;
		config.forwardButtonDisabledHTML = typeof options.forwardButtonDisabledHTML === "string" ? options.forwardButtonDisabledHTML : config.forwardButtonDisabledHTML;
		config.forwardButtonClass = typeof options.forwardButtonClass === "string" ? options.forwardButtonClass : config.forwardButtonClass;
		config.forwardButtonDisabledClass = typeof options.forwardButtonDisabledClass === "string" ? options.forwardButtonDisabledClass : config.forwardButtonDisabledClass;
		config.forwardButtonAppendTo = options.forwardButtonAppendTo || config.forwardButtonAppendTo;
		
		config.backButton = typeof options.backButton === "boolean" ? options.backButton : config.backButton;
		config.backButtonHTML = typeof options.backButtonHTML === "string" ? options.backButtonHTML : config.backButtonHTML;
		config.backButtonDisabledHTML = typeof options.backButtonDisabledHTML === "string" ? options.backButtonDisabledHTML : config.backButtonDisabledHTML;
		config.backButtonClass = typeof options.backButtonClass === "string" ? options.backButtonClass : config.backButtonClass;
		config.backButtonDisabledClass = typeof options.backButtonDisabledClass === "string" ? options.backButtonDisabledClass : config.backButtonDisabledClass;
		config.backButtonAppendTo = options.backButtonAppendTo || config.backButtonAppendTo;
		
		config.startButton = typeof options.startButton === "boolean" ? options.startButton : config.startButton;
		config.startButtonHTML = typeof options.startButtonHTML === "string" ? options.startButtonHTML : config.startButtonHTML;
		config.startButtonDisabledHTML = typeof options.startButtonDisabledHTML === "string" ? options.startButtonDisabledHTML : config.startButtonDisabledHTML;
		config.startButtonClass = typeof options.startButtonClass === "string" ? options.startButtonClass : config.startButtonClass;
		config.startButtonDisabledClass = typeof options.startButtonDisabledClass === "string" ? options.startButtonDisabledClass : config.startButtonDisabledClass;
		config.startButtonAppendTo = options.startButtonAppendTo || config.startButtonAppendTo;
		
		config.stopButton = typeof options.stopButton === "boolean" ? options.stopButton : config.stopButton;
		config.stopButtonHTML = typeof options.stopButtonHTML === "string" ? options.stopButtonHTML : config.stopButtonHTML;
		config.stopButtonDisabledHTML = typeof options.stopButtonDisabledHTML === "string" ? options.stopButtonDisabledHTML : config.stopButtonDisabledHTML;
		config.stopButtonClass = typeof options.stopButtonClass === "string" ? options.stopButtonClass : config.stopButtonClass;
		config.stopButtonDisabledClass = typeof options.stopButtonDisabledClass === "string" ? options.stopButtonDisabledClass : config.stopButtonDisabledClass;
		config.stopButtonAppendTo = options.stopButtonAppendTo || config.stopButtonAppendTo;
		
		config.indicators = typeof options.indicators === "boolean" ? options.indicators : config.indicators;
		config.indicatorsContainerClass = typeof options.indicators === "string" ? options.indicatorsContainerClass : config.indicatorsContainerClass;
		config.indicatorsContainerAppendTo =  options.indicatorsContainerAppendTo || config.indicatorsContainerAppendTo;
		config.indicatorButtonHTML = typeof options.indicatorButtonHTML === "string" ? options.indicatorButtonHTML : config.indicatorButtonHTML;
		config.indicatorButtonSelectedHTML = typeof options.indicatorButtonSelectedHTML === "string" ? options.indicatorButtonSelectedHTML : config.indicatorButtonSelectedHTML;
		config.indicatorButtonClass = typeof options.indicatorButtonClass === "string" ? options.indicatorButtonClass : config.indicatorButtonClass;
		config.indicatorButtonSelectedClass = typeof options.indicatorButtonSelectedClass === "string" ? options.indicatorButtonSelectedClass : config.indicatorButtonSelectedClass;
	}
	
	var container = container || null;
	var clip = $(container).find(config.clipType+"."+config.clipClass)[0] || null;
	var ul = $(clip).find("ul")[0] || null;
	
	if(!ul) return;
	
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
			// adjust, but only when not indicators are showing and isCircular
			if(config.indicators && config.isCircular && getState("currentSlideIndex") + move < 0) {
				var newCurrentSlideIndex = getSlides().length + move + getState("currentSlideIndex");
				var remainder = newCurrentSlideIndex % config.scrollCount;
				if(remainder !== 0) {
					move = move + (config.scrollCount - remainder);
				}
			}
			
			// if not circular and will be moving past 0 then return
			if(!getOption("isCircular") && (getState("currentSlideIndex") + move < 0)) return;
			
			move = move * -1;
			config.animate ? moveBackwardsAnimate(move) : moveBackwards(move);
		}
		else {
			// adjust
			if(config.indicators && config.isCircular && getState("currentSlideIndex") + move > getSlides().length-1) {
				var newCurrentSlideIndex = getState("currentSlideIndex") - getSlides().length + move;
				var remainder = newCurrentSlideIndex % config.scrollCount;
				if (remainder !== 0) {
					move = move - remainder;
				}
			}
			// if not circular and will be moving past the end then return
			if(!getOption("isCircular") && (getState("currentSlideIndex") + move > getSlides().length-1)) return;
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
			setButtonStates();
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
			setButtonStates();
			if(config.automatic) play();
		}});
	}
	
	function setButtonStates() {
		if(config.indicators) indicators.setSelected();
		if(config.backButton) backButton.setState();
		if(config.forwardButton) forwardButton.setState();
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
	
	if (config.indicators) {
		var indicators = new (function(){
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
			setSelected();
			
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
	}

	if (config.backButton) {
		var backButton = new (function(){
			var el = $('<a href="#"></a>')[0];
			el.className = config.backButtonClass;
			el.innerHTML = config.backButtonHTML;
			config.backButtonAppendTo.appendChild(el);
			$(el).bind("click", fire);
			function fire(){
				move(-config.scrollCount);
				return false;
			}
			
			this.enable = enable;
			function enable(){
				$(el).removeClass(config.backButtonDisabledClass);
				el.innerHTML = config.backButtonHTML;
			}
			
			this.disable = disable;
			function disable(){
				$(el).addClass(config.backButtonDisabledClass);
				el.innerHTML = config.backButtonDisabledHTML;
			}
			
			this.setState = setState;
			function setState() {
				if (!getOption("isCircular") && (getState("currentSlideIndex") - config.scrollCount < 0)) {
					disable();
				}
				else {
					enable();
				}
			}
			
		});
	}
	
	if (config.forwardButton) {
		var forwardButton = new (function(){
			var el = $('<a href="#"></a>')[0];
			el.className = config.forwardButtonClass;
			el.innerHTML = config.forwardButtonHTML;
			config.forwardButtonAppendTo.appendChild(el);
			$(el).bind("click", fire);
			function fire(){
				move(config.scrollCount);
				return false;
			}
			
			this.enable = enable;
			function enable(){
				$(el).removeClass(config.forwardButtonDisabledClass);
				el.innerHTML = config.forwardButtonHTML;
			}
			
			this.disable = disable;
			function disable(){
				$(el).addClass(config.forwardButtonDisabledClass);
				el.innerHTML = config.forwardButtonDisabledHTML;
			}
			
			this.setState = setState;
			function setState() {
				if(!getOption("isCircular") && (getState("currentSlideIndex") + config.scrollCount > getSlides().length-1)) {
					disable();
				}
				else {
					enable();
				}
			}
			
		});
	}
	
	if (config.startButton) {
		var startButton = new (function(){
			var el = $('<a href="#"></a>')[0];
			el.className = config.startButtonClass;
			el.innerHTML = config.startButtonHTML;
			config.startButtonAppendTo.appendChild(el);
			$(el).bind("click", fire);
			function fire(){
				play();
				return false;
			}
			
			this.enable = enable;
			function enable(){
				$(el).removeClass(config.startButtonDisabledClass);
			}
			
			this.disable = disable;
			function disable(){
				$(el).addClass(config.startButtonDisabledClass);
			}
		});
	}
	
	if (config.stopButton) {
		var stopButton = new (function(){
			var el = $('<a href="#"></a>')[0];
			el.className = config.stopButtonClass;
			el.innerHTML = config.stopButtonHTML;
			config.stopButtonAppendTo.appendChild(el);
			$(el).bind("click", fire);
			function fire(){
				stop();
				return false;
			}
			this.enable = enable;
			function enable(){
				$(el).removeClass(config.stopButtonDisabledClass);
			}
			this.disable = disable;
			function disable(){
				$(el).addClass(config.stopButtonDisabledClass);
			}
		});
	}
	
	var timer = null;
	function play() {
		setOption("automatic", true);
		timer = window.setTimeout(function(){
			move(config.automaticDirectionBackwards ? -config.scrollCount : config.scrollCount);
		}, config.automaticDelay);
		if(config.startButton) startButton.disable();
		if(config.stopButton) stopButton.enable();
	}
	
	function stop() {
		setOption("automatic", false);
		clearTimeout(timer);
		if(config.startButton) startButton.enable();
		if(config.stopButton) stopButton.disable();
	}
	
	if(config.automatic) play();
	setButtonStates();	
}
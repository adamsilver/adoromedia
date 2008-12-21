Adoro.Carousel = function(container, options) {
	var state = { currentSlide: 0, animating: false };
	var config = {
		automaticDelay: 0,
		automatic: false,
		automaticDirectionBackwards: false,
		scrollCount: 1,
		clipType: "div",
		clipClass: "clip"
	};
	var container = container || null;
	var clip = $(container).find(config.clipType+"."+config.clipClass)[0] || null;
	var ul = $(clip).find("ul")[0] || null;
	
	if(!ul) return;
	
	if(typeof options === "object") {
		// set config
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
		
	}
	
	function moveForwards(move) {
		
	}
	
	function moveBackwardsAnimate(move) {
		
	}
	
	function moveForwardsAnimate(move) {
		
	}

	function isAbleToGoBackwards() {
		
	}
	
	function isAbleToGoForwards() {
		
	}
	
	function getSlides(from, to) {
		var lis = [];
		var allLis = $(ul).find("li");
		var li = null;
		for(var i = allLis.length-1; i>=0; i--) {
			li = allLis[i];
			if(from !== undefined && i<from) continue;
			if(to !== undefined && i>to-1) continue;
			if (li.parentNode !== ul) continue;
			lis.push(li);
		}
		lis.reverse();
		return lis;
	}
	
	function getSlidesDimensions(slides) {
		var lis = slides;
		var dimensions = {width:0, height: 0};
		var li;
		for(var i = lis.length-1; i>=0; i--) {
			li = lis[i];
			if (li.parentNode !== ul) continue;
			dimensions.height = dimensions.height + $(li).outerHeight({margin: true});
			dimensions.width = dimensions.width + $(li).outerWidth({margin: true});
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
	function getOption(key) {
		return state[key];
	}
	
	var indicators = [];
	var indicatorContainer = $('<div></div>')[0];
	indicatorContainer.className = config.indicatorContainerClass;
	config.indicatorAppend.appendChild(indicatorContainer);
	//for(var i = 0; i<indicatorLis.length; i++) {
	//	if(i % config.scrollCount > 0) continue;	
	//}
	
	function Indicator(value) {
		this.el = el;
		var el = $('<a href="#"></a>')[0];
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
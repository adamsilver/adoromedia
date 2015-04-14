var App = App || {};
/**
* handles the toggling of the news section
* @constructor
* @static
*/		
App.NewsToggler = new (function() {
	$(init);
	var news = null,
		article = null,
		showing = true,
		cssHideClass = "hide",
		cssStatusClass = "newsHidden";
	/**
	* initialises the toggler
	* @function
	* @private
	*/				
	function init() {
		news = document.getElementById("news");
		if(!news) return;
		article = $(news).find("div.article")[0] || null;
		if(!article) return;
		createToggler();
	}
	/**
	* create the toggler to handle the showing/hiding of the news panel
	* @function
	* @private
	*/			
	function createToggler() {
		var p = document.createElement("p");
		p.className = "toggler";
		var a = document.createElement("a");
		a.href = "#";
		a.innerHTML = "Show / Hide news item"
		$(a).bind("click", toggle);
		p.appendChild(a);
		$(news).find("h2").after(p);
	}
	/**
	* will show or hide the news panel
	* @function
	* @private
	*/			
	function toggle() {
		if(showing) {
			$(news).addClass(cssStatusClass);
			$(article).addClass(cssHideClass);
			setShowing(false);
		}
		else {
			$(news).removeClass(cssStatusClass);
			$(article).removeClass(cssHideClass);
			setShowing(true);
		}
		return false;
	}
	/**
	* set the showing state of the panel
	* @function
	* @private
	* @param {boolean} newValue
	*/			
	function setShowing(newValue) {
		showing = newValue;
	}
});

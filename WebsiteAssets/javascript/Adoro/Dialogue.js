
var Dialogue = new (function() {
	var $window = $(window),
		IE6 = ($.browser.msie && parseInt($.browser.version) === 6),
		FF2 = ($.browser.mozilla && parseInt($.browser.versionX) === 2),
		cssHideClass = "hide",
		Overlay = new (function() {
			var me = this,
				root = null;
			
			$(init);
			
			function fix() {
				root.css({
					height: $window.height()+"px",
					width: $window.width()+"px",
					left: $window.scrollLeft()+"px",
					top: $window.scrollTop()+"px"
				});
			}
		
			this.show = function() {
				root.css("display", "block");
				// needs to be done for when the dialogue increases the page size
				if(IE6) {
					$(dialogue).bgiframe();
					fixOverlay();
				}
			}
			
			this.hide = function() {
				root.css("display", "none");
			}
			
			function init() {
				root = $('<div/>', {
					id: "overlay"
				}).appendTo("body");
				root.bgiframe();
				if(IE6 || FF2) {
					$window.bind("resize", fix);
					$window.bind("scroll", fix);
				}
				me.hide();
			}	
			
		});
	
	function Dialogue(id) {
		id = id || "dialogue"+new Date.getTime();
		this.root = $('<div/>', {
			id: id,
			class: "dialogue"
		}).appendTo("body");
	}
	Dialogue.prototype = {
		show: function(options) {
			var position = getPosition(this.root);			
			options = options || {};
			options.x = options.x || position.x;
			options.y = options.y || position.y;
			options.showOverlay = typeof options.showOverlay === "boolean" ? options.showOverlay : true;			
			if(options.showOverlay) Overlay.show();
			setPosition(this.root, options.x, options.y);
			this.root.removeClass(cssHideClass);
			this.root.bgiframe();
		},
		hide: function(options) {
			options = options || {};
			options.hideOverlay = typeof options.hideOverlay === "boolean" ? options.hideOverlay : true;
			if(options.hideOverlay) Overlay.hide();		
			this.root.addClass(cssHideClass);
		},
		setHtml: function(html) {
			this.root.html(html);
		}
	}
	
	function setPosition($dialogue, x, y) {
		$dialogue.css({"left":x+"px","top":y+"px"});
	}
	
	function getPosition($dialogue) {
		return {
			x: (function(){
				var x = (($window.width()+ - $dialogue.width()) / 2) + $window.scrollLeft();
				if(x < 0) x = 0;
				return x;
			}()),
			y: (function(){
				var y = (($window.height() - $dialogue.height()) / 2) + $window.scrollTop();
				if(y < 0) y = 0;
				return y;
			}())
		}
	}
	
	return Dialogue;
});


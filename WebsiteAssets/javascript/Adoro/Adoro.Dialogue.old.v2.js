var Adoro = Adoro || {};
$(document).ready(function(){
	Adoro.Dialogue = new (function(){
		var state = {showingOverlay:false};
		var config = {
			overlayId: "overlay", // if you change this then the css must change
			dialogueId: "dialogue", // if you change this then the css must change
			closeClass: "closeDialogue"
		};
		var IE6 = ($.browser.msie && parseInt($.browser.version) === 6);
		var FF2 = ($.browser.mozilla && parseInt($.browser.versionX) === 2);
		var overlay = (function(){
			var o;
			o = document.createElement("div");
			o.id = config.overlayId;
			if(IE6 || FF2) {
				$(o).css({position: "absolute"});
			}
			document.body.appendChild(o);
			return o;
		}());
		var dialogue = (function(){
			var o;
			o = document.createElement("div");
			o.id = config.dialogueId;
			document.body.appendChild(o);
			return o;
		}());
		if(IE6 || FF2) {
			$(window).resize(fixOverlay);
			$(window).scroll(fixOverlay);
		}
		
		
		function showOverlay(options) {
			if(state.showingOverlay) return;
			var options = options || {};
			var config = {opacity: "0.8"};
			config.opacity = options.opacity || "0.8";
			$(overlay).css({opacity: config.opacity});
			$(overlay).css("display", "block");
			state.showingOverlay = true;
		}
		
	
		function hideOverlay(options){
			state.showingOverlay = false;
			$(overlay).css("display", "none");
		}
		
		
		function showDialogue(options) {
			var options = options || {};
			var config = {};
			config.showOverlay = options.showOverlay || true;
			config.closeOnOverlayClick = options.closeOnOverlayClick || true;
			config.overlayOpacity = options.overlayOpacity || "0.8";
			config.positionX = options.x || (function(){
				var x = (($(window).width()+ - $(dialogue).width()) / 2) + $(window).scrollLeft();
				if(x < 0) x = 0;
				return x;
			}());
			config.positionY = options.y || (function(){
				var y = (($(window).height() - $(dialogue).height()) / 2) + $(window).scrollTop();
				if(y < 0) y = 0;
				return y;			
			}());
	
			if (config.closeOnOverlayClick) {
				$(overlay).bind("click", hideDialogue);
			}
			else {
				$(overlay).unbind("click", hideDialogue);			
			}			
			
			if(config.showOverlay) {
				showOverlay({opacity: config.overlayOpacity});
			}
			else {
				hideOverlay();
			}
			
			setPosition(config.positionX, config.positionY);
			$(dialogue).css({"display":"block"});
			
			if(IE6) {
				$("select, object, embed").css("display", "none");
				// needs to be done for when the dialogue increases the page size
				fixOverlay();
			}
			
			
			setFocusToDialogue();
			
			return false;
		}
		
		function setFocusToDialogue() {
			var focusElement = $(dialogue).find("a, input, textarea, select")[0] || null;
			if(focusElement) {
				focusElement.focus();
			}
		}
		
		function setPosition(x, y) {
			if(x) {
				$(dialogue).css("left", x+"px");
			}
			if(y) {
				$(dialogue).css("top", y+"px");
			}
		}
		
		function hideDialogue(options) {
			var options = options || {};
			var config = {};
			config.closeOverlay = options.closeOverlay || true;
				
			$(dialogue).css({left: "-99999em"});			
			if(config.closeOverlay) {
				hideOverlay();
			}
			
			if (IE6) {
				$("select, object, embed").css("display", "block");
			}
			
			return false;
		}
		
		function setHTML(html) {
			dialogue.innerHTML = html;
			setCloseEvent();
		}
		
		function setCloseEvent() {
			$(dialogue).find("a."+config.closeClass).bind("click", hideDialogue);
		}		
		
		function fixOverlay() {
			$(overlay).css({
				height: $(window).height()+"px",
				width: $(window).width()+"px",
				left: $(window).scrollLeft()+"px",
				top: $(window).scrollTop()+"px"
			});
		}
		
		// public members
		this.showDialogue = showDialogue;
		this.hideDialogue = hideDialogue;
		this.setHTML = setHTML;	
		
	});
});


/*
 
<div>
	<div id="module1"></div>
</div>

<div>
	<div id="module2"></div>
</div>

<div>
	<div class="wrap">
		<img />
	</div>
</div>

1. get html
2. show in <div>
3. work out the dimensions
4. move the <div> appropriately and show contents so that its centered

1. get img url
2. onload of image add to div
3. work out dimensions
4. move the <div> appropriately and show contents so that its centered




Adoro.Dialogue.set
*/

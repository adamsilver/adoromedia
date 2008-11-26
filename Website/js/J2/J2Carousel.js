if (typeof J2 !== "object") var J2 = {};
addDOMReadyEvent( function() {
	document.getElementsByTagName("body")[0].getElementsByClassName( {cssClass: "carousel", callback: function() {
		new J2.Carousel(this);
	}} );
} );

J2.Carousel = function(container, options) {
	//get the ul
	var ul = container.getElementsByTagName("ul")[0] || null;
	if (!ul) return null;
	
	var config = {
		scrollCount: 1
	}
	
	if(typeof options === "object") {
		config.scrollCount = options.scrollCount || config.scrollCount;
	}
	
	//before trying to animate or do things with the carousel we need to check if it can animate, by seeing if any lis are beyond view
	
	
	
	//set ul width
	ul.setStyle("width", (function() {
		var	lis = this.getElementsByTagName("li"),
		li,
		i = lis.length-1,
		width = 0;
		for (i; i>=0; i--) {
			li = lis[i];
			if (li.parentNode !== ul) continue;
			li.setStyle("float", "left");
			if (window.ActiveXObject) {
				li.setStyle("display", "inline");
			}
			width = width + li.offsetWidth + parseInt(li.getStyle("marginLeft")) + parseInt(li.getStyle("marginLeft"));
		}
		return width;
	}).call(ul));
	ul.setStyle("position", "relative");
	//setup links
	var previousLink = J2.Carousel.previousLink.cloneNode(true),
		nextLink = J2.Carousel.nextLink.cloneNode(true);
	J2.Core.bindElementTools(previousLink);
	J2.Core.bindElementTools(nextLink);
	previousLink.addEvent("click", previous_onClick);
	nextLink.addEvent("click", next_onClick);
	container.appendChild(previousLink);
	container.appendChild(nextLink);
	
	function previous_onClick() {
		var count = 0;
		//get the li on the end, and prepend
		//set the ul to -the width of the end li that was just appended
		//animate the ul to 0
		//increment count
		//oncomplete do the same thing if count has not been reached
		
	    (function prependElements(){
			var lis = ul.getElementsByTagName("li"),
				li,
				collected = [],
				i = 0,
				j = lis.length-1,
				lisProcessed = 0;
			for (j; j>=i; j--) {
				li = lis[j];
				if (li.parentNode !== ul) continue;
				collected.push(li);
				//ul.insertBefore( li, ul.firstChild )
				lisProcessed++;
				if (lisProcessed >= 3) break;
			}
			for(var i = 0;i<collected.length;i++) {
			    ul.insertBefore( collected[i], ul.firstChild )
			}
	    })();
	    var widthOfLis = (function() {
			var lis = ul.getElementsByTagName("li"),
				li,
				i = 0,
				j = lis.length,
				lisProcessed = 0,
				delta = 0;
			for (i; i<j; i++) {
				li = lis[i];
				if (li.parentNode !== ul) continue;
				delta = delta + li.offsetWidth + parseInt(li.getStyle("marginLeft")) + parseInt(li.getStyle("marginRight"));
				lisProcessed++;
				if (lisProcessed >= 3) break;
			}
			return delta;
		})();
		ul.setStyle("left", -widthOfLis);
		ul.animate( {left: 0}, 500, null);
	}
	
	function next_onClick() {
		var count = 0;
		// animate the ul the width of the next li
		// increment count by 1
		// onComplete check if the count has reached the scrollCount
		// if it hasnt yet reached it, then do the same task again
		
		
		var widthOfLis = (function() {
			var lis = ul.getElementsByTagName("li"),
				li,
				i = 0,
				j = lis.length,
				lisProcessed = 0,
				delta = 0;
			for (i; i<j; i++) {
				li = lis[i];
				if (li.parentNode !== ul) continue;
				delta = delta + li.offsetWidth + parseInt(li.getStyle("marginLeft")) + parseInt(li.getStyle("marginRight"));
				lisProcessed++;
				if (lisProcessed >= 3) break;
			}
			return delta;
		})();
		ul.animate( {left: widthOfLis * -1}, 500, null, function() {
			var lis = ul.getElementsByTagName("li"),
				li,
				collected = [],
				i = 0,
				j = lis.length,
				lisProcessed = 0;
			for (i; i<j; i++) {
				li = lis[i];
				if (li.parentNode !== ul) {
					continue;
				}
				// this line is not only appending the li to the end of
				// ul in the dom, but it also updates "lis" automatically
				// as if it is referenced
				// of the dom but it also changes the array of get 
				// elements by tag name, so the array has been updated.
				//ul.appendChild(li);
				collected.push(li);
				lisProcessed++;
				if (lisProcessed >= 3) {break;}
			}
			for(var i=0;i<collected.length;i++) {
			    ul.appendChild(collected[i]);
			}
			
			ul.setStyle("left", 0);
		});
	}
}
J2.Carousel.previousLink = document.createElement("a", {href: "#", innerHTML: "previous", cssClass: "previous"});
J2.Carousel.nextLink = document.createElement("a", {href: "#", innerHTML: "next", cssClass: "next"});
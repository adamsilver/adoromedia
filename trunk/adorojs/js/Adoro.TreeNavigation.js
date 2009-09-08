Adoro.TreeNavigation = function(root, options) {
	
	var lis = $(root).find("ul li");
	
	for(var i = 0; i < lis.length; i++) {
		var li = lis[i];
		var ul = $(lis[i]).find("> ul")[0] || null;
		if(!ul) continue;
		new Adoro.TreeNavigation.Panel(li, ul);
	};
	
};

Adoro.TreeNavigation.Panel = function(li, ul) {
	var closed = true;
	
	// config
	var time = 500;
	var cssClassActivator = "treeActivator";
	var cssClassClosed = "closed";
	var textClosed = "open";
	var textOpen = "close";
	
	// create anchor to toggle ul
	var a = document.createElement("a");
	$(a).addClass(cssClassActivator);
	$(a).addClass(cssClassClosed);
	a.href = "#";
	a.innerHTML = textClosed;
	$(a).bind("click", toggleUl);
	$(li).prepend(a);
	
	// set ul to closed
	$(ul).css("display", "none");
	
	function toggleUl() {
		if(closed) {
			openUl();
		}
		else {
			closeUl();
		};
		return false;
	};
	
	function closeUl() {
		$(ul).animate({height: "hide"},time);
		closed = true;
		a.innerHTML = textClosed;
		$(a).addClass(cssClassClosed);
	};
	
	function openUl() {
		$(ul).animate({height: "show"},time);
		closed = false;
		a.innerHTML = textOpen;
		$(a).removeClass(cssClassClosed);
	};	
	
};
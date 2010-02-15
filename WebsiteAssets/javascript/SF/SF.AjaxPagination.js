$.namespace("SF");

/**
* Create a new AjaxPagination object
* @class Represents an Ajax Paginator
* @constructor
* @name SF.AjaxPagination
* @param {HTMLElement} paginationNode As DOM node
* @param {HTMLElement} carouselNode As DOM node
* @param {Object} options
* @param {String} options.CustomEventBefore The custom event triggered as the new page is requested, defaults to Salmon.UI.CustomEvents.galleryPageRequested
* @param {String} options.CustomEventAfter The custom event triggered as the new page is changed, defaults to Salmon.UI.CustomEvents.galleryPageChanged
*/

SF.AjaxPagination = function(paginationNode, carouselNode, options) {
	if(!paginationNode || !carouselNode) return;
	var options = options || {};
	var customEventBefore = options.CustomEventBefore || Salmon.UI.CustomEvents.galleryPageRequested;
	var customEventAfter = options.CustomEventAfter || Salmon.UI.CustomEvents.galleryPageChanged;
	var indicatorNode = options.indicatorNode || null;
	var resultsDetailsNode = options.resultsDetailsNode || null;
	var pageNumberKey = options.pageNumberKey || "pn";
	var currentPage = window.location.search.unDelimit()[pageNumberKey] || 1;
	var pageCount = null; // get this from server;
	var animating = false;
	
	var Pagination = new (function(){
		var pages = [];
		var ol = $(paginationNode).find("ol")[0] || null;
		var hideClass = "hide";
		var loading = null;
		var resultsDetailHtml = (resultsDetailsNode) ? resultsDetailsNode.innerHTML : null;
		$(ol).bind("click", updateResults);
		
		addPage(currentPage, ol.innerHTML, resultsDetailHtml);
		
		var loadingIndicator = new Salmon.UI.LoadingHtml(paginationNode);
		
	
		function addPage(pageNumber, html, resultsDetailsHtml) {
			var page = new Page(pageNumber, html, resultsDetailsHtml);
			pages[pageNumber-1] = page;
			return page;
		};
		
		function Page(pageNumber, html, resultsDetailsHtml) {
			this.pageNumber = pageNumber;
			this.html = html;
			this.resultsDetailsHtml = resultsDetailsHtml;
			this.show = show;
			function show() {
				ol.innerHTML = html;
			}
		};
		
		function updateResults(e) {
			if(animating) return false;
			var target = getTargetNode(e);
			if(!target || $(target).parent().attr("class") == "refine") return;
			
			var pageNumber = getPageNumber(target);
			var page = getPage(pageNumber) || null;
			if(page) {
				$.publish(customEventAfter, { "pageNumber": pageNumber, "paginationHtml" : page.html, "resultsDetailsHtml": page.resultsDetailsHtml });
			}
			else {
				$.publish(customEventBefore);
				loadingIndicator.show();
				$.ajax({url: target.href, type: "get", dataType: "json", success: updateResultsComplete, contentType: "application/ajax" });
			}
			return false;
		};
		
		function getTargetNode(e) { 
			var t = e.target;
			// if the anchor contains an img, then the target will be an img, so set to parent
			if(t.nodeName.toUpperCase() === "IMG") {
				t = $(t).parent()[0];
			};
			if(t.nodeName.toUpperCase() !== "A") {
				t = null;
			};
			return t;
		};
		
		function getPageNumber(anchor) {
			return parseInt(anchor.href.split("?")[1].unDelimit()[pageNumberKey]) || 1
		};
		
		function getPage(pageNumber) {
			return pages[pageNumber-1];
		};
		
		function updateResultsComplete(data) {
			$.publish(customEventAfter, data);
			loadingIndicator.hide();
		};
		
		$.subscribe(customEventAfter, updatePagination);
		
		function updatePagination(e) {
			var html = unescape(e.data[0].paginationHtml) || null;
			var pageNumber = e.data[0].pageNumber || null;
			var resultsDetailsHtml = unescape(e.data[0].resultsDetailsHtml) || null;
			var page = getPage(pageNumber) || null;
			if(!page) {
				page = addPage(pageNumber, html, resultsDetailsHtml);
			}
			page.show();
		};
		
	});
	
	if(resultsDetailsNode) {
		var ResultsDetails = new (function(){
			var p = resultsDetailsNode;
			$.subscribe(customEventAfter, updateResultsDetails);
			
			function updateResultsDetails(e) {
				var html = e.data[0].resultsDetailsHtml || null;
				if(!html) return;
				p.innerHTML = html;
			};
		});
	};
	
	if(indicatorNode) {
		var Indicator = new (function(){
			var cssSelectedClass = "selected";
			var ul = $(indicatorNode).find("ul") || null;
			var nodes = $(ul).find("li");
			var pages = [];
			$.subscribe(customEventAfter, updateIndicator);
			
			addPage(currentPage, $(ul).find("li")[0].className.split(" ")[0]);
			
			$(ul).bind("click", updateResults);
			
			function updateResults(e) {
				var target = e.target;
				if(target.nodeName.toUpperCase() !== "A") return;
				var pageNumber = parseInt(target.href.unDelimit().pn) || 1;
				var page = getPage(pageNumber) || null;
				
				if(page) {
					$.publish(customEventAfter, {"pageNumber": pageNumber, "groupName": page.name } );
				}
				else {				
					$.ajax({url: target.href, type: "get", dataType: "json", success: updateResultsComplete, contentType: "application/ajax" });
				}
				return false;
			};
			
			function updateResultsComplete(data) {
				$.publish(customEventAfter, data);
			};
			
			function updateIndicator(e) {
				var name = e.data[0].groupName || null;
				var pageNumber = e.data[0].pageNumber || null;
				if(!name) return;
				var page = getPage(pageNumber) || null;
				if(!page) {
					page = addPage(pageNumber, name);
				};
				
				$(nodes).removeClass(cssSelectedClass);
				for(var i = nodes.length-1; i>=0;i--) {
					if($(nodes[i]).hasClass(name)) {
						$(nodes[i]).addClass(cssSelectedClass);
					}
				}
			};
			
			function Page(pageNumber, name) {
				var cssSelectedClass = "selected";
				this.pageNumber = pageNumber;
				this.name = name;
			};
			
			function addPage(pageNumber, name) {
				var page = new Page(pageNumber, name);
				pages[pageNumber-1] = page;	
				return page;
			};
			
			function getPage(pageNumber) {
				return pages[pageNumber-1];
			};
			
		});
	}
	
	var Carousel = new (function(){
		var pages = new Array(pageCount);
		var previousCurrent = 0;
		var hideClass = "hide";
		var ul = $(carouselNode).find("ul.pages")[0] || null;
		if(!ul) return;
		
		$(ul).css({"overflow":"hidden"});
		setUlWidth(getLisWidth());
		
		$.subscribe(customEventAfter, displayPage);
		pages[currentPage-1] = new Page($(ul).find("li")[0], currentPage);
		
		function Page(node, pageNumber) {
			this.node = node;
			this.pageNumber = pageNumber;
			this.show = show;			
			function show() {
				var currentPage = getCurrentPage();
				if(pageNumber === currentPage) return;
				var nodeWidth = $(node).outerWidth({margin: true});
				
				if(pageNumber>currentPage) {
					moveRight(nodeWidth);
				}
				else {
					moveLeft(nodeWidth);
				}
				setCurrentPage(pageNumber);
				previousCurrent = currentPage;
			};
			
			this.moveToUl = moveToUl;
			function moveToUl() {
				if(pageNumber > getCurrentPage()) {
					$(ul).append(node);
				}
				else {
					$(ul).prepend(node);
				}
				$.publish(Salmon.UI.CustomEvents.quickLookPanelsAdded);
			};
					
			this.remove = function() {
				node.parentNode.removeChild(node);
			}
		};
		
		function moveLeft(width) {
			if(animating) return false;
			$(ul).css("left", -width+"px");
			animating = true;
			$(ul).animate({"left": "0px"}, {"complete": moveComplete});		
		};
				
		function moveRight(width) {
			if(animating) return false;
			animating = true;
			$(ul).animate({"left": -width+"px"}, {"complete": moveComplete});
		};
		
		function moveComplete() {
			animating = false;
			$(ul).css("left", "0px");	
			getPage(previousCurrent).remove();
		};
		
		function setCurrentPage(value) {
			currentPage = value;
		};
		
		function getCurrentPage() {
			return currentPage;
		};
		
		function displayPage(e) {
			var pageNumber = e.data[0].pageNumber || null;
			if(!pageNumber) return;
			
			var page = getPage(pageNumber) || null;
			var html = e.data[0].pageHtml || null;
			if(!page && html) {
				addPage(html, pageNumber);
				page = getPage(pageNumber);
			}
			
			page.moveToUl();
			setUlWidth(getLisWidth());
			page.show();
		};
		
		function getPage(pageNumber) {
			return pages[pageNumber-1];
		};
		
		function addPage(html, pageNumber) {
			var li = document.createElement("li");
			li.className = "page";
			li.innerHTML = html;
			var page = new Page(li, pageNumber);
			pages[pageNumber-1] = page;		
		};
		
		function getPageToInsertAfter(pageNumber) {
			var obj = null;
			var i = pageNumber-1;
			while(i>=0) {
				if(typeof pages[i] !== "undefined") {
					obj = pages[i];
					break;
				}
				i--;
			}
			return obj;
		};

		function setUlWidth(width) {
			$(ul).css("width", width+"px");
		};
		
		function getLisWidth() {
			var width = 0,
				lis = $(ul).find("> li"),
				li = null;
				
			for(var i = lis.length-1; i>=0;i--) {
				li = lis[i];			
				if(li.parentNode !== ul) continue;
				width+=$(li).outerWidth({margin: true});
			}
			return width;
		};
		
	});
};
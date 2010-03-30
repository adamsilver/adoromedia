var views = {};
views.combo = new (function() {
	
	function render() {
		$("#combo").html(getOptionsHtml());
	}
	
	function getOptionsHtml() {
		var items = models.combo.getItems();
		var html = "";
		for(var i = 0; i < items.length; i++) {
			html += "<option>";
			html += items[i];
			html += "</option>";
		}
		return html;
	}
	
	this.render = render;
});



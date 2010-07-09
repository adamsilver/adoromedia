$.scope = function(s, f) {
	return function scope() {
		f.apply(s, arguments);
	}
}

Tabset = function(root) {
	this.tabs = root.find(".tab");
	this.panels = root.find(".tabPanel");
	this.hideAllTabs();
	$(this.panels.get(0)).show();
	this.tabs.bind("click", $.scope(this, this.tab_onClick));
}
Tabset.prototype.hideAllTabs = function() {
	this.panels.hide();
}
Tabset.prototype.tab_onClick = function(e) {
	this.hideAllTabs();
	var related = $("#"+e.target.hash.slice(1));
	related.show();
	//e.preventDefault();
}
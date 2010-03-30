var models = {};
models.combo = new (function() {
	
	var selectedIndex = -1;
	
	var items = [];
	
	function getItems() {
		return items;
	}
	
	function addItem(item) {
		items.push(item);
	}
	
	function removeItem(index) {
		items.splice(index, 1);
	}
	
	function setSelectedIndex(newVal) {
		selectedIndex = newVal;
	}
	
	function getSelectedIndex() {
		return selectedIndex;
	}
	
	this.addItem = addItem;
	this.getItems = getItems;
	this.removeItem = removeItem;	
	this.setSelectedIndex = setSelectedIndex;
	this.getSelectedIndex = getSelectedIndex;
});



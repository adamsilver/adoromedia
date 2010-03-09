var ComboBox = function(selectElement) {
	var model = {
		selectedIndex: -1,
		items: ["some value", "some other value"],
		getItems: function() {},
		addItem: function() {},
		removeItem: function() {},
		setSelectedIndex: function(value) {}
	}
	
	var view = new (function() {
		$(selectElement).bind("change", function() {
			controller.setSelectedIndex(this.selectedIndex);
		});
		
		$("a.createdElement").bind("click", function() {
			var item = prompt("asdsadsad");
			if(!item) return false;
			controller.addItem(item);
			view.render();			
		});

		this.render = function() {
			$(selectElement).html("");
			var items = model.getItems();
			for(var i = 0; i < items.length; i++) {
				$(selectElement).append('<option>'+items[i]+'</option>');
			}
		}
		
	});
	
	var controller = new (function() {
		this.setSelectedIndex = function(index) {
			// sends ajax request to server with this index, to get something else
			model.setSelectedIndex(index);
		}
		
		this.addItem = function(item) {
			model.addItem(item);
		}
	});
}




var controllers = {};
controllers.combo = new (function() {
	
	var comboBox = null;
	
	$(init);
	
	function init() {
		comboBox = document.getElementById("combo");
		if(!comboBox) return;
		setupModelData();
		setupAddButton();
		setupDeleteButton();
		setupSelectChange();
	}
	
	function setupSelectChange() {
		$(comboBox).bind("change", select_onChange);
	}
	
	function select_onChange() {
		models.combo.setSelectedIndex(this.selectedIndex);
	}
	
	function setupAddButton() {
		var a = document.createElement("a");
		a.href="#";
		a.innerHTML = "Add";	
		$(a).bind("click", addButton_onClick);
		document.body.appendChild(a);
	}
	
	function setupDeleteButton() {
		var a = document.createElement("a");
		a.href="#";
		a.innerHTML = "Delete";	
		$(a).bind("click", deleteButton_onClick);
		document.body.appendChild(a);
	}
	
	function addButton_onClick() {
		var value = prompt("Add new item");		
		if(value) {
			models.combo.addItem(value);
			views.combo.render();
		}
		return false;
	}
	
	function deleteButton_onClick() {
		var index = models.combo.getSelectedIndex();
		if(index === -1) {
			alert("Please select an option first silly!");
		}
		else {
			models.combo.removeItem(index);
			views.combo.render();
		}
		return false;
	}	
	
	function setupModelData() {
		$(comboBox).find("option").each(function(){
			models.combo.addItem(this.value);
		});
		models.combo.setSelectedIndex(comboBox.selectedIndex);
	}
	
});



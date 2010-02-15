$.namespace("SF.MyAccount");
/**
 * Handles the checkbox interaction for departments and brand room
 * @constructor
 * @static
 * @name SF.MyAccount.FavouriteDepartmentss
 */
SF.MyAccount.FavouriteDepartments = new (function(){
	var rootNode;
	$(document).ready(function() {
		rootNode = $("#departments fieldset div>ul");
		rootNode.bind("click", handleCheckboxChanges);
	});

	function handleCheckboxChanges(e) {
		if (e.forcedOriginalTarget) {
			e.target = e.forcedOriginalTarget;
		}
		if (e.target && e.target.tagName.toLowerCase() !== "input") return;
		//if it becomes checked....
		if (e.target.checked) {
			if(!e.runningOnChildrenCheck) {
				handleChecked(e);
			}	
		} else {
			if(!e.runningOnChildrenUnCheck) {
				handleUnchecked(e);
			}
		}
		if (e.runningOnClassNameCheck !== true) {
			checkClassNameThing(e.target);
		}
	}

	function handleChecked(e) {
		//deal with children
		$(e.target).parent("li").find("input").each( function() {
			this.checked = true;
			rootNode.trigger({
				type:"click",
				forcedOriginalTarget: this,
				runningOnChildrenCheck: true
			});			
		} );
		//deal with parents
		var el = e.target;
		while (el) {
			if (el.tagName && el.tagName.toLowerCase() === "li") {
				$(el).find(">input").each(function() {
					this.checked = true;
				});
			}
			el = el.parentNode;
		}
	}

	function handleUnchecked(e) {
		// lopp through all children and make it match
		$(e.target).parent("li").find("input").each( function() {
			this.checked = false;
			rootNode.trigger({
				type:"click",
				forcedOriginalTarget: this,
				runningOnChildrenUnCheck: true
			});			
		});
		
		
		var anySiblingCheckboxChecked = false;
		$(e.target).parent("li").siblings("li").each( function() {
			$(this).find(">input").each(function() {
				if (this.checked == true) {
					anySiblingCheckboxChecked = true;
					return false;
				}
			});
			if (anySiblingCheckboxChecked) {
				return false;
			}
		} );
		if (!anySiblingCheckboxChecked) {
			$(e.target).parent("li").parent("ul").parent("li").find(">input").each( function() {
				this.checked = false;
				rootNode.trigger({
					type:"click",
					forcedOriginalTarget: this
				});
			} );
		}
	}

	function checkClassNameThing(checkbox) {
		var identifier = checkbox.className;
		if (identifier === "") return;
		rootNode.find("input." + identifier).each( function() {
			if (this != checkbox) {
				var currentCheckedState = this.checked;
				this.checked = checkbox.checked;
				if (this.checked != currentCheckedState) {
					$(rootNode).trigger({
						type:"click",
						forcedOriginalTarget: this,
						runningOnClassNameCheck: true
					});
				}
			}
		} );
	}
	

});


SF.MyAccount.FavouriteTreeNav = new (function(){
	$(document).ready(init);
	
	function init() {
		var root = $("#departments .tree")[0] || null;
		new Adoro.TreeNavigation(root);
	};
});
$.namespace("SF");
/*
 *  Gift Wrap Viewer
 *  radio button selection alters giftwrap selection images
 *  implements Component interface 
 */
SF.GiftWrapViewer = new (function(){
	$(init);
	function init(){
		if (Salmon.PageContext.JSPNAME != "pggiftwrap") return;
		addEvents();
	}

	this.addEvents = addEvents;
	function addEvents() {
		// Uncheck gift receipt box if no gift message is entered
		$(".giftmessage textarea").bind("blur", 
			function() {
				$(".giftmessage textarea").each(function() {
					if(this.value == '') {
						$(this).parents('.giftwrapdetails').find('.options fieldset input').removeAttr('checked');
					}
				});
			}
		);
		
		// Check gift receipt box if gift message is entered
		$(".giftmessage textarea").bind("click focus", 
			function() {
				$(this).parents('.giftwrapdetails').find('.options fieldset input').attr('checked', 'checked');
			}
		);
		
		// Enable radio buttons if giftwrap selected
		$(".giftwrap .wrapyes").bind("click", function() {
			var container = $(this).parents(".giftwrap");
			$(container).find(".giftWrapOptions input").removeAttr("disabled");
			$(container).find(".giftWrapOptions input")[0].checked = true;
			display(container,1);
		});
		
		// On load, disable gift wrap radios if "no giftwrap" is selected
		$(".giftwrap .wrapno").each(function() {
			disable(this);
		});
		
		// On click, disable gift wrap radios if "no giftwrap" is selected
		$(".giftwrap .wrapno").bind("click", function() {
			disable(this);
		});
		
		// Assign click event to gift wrap radio buttons
		$(".giftWrapOptions input").bind("change", function() {
			// broadcast giftwrap selection
			$.publish("checkout.giftwrap", this);				
		
			//get position of this radio button in radio button list
			var input = $(this).parent();
			var radios = $(this).parent().parent();
			var position = $(radios).children().index(input) + 1;
			var container = $(this).parents('.giftwrap'); 
			
			display(container, position);
		});
	}
	function disable(input) {
		if ($(input).attr("checked") || input.tagName.toLowerCase() == 'textarea') {
			var container = $(input).parents(".giftset");
			$(container).find(".giftWrapOptions input").each(function() {
				$(this).attr("disabled","disabled");
				$(this).removeAttr("checked");
			});
			display(container, 0);
		}
	}
	function display(container, position) {
		
		//Display corresponding thumbnail
		var thumbnails = $(container).find('.productimages ul');
		$(thumbnails).find('li').hide();
		$(thumbnails).find('li').eq(position).show();

		//Update href on View Enlarged anchor
		setViewEnlargedHref(container, thumbnails, position);

	}
	function setViewEnlargedHref(container, thumbnails, position) {
		//Update href on View Enlarged anchor
		var anchor = $(container).find('.viewenlarged');
		var href = $(thumbnails).find('li').eq(position).find('img').attr('src');
		href = href.replace('small', 'large');
		anchor.attr('href', href);	
		
		if(position ===0) {
			$(container).find('.productimages').css("visibility", "hidden");
		}
		else {
			$(container).find('.productimages').css("visibility", "visible");
		}
	
	}
	
}); // end SF.GiftWrapViewer

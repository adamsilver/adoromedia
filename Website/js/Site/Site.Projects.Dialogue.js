$(document).ready(function(){
	$("p.lightBoxActivator a").click(function() {
		// could get html from ajax request etc
		var html = '';
		html += 	'<div id="dialogue01">';
		html += 		'<div class="header">'
		html +=			'<h2>Demo 01 - positioning</h2>'
		html +=			'<a href="#" class="closeDialogue">Close</a>';
		html +=		'</div>';
		html +=		'<div class="panel">';
		html +=			'<p>{x: 100, y:150, animateOverlay: true}</p>';
		html +=			'<a class="new" href="#">Show next demo</a>';
		html +=		'</div>';
		html +=	'</div>';
		
		Adoro.Dialogue.setHTML(html);
		Adoro.Dialogue.showDialogue({x: 100, y:150, animateOverlay: true});
		$("a.new").click(function(){
			// could get html from ajax request etc
			var html2 = '';
			html2 += 	'<div id="dialogue02">';
			html2 += 		'<div class="header">'
			html2 +=			'<h2>Demo 02</h2>'
			html2 +=			'<a href="#" class="closeDialogue">Close</a>';
			html2 +=		'</div>';
			html2 +=		'<div class="panel">';
			html2 +=			'<p>{animateDialogue:true, closeOnOverlayClick: false, showOverlay: true, overlayOpacity: "1"}</p>';
			html2 +=		'</div>';						
			html2 +=	'</div>';
			Adoro.Dialogue.hideDialogue();
			Adoro.Dialogue.setHTML(html2);
			Adoro.Dialogue.showDialogue({animateDialogue:true, closeOnOverlayClick: false, showOverlay: true, overlayOpacity: "1"});
			return false;
		});
		return false;
	});
});
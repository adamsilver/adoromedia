<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "lightbox"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Dialogue, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->	
		<!--#include file="../../inc/head_js.asp"-->
		
		<!--#include file="../../inc/head_css.asp"-->
		<link rel="stylesheet" href="../../css/dialogue.css" type="text/css" />
		<link rel="stylesheet" href="../../css/tooltip.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->
		<script type="text/javascript" src="../../js/JQuery/jquery.browser.js"></script>
		<script type="text/javascript" src="../../js/JQuery/jquery.bgiframe.js"></script>
		<script type="text/javascript" src="../../js/Adoro/Adoro.Dialogue.js"></script>
		<script type="text/javascript" src="../../js/Adoro/Adoro.Tooltip.js"></script>
		<script type="text/javascript" src="../../js/SWFObject/swfobject.js"></script>
		<script type="text/javascript">
			swfobject.embedSWF("../../swf/butterfly.swf", "flash", "300", "120", "9.0.0", "../../swf/expressInstall.swf", {}, {wmode: "opaque"});
		</script>
		<style type="text/css">
			
			#flash {
				margin-bottom: 20px;
			}
			
			div#dialogue01,
			div#dialogue02 {
				border: 1px solid #1D2B33;
				background-color: #ffffff;
			}
			
			div#dialogue01 div.header,
			div#dialogue02 div.header {
				overflow: hidden;
				background-color: #989D44;
				padding: 10px;
			}
			
			div#dialogue01 div.header h2,
			div#dialogue02 div.header h2 {
				float: left;
				color:#ffffff;
				font-size: 1.2em;
				font-family: arial;
				margin-bottom: 0px;
			}
			
			div#dialogue01 div.header a.closeDialogue,
			div#dialogue02 div.header a.closeDialogue {
				color: #ffffff;
				float: right;
				font-size: 1.2em;
			}
			
			div#dialogue01 {
				width: 300px;
			}
			
			div#dialogue01 div.panel {
				padding: 10px;
				background-color: #f5f5f5;
			}
			
			div#dialogue01 div.panel a.new {
				color: #1D2B33;
				font-size: 1.2em;
				display: block;
				text-align: center;
			}
			
			div#dialogue02 {
				width: 500px;
			}
			
			div#dialogue02 div.panel {
				padding: 10px;
				background-color: #f5f5f5;
			}
			
			div#dialogue02 div.panel a.new {
				color: #1D2B33;
				font-size: 1.2em;
				display: block;
				text-align: center;
			}
			
		</style>
		<script type="text/javascript">
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
		</script>
		<script type="text/javascript">
			$(document).ready(function(){
				var myTip1 = new Adoro.Tooltip($("#overlay")[0], '<div style="white-space: nowrap;">To close the LightBox press close.</div>', {showEvent: "click",delay: 2000});
			});
		</script>			
	</head>
	<body class="library">
		<div id="container">
			<div class="faux">
				<div id="controls">
					<!--#include file="../../inc/logo.asp"-->
					<!--#include file="../../inc/primaryNavigation.asp"-->
				</div>
				<div id="content">
					<h1>Dialogue</h1>
					<h2>About</h2>
					<ul class="generic">
						<li>The most lightweight and powerful LightBox (popup, dialogue, window, 
						(non)modal box) on the internet.</li>
						<li>Page is always scrollable with main scroll bar if neccessary.</li>
						<li>All HTML content is completely customisable
							<ul>
								<li>There is no set in stone close button.</li>
								<li>You can have flexible heights or widths - all depends on how you use CSS to style the html that sits inside the LightBox.</li>
							</ul>
						</li>
						<li>Works with any content from any HTML (images or forms etc), that is in the page or 
						called from an AJAX request. Not limited to the URLs in an HREF attribute.</li>
						<li>Fixed the FireFox 2 and below bug where there is no flashing cursor inside an input 
						field that is inside the LightBox.</li>
						<li>Can position in the center vertically and or horizontally, or position at specific 
						coordinates.</li>
						<li>By design you cannot spawn a new LightBox out of a LightBox, but you can replace the LightBox with new html mimicking
						the functionality.</li>
						<li>Can configure the LightBox to:
							<ul>
								<li>be modal or non-modal.</li>
								<li>close when overlay is clicked.</li>
								<li>fade-in/out when opened or closed.</li>
								<li>be a certain opacity.</li>
							</ul>
						</li>
						<li>If there are any links or form fields (i.e. focusable elements) inside the dialogue then the first 1 will be automatically focused.</li>
					</ul>
					
					<h2>Demo</h2>
					<p class="lightBoxActivator"><a href="#">Show a dialogue</a></p>
					
					<div class="form">
						<div class="field">
							<div class="indicator"><label for="iframedd">Ifame drop down test</label></div>
							<div class="singleInput">
								<select id="iframedd"><option value="1">Iframe zIndex issue fixed longer select</option></select>		
							</div>
						</div>
					</div>
					<div id="flash">
						My flash here
					</div>							
						
						
					<h2>Dependencies</h2>
					<ul class="generic">
						<li>jquery-1.2.6.js</li>
						<li>jquery.bgiframe.js</li>
						<li>jquery.browser.js</li>
						<li>Adoro.Dialogue.js</li>
					</ul>
					
					<h2>Example setup</h2>
					<!--#include file="../../inc/code/jquery.asp"-->
					<!--#include file="../../inc/code/dialogue.asp"-->						
						
				</div>
			</div>
		</div>
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
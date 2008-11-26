<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "lightbox"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Dialogue, JavaScript user interface component library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->	
		<!--#include file="../../inc/head_js.asp"-->
		
		<!--#include file="../../inc/head_css.asp"-->
		<link rel="stylesheet" href="../../css/lightbox.css" type="text/css" />
		<link rel="stylesheet" href="../../css/tooltip.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->
		<script type="text/javascript" src="../../js/JQuery/jquery.browser.js"></script>	
		<script type="text/javascript" src="../../js/Adoro/Adoro.LightBox.js"></script>
		<script type="text/javascript" src="../../js/Adoro/Adoro.Tooltip.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){
				$("a#showLightBox").click(function() {
				
					var html = '';
					html += 	'<div id="myLightBox">';
					html += 		'<div class="header">'
					html +=			'<h2>Demo 01 - positioning</h2>'
					html +=			'<a href="#" class="closeLightBox">Close</a>';
					html +=		'</div>';
					html +=		'<div class="panel">';
					html +=			'<p>Positioned at x(100), y(150).</p>';
					html +=			'<a class="new" href="#">Show next demo</a>';
					html +=		'</div>';
					html +=	'</div>';
					
					Adoro.LightBox.showOverlay();
					Adoro.LightBox.setHTML(html);
					Adoro.LightBox.showLightBox({x: 100, y:150});
					$("a.new").click(function(){
						var html2 = '';
						html2 += 	'<div id="myLightBox2">';
						html2 += 		'<div class="header">'
						html2 +=			'<h2>Demo 02 - centered</h2>'
						html2 +=			'<a href="#" class="closeLightBox">Close</a>';
						html2 +=		'</div>';
						html2 +=		'<div class="panel">';
						html2 +=			'<p>Centered as no coordinates specified.</p>';
						html2 +=		'</div>';						
						html2 +=	'</div>';
						Adoro.LightBox.hideLightBox();
						Adoro.LightBox.setHTML(html2);
						Adoro.LightBox.showLightBox();
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
					<h1>Dialogue (A.K.A. Lightbox)</h1>
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
					</ul>
					
					<h2>Demo</h2>
					<div class="lightBoxActivator">	
						<a id="showLightBox" href="#">Show a lightbox</a>
					</div>				
						
				</div>
			</div>
		</div>
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
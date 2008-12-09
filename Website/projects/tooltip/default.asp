<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "tooltip"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Tooltip, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->	
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->		
		<link rel="stylesheet" href="../../css/tooltip.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->			
		<script type="text/javascript" src="../../js/JQuery/jquery.bgiframe.js"></script>
		<script type="text/javascript" src="../../js/Adoro/Adoro.Tooltip.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){
				var myTip1 = new Adoro.Tooltip($("a.tooltipAnchor")[0], "this is the content blah", {showEvent: "click",delay: 2000});
				
				$("div.tooltipContainer div.tooltip").hide();
				var myTip2 = new Adoro.Tooltip($("div.tooltipContainer a.tooltipAnchor")[0], $("div.tooltipContainer div.tooltip")[0].innerHTML, {followMouse: true});
				
				
				(function() {
					var helpField = document.getElementById("help");
					var helpText = $("p.contextualHelp")[0];
					var left = $(helpField).position().left + $(helpField).outerWidth();
					var top = $(helpField).position().top;
					$(helpText).hide();
					var myTip3 = new Adoro.Tooltip(helpField, helpText.innerHTML, {
						showEvent: "focus",
						hideEvent: "blur",
						positionX: left,
						positionY: top
					});		
					
				}());
				
				

				
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
					<h1>Tooltip</h1>
					<h2>About</h2>
					<ul class="generic">
						<li>Create a tooltip by specifying an activator and some HTML to show inside a tooltip.</li>
						<li>The HTML for the tooltip can come from the DOM or inserted on the fly.</li>
						<li>Will check that it doesn't fall off-screen.</li>
						<li>Different tooltips can have different content and different styles.</li>
						<li>Will construct itself and destory itself on showing and hiding.</li>
						<li>Can be configured
							<ul>
								<li>to follow the mouse.</li>
								<li>to show for a certain amount of time then hide.</li>
								<li>to be a certain offset top or bottom from it's activator.</li>
							</ul>
						</li>
					</ul>
					<h2>Demo</h2>
					<p><a class="tooltipAnchor" href="#">Click tooltip</a></p>
					
					<div class="tooltipContainer">		
						<p><a class="tooltipAnchor" href="#">Hover tooltip</a></p>
						<div class="tooltip">tooltip 2</div>
					</div>
					
					<div class="form">
						<div class="field">
							<div class="indicator">
								<label for="help">Help field</label>
							</div>
							<div class="singleInput">
								<input type="text" id="help" name="help" />
								<p class="contextualHelp">This is the contextual help</p>
							</div>
						</div>
					</div>
						
				</div>
			</div>
		</div>
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
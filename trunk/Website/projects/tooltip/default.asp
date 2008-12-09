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
				var myTip1 = new Adoro.Tooltip($("a.tooltipAnchor")[0], "This is on the fly content with no styling", {showEvent: "click",delay: 2000});
				
				$("div.tooltipContainer div.tooltip").hide();
				var myTip2 = new Adoro.Tooltip($("div.tooltipContainer a.tooltipAnchor")[0], $("div.tooltipContainer div.tooltip")[0].innerHTML, {followMouse: true});
				
				
				(function() {
					var helpField = document.getElementById("help");
					var helpText = $("div.contextualHelp")[0];
					var left = $(helpField).position().left + $(helpField).outerWidth();
					var top = $(helpField).position().top;
					$(helpText).hide();
					var myTip3 = new Adoro.Tooltip(helpField, helpText.innerHTML, {
						showEvent: "focus",
						hideEvent: "blur",
						positionX: left,
						positionY: top,
						offsetLeft: 0,
						offsetTop: 0
					});		
					
				}());
			});
		</script>
		<style type="text/css">
			div.myTooltip {
				border: 1px solid #404040;
				padding: 2px 6px;
				background-color: #FFFFE1;
				font-size: 11px;
			}
			
			div.yo {
				width: 500px;
				border: 2px solid #898F2C;
				background: #ffffff;
				padding: 10px;
			}
		</style>
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
					<p><a class="tooltipAnchor" href="#">Click tooltip (no in-page content)</a></p>
					
					<div class="tooltipContainer">		
						<p><a class="tooltipAnchor" href="#">Hover tooltip (information inside page)</a></p>
						<div class="tooltip">
							<div class="myTooltip">This is a tooltip that follows the mouse, and looks like a native tooltip</div>
						</div>
					</div>
					
					<div class="form">
						<div class="field">
							<div class="indicator">
								<label for="help">Help field (information inside page)</label>
							</div>
							<div class="singleInput">
								<input type="text" id="help" name="help" />
								<div class="contextualHelp">
									<div class="yo">
										<h3>My contextual help tooltip</h3>
										<p>This is the contextual help onfocus/onblur</p>
									</div>
								</div>
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
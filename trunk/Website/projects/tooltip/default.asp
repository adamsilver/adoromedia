<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "tooltip"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Tooltip, JavaScript user interface component library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->	
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->		
		<link rel="stylesheet" href="../../css/tooltip.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->			
		<script type="text/javascript" src="../../js/Adoro/Adoro.Tooltip.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){
				var myTip1 = new Adoro.Tooltip($("a.tooltipAnchor")[0], "this is the content blah", {showEvent: "click",delay: 2000});
				
				$("div.tooltipContainer div.tooltip").hide();
				var myTip2 = new Adoro.Tooltip($("div.tooltipContainer a.tooltipAnchor")[0], $("div.tooltipContainer div.tooltip")[0].innerHTML, {followMouse: true});
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
						
				</div>
			</div>
		</div>
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
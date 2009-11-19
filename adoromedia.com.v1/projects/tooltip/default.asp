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
		<meta name="keywords" content="tooltip, JavaScript, jQuery, component, script, adoro, media" />
		<meta name="description" content="Tooltip jQuery JavaScript component, by Adoro Media." />

		<script type="text/javascript" src="<%=Adoro.URL%>/js/JQuery/jquery-1.3.2.min.js"></script>
		<script type="text/javascript" src="<%=Adoro.URL%>/js/JQuery/jquery.bgiframe.js"></script>
		<script type="text/javascript" src="<%=Adoro.URL%>/js/Adoro/Adoro.Tooltip.js"></script>
		<script type="text/javascript" src="<%=Adoro.URL%>/js/Site/Projects/Site.Projects.Tooltip.js"></script>
		<link rel="stylesheet" href="<%=Adoro.URL%>/css/Site/projects.css" type="text/css" />
		
	</head>
	<body class="projects">
		<div id="container">

			<h1>Tooltip</h1>
			<h2>About</h2>
			<ul>
				<li>Create a tooltip by specifying an activator and some HTML to show inside a tooltip.</li>
				<li>The HTML for the tooltip can come from the DOM or inserted on the fly.</li>
				<li>Will check that it doesn't fall off-screen.</li>
				<li>Different tooltips can have different content and different styles.</li>
				<li>Will construct itself and destroy itself on showing and hiding.</li>
				<li>Can be configured
					<ul>
						<li>to follow the mouse.</li>
						<li>to show for a certain amount of time then hide.</li>
						<li>to be a certain offset top or bottom from it's activator.</li>
					</ul>
				</li>
			</ul>
			<h2>Demo</h2>
			<p><a class="tooltipAnchor" href="#">Default tooltip</a></p>
			
			<div class="tooltipContainer">		
				<p><a class="tooltipAnchor" href="#">Tracking toolip</a></p>
				<div class="tooltip">
					<div class="yo"><p>This is a tooltip that follows the mouse, and has custom style</p></div>
				</div>
			</div>

		</div>
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>				

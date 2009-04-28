<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "accordion"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Accordion, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->	
		<meta name="keywords" content="accordion, JavaScript, jQuery, component, script, adoro, media" />
		<meta name="description" content="Accordion jQuery JavaScript component, by Adoro Media." />		
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->	
		<!--#include file="../../inc/head_cssie.asp"-->
		<script type="text/javascript" src="../../js/Adoro/Adoro.Accordion.js"></script>
		<script type="text/javascript" src="../../js/Site/Site.Projects.Accordion.js"></script>
	</head>
	<body class="projects">
		<div id="container">
			<div id="header">
				<!--#include file="../../inc/logo.asp"-->
				<!--#include file="../../inc/primaryNavigation.asp"-->
			</div>
			<div id="content">
				<%var breadCrumbParts = [Adoro.Breadcrumb.home,Adoro.Breadcrumb.projects,	{text: "Accordion"}];%>
				<!--#include file="../../inc/breadcrumb.asp"-->					
				<div id="primary">
					<h1>Accordion</h1>
					
					<h2>About</h2>
					<ul>
						<li>Lightweight accordion using the JQuery library.</li>
						<li>Can configure the animation and the event that triggers it i.e. mouseover, click etc.</li>
						<li>Supports nested accordions.</li>
						<li>Pass in an array of links. The href hash value should be the id of a div in the mark-up i.e. href="#myId".</li>
					</ul>
					
					<h2>Demo</h2>
					
					<h3>Horizontal accordion</h3>
					
					<div id="horizontalAccordion">
						<div class="header"><a href="#ha_happy">Happy</a></div>
						<div class="panel" id="ha_happy">
							<p>Happy times</p>
						</div>
						<div class="header"><a href="#ha_sad">Sad</a></div>
						<div class="panel" id="ha_sad">
							<p>Sad times</p>
						</div>
						<div class="header"><a href="#ha_ok">Ok</a></div>
						<div class="panel" id="ha_ok">
							<p>Ok times</p>
						</div>	
					</div>
					
					<h3>Vertical accordion</h3>
					<div id="verticalAccordion">
						<div class="header"><a href="#va_happy">Happy</a></div>
						<div class="panel" id="va_happy">
							<p>Happy times</p>
						</div>
						<div class="header"><a href="#va_sad">Sad</a></div>
						<div class="panel" id="va_sad">
							<p>Sad times</p>
						</div>
						<div class="header"><a href="#va_ok">Ok</a></div>
						<div class="panel" id="va_ok">
							<p>Ok times</p>
						</div>	
					</div>
					
				</div>
				<div id="secondary">
					<% var projectsShowDescription = false; var wrapTag = false;%>
					<!--#include file="../../inc/projectsNavigation.asp"-->
				</div>	
			</div>
			<!--#include file="../../inc/footer.asp"-->
		</div>
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
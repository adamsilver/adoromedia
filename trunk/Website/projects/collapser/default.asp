<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "collapse"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Collapser, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->
		<meta name="keywords" content="element, collapser, JavaScript, jQuery, component, script, adoro, media" />
		<meta name="description" content="Element collapser jQuery JavaScript component, by Adoro Media." />
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->
		<!--#include file="../../inc/head_cssie.asp"-->
		<script type="text/javascript" src="../../js/Adoro/Adoro.Collapser.js"></script>
		<script type="text/javascript" src="../../js/Site/Projects/Site.Projects.Collapser.js"></script>
	</head>
	<body class="projects">
		<div id="container">
			<div id="header">
				<!--#include file="../../inc/logo.asp"-->
				<!--#include file="../../inc/primaryNavigation.asp"-->
			</div>
			<div id="content">
				<%
					var breadCrumbParts = [Adoro.Breadcrumb.home,Adoro.Breadcrumb.projects,	{
						text: "Collapser"
					}];
				%>
				<!--#include file="../../inc/breadcrumb.asp"-->							
				<div id="primary">
					<h1>Collapser</h1>
					<h2>About</h2>
					<ul class="generic">
						<li>Bind an activator to hide or show a particular panel.</li>
						<li>Can have multiple collapseable areas.</li>
						<li>Works with elements already in the page or elements that are 
						dynamically inserted using progressive enhancement.</li>
						<li>Can be configured:
							<ul>
								<li>to animate or not.</li>
								<li>to set hide and show text and or html for the activator.</li>
								<li>to start open or shut on instantiation using the 
								constructor or the mark-up (useful when server dictates state).</li>
								<li>Add a custom class name to any nodes you wish when hidden - useful to style
								whole containers or sub containers when in hidden or visible mode.</li>
							</ul>
						</li>
						<li>Animation is smoother when the animating element has no padding or margins so
						put styling on an inner element in that scenario as shown in the demo.</li>
					</ul>
					<h2>Demo</h2>
				
					<div id="collapseMe">
						<a class="activator" href="#">Activator (already in page)</a>
						<div class="panel">
							<div>Panel to show</div>
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
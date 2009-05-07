<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "printbutton"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Print button, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->
		<meta name="keywords" content="print, button, JavaScript, jQuery, component, script, adoro, media" />
		<meta name="description" content="Print button, jQuery JavaScript component, by Adoro Media." />
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->
		<!--#include file="../../inc/head_cssie.asp"-->			
		<script type="text/javascript" src="../../js/Adoro/Adoro.PrintButton.js"></script>
		<script type="text/javascript" src="../../js/Site/Projects/Site.Projects.PrintButton.js"></script>
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
						text: "Print button"
					}];
				%>
				<!--#include file="../../inc/breadcrumb.asp"-->		
				<div id="primary"			
					<h1>Print button</h1>
					<h2>About</h2>
					<ul class="generic">
						<li>Make an anchor reference into a print button.</li>
					</ul>		
					<h2>Demo</h2>
					
					<div class="printPlaceHolder"><p>
						No JS running. You can still print this page by going to File, Print.
					</p></div>

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

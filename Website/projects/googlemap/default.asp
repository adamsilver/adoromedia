<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->

<% Adoro.pageName = "googlemap"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Google map, JavaScript component, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->
		<meta name="keywords" content="Google, map, JavaScript, jQuery, component, script, adoro, media" />
		<meta name="description" content="Google map, jQuery JavaScript component, by Adoro Media." />
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->
		<!--#include file="../../inc/head_cssie.asp"-->	
		<script src="http://maps.google.com/maps?file=api&amp;v=2&amp;key=ABQIAAAAcCPnNaC9ucSS0iuyWMhdNhTJZH0KQb7xxghXEcd9uA8ad5kyphRToxU0pQytWuskeRVROag3aZv_kw" type="text/javascript"></script><script type="text/javascript" src="js/J2/J2.js"></script>			
		<script type="text/javascript" src="../../js/Adoro/Adoro.GoogleMap.js"></script>
		<script type="text/javascript" src="../../js/Site/Projects/Site.Projects.GoogleMap.js"></script>
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
						text: "Google map"
					}];
				%>
				<!--#include file="../../inc/breadcrumb.asp"-->			
				<div id="primary">
					<h1>Google map</h1>
					<h2>About</h2>
					<ul class="generic">
						<li>Utilising the Google Maps API, this will create a google map.</li>
					</ul>
					<h2>Demo</h2>
					<div id="map1" class="map"></div>
					<div id="map2" class="map"></div>					
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

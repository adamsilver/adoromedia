<!--#include file="../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../inc/Adoro.asp"-->
<% Adoro.pageName = "projectHome"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Projects, Specialist website designers, Adoro Media, London, UK</title>
		<!--#include file="../inc/head_other.asp"-->
		<meta name="keywords" content="adoro, media, open, source, projects, home page, jquery, javascript, library, website, development" />
		<meta name="description" content="Adoro Media projects home page. Open source projects using jQuery JavaScript library." />		
		<!--#include file="../inc/head_js.asp"-->
		<!--#include file="../inc/head_css.asp"-->	
		<!--#include file="../inc/head_cssie.asp"-->
	</head>
	<body class="projects" id="pgProjectsHome">
		<div id="container">
			<div id="header">

				<!--#include file="../inc/logo.asp"-->
				<!--#include file="../inc/primaryNavigation.asp"-->
			</div>
			<div id="content">
				<h1>Projects</h1>
				<p>Open source projects for the world.</p>
				
				<% var projectsShowDescription = true; var wrapTag = true; %>
				<!--#include file="../inc/projectsNavigation.asp"-->

			</div>
			<!--#include file="../inc/footer.asp"-->
		</div>
		<!--#include file="../inc/ga.asp"-->
	</body>
</html>
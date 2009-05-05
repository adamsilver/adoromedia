<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "autocomplete"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Auto complete, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->	
		<meta name="keywords" content="accordion, JavaScript, jQuery, component, script, adoro, media" />
		<meta name="description" content="Accordion jQuery JavaScript component, by Adoro Media." />		
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->	
		<!--#include file="../../inc/head_cssie.asp"-->
		<script type="text/javascript" src="../../js/Adoro/Adoro.AutoComplete.js"></script>
		<script type="text/javascript" src="../../js/Site/Site.Projects.AutoComplete.js"></script>
	</head>
	<body class="projects">
		<div id="container">
			<div id="header">
				<!--#include file="../../inc/logo.asp"-->
				<!--#include file="../../inc/primaryNavigation.asp"-->
			</div>
			<div id="content">
				<%var breadCrumbParts = [Adoro.Breadcrumb.home,Adoro.Breadcrumb.projects,	{text: "Auto complete"}];%>
				<!--#include file="../../inc/breadcrumb.asp"-->					
				<div id="primary">
					<h1>Autocomplete</h1>
					
					<input type="text" id="autoCompleteField" class="text" />

					
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
<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "listcollapser"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>List collapser, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->
		<meta name="keywords" content="List collapser, JavaScript, jQuery, component, script, adoro, media" />
		<meta name="description" content="List collapser for facet navigation, jQuery JavaScript component, by Adoro Media." />	
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->
		<link rel="stylesheet" href="../../css/collapse.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->
		<script type="text/javascript" src="../../js/Adoro/Adoro.ListCollapser.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){ 
				new Adoro.ListCollapser($("div.mySpecialList a")[0], $("div.mySpecialList ul")[0], {
					limit: 3,
					startOpen: false
				});
				
				new Adoro.ListCollapser($("div.mySpecialList a")[1], $("div.mySpecialList ul")[1], {
					limit: 1,
					startOpen: false,
					showHTML: "<span>+</span> please show me more",
					hideHTML: "<span>-</span> please show me less"
				});
			});
		</script>		
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
						text: "List collapser"
					}];
				%>
				<!--#include file="../../inc/breadcrumb.asp"-->	
				<div id="primary">
					<h1>List collapser</h1>
					<h2>About</h2>
					<ul class="generic">
						<li>To control the amount of list items to show using an activator.</li>
						<li>Useful for faceted navigation or anything else you can imagine a use for.</li>
						<li>Can work with activators already in the mark-up or dynamically generated using progressive enhancement.</li>
						<li>Can set show and hide text for the activator.</li>
						<li>Can set how many list items to show when in "less" mode.</li>
						<li>Can set whether to start open or shut on instation.</li>
					</ul>
					<h2>Demo</h2>
					<div class="mySpecialList">
						<ul class="generic">
							<li>Information</li>
							<li>Information</li>
							<li>Information</li>
							<li>Information</li>
							<li>Information</li>
							<li>Information</li>
							<li>Information</li>
						</ul>
						<p><a href="#">activator</a></p>
					</div>
					
					<div class="mySpecialList">
						<ul class="generic">
							<li>Information</li>
							<li>Information</li>
							<li>Information</li>
							<li>Information</li>
							<li>Information</li>
							<li>Information</li>
							<li>Information</li>
						</ul>
						<p><a href="#">activator</a></p>
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

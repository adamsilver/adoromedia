<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "lightbox"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Lightbox, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->
		<meta name="keywords" content="Lightbox, dialogue, window, popup, JavaScript, jQuery, component, script, adoro, media" />
		<meta name="description" content="Lightbox dialogue image gallery, jQuery JavaScript component, by Adoro Media." />
		<!--#include file="../../inc/head_js.asp"-->
		<!--#include file="../../inc/head_css.asp"-->
		<link rel="stylesheet" href="../../css/dialogue.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->
		<script type="text/javascript" src="../../js/JQuery/jquery.browser.js"></script>
		<script type="text/javascript" src="../../js/SWFObject/swfobject.js"></script>
		<script type="text/javascript" src="../../js/Adoro/Adoro.Dialogue.js"></script>
		<script type="text/javascript" src="../../js/Adoro/Adoro.Lightbox.js"></script>
		<script type="text/javascript" src="../../js/Site/Projects/Site.Projects.Lightbox.js"></script>
	</head>
	<body class="projects">
		<div id="container">
			<div id="header">
				<!--#include file="../../inc/logo.asp"-->
				<!--#include file="../../inc/primaryNavigation.asp"-->
			</div>
			<div id="content">
				<%	var breadCrumbParts = [Adoro.Breadcrumb.home,Adoro.Breadcrumb.projects,	{text:"Lightbox"}]; %>
				<!--#include file="../../inc/breadcrumb.asp"-->				
				<div id="primary">
					<h1>Lightbox</h1>
					<h2>About</h2>
					<ul>
						<li>Built on top of the very lightweight <a href="../dialogue">Dialogue (Adoro.Dialogue)</a> plugin .</li>
						<li>Accessible via keyboard navigation</li>
						<li>Very flexible - customisable IDs, HTML and CSS to create custom look and feel.</li>
					</ul>
					
					<h2>Demo</h2>
					<ul class="lightBoxDemo">
						<li><a class="lightbox" href="../../img/portfolio/cpplus.jpg"><img src="../../img/portfolio/cpplus.jpg" alt="CP Plus" width="250" height="83" /></a></li>
						<li><a class="lightbox" href="../../img/portfolio/hamleys.jpg"><img src="../../img/portfolio/hamleys.jpg" alt="Hamleys" width="250" height="83" /></a></li>
						<li><a class="lightbox" href="../../img/portfolio/flyingflowers.jpg"><img src="../../img/portfolio/flyingflowers.jpg" alt="Flying flowers" width="250" height="83" /></a></li>
					</ul>
					
					<div class="form">
						<div class="field">
							<div class="indicator"><label for="iframedd">Ifame drop down test</label></div>
							<div class="singleInput">
								<select id="iframedd"><option value="1">Iframe zIndex issue fixed longer select</option></select>		
							</div>
						</div>
					</div>
					<div id="flash">
						My flash here
					</div>
				</div>
				<div id="secondary">
					<!--#include file="../../inc/projectsNavigation.asp"-->
				</div>	
			</div>
			<!--#include file="../../inc/footer.asp"-->
		</div>
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>				

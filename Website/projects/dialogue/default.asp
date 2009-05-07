<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "dialogue"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Dialogue, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->
		<meta name="keywords" content="dialogue, JavaScript, jQuery, component, script, adoro, media" />
		<meta name="description" content="Dialogue jQuery JavaScript component, by Adoro Media." />
		<!--#include file="../../inc/head_js.asp"-->
		<!--#include file="../../inc/head_css.asp"-->
		<link rel="stylesheet" href="../../css/dialogue.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->
		<script type="text/javascript" src="../../js/JQuery/jquery.browser.js"></script>
		<script type="text/javascript" src="../../js/JQuery/jquery.bgiframe.js"></script>
		<script type="text/javascript" src="../../js/Adoro/Adoro.Dialogue.js"></script>
		<script type="text/javascript" src="../../js/SWFObject/swfobject.js"></script>
		<script type="text/javascript" src="../../js/Site/Projects/Site.Projects.Dialogue.js"></script>	
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
						text: "Dialogue"
					}];
				%>
				<!--#include file="../../inc/breadcrumb.asp"-->							
				<div id="primary">
					<h1>Dialogue</h1>
					<h2>About</h2>
					<ul>
						<li>The most lightweight and powerful LightBox (popup, dialogue, window, 
						(non)modal box) on the internet.</li>
						<li>Page is always scrollable with main scroll bar if neccessary.</li>
						<li>All HTML content is completely customisable
							<ul>
								<li>There is no set in stone close button.</li>
								<li>You can have flexible heights or widths - all depends on how you use CSS to style the html that sits inside the LightBox.</li>
							</ul>
						</li>
						<li>Works with any content from any HTML (images or forms etc), that is in the page or 
						called from an AJAX request. Not limited to the URLs in an HREF attribute.</li>
						<li>Fixed the FireFox 2 and below bug where there is no flashing cursor inside an input 
						field that is inside the LightBox.</li>
						<li>Can position in the center vertically and or horizontally, or position at specific 
						coordinates.</li>
						<li>By design you cannot spawn a new LightBox out of a LightBox, but you can replace the LightBox with new html mimicking
						the functionality.</li>
						<li>Can configure the LightBox to:
							<ul>
								<li>be modal or non-modal.</li>
								<li>close when overlay is clicked.</li>
								<li>fade-in/out when opened or closed.</li>
								<li>be a certain opacity.</li>
							</ul>
						</li>
						<li>If there are any links or form fields (i.e. focusable elements) inside the dialogue then the first 1 will be automatically focused.</li>
					</ul>
					
					<h2>Demo</h2>
					<p class="lightBoxActivator"><a href="#">Show a dialogue</a></p>
					
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
					<% var projectsShowDescription = false; var wrapTag = false;%>
					<!--#include file="../../inc/projectsNavigation.asp"-->
				</div>				
										
			</div>
			<!--#include file="../../inc/footer.asp"-->
		</div>
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
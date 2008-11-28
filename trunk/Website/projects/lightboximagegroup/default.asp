<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "lightbox"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>LightBox Image group, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->	
		<!--#include file="../../inc/head_js.asp"-->
		
		<!--#include file="../../inc/head_css.asp"-->
		<link rel="stylesheet" href="../../css/lightbox.css" type="text/css" />
		<link rel="stylesheet" href="../../css/tooltip.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->
		<script type="text/javascript" src="../../js/JQuery/jquery.browser.js"></script>
		<script type="text/javascript" src="../../js/JQuery/jquery.bgiframe.js"></script>
		<script type="text/javascript" src="../../js/Adoro/Adoro.Dialogue.js"></script>
		<script type="text/javascript" src="../../js/Adoro/Adoro.LightBoxImageGroup.js"></script>
		<script type="text/javascript" src="../../js/Adoro/Adoro.Tooltip.js"></script>
		<script type="text/javascript" src="../../js/SWFObject/swfobject.js"></script>
		<script type="text/javascript">
			swfobject.embedSWF("../../swf/snail.swf", "flash", "300", "120", "9.0.0", "../../swf/expressInstall.swf", {}, {wmode: "opaque"});
		</script>		
	</head>
	<body class="library">
		<div id="container">
			<div class="faux">
				<div id="controls">
					<!--#include file="../../inc/logo.asp"-->
					<!--#include file="../../inc/primaryNavigation.asp"-->
				</div>
				<div id="content">
					<h1>LightBox Image Group</h1>
					<h2>About</h2>
					<ul class="generic">
						<li>The most lightweight and powerful LightBox (popup, dialogue, window</li>					
					</ul>
					
					<h2>Demo</h2>
					<div class="lightBoxActivator">	
						<a id="showLightBox" class="lightBoxImage" href="../../img/logo.gif">Show a dialogue</a>
						<a class="lightBoxImage" href="../../img/logo_new.gif">Show a dialogue</a>
						<a class="lightBoxImage" href="../../img/portfolio/boots.jpg">Show a dialogue</a>
					</div>
					
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
			</div>
		</div>
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "dialogue"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Quick look, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->
		<meta name="keywords" content="dialogue, JavaScript, jQuery, component, script, adoro, media" />
		<meta name="description" content="Dialogue jQuery JavaScript component, by Adoro Media." />
		<!--#include file="../../inc/head_js.asp"-->
		<!--#include file="../../inc/head_css.asp"-->
		<link rel="stylesheet" href="../../css/dialogue.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->
		<script type="text/javascript" src="../../js/SWFObject/swfobject.js"></script>
		<script type="text/javascript" src="../../js/JQuery/jquery.browser.js"></script>
		<script type="text/javascript" src="../../js/JQuery/jquery.bgiframe.js"></script>
		<script type="text/javascript" src="../../js/Adoro/Adoro.Dialogue.js"></script>
		<script type="text/javascript">
		
		</script>
		<script type="text/javascript" src="../../js/Adoro/Adoro.QuickLook.js"></script>
		<style type="text/css">
			a.quicklook {
				position: relative;
			}
			
			a.quicklook a.quickLookButton {
				position: absolute;
				background: #ffffff;
				border: 2px solid #333333;
				padding: 10px;
				font-size: 1.1em;
				bottom: 10px;
				left: 10px;
			}
		</style>
	</head>
	<body class="library">
		<div id="container">
			<div class="faux">
				<div id="controls">
					<!--#include file="../../inc/logo.asp"-->
					<!--#include file="../../inc/primaryNavigation.asp"-->
				</div>
				<div id="content">
					<h1>Quick look</h1>
					
					<ul>
						<li><a class="quicklook" href="theurl?val1=1&val2=2&productID=1010101"><img src="../../img/carousel/1.jpg" width="150" height="118" alt=""/></a></li>
						<li><a class="quicklook" href="theurlblah?productID=1293871"><img src="../../img/carousel/1.jpg" width="150" height="118" alt=""/></a></li>
						<li><a class="quicklook" href="askdjhaasd?productID=11231"><img src="../../img/carousel/1.jpg" width="150" height="118" alt=""/></a></li>
						<li><a class="quicklook" href="productDetails.jsp?productID=2313"><img src="../../img/carousel/1.jpg" width="150" height="118" alt=""/></a></li>
					</ul>					
						
				</div>
			</div>
		</div>
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
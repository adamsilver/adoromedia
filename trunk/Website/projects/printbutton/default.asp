<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "printbutton"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Print button, JavaScript user interface component library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->	
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->	
		<link rel="stylesheet" href="../../css/printbutton.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->			
		<script type="text/javascript" src="../../js/Adoro/Adoro.PrintButton.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){
				var myprint = new Adoro.PrintButton({appendTo: $("#content")[0], buttonHTML: "Print me now", buttonClass: "myPrintClass"});
			});
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
					<h1>Print button</h1>
					<h2>About</h2>
					<ul class="generic">
						<li>Can convert an existing link or create a new link to be a print button.</li>
						<li>Can have several print buttons per page or per site.</li>
						<li>Can configure:
							<ul>
								<li>where to place the print button.</li>
								<li>The text for the button</li>
								<li>The class name for the button useful for complete custom styling.</li>
							</ul>
						</li>
					</ul>		
					<h2>Demo</h2>
				</div>
			</div>
		</div>
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
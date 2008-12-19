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
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->	
		<link rel="stylesheet" href="../../css/printbutton.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->			
		<script type="text/javascript" src="../../js/Adoro/Adoro.PrintButton.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){
				var a = $('<a href="#" class="myPrintClass">Print page!</a>')
				$("div.printPlaceHolder p").replaceWith(a);
				var myprint = new Adoro.PrintButton(a);
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
						<li>Make an anchor reference into a print button.</li>
					</ul>		
					<h2>Demo</h2>
					
					<div class="printPlaceHolder"><p>
						No JS running. You can still print this page by going to File, Print.
					</p></div>
					
					<h2>Example setup</h2>
					<!--#include file="../../inc/code/printbutton.asp"-->
					
				</div>
			</div>
		</div>
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
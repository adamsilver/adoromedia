<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<!--#include file="../../inc/Adoro.Forms.asp"-->
<!--#include file="../../inc/Adoro.DevForm.asp"-->
<% Adoro.pageName = "formvalidator"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Animation test, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->
		<meta name="keywords" content="form, validator, framework, validation, JavaScript, jQuery, component, script, adoro, media" />
		<meta name="description" content="Accessible, form validator and validation framework,  jQuery JavaScript component, by Adoro Media." />
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->	
		<!--#include file="../../inc/head_cssie.asp"-->
		<script type="text/javascript">
			$(document).ready(function(){ 
				var a = document.getElementById("activator");
				var div = document.getElementById("section");
				
				$(a).bind("click", animateIt);
				
				$(div).css("height", $(div).height());
				$(div).css("display", "none");
				
				var showing = false;
				function animateIt() {
					if(showing) {
						$(div).animate({"height":"hide"});
						showing = false;
					}
					else {
						$(div).animate({"height":"show"});
						showing = true;
					}
				};
				
			});
		</script>
		<style>
			#section .container {
				background-color: #eee;
				border: 1px solid #ffffff;
			}
		</style>
	</head>
	<body class="projects">
		<div id="container">
			
			<div id="header">
				<!--#include file="../../inc/logo.asp"-->
				<!--#include file="../../inc/primaryNavigation.asp"-->
			</div>
			<div id="content">
				<div id="primary">
					<h1>Animation test</h1>
					<a id="activator" href="#">Activate</a>
					<div id="section">
						<div class="container">
							<p>blah</p>
							<div style="padding: 10px;margin:15px 25px;">inner bit 2</div>
						</div>
					</div>
				</div>			
			</div>
			<!--#include file="../../inc/footer.asp"-->
		</div>
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
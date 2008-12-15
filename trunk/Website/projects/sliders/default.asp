<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "sliders"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Sliders test, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->	
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->	
		<link rel="stylesheet" href="../../css/tabs.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->
		<script type="text/javascript" src="../../js/JQuery/jquery.ui.all.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){
				
				var DiamondFinder = new (function(){
					var slider = document.getElementById("mySlider");
					// get values from server potentially to build this up.
					$(slider).slider( { 
						min: 10, 
						max: 100, 
						slide: function(e, ui){
							
						},
						stepping: 10,
						change: function(e, ui) {
							console.log(ui.value);
							
							// get value make a json object, post the json object				
						},
						animate: true,
						startValue: 40,
						handle: ".handle",
						axis: "horizontal"
					});					
				});
			});
		</script>
		<style type="text/css">
			div#mySlider {
				height:23px;
				position:relative;
				width:200px;
				height: 23px;
				background-color: #f5f5f5;
			}
			
			div#mySlider div.handle {
				height:23px;
				left:0px;
				position:absolute;
				top:-3px;
				width:12px;
				z-index:1;
				background-color: #CCC;
				border: 3px solid #CCC;
			}

			div#mySlider div.ui-slider-handle-active {
				border: 3px solid #898F2C;
			}
			
		</style>
	</head>
	<body class="projects">
		<div id="container">
			<div class="faux">
				<div id="controls">
					<!--#include file="../../inc/logo.asp"-->
					<!--#include file="../../inc/primaryNavigation.asp"-->
				</div>
				<div id="content">
					<h1>Sliders test</h1>
					<div id="mySlider">
						<div class="handle"></div>
					</div>
				</div>
			</div>
		</div>
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
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
					var slider1Container = $("#sliderControl01");
					var slider1Slider = $(slider1Container).find("div.slider");

					$(slider1Slider).slider( { 
						handle: ".handle",
						min: 0, 
						max: 100,
						startValue: 50,
						steps: 10,
						slide: function(e, ui){},
						change: function(e, ui) {
							console.log("Slider1 value: "+ui.value);
						}
					});
					
					$(slider1Container).find("div.values a").bind("click",function(){
						var num = parseInt(this.innerHTML);
						$(slider1Slider).slider("moveTo", num);
						return false;
					});
					

					
					// slider 2
					
					var slider2Container = $("#sliderControl02");
					var slider2Slider = $(slider2Container).find("div.slider");
					$(slider2Slider).slider( { 
						handle: ".handle",
						min: 0, 
						max: 100,
						startValue: 0,
						steps: 10,
						slide: function(e, ui){},
						change: function(e, ui) {
							console.log("Slider2 value: "+ui.value);
						}
					});
					
					$(slider2Container).find("div.values a").bind("click",function(){
						var num = parseInt(this.innerHTML);
						$(slider2Slider).slider("moveTo", num);
						return false;
					});
					
					
					
					
					
					
					
							
				});
			});
		</script>
		<style type="text/css">
			div#sliderControl01 {
				margin-bottom: 20px;
			}
			
			div#sliderControl01 div.slider {
				position:relative;
				width:200px;
				height: 26px;
				background-color: #f5f5f5;
			}
			
			div#sliderControl01 div.slider div.handle {
				height:20px;
				left:0px;
				position:absolute;
				top:0px;
				width:12px;
				z-index:1;
				background-color: #CCC;
				border: 3px solid #CCC;
			}

			div#sliderControl01 div.slider div.ui-slider-handle-active {
				border: 3px solid #898F2C;
			}
			
			div#sliderControl01 div.values {
				width:220px;
				padding-top: 4px;
			}
			
			div#sliderControl01 div.values ul {
				overflow: hidden;
				list-style: none;
			}
			
			div#sliderControl01 div.values ul li {
				float: left;
			}
			
			div#sliderControl01 div.values ul li.val0 {
				margin-right: 10px;
				margin-left: 5px;
			}
			
			div#sliderControl01 div.values ul li.val10 {
				margin-right: 6px;
			}			
			
			div#sliderControl01 div.values ul li.val20 {
				margin-right: 6px;
			}
			
			div#sliderControl01 div.values ul li.val30 {
				margin-right:7px;
			}		
			
			div#sliderControl01 div.values ul li.val40 {
				margin-right: 6px;
			}
			
			div#sliderControl01 div.values ul li.val50 {
				margin-right: 6px;
			}
			
			div#sliderControl01 div.values ul li.val60 {
				margin-right: 6px;
			}
			
			div#sliderControl01 div.values ul li.val70 {
				margin-right: 7px;
			}
			
			div#sliderControl01 div.values ul li.val80 {
				margin-right: 6px;
			}	
			
			div#sliderControl01 div.values ul li.val90 {
				margin-right: 6px;
			}
			
			
			div#sliderControl02 {
				overflow: hidden;
			}
			
			div#sliderControl02 div.slider {
				float: left;
				width: 29px;
				height: 200px;
				background: #f5f5f5;
				margin-right: 5px;
				position: relative;
			}
			
			div#sliderControl02 div.slider div.handle {
				height:12px;
				left:0px;
				position:absolute;
				top:0px;
				width:23px;
				z-index:1;
				background-color: #CCC;
				border: 3px solid #CCC;
			}

			div#sliderControl02 div.slider div.ui-slider-handle-active {
				border: 3px solid #898F2C;
			}			
			
			div#sliderControl02 div.values {
				float: left;
				width: 100px;
			}			
			
			div#sliderControl02 div.values ul {
				list-style: none;
			}
			
			div#sliderControl02 div.values ul li {
				margin-bottom: 6px;
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
					
					<h2>Horizontal control</h2>
					
					<div id="sliderControl01">
						<div class="slider">
							<div class="handle"></div>
						</div>
						<div class="values">
							<ul>
								<li class="val0"><a href="#">0</a></li>
								<li class="val10"><a href="#">10</a></li>
								<li class="val20"><a href="#">20</a></li>
								<li class="val30"><a href="#">30</a></li>
								<li class="val40"><a href="#">40</a></li>
								<li class="val50"><a href="#">50</a></li>
								<li class="val60"><a href="#">60</a></li>
								<li class="val70"><a href="#">70</a></li>
								<li class="val80"><a href="#">80</a></li>
								<li class="val90"><a href="#">90</a></li>
								<li class="val100"><a href="#">100</a></li>						
							</ul>
						</div>
					</div>
					
					
					<h2>Vertical control</h2>
					
					<div id="sliderControl02">
						<div class="slider">
							<div class="handle"></div>
						</div>
						<div class="values">
							<ul>
								<li class="val0"><a href="#">0</a></li>
								<li class="val10"><a href="#">10</a></li>
								<li class="val20"><a href="#">20</a></li>
								<li class="val30"><a href="#">30</a></li>
								<li class="val40"><a href="#">40</a></li>
								<li class="val50"><a href="#">50</a></li>
								<li class="val60"><a href="#">60</a></li>
								<li class="val70"><a href="#">70</a></li>
								<li class="val80"><a href="#">80</a></li>
								<li class="val90"><a href="#">90</a></li>
								<li class="val100"><a href="#">100</a></li>						
							</ul>
						</div>
					</div>					
					
					
					
				</div>
			</div>
		</div>
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
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
		<link rel="stylesheet" href="../../css/facets.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->
		<script type="text/javascript" src="../../js/JQuery/jquery.ui.all.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){
				if(typeof EJ !== "object") EJ = {};
				
				EJ.FacetControlMyStyle = new (function(){
					var container = document.getElementById("facetControlMyStyle");
					var slider = $(container).find("div.slider")[0] || null;
					var sliderInner = $(container).find("div.sliderInner")[0] || null;
					
					if(!container || !slider || !sliderInner) return;
					
					var config = {
						sliderHandleClass: "sliderHandle",
						sliderMaxValue: 4,
						sliderMaxWidth: 232
					}
					
					var state = {
						currentValue: 0
					}
					
					$(slider).slider( { 
						handle: "."+config.sliderHandleClass,
						min: 0, 
						max: config.sliderMaxValue,
						startValue: state.currentValue,
						steps: 4,
						slide: function(e, ui){
							setCurrentValue(ui.value);		
							setBackgroundWidth();	
						},
						change: function(e, ui) {
							//alert("fire request to server now");
						}
					});			
					
					setBackgroundWidth();
					
					function setCurrentValue(newValue) {
						state.currentValue = newValue;
					}
					
					function setBackgroundWidth() {
						var width = Math.ceil((config.sliderMaxWidth / config.sliderMaxValue) * state.currentValue) + "px";
						$(sliderInner).css("width", width);
					}					
				});
				
				
				
				
				
				EJ.FacetControlPrice = new (function(){
					var container = document.getElementById("facetControlPrice");
					var slider = $(container).find("div.slider")[0] || null;
					var sliderInner = $(container).find("div.sliderInner")[0] || null;
					
					if(!container || !slider || !sliderInner) return;
					
					var config = {
						sliderHandleClass: "sliderHandle",
						sliderMaxValue: 2000,
						sliderMaxWidth: 176
					}
					
					var state = {
						currentValue: 0
					}
					
					$(slider).slider( { 
						handle: "."+config.sliderHandleClass,
						min: 0, 
						max: config.sliderMaxValue,
						startValue: state.currentValue,
						steps: 200,
						slide: function(e, ui){
							setCurrentValue(ui.value);		
							setBackgroundWidth();	
						},
						change: function(e, ui) {
							//alert("fire request to server now");
						}
					});			
					
					setBackgroundWidth();
					
					function setCurrentValue(newValue) {
						state.currentValue = newValue;
					}
					
					function setBackgroundWidth() {
						var width = Math.ceil((config.sliderMaxWidth / config.sliderMaxValue) * state.currentValue) + "px";
						$(sliderInner).css("width", width);
					}					
				});
				/*
				var HorizontalControl = new (function(){
					var slider1Container = $("#sliderControl01");
					var slider1Slider = $(slider1Container).find("div.slider");
					var slider1Inner = $(slider1Container).find("div.sliderInner");
					
					$(slider1Slider).slider( { 
						handle: ".handle",
						min: 0, 
						max: 100,
						startValue: 50,
						steps: 10,
						slide: function(e, ui){
							$(slider1Inner).css("width", ui.value * 2+"px");
						},
						change: function(e, ui) {
							//console.log("Slider1 value: "+ui.value);
						}
					});
					
					// setting background blah.
					$(slider1Inner).css("width", 50 * 2+"px");
					
					$(slider1Container).find("div.values a").bind("click",function(){
						var num = parseInt(this.innerHTML);
						$(slider1Slider).slider("moveTo", num);
						return false;
					});
				});*/				
				
				var VerticalControl = new (function(){
					var slider2Container = $("#sliderControl02");
					var slider2Slider = $(slider2Container).find("div.slider");
					var slider2Inner = $(slider2Container).find("div.sliderInner");
					$(slider2Slider).slider( { 
						handle: ".handle",
						min: 0, 
						max: 100,
						startValue: 0,
						steps: 10,
						slide: function(e, ui){
							$(slider2Inner).css("height", ui.value * 2+"px");
						},
						change: function(e, ui) {
							//console.log("Slider2 value: "+ui.value);
						}
					});
					
					// setting background blah.
					$(slider2Inner).css("height", 0 * 2+"px");	
					
					$(slider2Container).find("div.values a").bind("click",function(){
						var num = parseInt(this.innerHTML);
						$(slider2Slider).slider("moveTo", num);
						return false;
					});					
				});				
				
				
			});
		</script>
	
		<style type="text/css">
			/*div#sliderControl01 {
				margin-bottom: 20px;
			}
			
			div#sliderControl01 div.sliderInner {
				width: 0px;
				height: 26px;
				background-color: #898F2C;
				position: absolute;
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
			}*/
			
			
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
			
			div#sliderControl02 div.sliderInner {
				width: 29px;
				height: 0px;
				background-color: #898F2C;
				position: absolute;
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
					
					<div id="facetControlMyStyle">
						<h2>My style</h2>
						
						<div class="labels">
							<p class="sleek">Sleek <span>and chic</span></p>
							<p class="dazzling">Dazzling <span>Indulgence</span></p>
						</div>
						
						<div class="slider">
							<div class="sliderInner">
								<div class="sliderHandle"></div>
							</div>
						</div>
					</div>
					
					<div id="facetControlPrice">
						<h2>Price</h2>
						
						<div class="slider">
							<div class="sliderInner">
								<div class="sliderHandle"></div>
							</div>
						</div>						
						
						<div class="labels">
							<p class="less">Less than <span>&#163;500</span></p>
							<p class="more">More than <span>&#163;2000</span></p>
						</div>
					</div>
					
					<div id="facetControlCarat">
						<h2>Carat</h2>
						
						<div class="labels">
							labels here
						</div>
						
						<div class="slider">
							<div class="sliderInner">
								<div class="sliderHandle"></div>
							</div>
						</div>	
					</div>
					
					
					<!--
					<h2>Horizontal control</h2>
					
					<div id="sliderControl01">
							<div class="slider">
								<div class="sliderInner">
									<div class="handle"></div>
								</div>
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
					-->
					
					<h2>Vertical control</h2>
					
					<div id="sliderControl02">
						<div class="slider">
							<div class="sliderInner">
								<div class="handle"></div>
							</div>
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
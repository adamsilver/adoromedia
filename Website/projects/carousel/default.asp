<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "carousel"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Carousel, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->
		<meta name="keywords" content="carousel, JavaScript, jQuery, component, script, adoro, media" />
		<meta name="description" content="Carousel jQuery JavaScript component, by Adoro Media." />
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->
		<link rel="stylesheet" href="../../css/carousel.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->
		<script type="text/javascript" src="../../js/JQuery/jquery.easing.1.3.js"></script>
		<script type="text/javascript" src="../../js/Adoro/Adoro.Carousel.js"></script>
		<script type="text/javascript" src="../../js/Adoro/Adoro.Carousel2.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){ 
				
				var node1 = document.getElementById("carousel01")
				new Adoro.Carousel(node1, {
					scrollCount: 1,
					animationSpeed: 650,
					animationEasing: "easeInOutQuad",
					animate: true,
					hasStartButton: true,
					hasStopButton: true,
					isCircular: false,
					nextButtonHTML: "",
					previousButtonHTML: "",
					stopButtonHTML: "",
					startButtonHTML: ""
				});
				
				// Carousel 2
				var node2 = document.getElementById("carousel02");
				$(node2).prepend('<div class="controls"></div>');
				var controls = $(node2).find("div.controls")[0];
				$(controls).append('<p class="goTo">Go to...</p>');
				new Adoro.Carousel(node2, {
					scrollCount: 2, 
					animationSpeed: 1100, 
					animationEasing: "swing",
					nextButtonHTML: "",
					nextButtonAppend: controls,
					previousButtonHTML: "",
					previousButtonAppend: controls,
					animate: true,
					automatic: false,
					automaticDelay: 100,
					hasIndicator: true,
					indicatorAppend: controls,
					indicatorContainerClass: "myIndicators",
					indicatorItemClass: "item",
					indicatorItemHTML: ""
				});
				
				var node3 = document.getElementById("carousel03");
				new Adoro.Carousel(node3, {
					scrollCount: 1,
					hasStartButton: true,
					hasStopButton: true,
					automaticDelay: 1000,
					nextButtonHTML: "",
					previousButtonHTML: "",
					startButtonHTML:"",
					stopButtonHTML: "",
					revealAmount: -50
				});
				
				var node4 = document.getElementById("carousel04");
				new Adoro.Carousel(node4, {
					scrollCount: 3,
					isCircular: true,
					animate: true,
					animationEasing: "easeInOutQuad",
					hasIndicator: true,
					revealAmount: -65,
					animationSpeed: 500,
					hasIndicator: true,
					indicatorContainerClass: "myIndicators",
					indicatorItemClass: "item",
					indicatorItemHTML: "",
					nextButtonHTML: "",
					previousButtonHTML: "",
					hasStartButton: true,
					hasStopButton: true,
					startButtonHTML: "",
					stopButtonHTML:""
				});
				
				
			
				var node5 = document.getElementById("carousel05");
				$(node5).after('<div class="controls5"></div>');
				var controls5 = $("div.controls5")[0];	
				new Adoro.Carousel(node5, {
					vertical: true,
					animate: true,
					previousButtonAppend: controls5,
					nextButtonAppend: controls5,
					revealAmount: -60
				});
				
				new Adoro.Carousel2(document.getElementById("carousel06"),{
					
				});
				
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
					<h1>Carousel</h1>
					<h2>About</h2>
					<ul class="generic">
						<li>Can be automatic with stop and start buttons.</li>
						<li>Can be manual with previous and next buttons.</li>
						<li>Elements can be of varying width.</li>
						<li>Can have different speeds.</li>
					</ul>
					
					<h2>Demo</h2>
					
					<h3>Example 1 (Not circular, play/stop, scroll count 1)</h3>
					
					<div id="carousel01">
						<ul>
							<li><img src="../../img/portfolio/cpplus.jpg" width="500" height="167" alt="" /></li>
							<li><img src="../../img/portfolio/flyingflowers.jpg" width="500" height="167" alt="" /></li>
							<li><img src="../../img/portfolio/gardeningdirect.jpg" width="500" height="167" alt="" /></li>
							<li><img src="../../img/portfolio/hamleys.jpg" width="500" height="167" alt="" /></li>		
							<li><img src="../../img/portfolio/houseoffraser.jpg" width="500" height="167" alt="" /></li>	
							<li><img src="../../img/portfolio/ps3.jpg" width="500" height="167" alt="" /></li>		
						</ul>
					</div>
					
					<h3>Example 2 (Item indicator, scroll count 2, is circular, custom easing)</h3>
					
					<div id="carousel02">
						<ul>
							<li><p>Lorem</p></li>
							<li><img src="../../img/portfolio/houseoffraser.jpg" width="500" height="167" alt="" /></li>
							<li><p>Ipsum</p></li>
							<li><img src="../../img/portfolio/cpplus.jpg" width="500" height="167" alt="" /></li>
							<li><p>Sam</p></li>
							<li><img src="../../img/portfolio/flyingflowers.jpg" width="500" height="167" alt="" /></li>
							<li><p>Ite</p></li>
							<li><img src="../../img/portfolio/gardeningdirect.jpg" width="500" height="167" alt="" /></li>
							<li><p>Delta</p></li>
							<li><img src="../../img/portfolio/hamleys.jpg" width="500" height="167" alt="" /></li>		
							<li><p>Max</p></li>
						</ul>
					</div>		
					
					<h3>Example 3 (Not animated, reveal amount -50, play/stop, scroll count 1, is circular)</h3>
					
					<div id="carousel03">
						<ul>
							<li><div>1</div></li>
							<li><div>2</div></li>
							<li><div>3</div></li>
							<li><div>4</div></li>
							<li><div>5</div></li>
							<li><div>6</div></li>
							<li><div>7</div></li>
							<li><div>8</div></li>
							<li><div>9</div></li>
							<li><div>10</div></li>
							<li><div>11</div></li>			
							<li><div>12</div></li>	
							<li><div>13</div></li>								
						</ul>
					</div>						
					
					<h3>Example 4 (scroll count 3, custom easing)</h3>
					
					<div id="carousel04">
						<ul>
							<li><img src="../../img/carousel/1.jpg" width="150" height="118" alt=""/></li>
							<li><img src="../../img/carousel/2.jpg" width="150" height="118" alt=""/></li>
							<li><img src="../../img/carousel/3.jpg" width="150" height="118" alt=""/></li>
							<li><img src="../../img/carousel/4.jpg" width="150" height="118" alt=""/></li>
							<li><img src="../../img/carousel/5.jpg" width="150" height="118" alt=""/></li>
							<li><img src="../../img/carousel/6.jpg" width="150" height="118" alt=""/></li>
							<li><img src="../../img/carousel/7.jpg" width="150" height="118" alt=""/></li>
						</ul>
					</div>
					
					<h3>Example 5 (Vertical)</h3>
					
					<div id="carousel05">
						<ul>
							<li><img src="../../img/carousel/1.jpg" width="150" height="118" alt=""/></li>
							<li><img src="../../img/carousel/2.jpg" width="150" height="118" alt=""/></li>
							<li><img src="../../img/carousel/3.jpg" width="150" height="118" alt=""/></li>
							<li><img src="../../img/carousel/4.jpg" width="150" height="118" alt=""/></li>
							<li><img src="../../img/carousel/5.jpg" width="150" height="118" alt=""/></li>
							<li><img src="../../img/carousel/6.jpg" width="150" height="118" alt=""/></li>
							<li><img src="../../img/carousel/7.jpg" width="150" height="118" alt=""/></li>
						</ul>
					</div>					
					
					<h3>New 1</h3>
					<div id="carousel06">
						<div class="clip">
							<ul>
								<li><img src="../../img/carousel/1.jpg" width="150" height="118" alt=""/></li>
								<li><img src="../../img/carousel/2.jpg" width="150" height="118" alt=""/></li>
								<li><img src="../../img/carousel/3.jpg" width="150" height="118" alt=""/></li>
								<li><img src="../../img/carousel/4.jpg" width="150" height="118" alt=""/></li>
								<li><img src="../../img/carousel/5.jpg" width="150" height="118" alt=""/></li>
								<li><img src="../../img/carousel/6.jpg" width="150" height="118" alt=""/></li>
								<li><img src="../../img/carousel/7.jpg" width="150" height="118" alt=""/></li>
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
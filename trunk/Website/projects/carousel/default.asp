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
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->
		<link rel="stylesheet" href="../../css/carousel.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->
		<script type="text/javascript" src="../../js/JQuery/jquery.easing.1.3.js"></script>
		<script type="text/javascript" src="../../js/Adoro/Adoro.Carousel.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){ 
				
				console.log(">>>1");
				
				var node1 = $("div.carousel")[0];
				new Adoro.Carousel(node1, {
					scrollCount: 1,
					animationSpeed: 650,
					animationEasing: "easeInOutQuad",
					animate: true,
					hasStartButton: true,
					hasStopButton: true,
					isCircular: false
				});
				
				console.log(">>>2");
				
				var node2 = $("div.carousel")[1];
				new Adoro.Carousel(node2, {
					scrollCount: 1, 
					animationSpeed: 1100, 
					animationEasing: "easeInBounce",
					nextButtonHTML: "Forwards", 
					previousButtonHTML: "Backwards",
					animate: true,
					automatic: false,
					automaticDelay: 100,
					hasStartButton: true,
					hasStopButton: true
					
				});
				
				console.log(">>>3");
				
				var node3 = $("div.carousel")[2];
				new Adoro.Carousel(node3, {
					scrollCount: 2,
					hasStartButton: true,
					hasStopButton: true,
					automaticDelay: 1000
				});
				
				console.log(">>>4");
				
				var node4 = $("div.carousel")[3];
				new Adoro.Carousel(node4, {
					scrollCount: 3,
					animate: true,
					animationEasing: "easeInOutQuad"
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
					
					<h3>Non-circular, animated carousel, that can be automatic via "start"</h3>
					
					<div class="carousel">
						<ul>
							<li><img src="../../img/portfolio/cpplus.jpg" width="500" height="167" alt="" /></li>
							<li><img src="../../img/portfolio/flyingflowers.jpg" width="500" height="167" alt="" /></li>
							<li><img src="../../img/portfolio/gardeningdirect.jpg" width="500" height="167" alt="" /></li>
							<li><img src="../../img/portfolio/hamleys.jpg" width="500" height="167" alt="" /></li>		
							<li><img src="../../img/portfolio/houseoffraser.jpg" width="500" height="167" alt="" /></li>	
							<li><img src="../../img/portfolio/ps3.jpg" width="500" height="167" alt="" /></li>		
						</ul>
					</div>
					
					<h3>Varying content, heights and widths with custom button html, with custom bounce animation</h3>
					
					<div class="carousel">
						<ul>
							<li><p>Varying content here 1</p></li>
							<li><img src="../../img/portfolio/houseoffraser.jpg" width="500" height="167" alt="" /></li>
							<li><p>Varying content here 2</p></li>
							<li><img src="../../img/portfolio/cpplus.jpg" width="500" height="167" alt="" /></li>
							<li><p>Varying content here 3</p></li>
							<li><img src="../../img/portfolio/flyingflowers.jpg" width="500" height="167" alt="" /></li>
							<li><p>Varying content here 4</p></li>
							<li><img src="../../img/portfolio/gardeningdirect.jpg" width="500" height="167" alt="" /></li>
							<li><p>Varying content here 5</p></li>
							<li><img src="../../img/portfolio/hamleys.jpg" width="500" height="167" alt="" /></li>		
							<li><p>Varying content here 6</p></li>
						</ul>
					</div>		
					
					<h3>Basic non-animated, circular, carousel with stop and start buttons</h3>
					
					<div class="carousel">
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
					
					<h3>Simple animated circular carousel</h3>
					
					<div class="carousel">
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
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
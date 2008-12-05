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
				
				var node1 = $("div.carousel")[0];
				new Adoro.Carousel(node1, {
					scrollCount: 1,
					animationSpeed: 650,
					animationEasing: "easeInOutQuad",
					animate: true,
					hasStartButton: true,
					hasStopButton: true
				});
				
				var node2 = $("div.carousel")[1];
				new Adoro.Carousel(node2, {
					scrollCount: 1, 
					animationSpeed: 1100, 
					animationEasing: "easeInBounce",
					nextButtonHTML: "Forwards", 
					previousButtonHTML: "Backwards",
					animate: true,
					automatic: false,
					automaticDelay: 0,
					hasStartButton: true,
					hasStopButton: true
					
				});
				
				var node3 = $("div.carousel")[2];
				new Adoro.Carousel(node3, {
					scrollCount: 2,
					/*automatic: true,
					automaticDelay: 1000*/
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
					
					<h3></h3>
					
					<div class="carousel">
						<ul>
							<li><img src="../../img/portfolio/cpplus.jpg" alt="" /></li>
							<li><img src="../../img/portfolio/flyingflowers.jpg" alt="" /></li>
							<li><img src="../../img/portfolio/gardeningdirect.jpg" alt="" /></li>
							<li><img src="../../img/portfolio/hamleys.jpg" alt="" /></li>		
							<li><img src="../../img/portfolio/houseoffraser.jpg" alt="" /></li>	
							<li><img src="../../img/portfolio/ps3.jpg" alt="" /></li>		
						</ul>
					</div>
					
					<h3></h3>
					
					<div class="carousel">
						<ul>
							<li><p>Varying content here 1</p></li>
							<li><img src="../../img/portfolio/houseoffraser.jpg" alt="" /></li>
							<li><p>Varying content here 2</p></li>
							<li><img src="../../img/portfolio/cpplus.jpg" alt="" /></li>
							<li><p>Varying content here 3</p></li>
							<li><img src="../../img/portfolio/flyingflowers.jpg" alt="" /></li>
							<li><p>Varying content here 4</p></li>
							<li><img src="../../img/portfolio/gardeningdirect.jpg" alt="" /></li>
							<li><p>Varying content here 5</p></li>
							<li><img src="../../img/portfolio/hamleys.jpg" alt="" /></li>		
							<li><p>Varying content here 6</p></li>
						</ul>
					</div>		
					
					<h3>No animation, scrolling through 1 item of normal content at a time.</h3>
					
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
					
					
				</div>
			</div>
		</div>
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
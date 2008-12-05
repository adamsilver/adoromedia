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
		<script type="text/javascript" src="../../js/Adoro/Adoro.Carousel.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){ 
				var carousel01 = new Adoro.Carousel($("div.carousel")[0], {
					scrollCount: 5, 
					animationSpeed: 1100, 
					nextButtonHTML: "Forwards", 
					previousButtonHTML: "Backwards"
				});
				var carousel02 = new Adoro.Carousel($("div.carousel")[1], {
					scrollCount: 2, 
					animationSpeed: 450
				});
				var carousel03 = new Adoro.Carousel($("div.carousel")[2], {
					scrollCount: 1, 
					animate: false
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
						</ul>
					</div>
					
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
				
						</ul>
					</div>		
					
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
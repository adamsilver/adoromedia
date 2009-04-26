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
		<script type="text/javascript">
			$(document).ready(function(){ 						

				new Adoro.Carousel(document.getElementById("carousel06"),{
					offsetReveal: -35,
					isCircular: true,
					indicators: false,
					automaticDelay: 500,
					animateSpeed: 500
				});

				new Adoro.Carousel(document.getElementById("carousel02"), {
					scrollCount: 2,
					isCircular: true,
					indicators: true,
					stopButton: true,
					startButton: true,
					forwardButton: true,
					backButton: true,
					automaticDirectionBackwards: false,
					animateSpeed: 1000,
					automaticDelay: 500
				});
				
				new Adoro.Carousel(document.getElementById("carousel07"), {
					scrollCount: 2,
					vertical: true,
					isCircular: true,
					indicators: true,
					stopButton: true,
					startButton: true,
					forwardButton: true,
					backButton: true,
					automaticDirectionBackwards: false,
					animateSpeed: 300,
					automaticDelay: 500
				});
			});
		</script>
	</head>
	<body class="projects">
		<div id="container">
			<div id="header">
				<!--#include file="../../inc/logo.asp"-->
				<!--#include file="../../inc/primaryNavigation.asp"-->
			</div>
			<div id="content">
				<%
					var breadCrumbParts = [Adoro.Breadcrumb.home,Adoro.Breadcrumb.projects,	{
						text: "Carousel"
					}];
				%>
				<!--#include file="../../inc/breadcrumb.asp"-->							
				<div id="primary">
					<h1>Carousel</h1>
					<h2>About</h2>
					<ul>
						<li>Uses the YUI Carousel design pattern</li>
						<li>Very highly configurable</li>
					</ul>
					
					<h2>Demo</h2>
					
					<h3>Horizontal carousel</h3>
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
					
					<h3>Horizontal carousel with mixed content</h3>
					
					<div id="carousel02">
						<div class="clip">
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
					</div>							

					<h3>Vertical carousel</h3>
					<div id="carousel07">
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
				<div id="secondary">
					<% var projectsShowDescription = false; var wrapTag = false;%>
					<!--#include file="../../inc/projectsNavigation.asp"-->
				</div>	
			</div>
			<!--#include file="../../inc/footer.asp"-->
		</div>
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
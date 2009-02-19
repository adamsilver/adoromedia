<!--#include file="inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="inc/Adoro.asp"-->
<% Adoro.pageName = "portfolio"; %>
<% Adoro.siteSection = "adoro" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Portfolio, Bespoke new media solutions, Adoro Media Ltd</title>
		<!--#include file="inc/head_other.asp"-->
		<meta name="keywords" content="adoro, media, portfolio, websites" />
		<meta name="description" content="Adoro Media website design and development portfolio." />			
		<!--#include file="inc/head_js.asp"-->
		<!--#include file="inc/head_css.asp"-->
		<link rel="stylesheet" href="<%=Adoro.URL%>css/portfolio.css" type="text/css" />
		<!--#include file="inc/head_cssie.asp"-->		
	</head>
	<body>
		<div id="container">
			<div class="faux">
				<div id="controls">
					<!--#include file="inc/logo.asp"-->
					<!--#include file="inc/primaryNavigation.asp"-->
				</div>
				<div id="content">
					<h1>Portfolio</h1>
					<p>Here is a selection of recent work. Just click the images to view the sites.</p>
					
					<!--
						Jazz swing band
						JSquared JavaScript Library
						CP Plus FM Services
						PnP Decorations
						Ad Lib Print
						Rent review services
					-->
					
					
					<ul class="portfolio">
						<li class="work">
							<h2><a href="http://www.dgretro.com">DG Retro Collectables</a></h2>
							<p>Responsible for complete design and build of user interface.</p>
							<div class="image">
								<a href="http://www.dgretro.com">
									<img src="img/portfolio/dgretro.jpg" alt="DG Retro collectables" />
								</a>
							</div>
						</li>						
						<li class="work">
							<h2><a href="http://www.cp-plus.co.uk">CP Plus Car Park Management</a></h2>
							<p>Responsible for complete design and build of user interface.</p>
							<div class="image">
								<a href="http://www.cp-plus.co.uk">
									<img src="img/portfolio/cpplus.jpg" alt="CP Plus" />
								</a>
							</div>
						</li>
						<!--
						<li class="work">
							<h2>House of Fraser</h2>
							<p>Responsible for user interface in collaboration with LBi.</p>
							<div class="image">
								<a href="http://www.houseoffraser.co.uk">
									<img src="img/portfolio/houseoffraser.jpg" alt="House of Fraser" />
								</a>
							</div>
						</li>
						<li class="work">
							<h2>Hamleys</h2>
							<p>Responsible for user interface in collaboration with LBi.</p>
							<div class="image">
								<a href="http://www.hamleys.co.uk">
									<img src="img/portfolio/hamleys.jpg" alt="Hamleys" />
								</a>
							</div>
						</li>
						<li class="work">
							<h2>USC</h2>
							<p>Responsible for user interface in collaboration with LBi.</p>
							<div class="image">
								<a href="http://www.usc.co.uk">
									<img src="img/portfolio/usc.jpg" alt="USC" />
								</a>
							</div>
						</li>
						<li class="work">
							<h2>Wyevale</h2>
							<p>Responsible for user interface in collaboration with LBi.</p>
							<div class="image">
								<a href="http://www.wyevale.co.uk">
									<img src="img/portfolio/wyevale.jpg" alt="Wyevale" />
								</a>
							</div>							
						</li>
						<li class="work">
							<h2>Flying Flowers</h2>
							<p>Responsible for user interface in collaboration with LBi.</p>
							<div class="image">
								<a href="http://www.flyingflowers.com">
									<img src="img/portfolio/flyingflowers.jpg" alt="Flying Flowers" />
								</a>
							</div>		
						</li>
						<li class="work">
							<h2>Gardening Direct</h2>
							<p>Responsible for user interface in collaboration with LBi.</p>
							<div class="image">
								<a href="http://www.gardeningdirect.com">
									<img src="img/portfolio/gardeningdirect.jpg" alt="Gardening Direct" />
								</a>
							</div>	
						</li>
						<li class="work">
							<h2>PlayStation III</h2>
							<p>Responsible for user interface in collaboration with LBi.</p>
							<div class="image">
								<a href="http://uk.playstation.com/ps3/">
									<img src="img/portfolio/ps3.jpg" alt="PlayStation 3" />
								</a>
							</div>								
						</li>
						-->
						<!--
						
						<li>UBS</li>
						<li>Motorcycle News</li>
						<li>Today's Golfer</li>-->
					</ul>
				</div>
			</div>		
		</div>
		<!--#include file="inc/footer.asp"-->
		<!--#include file="inc/ga.asp"-->
	</body>
</html>
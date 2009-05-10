<!--#include file="inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="inc/Adoro.asp"-->
<% Adoro.pageName = "portfolio"; %>
<% Adoro.siteSection = "adoro" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Our work, Expert website designers, Adoro Media Ltd</title>
		<!--#include file="inc/head_other.asp"-->
		<meta name="keywords" content="adoro, media, portfolio, websites" />
		<meta name="description" content="Adoro Media website design and development portfolio." />			
		<!--#include file="inc/head_js.asp"-->
		<!--#include file="inc/head_css.asp"-->
		<!--#include file="inc/head_cssie.asp"-->		
	</head>
	<body id="pgPortfolio" class="portfolio">
		<div id="container">
			<div id="header">
					<!--#include file="inc/logo.asp"-->
					<!--#include file="inc/primaryNavigation.asp"-->
			</div>
			<div id="content">
				<% var breadCrumbParts = [Adoro.Breadcrumb.home, {	text: "Portfolio"}]; %>
				<!--#include file="inc/breadcrumb.asp"-->				
				
				<div id="primary">
					
				    <h1>Portfolio</h1>
				    <p>Here is a selection of recent work. Just click the images to view the sites.</p>
					
				    <ul class="portfolio">
					    <li class="work">
						    <h2><a href="http://www.jsquaredjavascript.com">JSquared JavaScript Library</a></h2>		
						    <div class="image">
							    <a href="http://www.jsquaredjavascript.com">
								    <img src="img/portfolio/jsquared.jpg" alt="JSquared JavaScript Library" />
							    </a>
						    </div>
					    </li>	
					    <li class="work">
						    <h2><a href="http://www.dgretro.com">DG Retro Collectables</a></h2>
						    <div class="image">
							    <a href="http://www.dgretro.com">
								    <img src="img/portfolio/dgretro.jpg" alt="DG Retro collectables" />
							    </a>
						    </div>
					    </li>						
					    <li class="work">
						    <h2><a href="http://www.cp-plus.co.uk">CP Plus Car Park Management</a></h2>
						    <div class="image">
							    <a href="http://www.cp-plus.co.uk">
								    <img src="img/portfolio/cpplus.jpg" alt="CP Plus" />
							    </a>
						    </div>
					    </li>
					    <li class="work">
						    <h2><a href="http://www.jazzswingband.co.uk">The Mike Ellis Jazz &amp; Swing band</a></h2>
						    <div class="image">
							    <a href="http://www.jazzswingband.co.uk">
								    <img src="img/portfolio/jazzswingband.jpg" alt="Jazz Swing Band" />
							    </a>
						    </div>
					    </li>
					    <li class="work">
						    <h2><a href="http://www.pnp-decorations.co.uk">PnP Painters &amp; Decorators</a></h2>
						    <div class="image">
							    <a href="http://www.pnp-decorations.co.uk">
								    <img src="img/portfolio/pnp.jpg" alt="PnP Decorations" />
							    </a>
						    </div>
					    </li>
					    
				    </ul>
		        </div>
			    <div id="secondary">
			        <div class="testimonials">
						<h2>Testimonials</h2>
						
						<div class="testimonial">
							<h3>Grahame Rose:  CP Plus</h3>
							<p>As  Business Development Director for CP Plus it was my responsibility to redevelop the existing website 
							for search visibility, and user-friendly design purposes. After looking at a wide range of designers, we decided 
							to go with Adoro Media because they really seemed to understand the brief and what we were looking for;  we have 
							not been disappointed. Working with Adoro Media has been  speedy and efficient and altogether a great experience. 
							Adam Silver has made the process very easy and I continue to liase with Adoro Media for updates and website 
							maintenance.  The website was delivered on schedule and within an extremely cost effective budget. In short, I 
							would highly recommend Adoro's services to any business looking to maximise their presence on the web with a 
							modern, web standards compliant best-of-breed website.</p>
							<p>Website:  <a href="http://www.cp-plus.co.uk">http://www.cp-plus.co.uk</a> </p>
						</div>
						<div class="testimonial">
							<h3>Peter Perry:  PnP Decorations</h3>
							<p>We contacted Adoro media to work on our website because we liked their designs and they came highly recommended. 
							We were looking for something different, stylish and clean. Adam helped us understand our business from a clients 
							point of view which enabled us to create an easy to use holistic website. We are very happy with the design but 
							also very happy with our index in Google search engine.  Highly recommended to any business looking to gain that 
							special edge via their website.</p>
							<p>Website:  http://www.pnp-decorations.co.uk</p>
						</div>
			        </div>							      
			    </div>    
			</div>
			<!--#include file="inc/footer.asp"-->
		</div>
		<!--#include file="inc/ga.asp"-->
	</body>
</html>
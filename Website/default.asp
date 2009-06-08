<!--#include file="inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="inc/Adoro.asp"-->
<% Adoro.pageName = "home"; %>
<% Adoro.siteSection = "home" %>
<% Adoro.breadCrumbParts = [Adoro.Breadcrumb.home]; %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<!-- google site map -->
		<meta name="verify-v1" content="bGLYYM+pPuoZqafHVEOR+Nrjr6S9I03SPJX5xOSnoqU=" />
		<title>Expert website designers, Adoro Media, London, UK</title>
		<!--#include file="inc/head_other.asp"-->
		<meta name="keywords" content="adoro media, website, web, bespoke, new, media, solutions, london, UK" />
		<meta name="description" content="Adoro Media is an agency dedicated to building new media solutions. Based in London, England." />		
		<!--#include file="inc/head_css.asp"-->
		<!--#include file="inc/head_js.asp"-->
		<!--#include file="inc/head_cssie.asp"-->
		
	</head>
	<body id="pgHome" class="home">
		<div id="container">
			<div id="header">
				<!--#include file="inc/logo.asp"-->
				<!--#include file="inc/primaryNavigation.asp"-->
			</div>
			<div id="content">
				
				<!--#include file="inc/breadcrumb.asp"-->
			
				<div id="sections">
					<div id="primary">
						<div id="homePanels01">
							<div id="homeAbout">
								<h1>Expert website designers</h1>
								<p>We are a collective of expert website designers and developers. We are a 
								fresh thinking, highly energetic, digital agency, based in London. We are committed to 
								reaching new heights, in the digital arena, by providing creative and innovative solutions 
								that work.</p>
								<!--<p class="action"><a href="about.asp"><img src="img/buttons/btn_more_pink.jpg" alt="More" /></a></p>-->
							</div>
							<div id="homeFeatured">
								<div class="image">
									<a href="http://www.lawrencecodling.com"><img src="img/portfolio/lcodling.jpg" alt="Lawrence Codling, Graffiti Artist" /></a>
								</div>
								<p>Featured work: <a href="http://www.lawrencecodling.com">Lawrence Codling, Graffiti Artist</a> </p>
							</div>
						</div>
					</div>
					<div id="secondary">
						<div id="homePanels02">
							<div id="homeWant">
								<h2><a href="portfolio.asp">Website?</a></h2>
								<div class="content">
									<p>We have built varying websites, from e-commerce websites,
									to small brochure websites. All websites we have created are completely bespoke
									to meet the client's specification. We want to work with you to produce a great 
									online experience for your audience.</p>
								</div>
								<!--<p class="action"><a href="portfolio.asp"><img src="img/buttons/btn_more_orange.jpg" alt="More" /></a></p>-->
							</div>
							<div id="homeServices">
								<h2><a href="services.asp">Services</a></h2>
								<div class="content">
									<p>Some our expertise in summary:</p>
									<ul>
										<li>User friendly website design</li>
										<li>High-quality user interaction design</li>
										<li>Natural search engine optimisation</li>
									</ul>
								</div>
								<!--<p class="action"><a href="services.asp"><img src="img/buttons/btn_more_blue.jpg" alt="More" /></a></p>-->
							</div>
							<div id="homeContact">
								<h2><a href="contact.asp">Get in touch</a></h2>
								<div class="content">
									<p>We can be contacted in several ways. Visit the 
									<a href="<%=Adoro.URL%>/contact.asp">contact details</a> page
									for further information.</p>
									<p class="tel">Tel: +44 (0) 771 349 0316</p>
									<p class="email">Email: info@adoromedia.com</p>
								</div>
								<!--<p class="action"><a href="contact.asp"><img src="img/buttons/btn_more_yellow.jpg" alt="More" /></a></p>-->
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--#include file="inc/footer.asp"-->
		</div>
		<!--#include file="inc/ga.asp"-->
	</body>
</html>
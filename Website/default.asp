<!--#include file="inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="inc/Adoro.asp"-->
<% Adoro.pageName = "home"; %>
<% Adoro.siteSection = "adoro" %>
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
	<body id="pgHome">
		<div id="container">
			<div id="header">
				<!--#include file="inc/logo.asp"-->
				<!--#include file="inc/primaryNavigation.asp"-->
			</div>
			<div id="content">
				<% var breadCrumbParts = [Adoro.Breadcrumb.home]; %>
				<!--#include file="inc/breadcrumb.asp"-->
			
				<div id="sections">
					<div id="primary">
						<div id="homePanels01">
							<div id="homeAbout">
								<h1>Expert website designers</h1>
								<p><a class="action" href="#">Read more</a></p>
							</div>
							<div id="homeFeatured">
								<div class="image">
									<a href="http://www.dgretro.com"><img src="img/portfolio/dgretro.jpg" alt="David Goodman Retro Collectables" /></a>
								</div>	
							</div>
						</div>
					</div>
					<div id="secondary">
						<div id="homePanels02">
							<div id="homeWant">
								<h2>Want a website?</h2>
								<p>Whether you need a brochure site, a CMS, or an e-commerce web shop, 
								we can help you.</p>
								<p>If your site is not being found by Google or it 
								needs a fresh design then we would love to make a 
								better site for you.</p>
							</div>
							<div id="homeServices">
								<h2><a href="services.asp">Services</a></h2>
								<p>We have gained a lot of expertise across several
								disciplines in website design and development:</p>
								<ul>
									<li>User friendly website design</li>
									<li>High-end user interaction design</li>
									<li>Natural search engine optimisation</li>
								</ul>
							</div>
							<div id="homeContact">
								<h2>Contact us</h2>
								<p>We can be contacted in several ways. Visit the 
								<a href="<%=Adoro.URL%>/contact.asp">contact details</a> page
								for further information.</p>
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
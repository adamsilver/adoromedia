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
								<p>We are a collective of expert website designers and developers. We are a 
								fresh thinking, highly energetic, digital agency, based in London. We are committed to 
								reaching new heights, in the digital arena, by providing creative and innovative solutions 
								that work.</p>
								<p class="action"><a href="about.asp">Find out more</a></p>
							</div>
							<div id="homeFeatured">
								<div class="image">
									<a href="http://www.dgretro.com"><img src="img/portfolio/dgretro.jpg" alt="David Goodman Retro Collectables" /></a>
								</div>
								<p>Featured work: <a href="http://www.dgretro.com">DG Retro Collectables</a> </p>
							</div>
						</div>
					</div>
					<div id="secondary">
						<div id="homePanels02">
							<div id="homeWant">
								<h2>Website?</h2>
								<div class="content">
									<p>We research, design and implement your website from the ground, up.</p>
									<p>We have built varying websites from online e-commerce websites,
									to small brochure websites. All websites we have created are completely bespoke
									to meet the client's specification.</p>
								</div>
								<p class="action"><a href="portfolio.asp">View recent work</a></p>
							</div>
							<div id="homeServices">
								<h2>Services</h2>
								<div class="content">
									<p>Some our expertise in summary:</p>
									<ul>
										<li>User friendly website design</li>
										<li>High-quality user interaction design</li>
										<li>Natural search engine optimisation</li>
									</ul>
								</div>
								<p class="action"><a href="services.asp">In detail</a></p>
							</div>
							<div id="homeContact">
								<h2>Get in touch</h2>
								<div class="content">
									<p>We can be contacted in several ways. Visit the 
									<a href="<%=Adoro.URL%>/contact.asp">contact details</a> page
									for further information.</p>
									<p>Tel: +44 (0) 771 349 0316</p>
									<p>Email: info@adoromedia.com</p>
								</div>
								<p class="action"><a href="contact.asp">Contact form</a></p>
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
<!--#include file="inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="inc/Adoro.asp"-->
<% Adoro.pageName = "faq"; %>
<% Adoro.siteSection = "about" %>
<% Adoro.breadCrumbParts = [Adoro.Breadcrumb.home,{text: "FAQ"}];%>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<!-- google site map -->
		<meta name="verify-v1" content="bGLYYM+pPuoZqafHVEOR+Nrjr6S9I03SPJX5xOSnoqU=" />
		<title>Frequently asked questions, Expert website designers, Adoro Media</title>
		<meta name="keywords" content="List collapser, JavaScript, jQuery, component, script, adoro, media" />
		<meta name="description" content="List collapser for facet navigation, jQuery JavaScript component, by Adoro Media." />	
		<!--#include file="inc/head_js.asp"-->	
		<!--#include file="inc/head_css.asp"-->
		<!--#include file="inc/head_cssie.asp"-->	
	</head>
	<body id="pgFaq" class="about">
		<div id="container">
			<div id="header">
				<!--#include file="inc/logo.asp"-->
				<!--#include file="inc/primaryNavigation.asp"-->
			</div>
			<div id="content">
				<!--#include file="inc/breadcrumb.asp"-->
				<div id="sections">
					<div id="primary">
						<h1>Frequently asked questions</h1>
						
						<h2>How much will a website cost me?</h2>
						<h2>Do you realise I can get a 5 page site for £299?</h2>
						<h2>XHTML? CSS? Standards? Accessibility?</h2>
						<h2>Top spot in google?</h2>
						<p>Nobody in the world knows exactly how the Google algorythm works (apart from Google),
						but we know a lot about it.  We have managed to get several websites to first page and 
						even the first result for several of our clients in Google.</p>
						
						<h2>What is site maintenance?</H2>
						<p>Site maintenance is a fee paid monthly to keep your site updated with 
						new content that you provide. Most good web sites have new content updated 
						regularly. Fresh content is what will keep your visitors coming back. This 
						is an optional service that we provide for our customers. If you want to 
						maintain your website yourself you can do so.</p>
						
						<h2>Do you offer any type of discounts?</h2>
						<p>Yes, we offer discounts for schools and non profit organisations.</p>
						
						
					</div>
					<div id="secondary">
						<div id="secondaryNavigation">
							<ul>
								<li><a href="about.asp">About us</a></li>
								<li><a href="logoconcept.asp">Logo concept</a></li>
								<li><a class="selected" href="faq.asp">FAQ</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!--#include file="inc/footer.asp"-->
		</div>
		<!--#include file="inc/ga.asp"-->
	</body>
</html>
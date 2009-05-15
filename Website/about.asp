<!--#include file="inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="inc/Adoro.asp"-->
<% Adoro.pageName = "about"; %>
<% Adoro.siteSection = "about" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>About, Expert website designers, Adoro Media, London, UK</title>
		<!--#include file="inc/head_other.asp"-->
		<meta name="keywords" content="contact, adoro media, adoro, email, website design." />
		<meta name="description" content="Adoro Media contact details. Email, phone or send a message." />			
		<link rel="stylesheet" href="<%=Adoro.URL%>css/site.css" type="text/css" />
		<!--#include file="inc/head_js.asp"-->
		<!--#include file="inc/head_css.asp"-->	
		<!--#include file="inc/head_cssie.asp"-->
	</head>
	<body id="pgAbout" class="about">
		<div id="container">
			<div id="header">
				<!--#include file="inc/logo.asp"-->
				<!--#include file="inc/primaryNavigation.asp"-->
			</div>
			<div id="content">
				<% var breadCrumbParts = [Adoro.Breadcrumb.home,{text: "About"}]; %>
				<!--#include file="inc/breadcrumb.asp"-->
				<div id="primary">
					<h1>About us</h1>
					<h2>Coming up to 10 years</h2>
					<p>Not to gloat or anything but we have been in the business for almost a decade. This shows
					that we have a great deal of passion for building websites. We have a very close relationship
					with each of our clients, and this really shows in the end. </p>
					<p>When a website is launched we are always happy with the job, 
					and more importantly, so are our clients.</p>
					<h2>Affordable, high quality website design</h2>
					<p>Whilst we deliver affordable websites, we also deliver high quality websites. We manage to do 
					this because we keep costs down by being a small agency and we don't advertise. Most of the projects 
					we have worked on have come to us by word of mouth recommendation.</p>
					<p>Read our <a href="portfolio.asp">testimonials</a> for further information.</p>
				</div>
			</div>
			<!--#include file="inc/footer.asp"-->
		</div>
		<!--#include file="inc/ga.asp"-->
	</body>
</html>
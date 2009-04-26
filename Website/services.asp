<!--#include file="inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="inc/Adoro.asp"-->
<% Adoro.pageName = "services"; %>
<% Adoro.siteSection = "adoro" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<!-- google site map -->
		<meta name="verify-v1" content="bGLYYM+pPuoZqafHVEOR+Nrjr6S9I03SPJX5xOSnoqU=" />
		<title>Services, Expert website designers, Adoro Media, London, UK</title>
		<!--#include file="inc/head_other.asp"-->
		<meta name="keywords" content="adoro media, website, web, bespoke, new, media, solutions, london, UK" />
		<meta name="description" content="Adoro Media is an agency dedicated to building new media solutions, including internet and mobile website applications. Based in London, England." />		
		<!--#include file="inc/head_css.asp"-->
		<!--#include file="inc/head_js.asp"-->
		<!--#include file="inc/head_cssie.asp"-->
	</head>
	<body>
		<div id="container">
			<div id="header">
				<!--#include file="inc/logo.asp"-->	
				<!--#include file="inc/primaryNavigation.asp"-->	
			</div>
			<div id="content">
				<%
					var breadCrumbParts = [Adoro.Breadcrumb.home, {
						text: "Services"
					}];
				%>
				<!--#include file="inc/breadcrumb.asp"-->
				<div id="sections">
					<h1>Website design services</h1>
					<p>We provide a wide range of services in website design and development.</p>
					<ul class="generic">
						<li>Start-up sites and business site solutions</li>
						<li>Hand coded <abbr title="eXtensible HyperText Markup Language">XHTML</abbr> / <abbr title="Cascading Style Sheets">CSS</abbr> bespoke design</li>
						<li>Easy to use content management systems</li>
						<li>Database driven facilities</li>
						<li>E-commerce, shopping cart applications</li>
						<li>Information guidance and structure</li>
						<li>Website usability advice and consultation</li>
						<li>Domain name registration, hosting and support</li>
						<li>Audio/Video: <abbr title="Moving Picture Experts Group 3">MP3</abbr>, Real Audio, <abbr title="Moving Picture Experts Group">MPEG</abbr> etc</li>
						<li>Flash animation</li>
						<li>Search-engine optimisation and promotion</li>
						<li>Ongoing support and maintenance</li>
						<li>Accessibility</li>
						<li>Branding and logo design</li>
						<li>Marketing</li>
						<li>Advertising and email campaigns</li>
						<li>Online innovations</li>
						<li><abbr title="Compact Disk">CD</abbr>/<abbr title="Digital Video Disc">DVD</abbr> authoring</li>
						<li>Presentations</li>
						<li>Print</li>
					</ul>
					
					<h2>User friendly interface and interaction design</h2>
					<p>Lorem ipsum</p>
					<h2>Search engine optimisation</h2>
					<p>Lorem ipsum</p>
				</div>
			</div>
			<!--#include file="inc/footer.asp"-->
		</div>
		<!--#include file="inc/ga.asp"-->
	</body>
</html>
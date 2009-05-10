<!--#include file="inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="inc/Adoro.asp"-->
<% Adoro.pageName = "testimonials"; %>
<% Adoro.siteSection = "adoro" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<!-- google site map -->
		<meta name="verify-v1" content="bGLYYM+pPuoZqafHVEOR+Nrjr6S9I03SPJX5xOSnoqU=" />
		<title>Testimonials, Expert website designers, Adoro Media, London, UK</title>
		<!--#include file="inc/head_other.asp"-->
		<meta name="keywords" content="adoro media, website, web, bespoke, new, media, solutions, london, UK" />
		<meta name="description" content="Adoro Media is an agency dedicated to building new media solutions, including internet and mobile website applications. Based in London, England." />		
		<!--#include file="inc/head_css.asp"-->
		<!--#include file="inc/head_js.asp"-->
		<!--#include file="inc/head_cssie.asp"-->
	</head>
	<body id="pgTestimonial" class="testimonial">
		<div id="container">
			<div id="header">
				<!--#include file="inc/logo.asp"-->	
				<!--#include file="inc/primaryNavigation.asp"-->	
			</div>
			<div id="content">
				<%
					var breadCrumbParts = [Adoro.Breadcrumb.home, {
						text: "Testimonials"
					}];
				%>
				<!--#include file="inc/breadcrumb.asp"-->
				<div id="sections">
					<h1>Testimonial</h1>
					
				</div>
			</div>
			<!--#include file="inc/footer.asp"-->
		</div>
		<!--#include file="inc/ga.asp"-->
	</body>
</html>
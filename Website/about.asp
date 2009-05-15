<!--#include file="inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="inc/Adoro.asp"-->
<% Adoro.pageName = "about"; %>
<% Adoro.siteSection = "about" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>About, Adoro Media</title>
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
					<p>Paragraph</p>
					<h2>Affordable, high quality website design</h2>
				</div>
			</div>
			<!--#include file="inc/footer.asp"-->
		</div>
		<!--#include file="inc/ga.asp"-->
	</body>
</html>
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
		<title>Specialist website designers, Adoro Media, London, UK</title>
		<!--#include file="inc/head_other.asp"-->
		<meta name="keywords" content="adoro media, website, web, bespoke, new, media, solutions, london, UK" />
		<meta name="description" content="Adoro Media is an agency dedicated to building new media solutions. Based in London, England." />		
		<link rel="stylesheet" href="<%=Adoro.URL%>css/site.css" type="text/css" />
		
	</head>
	<body id="pgHomePage">
		<div id="container">
			<div id="header">
				<!--#include file="inc/logo.asp"-->
				<!--#include file="inc/primaryNavigation.asp"-->
			</div>
			<div id="content">
				<h1>Website design specialists</h1>
				<div id="featuredWork">
					<div id="featuredWorkInner">
						<div class="information">
							<h2>Featured work</h2>
							<p>Lorem ipsum</p>
						</div>
						<div class="carousel">
							Stuff here
						</div>
					</div>
				</div>
				<div id="sections">
					<div id="primary">
						<h2>Services</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						Donec sit amet nunc at neque lacinia congue. Sed porta. 
						Curabitur tristique. Fusce eleifend egestas dui. Nulla facilisi. 
						Donec sollicitudin augue vitae libero. Etiam cursus eros ut turpis. 
						Curabitur sapien ipsum, sagittis sed, volutpat eu, laoreet pretium.</p>
					</div>
					<div id="secondary">
						<h2>Latest work</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						Donec sit amet nunc at neque lacinia congue. Sed porta. 
						Curabitur tristique. Fusce eleifend egestas dui. Nulla facilisi.</p>
						<p>Donec sollicitudin augue vitae libero. Etiam cursus eros ut turpis. 
						Curabitur sapien ipsum, sagittis sed, volutpat eu, laoreet pretium.</p>
					</div>
					<div id="tertiary">
						<h2>Contact us</h2>
						<p>Lorem ipsum</p>
					</div>
				</div>
			</div>
			<!--#include file="inc/footer.asp"-->
		</div>
		<!--#include file="inc/ga.asp"-->
	</body>
</html>
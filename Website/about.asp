<!--#include file="inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="inc/Adoro.asp"-->
<% Adoro.pageName = "about"; %>
<% Adoro.siteSection = "about" %>
<% Adoro.breadCrumbParts = [Adoro.Breadcrumb.home,{text: "About"}]; %>
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
				<!--#include file="inc/breadcrumb.asp"-->
				<div id="primary">
					<h1>About us</h1>
					
					<h2>Introducing Adoro Media</h2>
					
					<p>Adoro Media are a collective of expert website designers and developers. We
					are a fresh thinking, highly energetic, digital agency, based in London. We are
					committed to reaching new heights, in the digital arena, by providing creative
					and innovative solutions that work.</p>
										
					<p>We have been established in the business for almost a decade and our passion
					for bespoke website design speaks for itself.</p>
					
					
					<h2>Our team, our approach</h2>
					<p>Our dynamic, engaging and vastly experienced team thrive on building strong
					client relationships, paying a very high level of attention to detail in each
					and every project. We go out of our way to deliver quality results but at a
					very affordable value. We are flexible in our approach so we can adapt to your
					unique requirements.</p>
							
				
				</div>
				<div id="secondary">
					<div id="secondaryNavigation">
						<ul>
							<li><a class="selected" href="about.asp">About us</a></li>
							<li><a href="branding-statement.asp">Branding statement</a></li>
							<!--<li><a href="faq.asp">FAQ</a></li>-->
						</ul>
					</div>
				</div>
			</div>
			<!--#include file="inc/footer.asp"-->
		</div>
		<!--#include file="inc/ga.asp"-->
	</body>
</html>
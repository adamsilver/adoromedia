<!--#include file="inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="inc/Adoro.asp"-->
<% Adoro.pageName = "logoconcept"; %>
<% Adoro.siteSection = "about" %>
<% Adoro.breadCrumbParts = [Adoro.Breadcrumb.home,{href:"about.asp",text: "About"}, {text:"Branding statement"}]; %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Branding statement, Expert website designers, Adoro Media, London, UK</title>
		<!--#include file="inc/head_other.asp"-->
		<meta name="keywords" content="contact, adoro media, adoro, email, website design." />
		<meta name="description" content="Adoro Media contact details. Email, phone or send a message." />			
		<link rel="stylesheet" href="<%=Adoro.URL%>css/site.css" type="text/css" />
		<!--#include file="inc/head_js.asp"-->
		<!--#include file="inc/head_css.asp"-->	
		<!--#include file="inc/head_cssie.asp"-->
	</head>
	<body id="pgLogoConcept" class="about">
		<div id="container">
			<div id="header">
				<!--#include file="inc/logo.asp"-->
				<!--#include file="inc/primaryNavigation.asp"-->
			</div>
			<div id="content">
				<!--#include file="inc/breadcrumb.asp"-->
				<div id="primary">
					<h1>Branding statement</h1>
					
					<p>The Arial font was used to create the Adoro brand as a celebration of its cross 
					browser compatibility. In this industry we rely heavily on things being able to work 
					cross-platform; Arial is the industry standard font for use with dynamic text. Adoro 
					Media has always practiced and promoted the notion of cross browser usability and is 
					proud to use Arial font in its branding.</p>
					<p>The 'a' character at the end of our name has been used to create our Adoro Media 
					logo. If you look closely, you can see that the counter (the partially or fully 
					enclosed space within the character) has had a diagonal strip removed from it, 
					which has transformed the shape into that of a paintbrush.</p>
					<p>This has been done to promote two ideas that Adoro Media hold dear: </p>
					
					<ol>
						<li>Firstly that at the heart of any good website is a good sense of communication 
						through design. At Adoro we pride ourselves not only on our technical expertise but 
						also on our creative know-how.</li>
						<li>Secondly we believe that by removing something from an equation it is also 
						possible to add something. The best ideas are nearly always the simple ones.</li>
					</ol>
					
				</div>
				<div id="secondary">
					<div id="secondaryNavigation">
						<ul>
							<li><a href="about.asp">About us</a></li>
							<li><a class="selected" href="branding-statement.asp">Branding statement</a></li>
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
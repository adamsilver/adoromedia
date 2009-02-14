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
		<title>Services, Website design and development, Adoro Media Ltd</title>
		<!--#include file="inc/head_other.asp"-->
		<meta name="keywords" content="adoro media, website, web, bespoke, new, media, solutions, london, UK" />
		<meta name="description" content="Adoro Media is an agency dedicated to building new media solutions, including internet and mobile website applications. Based in London, England." />		
		<!--#include file="inc/head_css.asp"-->
		<!--#include file="inc/head_js.asp"-->
		<script type="text/javascript" src="<%=Adoro.URL%>js/Adoro/Adoro.ListAnimator.js"></script>
		<script type="text/javascript">
			/*$(document).ready(function(){				
				var lis = $("ul.generic li");
				var start = {"paddingLeft": "30px","opacity": "0"};
				var end = {"paddingLeft": "-=30px", "opacity":"1"};
				var speed = 100;
				new Adoro.ListAnimator(lis, {cssStart: start, cssEnd: end, speed: speed}).start();
			});*/
		</script>

		<!--#include file="inc/head_cssie.asp"-->
	</head>
	<body>
		<div id="container">
			<div class="faux">
				<div id="controls">
					<!--#include file="inc/logo.asp"-->	
					<!--#include file="inc/primaryNavigation.asp"-->	
				</div>
				<div id="content">
					<h1>Full list of website design services</h1>
					<p>We provide quite a wide spread of services in website design and development.</p>
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
						<li>Accessbility</li>
						<li>Branding and logo design</li>
						<li>Marketing</li>
						<li>Advertising and email campaigns</li>
						<li>Online innovations</li>
						<li><abbr title="Compact Disk">CD</abbr>/<abbr title="Digital Video Disc">DVD</abbr> authoring</li>
						<li>Presentations</li>
						<li>Print</li>
					</ul>
				</div>
			</div>
		</div>
		<!--#include file="inc/footer.asp"-->
		<!--#include file="inc/ga.asp"-->
	</body>
</html>
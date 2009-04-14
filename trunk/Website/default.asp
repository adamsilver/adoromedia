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
		<title>Making websites adorable</title>
		<!--#include file="inc/head_other.asp"-->
		<meta name="keywords" content="adoro media, website, web, bespoke, new, media, solutions, london, UK" />
		<meta name="description" content="Adoro Media is an agency dedicated to building new media solutions. Based in London, England." />		
		
		<script type="text/javascript" src="<%=Adoro.URL%>js/JQuery/jquery-1.2.6.js"></script>
		<script type="text/javascript" src="<%=Adoro.URL%>js/Adoro/Adoro.Carousel.js"></script>
		<script type="text/javascript" src="<%=Adoro.URL%>js/Site/Site.SampleWork.js"></script>
		<link rel="stylesheet" href="<%=Adoro.URL%>css/site.css" type="text/css" />
		
	</head>
	<body id="pg<%=Adoro.pageName%>">
		<div id="container">
			<div id="header">
				<div id="headerInner">
					<!--#include file="inc/logo.asp"-->
					<!--#include file="inc/primaryNavigation.asp"-->
				</div>
			</div>
			<div id="content">
				<div id="contentInner">
					<div id="primary">
						<h1>Making <strong>better</strong> websites</h1>
					</div>
					<div id="secondary">
						<div id="sampleWork">
							<div class="clip">
								<ul>
									<li>
										<div class="image"><img src="<%=Adoro.URL%>img/work/cpplus.png" /></div>										
									</li>
									<li>
										<div class="image"><img src="<%=Adoro.URL%>img/work/jazzswingband.png" /></div>										
									</li>
									<li>
										<div class="image"><img src="<%=Adoro.URL%>img/work/jazzswingband.png" /></div>											
									</li>																	
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--#include file="inc/ga.asp"-->
	</body>
</html>
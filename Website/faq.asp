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
						<p>Coming to a screen near you, very soon</p>
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
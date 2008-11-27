<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<!--#include file="../../inc/Adoro.CheckLogin.asp"-->
<% Adoro.pageName = "autofade"; %>
<% Adoro.siteSection = "library" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Auto fade, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->	
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->	
		<link rel="stylesheet" href="../../css/autofade.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->	
		<script type="text/javascript" src="../../js/Adoro/Adoro.AutoFade.js"></script>		
	</head>
	<body class="library">
		<div id="container">
			<!--#include file="../../inc/header.asp"-->
			<div id="subContent">
				<!--#include file="../../inc/libraryNavigation.asp"-->
			</div>
			<div id="content">
				<h1>Auto fade</h1>
				<div class="devNotes">
					<div class="heading">					
						<h2>Development notes</h2>
					</div>
					<div class="collapseable">
						<ul class="generic">
							<li>A fading carousel effect.</li>
							<li>Uses the <a href="http://www.jquery.com">JQuery</a> JavaScript library.</li>
						</ul>
					</div>
				</div>
	
				<div class="promotions">
					<ul>
						<li class="promo">
							<div class="promo1">Promotion 1</div>
						</li>
						<li class="promo">
							<div class="promo2">Promotion 2</div>
						</li>					
						<li class="promo">
							<div class="promo3">Promotion 3</div>
						</li>
						<li class="promo">
							<div class="promo4">Promotion 4</div>
						</li>									
					</ul>
				</div>

				<div class="promotions">
					<ul>
						<li class="promo">
							<div class="promo1">Promotion 1</div>
						</li>
						<li class="promo">
							<div class="promo2">Promotion 2</div>
						</li>					
						<li class="promo">
							<div class="promo3">Promotion 3</div>
						</li>
						<li class="promo">
							<div class="promo4">Promotion 4</div>
						</li>									
					</ul>
				</div>									
				
			</div>
			<!--#include file="../../inc/footer.asp"-->
		</div>
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
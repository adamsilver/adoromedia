<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "dropdown"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Drop down menu, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->	
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->	
		<link rel="stylesheet" href="../../css/dropdownmenu.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->		
		<script type="text/javascript" src="../../js/JQuery/jquery.bgiframe.js"></script>
		<script type="text/javascript" src="../../js/Adoro/Adoro.DropDownMenu.js"></script>
		<script type="text/javascript" src="../../js/SWFObject/swfobject.js"></script>
		<script type="text/javascript">
			swfobject.embedSWF("../../swf/snail.swf", "flash", "300", "120", "9.0.0", "../../swf/expressInstall.swf", {}, {wmode: "opaque"});
		</script>
		<script type="text/javascript">
			$(document).ready(function(){
				new Adoro.DropDownMenu($("#dropDownMenu ul"));
			});
		</script>	
	</head>
	<body class="library">
		<div id="container">
			<div class="faux">
				<div id="controls">
					<!--#include file="../../inc/logo.asp"-->
					<!--#include file="../../inc/primaryNavigation.asp"-->
				</div>
				<div id="content">
					<h1>Drop down menu</h1>
					
					<h2>About</h2>
					<ul class="generic">
						<li>A drop down menu.</li>
						<li>Drop downs work with JS only.</li>
						<li>Uses the <a href="http://www.jquery.com">JQuery</a> JavaScript library.</li>
					</ul>
					
					<h2>Demo</h2>
					<div id="dropDownMenu">
						<ul>
							<li class="first">
								<a href="#1">Pharmacy &#038; Health</a>
								<ul>
									<li><a href="#2"><span>Electrical</span></a></li>
									<li><a href="#3"><span>Offers</span></a></li>
									<li><a href="#4"><span>Weight Loss</span></a></li>
									<li class="last"><a href="#5"><span>Hair Retention</span></a></li>
								</ul>
							</li>
							<li><a href="#6"><span>Beauty</span></a></li>
							<li>
								<a href="#7"><span>Gift</span></a>
								<ul>
									<li><a href="#8"><span>Skincare</span></a></li>
									<li><a href="#9"><span>Hair</span></a></li>
									<li><a href="#10"><span>Offers</span></a></li>
									<li><a href="#11"><span>Weight Loss</span></a></li>
									<li class="last"><a href="#12"><span>Hair Retention</span></a></li>
								</ul>
							</li>
							<li class="selected">
								<a href="#13"><span>Men</span></a>
								<ul>
									<li><a href="#14"><span>Skincare</span></a></li>
									<li><a href="#15"><span>Hair</span></a></li>
									<li><a href="#16"><span>Fragrance</span></a></li>
									<li><a href="#17"><span>Electrical</span></a></li>
									<li><a href="#18"><span>Offers</span></a></li>
									<li><a href="#19"><span>Weight Loss</span></a></li>
									<li class="last"><a href="#20"><span>Hair Retention</span></a></li>
								</ul>
							</li>
							<li class="last">
								<a href="#21"><span>Seasonal</span></a>
								<ul>
									<li><a href="#22"><span>Skincare</span></a></li>
									<li><a href="#23"><span>Bath &#038; Body</span></a></li>
									<li><a href="#24"><span>Dental</span></a></li>
									<li><a href="#25"><span>Accessories</span></a></li>
									<li><a href="#26"><span>Electrical</span></a></li>
									<li><a href="#27"><span>Offers</span></a></li>
									<li><a href="#28"><span>Weight Loss</span></a></li>
									<li class="last"><a href="#29"><span>Hair Retention</span></a></li>
								</ul>
							</li>
						</ul>
					</div>
					<div class="form">
						<div class="field">
							<div class="indicator"><label for="iframedd">Ifame drop down test</label></div>
							<div class="singleInput">
								<select id="iframedd"><option value="1">Iframe zIndex issue fixed longer select</option></select>		
							</div>
						</div>
					</div>
					<div>
						<div id="flash">
							My flash here
						</div>
					</div>
														
									
				</div>
			</div>
		</div>
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
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
			swfobject.embedSWF("../../swf/butterfly.swf", "flash", "300", "120", "9.0.0", "../../swf/expressInstall.swf", {}, {wmode: "opaque"});
		</script>
		<script type="text/javascript">
			$(document).ready(function(){
				var ulNode1 = $("#dropDownMenu ul")[0] || null;
				new Adoro.DropDownMenu(ulNode1, {
					offsetLeft: -1
				});
				
				var ulNode2 = $("#alternativeMenu ul")[0] || null;
				new Adoro.DropDownMenu(ulNode2, {
					subMenuType: "div"
				});
				
			});
		</script>
		<style type="text/css">
			div#alternativeMenu {
				
			}
			
			div#alternativeMenu ul:after {
				clear:both;
				content:".";
				display:block;
				height:0px;
				visibility:hidden;
			}
			
			div#alternativeMenu ul {
				display:block;
				zoom: 1;
			}
			
			div#alternativeMenu ul {
				position: relative;
				list-style: none;
			}
			
			div#alternativeMenu ul li {
				float:left;
				position:relative;
			}
			
			div#alternativeMenu ul li a {
				
			}
			
			div#alternativeMenu ul li.buy a {
				display: block;
				background: url(../../img/dropdownmenu/purple_bot_off.gif) left bottom no-repeat;
				font-size: 1.5em;
				color: #ffffff;
				text-decoration: none;
			}
			
			div#alternativeMenu ul li.buy a span {
				display: block;
				background: url(../../img/dropdownmenu/purple_top_off.gif) left top no-repeat;
				padding-left: 11px;
				padding-right: 11px;
				padding-top: 14px;
				padding-bottom: 24px;
				min-height: 36px;
			}
			
			div#alternativeMenu ul li.finance a {
				display: block;
				background: url(../../img/dropdownmenu/orange_bot_off.gif) left bottom no-repeat;
				font-size: 1.5em;
				color: #ffffff;
				text-decoration: none;
			}
			
			div#alternativeMenu ul li.finance a span {
				display: block;
				background: url(../../img/dropdownmenu/orange_top_off.gif) left top no-repeat;
				padding-left: 11px;
				padding-right: 11px;
				padding-top: 14px;
				padding-bottom: 24px;
				min-height: 36px;
			}			
			
			div#alternativeMenu ul li div.subMenu {
				position: absolute;
				width: 200px;
				left:-999999em;
			}
			
			div#alternativeMenu ul li div.subMenu {
				border: 1px solid #e9612b;
				padding: 10px;
				background-color: #ffffff;
			}
		</style>
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
						<li>A lightweight drop down menu using nested list elements.</li>
						<li>Currently only supports 1 level.</li>
						<li>Currently only supports a horizontal version.</li>
						<li>Drop downs work with JS only.</li>
						<li>No css z-index issues.</li>
						<li>Can navigate the links with the keyboard (focus/blur).</li>
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
					<div id="flash">
						My flash here
					</div>
					
					<div id="alternativeMenu">
						<ul>
							<li class="buy"><a href="#"><span>Buy and sell<br/> investment property</span></a></li>
							<li class="finance">
								<a href="#FINANCE"><span>Finance</span></a>
								<div class="subMenu">
									hi there finance shizzle
								</div>
							</li>
							<li><a href="#">Insurance</a></li>
							<li><a href="#">Let and manage my property</a></li>
							<li><a href="#">Tax and legal</a></li>
						</ul>
					</div>
					
				</div>
			</div>
		</div>
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
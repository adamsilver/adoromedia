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
					subMenuType: "div",
					offsetTop: -1
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
			
			/* buy - off */
			
			div#alternativeMenu ul li.buy a {
				display: block;
				background: url(../../img/dropdownmenu/purple_bl_off.gif) left bottom no-repeat;
				font-size: 1.5em;
				color: #ffffff;
				text-decoration: none;
			}
			
			div#alternativeMenu ul li.buy a span.tl {
				display: block;
				background: url(../../img/dropdownmenu/purple_tl_off.gif) left top no-repeat;
			}
			
			div#alternativeMenu ul li.buy a span.bl {
				display: block;
				background: url(../../img/dropdownmenu/purple_bl_off.gif) bottom top no-repeat;
			}
			
			div#alternativeMenu ul li.buy a span.br {
				display: block;
				background: url(../../img/dropdownmenu/purple_br_off.gif) right bottom no-repeat;
			}			
			
			div#alternativeMenu ul li.buy a span.tr {
				display: block;
				background: url(../../img/dropdownmenu/purple_tr_off.gif) right top no-repeat;
				padding-left: 11px;
				padding-right: 11px;
				padding-top: 14px;
				padding-bottom: 24px;
				min-height: 39px;
				cursor: pointer;
			}	
			
			/* buy - on */
			
			div#alternativeMenu ul li.buy a:hover,
			div#alternativeMenu ul li.buy a:active,
			div#alternativeMenu ul li.buy a:focus,
			div#alternativeMenu ul li.buy a.selected {
				display: block;
				background: url(../../img/dropdownmenu/purple_bl_on.gif) left bottom no-repeat;
				font-size: 1.5em;
				color: #ffffff;
				text-decoration: none;
			}
			
			div#alternativeMenu ul li.buy a:hover span.tl,
			div#alternativeMenu ul li.buy a:active span.tl,
			div#alternativeMenu ul li.buy a:focus span.tl,
			div#alternativeMenu ul li.buy a.selected span.tl {
				display: block;
				background: url(../../img/dropdownmenu/purple_tl_on.gif) left top no-repeat;
			}
			
			div#alternativeMenu ul li.buy a:hover span.bl,
			div#alternativeMenu ul li.buy a:active span.bl,
			div#alternativeMenu ul li.buy a:focus span.bl,
			div#alternativeMenu ul li.buy a.selected span.bl {
				display: block;
				background: url(../../img/dropdownmenu/purple_bl_on.gif) bottom top no-repeat;
			}
			
			div#alternativeMenu ul li.buy a:hover span.br,
			div#alternativeMenu ul li.buy a:active span.br,
			div#alternativeMenu ul li.buy a:focus span.br,
			div#alternativeMenu ul li.buy a.selected span.br {

				background: url(../../img/dropdownmenu/purple_br_on.gif) right bottom no-repeat;
			}			
			
			div#alternativeMenu ul li.buy a:hover span.tr,
			div#alternativeMenu ul li.buy a:active span.tr,
			div#alternativeMenu ul li.buy a:focus span.tr,
			div#alternativeMenu ul li.buy a.selected span.tr {
				background: url(../../img/dropdownmenu/purple_tr_on.gif) right top no-repeat;
			}										
			
			/* finance - off */
			
			div#alternativeMenu ul li.finance a {
				display: block;
				background: url(../../img/dropdownmenu/orange_bot_off.gif) right bottom no-repeat;
				font-size: 1.5em;
				color: #ffffff;
				text-decoration: none;
			}
			
			div#alternativeMenu ul li.finance a span {
				display: block;
				background: url(../../img/dropdownmenu/orange_top_off.gif) right top no-repeat;
				padding-left: 11px;
				padding-right: 11px;
				padding-top: 32px;
				padding-bottom: 27px;
				min-height: 18px;
				cursor: pointer;
			}		
			
			/* finance - on */
			
			div#alternativeMenu ul li.finance a:hover,
			div#alternativeMenu ul li.finance a:active,
			div#alternativeMenu ul li.finance a:focus,
			div#alternativeMenu ul li.finance a.selected {
				background: url(../../img/dropdownmenu/orange_bot_on.gif) right bottom no-repeat;
			}
			
			div#alternativeMenu ul li.finance a:hover span,
			div#alternativeMenu ul li.finance a:active span,
			div#alternativeMenu ul li.finance a:focus span,
			div#alternativeMenu ul li.finance a.selected span {
				background: url(../../img/dropdownmenu/orange_top_on.gif) right top no-repeat;
			}					
			
			/* insurance - off */
			
			div#alternativeMenu ul li.insurance a {
				display: block;
				background: url(../../img/dropdownmenu/blue_bot_off.gif) right bottom no-repeat;
				font-size: 1.5em;
				color: #ffffff;
				text-decoration: none;
			}
			
			div#alternativeMenu ul li.insurance a span {
				display: block;
				background: url(../../img/dropdownmenu/blue_top_off.gif) right top no-repeat;
				padding-left: 11px;
				padding-right: 11px;
				padding-top: 32px;
				padding-bottom: 27px;
				min-height: 18px;
				cursor: pointer;
			}	
			
			/* insurance - off */
			
			div#alternativeMenu ul li.insurance a {
				display: block;
				background: url(../../img/dropdownmenu/blue_bot_off.gif) right bottom no-repeat;
			}
			
			div#alternativeMenu ul li.insurance a span {
				display: block;
				background: url(../../img/dropdownmenu/blue_top_off.gif) right top no-repeat;
				padding-left: 11px;
				padding-right: 11px;
				padding-top: 32px;
				padding-bottom: 27px;
				min-height: 18px;
				cursor: pointer;
			}	
			
			/* insurance - on */
			
			div#alternativeMenu ul li.insurance a:hover,
			div#alternativeMenu ul li.insurance a:active,
			div#alternativeMenu ul li.insurance a:focus,
			div#alternativeMenu ul li.insurance a.selected {
				background: url(../../img/dropdownmenu/blue_bot_on.gif) right bottom no-repeat;
			}
			
			div#alternativeMenu ul li.insurance a:hover span,
			div#alternativeMenu ul li.insurance a:active span,
			div#alternativeMenu ul li.insurance a:focus span,
			div#alternativeMenu ul li.insurance a.selected span {
				background: url(../../img/dropdownmenu/blue_top_on.gif) right top no-repeat;
			}	
			
			/* left - off */
			
			div#alternativeMenu ul li.let a {
				display: block;
				background: url(../../img/dropdownmenu/pink_bot_off.gif) right bottom no-repeat;
				font-size: 1.5em;
				color: #ffffff;
				text-decoration: none;
			}
			
			div#alternativeMenu ul li.let a span {
				display: block;
				background: url(../../img/dropdownmenu/pink_top_off.gif) right top no-repeat;
				padding-left: 11px;
				padding-right: 11px;
				padding-top: 14px;
				padding-bottom: 24px;
				min-height: 39px;
				cursor: pointer;
			}				
			
			/* left - on */
			
			/*div#alternativeMenu ul li.let a:focus,
			div#alternativeMenu ul li.let a:active,
			div#alternativeMenu ul li.let a:hover,
			div#alternativeMenu ul li.let a.selected {
				background: url(../../img/dropdownmenu/pink_bot_on.gif) right bottom no-repeat;
			}
			
			div#alternativeMenu ul li.let a:hover span,
			div#alternativeMenu ul li.let a:active span,
			div#alternativeMenu ul li.let a:focus span,
			div#alternativeMenu ul li.let a.selected span {
				background: url(../../img/dropdownmenu/pink_top_on.gif) right top no-repeat;
			}	*/					
			
			/* tax - off */
			
			div#alternativeMenu ul li.tax a {
				display: block;
				background: url(../../img/dropdownmenu/green_bot_off.gif) right bottom no-repeat;
				font-size: 1.5em;
				color: #ffffff;
				text-decoration: none;
			}
			
			div#alternativeMenu ul li.tax a span {
				display: block;
				background: url(../../img/dropdownmenu/green_top_off.gif) right top no-repeat;
				padding-left: 11px;
				padding-right: 11px;
				padding-top: 32px;
				padding-bottom: 27px;
				min-height: 18px;
				cursor: pointer;
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
						<li>Can have any content as a sub menu - doesn't have to be a ul.</li>
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
							<li class="buy">
								<a href="#">
									<span class="tl">
										<span class="br">
											<span class="tr">Buy and sell<br/> investment property</span>
										</span>
									</span>
								</a>
							</li>
							<li class="finance">
								<a href="#FINANCE"><span>Finance</span></a>
								<div class="subMenu">
									<a href="#inner">hi there finance shizzle</a>
								</div>
							</li>
							<li class="insurance"><a href="#"><span>Insurance</span></a></li>
							<li class="let"><a href="#"><span>Let and manage<br/> my property</span></a></li>
							<li class="tax"><a href="#"><span>Tax and legal</span></a></li>
						</ul>
					</div>
					
				</div>
			</div>
		</div>
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
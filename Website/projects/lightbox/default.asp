<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "lightbox"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Lightbox, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->	
		<!--#include file="../../inc/head_js.asp"-->
		
		<!--#include file="../../inc/head_css.asp"-->
		<link rel="stylesheet" href="../../css/dialogue.css" type="text/css" />
		<link rel="stylesheet" href="../../css/lightbox.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->
		<script type="text/javascript" src="../../js/JQuery/jquery.browser.js"></script>
		<script type="text/javascript" src="../../js/SWFObject/swfobject.js"></script>
		<script type="text/javascript" src="../../js/Adoro/Adoro.Dialogue.js"></script>
		<script type="text/javascript" src="../../js/Adoro/Adoro.Lightbox.js"></script>
		<script type="text/javascript">
			swfobject.embedSWF("../../swf/butterfly.swf", "flash", "300", "120", "9.0.0", "../../swf/expressInstall.swf", {}, {wmode: "opaque"});
		</script>
		<script type="text/javascript">
			$(document).ready(function(){
				// create a lightbox effect by finding all anchors with a class of lightbox
				new Adoro.Lightbox($("a.lightbox"), {
					htmlBefore: '<div class="beforeShizzle"><a class="closeDialogue" href="#">Close the lightbox</a></div>',
					htmlAfter: '<div class="afterShizzle">Could put something after like this if you want</div>',
					htmlBack: '<a class="back" href="#">Previous gallery image</a>',
					htmlNext: '<a class="next" href="#">Next gallery image</a>',
					htmlLoading: '<div id="lightboxLoading"><img src="../../img/loading.gif" alt="Loading image"/></div>',
					overlayOpacity: "0.78"
				});
			});
		</script>		
		<style type="text/css">
			/* custom lightbox styling - style how you wish */
			
			div#lightboxLoading {
				width: 200px;
				height: 120px;
				background-color: #ffffff;
				padding-top: 80px;
				text-align: center;
			}
			
			div#lightbox {
				background: #ffffff;
				border: 1px solid #333333;
				overflow: hidden;
			}
			
			div#lightbox div.beforeShizzle {
				padding: 10px;
				border-bottom: 1px solid #333333;
				overflow: hidden;
				background: #898F2C;
				color: #ffffff;
			}
			
			div#lightbox div.beforeShizzle a.closeDialogue {
				display: block;
				text-align: center;
				color: #ffffff;
				font-size: 1.1em;
			}
			
			div#lightbox div.afterShizzle {
				padding: 10px;
				border-top: 1px solid #333333;
				overflow: hidden;
				background: #898F2C;
				color: #ffffff;	
				font-size: 1.1em;
				text-align: center;
			}
			
			div#lightbox a.back {
				float: left;
				padding: 10px;
				font-size: 1.1em;
				border-right: 1px solid #333333;
			}
			
			div#lightbox a.next {
				float: right;
				padding: 10px;
				font-size: 1.1em;
				border-left: 1px solid #333333;
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
					<h1>Lightbox</h1>
					<h2>About</h2>
					<ul class="generic">
						<li>Built on top of the very lightweight <a href="../dialogue">Dialogue (Adoro.Dialogue)</a> plugin .</li>
						<li>Accessible via keyboard navigation</li>
						<li>Very flexible - customisable IDs, HTML and CSS to create custom look and feel.</li>
					</ul>
					
					<h2>Demo</h2>
					<ul class="lightBoxDemo">
						<li><a class="lightbox" href="../../img/portfolio/cpplus.jpg"><img src="../../img/portfolio/cpplus.jpg" alt="CP Plus" /></a></li>
						<li><a class="lightbox" href="../../img/portfolio/hamleys.jpg"><img src="../../img/portfolio/hamleys.jpg" alt="Hamleys" /></a></li>
						<li><a class="lightbox" href="../../img/portfolio/flyingflowers.jpg"><img src="../../img/portfolio/flyingflowers.jpg" alt="Flying flowers" /></a></li>
					</ul>
					
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
					<h2>Dependencies</h2>
					<ul class="generic">
						<li>jquery-1.2.6.js</li>
						<li>jquery.bgiframe.js</li>
						<li>jquery.browser.js</li>
						<li>Adoro.Dialogue.js</li>
						<li>Adoro.Lightbox.js</li>
					</ul>
					
					<h2>Example setup</h2>
					<!--#include file="../../inc/code/lightbox.asp"-->	
					
				</div>
			</div>
		</div>
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
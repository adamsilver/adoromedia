<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "carousel"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>jCarouselLite, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->	
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->
		<!--#include file="../../inc/head_cssie.asp"-->
		<script type="text/javascript" src="../../js/JQuery/jcarousellite_1.0.1.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){
				$(" .jCarouselLite").jCarouselLite({
				    btnNext: " .next",
				    btnPrev: " .prev"
				});
			});
		</script>
		<style type="text/css">
			.jCarouselLite {
				background-color:#DFDFDF;
				border:1px solid black;
				position:relative;
				visibility:hidden;
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
					<h1>jCarousel</h1>
					
					<h2>Demo</h2>
					
				    <div class="jCarouselLite">	
						<ul>
							<li>
								<div style="width: 150px;height: 318px;">
									<p>stuff</p>
									<p>stuff</p>
									<p>stuff</p>
									<p>stuff</p>
									<p>stuff</p>
									<p>stuff</p>
									<p>stuff</p>
									<p>stuff</p>
								</div>
							</li>
							<li>
								<div style="width: 150px;height: 118px;">
									<p>stuff2</p>
									<p>stuff</p>
									<p>stuff</p>
									<p>stuff</p>
									<p>stuff</p>
									<p>stuff</p>
									<p>stuff</p>
									<p>stuff</p>
								</div>
							</li>
						
						</ul>
						<a class="prev" href="#">prev</a> | <a class="next" href="#">next</a>
					</div>


					
									
					
				</div>
			</div>
		</div>
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
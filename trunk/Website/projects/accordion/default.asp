<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "accordian"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Accordion, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->	
		<meta name="keywords" content="accordion, JavaScript, jQuery, component, script, adoro, media" />
		<meta name="description" content="Accordion jQuery JavaScript component, by Adoro Media." />		
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->	
		<!--#include file="../../inc/head_cssie.asp"-->
		<script type="text/javascript" src="../../js/Adoro/Adoro.Accordion.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){ 
				new Adoro.Accordion($("a.ina"), {animate: true});
				//new Adoro.Accordion($("a.na"), {animate: true});
			});
		</script>
	</head>
	<body class="projects">
		<div id="container">
			<div id="header">
					<!--#include file="../../inc/logo.asp"-->
					<!--#include file="../../inc/primaryNavigation.asp"-->
			</div>
			<div id="content">
				<div id="primary">
					<h1>Accordion</h1>
					
					<h2>About</h2>
					<ul class="generic">
						<li>Lightweight accordion using the JQuery library.</li>
						<li>Can configure the animation and the event that triggers it i.e. mouseover, click etc.</li>
						<li>Supports nested accordions.</li>
						<li>Pass in an array of links. The href hash value should be the id of a div in the mark-up i.e. href="#myId".</li>
					</ul>
					
					<h2>Demo</h2>
					
					<div id="nestedAccordion">
						<div class="header"><a class="na selected" href="#na_01">Outer 1</a></div>
						<div id="na_01" class="panel">
							<div class="inner">
								<div id="innerAccordion">
									<div class="header"><a class="ina selected" href="#ina_01">Inner 1</a></div>
									<div id="ina_01" class="panel">
										<div class="inner">
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut facilisis. 
											Ut tincidunt posuere sem. Vivamus et est in dolor bibendum scelerisque. 
											Fusce posuere tempus turpis. Pellentesque convallis pretium est. Aliquam 
											erat volutpat. Sed nunc. Vivamus mi orci, luctus sed, faucibus at.</p>
										</div>
									</div>
									<div class="header"><a class="ina" href="#ina_02">Inner 2</a></div>
									<div id="ina_02" class="panel">
										<div class="inner">
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut facilisis. 
											Ut tincidunt posuere sem. Vivamus et est in dolor bibendum scelerisque. 
											Fusce posuere tempus turpis. Pellentesque convallis pretium est. Aliquam 
											erat volutpat. Sed nunc. Vivamus mi orci, luctus sed, faucibus at.</p>
										</div>
									</div>									
								</div>
							</div>
						</div>
						<div class="header"><a class="na" href="#na_02">Outer 2</a></div>
						<div id="na_02" class="panel">
							<div class="inner">
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut facilisis. 
								Ut tincidunt posuere sem. Vivamus et est in dolor bibendum scelerisque. 
								Fusce posuere tempus turpis. Pellentesque convallis pretium est. Aliquam 
								erat volutpat. Sed nunc. Vivamus mi orci, luctus sed, faucibus at.</p>
							</div>
						</div>
						<div class="header"><a class="na" href="#na_03">Outer 3</a></div>
						<div id="na_03" class="panel">
							<div class="inner">
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut facilisis. 
								Ut tincidunt posuere sem. Vivamus et est in dolor bibendum scelerisque. 
								Fusce posuere tempus turpis. Pellentesque convallis pretium est. Aliquam 
								erat volutpat. Sed nunc. Vivamus mi orci, luctus sed, faucibus at.</p>
							</div>
						</div>
					</div>
					
					
				</div>
				<div id="secondary">
					<% var projectsShowDescription = false; var wrapTag = false;%>
					<!--#include file="../../inc/projectsNavigation.asp"-->
				</div>	
				
			</div>
			<!--#include file="../../inc/footer.asp"-->
		</div>
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
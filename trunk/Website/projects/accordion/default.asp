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
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->	
		<!--#include file="../../inc/head_cssie.asp"-->
		<script type="text/javascript" src="../../js/Adoro/Adoro.Accordion.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){ 
				new Adoro.Accordion($("a.accordian1"));
			});
		</script>
		<style type="text/css">
			.selectedBlah {
				border: 1px solid red;
			}
			
			div#myAccordion {
				margin-bottom: 20px;
			}
			
			div#myAccordion a.accordian1 {
				font-size: 1.2em;
			}
			
			div#myAccordion div.accordionPanel div.inner {
				padding: 10px;
				background: #F9F9F9;
				border: 2px solid #1D2B33;
			}
		</style>
	</head>
	<body class="projects">
		<div id="container">
			<div class="faux">
				<div id="controls">
					<!--#include file="../../inc/logo.asp"-->
					<!--#include file="../../inc/primaryNavigation.asp"-->
				</div>
				<div id="content">
					<h1>Accordion</h1>
					
					<h2>About</h2>
					<ul class="generic">
						<li>Lightweight accordion using the JQuery library.</li>
						<li>Takes one line of JS code to instatiate the accordion.</li>
						<li>Can configure the animation and the event that triggers it i.e. mouseover, click etc.</li>
						<li>Supports nested accordions.</li>
						<!--<li>Accordians will work with dynamically added content i.e. flexible heights or widths.</li>-->
					</ul>
					
					<h2>Demo</h2>
					
					<div id="myAccordion">
						<a class="accordian1" href="#accordion1_activator1">Activator 1</a>
						<a class="accordian1" href="#accordion1_activator2">Activator 2</a>
						<a class="accordian1" href="#accordion1_activator3">Activator 3</a>
						<div id="accordion1_activator1" class="accordionPanel">
							<div class="inner">
								<p>1</p>
							</div>
						</div>
						<div id="accordion1_activator2" class="accordionPanel">
							<div class="inner">
								<p>2</p>
							</div>
						</div>
						<div id="accordion1_activator3" class="accordionPanel">
							<div class="inner">
								<p>3</p>
							</div>
						</div>
					</div>		
			
					<h2>Example setup</h2>
					<!--#include file="../../inc/code/accordion.asp"-->
				</div>
			</div>
		</div>
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
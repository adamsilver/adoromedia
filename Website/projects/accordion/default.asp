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
		<link rel="stylesheet" href="../../css/tabs.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->
		<script type="text/javascript" src="../../js/Adoro/Adoro.Accordion.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){ 
				new Adoro.Accordion($("a.accordian1"), {animate: true});
				new Adoro.Accordion($("a.tabActivator"), {animate: false});
			});
		</script>
		<style type="text/css">
			div#myAccordion {
				margin-bottom: 20px;
			}
			
			div#myAccordion a.accordian1 {
				background-color:#F9F9F9;
				border-bottom:4px solid #F3F3F3;
				display:block;
				font-weight:bold;
				padding:4px 8px;
				text-decoration:none;
				font-size: 1.2em;
				color: #4D595F;
			}
			
			div#myAccordion a.selected {
				background-color:#1D2B33;
				border-bottom:4px solid #898F2C;
				color:#FFFFFF;
			}
			
			div#myAccordion div.accordionPanel {
				margin-bottom: 1px;
			}
			
			div#myAccordion div.accordionPanel div.inner {
				padding: 10px;
				background: #F9F9F9;
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
						<li>Can configure the animation and the event that triggers it i.e. mouseover, click etc.</li>
						<li>Supports nested accordions.</li>
						<li>Pass in an array of links. The href hash value should be the id of a div in the mark-up i.e. href="#myId".</li>
					</ul>
					
					<h2>Demo</h2>
					
					<h3>Animated accordion</h3>
					
					<div id="myAccordion">
						<a class="accordian1 selected" href="#accordion1_activator1">Activator 1</a>
						<div id="accordion1_activator1" class="accordionPanel">
							<div class="inner">
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut facilisis. 
								Ut tincidunt posuere sem. Vivamus et est in dolor bibendum scelerisque. 
								Fusce posuere tempus turpis. Pellentesque convallis pretium est. Aliquam 
								erat volutpat. Sed nunc. Vivamus mi orci, luctus sed, faucibus at.</p>

								<p>Auris eget mi eget nulla imperdiet aliquet. Praesent justo. Etiam ultrices 
								elit. Vestibulum pretium, lorem vel aliquam placerat, tortor lorem mollis tellus, 
								aliquet lacinia arcu urna et ante. Mauris in urna eget turpis vestibulum semper. 
								Vivamus pellentesque convallis quam. Phasellus a felis a nunc eleifend mattis. 
								Pellentesque vestibulum laoreet est. Morbi tellus nibh, hendrerit et, fermentum 
								ut, accumsan nec, mauris. Quisque sapien lacus, ultricies eu, imperdiet et, 
								pulvinar eu, arcu.</p>
							</div>
						</div>
						<a class="accordian1" href="#accordion1_activator2">Activator 2</a>
						<div id="accordion1_activator2" class="accordionPanel">
							<div class="inner">
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut facilisis. 
								Ut tincidunt posuere sem. Vivamus et est in dolor bibendum scelerisque. 
								Fusce posuere tempus turpis. Pellentesque convallis pretium est. Aliquam 
								erat volutpat. Sed nunc. Vivamus mi orci, luctus sed, faucibus at.</p>

								<p>Auris eget mi eget nulla imperdiet aliquet. Praesent justo. Etiam ultrices 
								elit. Vestibulum pretium, lorem vel aliquam placerat, tortor lorem mollis tellus, 
								aliquet lacinia arcu urna et ante. Mauris in urna eget turpis vestibulum semper. 
								Vivamus pellentesque convallis quam. Phasellus a felis a nunc eleifend mattis. 
								Pellentesque vestibulum laoreet est. Morbi tellus nibh, hendrerit et, fermentum 
								ut, accumsan nec, mauris. Quisque sapien lacus, ultricies eu, imperdiet et, 
								pulvinar eu, arcu.</p>
							</div>
						</div>
						<a class="accordian1" href="#accordion1_activator3">Activator 3</a>
						<div id="accordion1_activator3" class="accordionPanel">
							<div class="inner">
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut facilisis. 
								Ut tincidunt posuere sem. Vivamus et est in dolor bibendum scelerisque. 
								Fusce posuere tempus turpis. Pellentesque convallis pretium est. Aliquam 
								erat volutpat. Sed nunc. Vivamus mi orci, luctus sed, faucibus at.</p>

								<p>Auris eget mi eget nulla imperdiet aliquet. Praesent justo. Etiam ultrices 
								elit. Vestibulum pretium, lorem vel aliquam placerat, tortor lorem mollis tellus, 
								aliquet lacinia arcu urna et ante. Mauris in urna eget turpis vestibulum semper. 
								Vivamus pellentesque convallis quam. Phasellus a felis a nunc eleifend mattis. 
								Pellentesque vestibulum laoreet est. Morbi tellus nibh, hendrerit et, fermentum 
								ut, accumsan nec, mauris. Quisque sapien lacus, ultricies eu, imperdiet et, 
								pulvinar eu, arcu.</p>
							</div>
						</div>
					</div>		
					
					<h3>Non-animated accordion with a tab style</h3>
					
					<div class="tabset">
						<ul class="tabNavigation">
							<li><a class="tabActivator selected" href="#accordion2_activator1">Activator 1</a></li>
							<li><a class="tabActivator" href="#accordion2_activator2">Activator 2</a></li>
							<li><a class="tabActivator" href="#accordion2_activator3">Activator 3</a></li>
						</ul>
						
						<div id="accordion2_activator1" class="tab">
							<h4>Yo 1</h4>
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut facilisis. 
							Ut tincidunt posuere sem. Vivamus et est in dolor bibendum scelerisque. 
							Fusce posuere tempus turpis. Pellentesque convallis pretium est. Aliquam 
							erat volutpat. Sed nunc. Vivamus mi orci, luctus sed, faucibus at.</p>

							<p>Auris eget mi eget nulla imperdiet aliquet. Praesent justo. Etiam ultrices 
							elit. Vestibulum pretium, lorem vel aliquam placerat, tortor lorem mollis tellus, 
							aliquet lacinia arcu urna et ante. Mauris in urna eget turpis vestibulum semper. 
							Vivamus pellentesque convallis quam. Phasellus a felis a nunc eleifend mattis. 
							Pellentesque vestibulum laoreet est. Morbi tellus nibh, hendrerit et, fermentum 
							ut, accumsan nec, mauris. Quisque sapien lacus, ultricies eu, imperdiet et, 
							pulvinar eu, arcu.</p>
						</div>
						
						<div id="accordion2_activator2" class="tab">
							<h4>Yo 2</h4>
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut facilisis. 
							Ut tincidunt posuere sem. Vivamus et est in dolor bibendum scelerisque. 
							Fusce posuere tempus turpis. Pellentesque convallis pretium est. Aliquam 
							erat volutpat. Sed nunc. Vivamus mi orci, luctus sed, faucibus at.</p>

							<p>Auris eget mi eget nulla imperdiet aliquet. Praesent justo. Etiam ultrices 
							elit. Vestibulum pretium, lorem vel aliquam placerat, tortor lorem mollis tellus, 
							aliquet lacinia arcu urna et ante. Mauris in urna eget turpis vestibulum semper. 
							Vivamus pellentesque convallis quam. Phasellus a felis a nunc eleifend mattis. 
							Pellentesque vestibulum laoreet est. Morbi tellus nibh, hendrerit et, fermentum 
							ut, accumsan nec, mauris. Quisque sapien lacus, ultricies eu, imperdiet et, 
							pulvinar eu, arcu.</p>
						</div>
						
						<div id="accordion2_activator3" class="tab">
							<h4>Yo 3</h4>
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut facilisis. 
							Ut tincidunt posuere sem. Vivamus et est in dolor bibendum scelerisque. 
							Fusce posuere tempus turpis. Pellentesque convallis pretium est. Aliquam 
							erat volutpat. Sed nunc. Vivamus mi orci, luctus sed, faucibus at.</p>

							<p>Auris eget mi eget nulla imperdiet aliquet. Praesent justo. Etiam ultrices 
							elit. Vestibulum pretium, lorem vel aliquam placerat, tortor lorem mollis tellus, 
							aliquet lacinia arcu urna et ante. Mauris in urna eget turpis vestibulum semper. 
							Vivamus pellentesque convallis quam. Phasellus a felis a nunc eleifend mattis. 
							Pellentesque vestibulum laoreet est. Morbi tellus nibh, hendrerit et, fermentum 
							ut, accumsan nec, mauris. Quisque sapien lacus, ultricies eu, imperdiet et, 
							pulvinar eu, arcu.</p>
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
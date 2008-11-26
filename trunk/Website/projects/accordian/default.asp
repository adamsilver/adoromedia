<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "accordian"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Accordian, JavaScript user interface component library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->	
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->	
		<link rel="stylesheet" href="../../css/accordian.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->
		<script type="text/javascript" src="../../js/Adoro/Adoro.DevNotes.js"></script>
		<script type="text/javascript" src="../../js/Adoro/Adoro.Accordian.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){ 
			
				var horizontal = new Adoro.Accordian({
					container: $("div.myHorizontalAccordian")[0], 
					activatorClass: "header2",
					panelClass: "panel2",					
					animationShowParams: {width: "show"},
					animationHideParams: {width: "hide"},
					animationShowSpeed: 1500,
					animationHideSpeed: 1500			
				});			
			
				var vertical = new Adoro.Accordian({
					container: $("div.accordian")[0], 
					animationShowSpeed: 300,
					animationHideSpeed: 300,
					activatorClass: "header",
					panelClass: "panel",
					activatorActiveClass: "headerOn",
					panelActiveClass: "panelOn"
				});			
			
			});
		</script>
	</head>
	<body class="projects">
		<div id="container">
			<div class="faux">
				<div id="controls">
					<!--#include file="../../inc/logo.asp"-->
					<!--#include file="../../inc/primaryNavigation.asp"-->
				</div>
				<div id="content">
					<h1>Accordian</h1>
					
					<h2>About</h2>
					<ul class="generic">
						<li>Lightweight accordian using the JQuery library.</li>
						<li>Takes one line of JS code to instatiate the accordian.</li>
						<li>Can configure the animation and the event that triggers it i.e. mouseover, click etc.</li>
						<li>Supports nested accordians.</li>
						<!--<li>Accordians will work with dynamically added content i.e. flexible heights or widths.</li>-->
					</ul>
					
					<h2>Demo</h2>
					
					<div class="accordian">
						<div class="header headerOn">
							<h3>Nested accordian</h3>
						</div>
						<div class="panel">
							<div class="inner">
								<div class="myHorizontalAccordian">
									<div class="header2 activatedActivator">
										<h4>Header</h4>
									</div>
									<div class="panel2 activatedPanel">
										<div class="inner">
											<p>panel</p>
										</div>
									</div>
									<div class="header2">
										<h4>Header</h4>
									</div>
									<div class="panel2">
										<div class="inner">
											<p>panel</p>
										</div>
									</div>
									<div class="header2">
										<h4>Header</h4>
									</div>
									<div class="panel2">
										<div class="inner">
											<p>panel</p>
										</div>
									</div>										
								</div>	
							</div>
						</div>
						<div class="header">
							<h3>Section header</h3>
						</div>
						<div class="panel">
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
						<div class="header">
							<h3>Section header</h3>
						</div>
						<div class="panel">
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
						<div class="header">
							<h3>Section header</h3>
						</div>
						<div class="panel">
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
				</div>
			</div>
		</div>
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
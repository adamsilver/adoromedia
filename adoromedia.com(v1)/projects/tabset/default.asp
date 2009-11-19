<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "tabset"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Tabs, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->
		<meta name="keywords" content="Tab, tabs, tabset, JavaScript, jQuery, component, script, adoro, media" />
		<meta name="description" content="Tabset tab control, jQuery JavaScript component, by Adoro Media." />
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->	
		<link rel="stylesheet" href="../../css/tabs.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->
		<script type="text/javascript" src="../../js/Adoro/Adoro.Tabset.js"></script>
		<script type="text/javascript" src="../../js/Site/Projects/Site.Projects.Tabset.js"></script>
	</head>
	<body class="projects">
		<div id="container">
			<div id="header">
				<!--#include file="../../inc/logo.asp"-->
				<!--#include file="../../inc/primaryNavigation.asp"-->
			</div>
			<div id="content">
				<%
					var breadCrumbParts = [Adoro.Breadcrumb.home,Adoro.Breadcrumb.projects,	{
						text: "Tabset"
					}];
				%>
				<!--#include file="../../inc/breadcrumb.asp"-->	
				<div id="primary">				
					<h1>Tabset</h1>
					
					<h2>About</h2>
					<ul>
						<li>Accessible tabs, that degrade gracefully.</li>
					</ul>
					
					<h2>Demo</h2>
					
					<div class="tabset">				
						<ul class="tabNavigation">
							<li><a href="#tab01" class="tabActivator selected">Tab 1</a></li>
							<li><a href="#tab02" class="tabActivator">Tab 2</a></li>
						</ul>
						<div class="tab" id="tab01">
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
						<div class="tab" id="tab02">
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
					
					<div class="tabset">				
						<ul class="tabNavigation">
							<li><a href="#tab201" class="tabActivator">Tab 2.1</a></li>
							<li><a href="#tab202" class="tabActivator selected">Tab 2.2</a></li>
							<li><a href="#tab203" class="tabActivator">Tab 2.2</a></li>
						</ul>
						<div class="tab" id="tab201">
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
						<div class="tab" id="tab202">
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
						<div class="tab" id="tab203">
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

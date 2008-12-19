<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "collapse"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Collapser, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->
		<meta name="keywords" content="element, collapser, JavaScript, jQuery, component, script, adoro, media" />
		<meta name="description" content="Element collapser jQuery JavaScript component, by Adoro Media." />
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->
		<style type="text/css">
			div#collapseMe {
				border: 1px solid #ffffff;
				margin-bottom: 10px;
			}
			
			div#collapseMe a.activator {
				padding: 10px;
				display: block;
				font-size: 1.2em;
				background-color: #989D44;
				color: #ffffff;
			}
			
			div#collapseMe div.panel div {
				padding: 20px;
				background-color:#EFF2E6;
				font-size: 1.2em;
			}
			
			div.hiddenView a.toggle {
				background-color: #7B7F37 !important;
			}
		</style>		
		<!--#include file="../../inc/head_cssie.asp"-->
		<script type="text/javascript" src="../../js/Adoro/Adoro.Collapser.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){ 
				var myCollapse = new Adoro.Collapser($("div#collapseMe div.panel")[0], $("div#collapseMe a.activator")[0], {
					startOpen: true,
					nodesToAddHideClassTo: [document.getElementById("collapseMe")],
					activatorInactiveHTML: "Show demo",
					activatorActiveHTML: "Hide demo",
					animate: true
				});
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
					<h1>Collapser</h1>
					<h2>About</h2>
					<ul class="generic">
						<li>Bind an activator to hide or show a particular panel.</li>
						<li>Can have multiple collapseable areas.</li>
						<li>Works with elements already in the page or elements that are 
						dynamically inserted using progressive enhancement.</li>
						<li>Can be configured:
							<ul>
								<li>to animate or not.</li>
								<li>to set hide and show text and or html for the activator.</li>
								<li>to start open or shut on instantiation using the 
								constructor or the mark-up (useful when server dictates state).</li>
								<li>Add a custom class name to any nodes you wish when hidden - useful to style
								whole containers or sub containers when in hidden or visible mode.</li>
							</ul>
						</li>
						<li>Animation is smoother when the animating element has no padding or margins so
						put styling on an inner element in that scenario as shown in the demo.</li>
					</ul>
					<h2>Demo</h2>
				
					<div id="collapseMe">
						<a class="activator" href="#">Activator (already in page)</a>
						<div class="panel">
							<div>Panel to show</div>
						</div>
					</div>
					
					<h2>Example setup</h2>
					<!--#include file="../../inc/code/collapser.asp"-->					
					
				</div>
			</div>
		</div>
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
<!--#include file="../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../inc/Adoro.asp"-->
<% Adoro.pageName = "projectHome"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Projects, Adoro Media Ltd</title>
		<!--#include file="../inc/head_other.asp"-->
		<!--#include file="../inc/head_js.asp"-->
		<script type="text/javascript" src="<%=Adoro.URL%>js/Adoro/Adoro.ListAnimator.js"></script>
		<!--#include file="../inc/head_css.asp"-->	
		<!--#include file="../inc/head_cssie.asp"-->
		<script type="text/javascript">
			$(document).ready(function(){				
				var lis = $("ul.projects li");
				new Adoro.ListAnimator(lis, {"speed": 100, "cssStart": {"opacity": "0.5", "marginLeft":"5px"}, "cssEnd":{"opacity":"1", "marginLeft":"0px"}}).start();
			});
		</script>
	</head>
	<body class="library">
		<div id="container">
			<div class="faux">
				<div id="controls">
					<!--#include file="../inc/logo.asp"-->
					<!--#include file="../inc/primaryNavigation.asp"-->
				</div>
				<div id="content">
					<h1>Projects</h1>
					<p>Open source projects for the world.</p>
					<ul class="projects">
						<li>
							<h2><a href="<%=Adoro.URL%>projects/accordion" <%if(Adoro.pageName === "accordion"){%>class="selected"<%}%>>Accordion</a></h2>
							<p>Lightweight JavaScript accordion using the jQuery JavaScript library.</p>
						</li>
						<!--<li><a href="<%=Adoro.URL%>projects/demos/autofade.asp" <%if(Adoro.pageName === "autofade"){%>class="selected"<%}%>>Auto fade</a></li>-->
						<li>
							<h2><a href="<%=Adoro.URL%>projects/calendar" <%if(Adoro.pageName === "calendar"){%>class="selected"<%}%>>Calendar</a></h2>
							<p>Lightweight JavaScript calendar using the jQuery JavaScript library.</p>
						</li>
						<li>
							<h2><a href="<%=Adoro.URL%>projects/carousel" <%if(Adoro.pageName === "carousel"){%>class="selected"<%}%>>Carousel</a></h2>
							<p>Lightweight JavaScript carousel using the jQuery JavaScript library.</p>
						</li>
						<li>
							<h2><a href="<%=Adoro.URL%>projects/checkboxdisabler" <%if(Adoro.pageName === "checkboxdisable"){%>class="selected"<%}%>>Checkbox disabler</a></h2>
							<p>Simple JavaScript control to disable checkboxes using the jQuery library.</p>		
						</li>
						<li>
							<h2><a href="<%=Adoro.URL%>projects/collapser" <%if(Adoro.pageName === "collapse"){%>class="selected"<%}%>>Collapser</a></h2>
							<p>Expanding and collapsing elements made simple using the jQuery library.</p>
						</li>
						<!--<li><a href="<%=Adoro.URL%>projects/demos/dropdownmenu.asp" <%if(Adoro.pageName === "dropdown"){%>class="selected"<%}%>>Drop down menu</a></li>-->
						<li>
							<h2><a href="<%=Adoro.URL%>projects/defaulttextcontrol" <%if(Adoro.pageName === "defaulttextcontrol"){%>class="selected"<%}%>>Default text control</a></h2>
							<p>Putting place holder text for inputs made simple using jQuery library.</p>
						</li>						
						<li>
							<h2><a href="<%=Adoro.URL%>projects/dialogue" <%if(Adoro.pageName === "dialogue"){%>class="selected"<%}%>>Dialogue</a></h2>
							<p>The most customisable and lightweight Dialogue (A.K.A. LightBox) on the internet.</p>
						</li>
						<li>
							<h2><a href="<%=Adoro.URL%>projects/dropdownmenu" <%if(Adoro.pageName === "dropdownmenu"){%>class="selected"<%}%>>Drop down menu</a></h2>
							<p>Lightweight, accessible drop down menu using the jQuery library.</p>
						</li>											
						<li>
							<h2><a href="<%=Adoro.URL%>projects/fieldmaxlength" <%if(Adoro.pageName === "fieldmaxlength"){%>class="selected"<%}%>>Field max length</a></h2>
							<p>Max length indicator control for inputs &amp textareas using the jQuery library.</p>
						</li>
						<li>
							<h2><a href="<%=Adoro.URL%>projects/formvalidator" <%if(Adoro.pageName === "formvalidator"){%>class="selected"<%}%>>Form validator</a></h2>
							<p>Highly, advanced, accessible and flexible JavaScript form validation framework.</p>
						</li>
						<!--<li><a href="<%=Adoro.URL%>projects/demos/formvalidator.asp" <%if(Adoro.pageName === "formvalidator"){%>class="selected"<%}%>>Form validator</a></li>-->
						<li>
							<h2><a href="<%=Adoro.URL%>projects/googlemap" <%if(Adoro.pageName === "gmap"){%>class="selected"<%}%>>Google map</a></h2>
							<p>Creating Google maps made simple using a JavaScript control.</p>
						</li>
						<li>
							<h2><a href="<%=Adoro.URL%>projects/listcollapser" <%if(Adoro.pageName === "listcollapse"){%>class="selected"<%}%>>List collapser</a></h2>
							<p>Expanding and collapsing list items using the jQuery library - useful for facet navigation.</p>
						</li>
						<li>
							<h2><a href="<%=Adoro.URL%>projects/printbutton" <%if(Adoro.pageName === "printbutton"){%>class="selected"<%}%>>Print button</a></h2>
							<p>Never write code to add a print button to a page again using the jQuery library.</p>
						</li>
						<li>
							<h2><a href="<%=Adoro.URL%>projects/starrating" <%if(Adoro.pageName === "starrating"){%>class="selected"<%}%>>Star rating</a></h2>
							<p>Accessible star rating control using the jQuery library, degrades to radio list.</p>
						</li>
						<li>
							<h2><a href="<%=Adoro.URL%>projects/tabset" <%if(Adoro.pageName === "tabs"){%>class="selected"<%}%>>Tabset</a></h2>
							<p>Simple, customisable and accessible tab navigation using the jQuery library.</p>
						</li>
						<li>
							<h2><a href="<%=Adoro.URL%>projects/tooltip" <%if(Adoro.pageName === "tooltip"){%>class="selected"<%}%>>Tool tip</a></h2>
							<p>Lightweight, simple and customisable tooltip effects using the jQuery library.</p>
						</li>
						<!-- popup script -->
						<!-- scrolling div -->
						<!-- tree nav -->
						<!-- custom pointers/icons for googlemaps, controls optional -->
						<!-- user agent and type detection -->
						<!-- image zoom -->
						<!-- slide -->
						<!-- select box api -->
						<!-- select box styling -->
						<!-- maps - gmap, mmap, ymap -->
					</ul>
				</div>
			</div>
		</div>
		<!--#include file="../inc/footer.asp"-->
		<!--#include file="../inc/ga.asp"-->
	</body>
</html>
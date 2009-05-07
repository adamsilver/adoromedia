<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "starrating"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Star rating, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->
		<meta name="keywords" content="star, rating, radios, JavaScript, jQuery, component, script, adoro, media" />
		<meta name="description" content="Star rating, jQuery JavaScript component, by Adoro Media." />
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->
		<!--#include file="../../inc/head_cssie.asp"-->				
		<script type="text/javascript" src="../../js/Adoro/Adoro.StarRating.js"></script>
		<script type="text/javascript" src="../../js/Site/Projects/Site.Projects.StarRating.js"></script>
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
						text: "Star rating"
					}];
				%>
				<!--#include file="../../inc/breadcrumb.asp"-->		
				<div id="primary">
					<h1>Star rating</h1>
					<h2>About</h2>
					<ul class="generic">
						<li>Create multiple star rating instances.</li>
						<li>Pass in a collection of input type radio nodes.</li>
						<li>Each label related to the radio become clickable.</li>
					</ul>
					<h2>Demo</h2>
					<div class="field">
						<div class="indicator">
							<span class="label">Star rating</span>
						</div>
						<div class="radios starRating">
							<fieldset>
								<legend><span class="legend">Start rating</span></legend>
								<div class="input">
									<input type="radio" name="starRating" id="starRating" value="1" />
									<label for="starRating">
										<span>1</span>
									</label>
								</div>
								<div class="input">
									<input type="radio" name="starRating" id="starRating2" value="2" />
									<label for="starRating2">
										<span>2</span>
									</label>
								</div>		
								<div class="input">
									<input type="radio" name="starRating" id="starRating3" value="3" />
									<label for="starRating3">
										<span>3</span>
									</label>
								</div>	
								<div class="input">
									<input type="radio" name="starRating" id="starRating4" value="4" />
									<label for="starRating4">
										<span>4</span>
									</label>
								</div>	
								<div class="input">
									<input type="radio" name="starRating" id="starRating5" value="5" />
									<label for="starRating5">
										<span>5</span>
									</label>
								</div>
							</fieldset>																							
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

<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<!--#include file="../../inc/Adoro.Forms.asp"-->
<!--#include file="../../inc/Adoro.DevForm.asp"-->
<% Adoro.pageName = "contextualhelp"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Field contextual help for website form fields, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->	
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->	
		<!--#include file="../../inc/head_cssie.asp"-->
		<script type="text/javascript" src="../../js/JQuery/jquery.bgiframe.js"></script>
		<script type="text/javascript" src="../../js/Adoro/Adoro.FieldContextualHelp.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){ 
				var contextualHelpNodes = jQuery.makeArray($(".contextualHelp"));
				
				// apply a contextual help node to the full name field
				var fullname = document.getElementById("fullName");
				new Adoro.FieldContextualHelp(fullname, contextualHelpNodes[0], {
					offsetTop: 5,
					offsetLeft: 0,
					placement:"bottom"
				});
				
				// applying the same contextual help node  to each of the input fields
				var day01 = document.getElementById("day01");
				var month01 = document.getElementById("month01");
				var year01 = document.getElementById("year01");
				new Adoro.FieldContextualHelp(day01,contextualHelpNodes[1], {
					offsetTop: -5,
					offsetLeft: 0,
					placement: "top"
				});	
				new Adoro.FieldContextualHelp(month01,contextualHelpNodes[1], {
					offsetTop: 5,
					offsetLeft: 0,
					placement: "bottom"
				});	
				new Adoro.FieldContextualHelp(year01,contextualHelpNodes[1], {
					offsetTop: -15,
					offsetLeft: 5,
					placement: "right"
				});		
				
				// applying different contextualHelp nodes to different input fields
				var day02 = document.getElementById("day02");
				var month02 = document.getElementById("month02");
				var year02 = document.getElementById("year02");
				new Adoro.FieldContextualHelp(day02,contextualHelpNodes[2], {
					offsetTop: 5,
					offsetLeft: 0,
					placement: "bottom"
				});	
				new Adoro.FieldContextualHelp(month02,contextualHelpNodes[3], {
					offsetTop: 5,
					offsetLeft: 0,
					placement: "bottom"
				});	
				new Adoro.FieldContextualHelp(year02,contextualHelpNodes[4], {
					offsetTop: 5,
					offsetLeft: 0,
					placement: "bottom"
				});	
				
				var checkboxes = $('[name="searchEngine"]');
				new Adoro.FieldContextualHelp(checkboxes[0], contextualHelpNodes[5], {
					offsetTop: 5,
					offsetLeft: 70,
					placement: "right"
				});
				
				new Adoro.FieldContextualHelp(checkboxes[1], contextualHelpNodes[5], {
					offsetTop: -14,
					offsetLeft: 70,
					placement: "right"
				});	 
				
				new Adoro.FieldContextualHelp(checkboxes[2], contextualHelpNodes[5], {
					offsetTop: -33,
					offsetLeft: 70,
					placement: "right"
				});								
							
				
			});
		</script>
		<style type="text/css">
			.contextualHelp {
				background:transparent url(../../img/bubble_bot.gif) no-repeat left bottom;
				width:337px;
				z-index: 100;
				clear: both;
			}
			
			.contextualHelpInner {
				background:transparent url(../../img/bubble_top.gif) no-repeat left top;
				padding:10px;
			}
			
			.contextualHelp p {
				margin: 0;
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
					<h1>Field contextual help</h1>
					
					<h2>About</h2>

					<ul class="generic">
						<li>Apply contextual help hints that show on focus and on blur</li>										
						<li>Can have custom HTML mark-up.</li>
						<li>Can be configured to be placed to the left, right, top or bottom of the field easily.</li>
						<li>The offset left and offset top can be configured.</li>
					</ul>
					
					<h2>Demo</h2>
											
					<form action="default.asp" method="post">
						<div class="form">
							<!--Single input-->
							<div class="field">
								
								<div class="indicator">
									<label for="fullName">Full name</label>
								</div>
								<div class="singleInput">
									<input type="text" class="text" name="fullName" id="fullName" value="<%=Request.Form("fullName")%>" />
								</div>
								<div class="contextualHelp">
									<div class="contextualHelpInner">
										<p>Contextual help 1.</p>
									</div>
								</div>
							</div>
								
							<!--Multiple input-->
							<div class="field">
								<div class="indicator">
									<span class="label ">Date of birth</span>
								</div>
								<div class="multipleInput">
									<div class="input">
										<label for="day01">Day</label>
										<input type="text" class="text" name="day01" id="day01" value="<%=Request.Form("day01")%>" />
										
									</div>
									<div class="input">
										<label for="month01">Month</label>
										<input type="text" class="text" name="month01" id="month01" value="<%=Request.Form("month01")%>" />
								
									</div>
									<div class="input">
										<label for="year01">Year</label>
										<input type="text" class="text" name="year01" id="year01" value="<%=Request.Form("year01")%>" />								
									</div>
								</div>
								<div class="contextualHelp">
									<div class="contextualHelpInner">
										<p>All three separate fields referencing this same contextual help node - 
										all of them place the node in different locations relative to the field</p>
									</div>
								</div>											
							</div>
							
							<!--Multiple select-->
							<div class="field">
								<div class="indicator">
									<span class="label">Date of birth</span>
								</div>
								<div class="multipleInput">
									<div class="input">
										<label for="day02">Day</label>
										<select name="day02" id="day02">
											<option value="">Please select</option>
											<option value="1">1</option>
											<option value="2">2</option>
										</select>
										<div class="contextualHelp">
											<div class="contextualHelpInner">
												<p>Seperate contextual help for day 02.</p>
											</div>
										</div>										
									</div>
									<div class="input">
										<label for="month02">Month</label>
										<select name="month02" id="month02">
											<option value="">Please select</option>
											<option value="1">1</option>
											<option value="2">2</option>
										</select>
										<div class="contextualHelp">
											<div class="contextualHelpInner">
												<p>Seperate contextual help for month 02.</p>
											</div>
										</div>										
									</div>
									<div class="input">
										<label for="year02">Year</label>
										<select name="year02" id="year02">
											<option value="">Please select</option>
											<option value="1">1</option>
											<option value="2">2</option>
										</select>
										<div class="contextualHelp">
											<div class="contextualHelpInner">
												<p>Seperate contextual help for year 02.</p>
											</div>
										</div>										
									</div>
								</div>
							</div>
							
							<!--Checkbox group-->
							
							<div class="field">
								<div class="indicator">
									<span class="label">Favourite search engines</span>
								</div>
								<div class="checkboxes">
									<fieldset>
										<legend><span class="legend">Search engines</span></legend>
										<div class="input">
											<input type="checkbox" name="searchEngine" id="searchEngine" value="Yahoo" />
											<label for="searchEngine">Yahoo</label>
										</div>
										<div class="input">
											<input type="checkbox" name="searchEngine" id="searchEngine02" value="Live" />
											<label for="searchEngine02">Live search</label>
										</div>
										<div class="input">
											<input type="checkbox" name="searchEngine" id="searchEngine03" value="Google" />
											<label for="searchEngine03">Google</label>
										</div>
									</fieldset>
									<div class="contextualHelp">
										<div class="contextualHelpInner">
											<p>Each checkbox uses same contextual help, but the offsets are different due to it being positioned relative to its checkbox.</p>
										</div>
									</div>									
								</div>
							</div>
														
							<!--Submit buttons-->
							
							<div class="action">
								<input class="reset" type="reset" name="resetButton" id="resetButton" value="Clear" />
								
								<input class="submit" type="submit" name="submitButton" id="submitButton" value="Submit" />
								
							</div>
						</div>												
					</form>
					
					<h2>Example setup</h2>
					<!--#include file="../../inc/code/fieldcontextualhelp.asp"-->
					
					
				</div>
			</div>
			
		</div>
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
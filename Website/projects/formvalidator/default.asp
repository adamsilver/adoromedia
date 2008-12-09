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
		<script type="text/javascript" src="../../js/Adoro/Adoro.FieldContextualHelp.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){ 
			
				var node = $(".contextualHelp")[0];
				var node2 = $(".contextualHelp")[1];			
				new Adoro.FieldContextualHelp(document.getElementById("fullName"),node);
				new Adoro.FieldContextualHelp(document.getElementById("day01"),node2);
			});
		</script>
		<style type="text/css">
			.contextualHelp {
				border: 1px solid #333;
				padding: 5px;
				background-color: #fff;
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
						<li>Something</li>										
					</ul>
					
					<h2>Demo</h2>
											
					<form action="default.asp" method="post">
						<div class="form">
							<!--Single input-->
							<div class="field <%devForm.writeErrorClass(["fullName"])%>">
								
								<div class="indicator">
									<label for="fullName">Full name <%devForm.writeErrorSpan(["fullName"])%></label>
								</div>
								<div class="singleInput">
									<input type="text" class="text" name="fullName" id="fullName" value="<%=Request.Form("fullName")%>" />
								</div>
								<div class="contextualHelp">
									<p>Contextual help 1.</p>
								</div>
							</div>
								
							<!--Multiple input-->
							<div class="field <%devForm.writeErrorClass(["day01", "month01", "year01"])%>">
								<div class="indicator">
									<span class="label ">Date of birth</span>
								</div>
								<div class="multipleInput">
									<div class="input">
										<label for="day01">Day <%devForm.writeErrorSpan(["day01"])%></label>
										<input type="text" class="text" name="day01" id="day01" value="<%=Request.Form("day01")%>" />
										<div class="contextualHelp">
											<p>Contextual help 2.</p>
										</div>
									</div>
									<div class="input">
										<label for="month01">Month <%devForm.writeErrorSpan(["month01"])%></label>
										<input type="text" class="text" name="month01" id="month01" value="<%=Request.Form("month01")%>" />
									</div>
									<div class="input">
										<label for="year01">Year <%devForm.writeErrorSpan(["year01"])%></label>
										<input type="text" class="text" name="year01" id="year01" value="<%=Request.Form("year01")%>" />
									</div>
								</div>					
							</div>
							
							<!--Multiple select-->
							<div class="field <%devForm.writeErrorClass(["day02", "month02", "year02"])%>">
								<div class="indicator">
									<span class="label">Date of birth</span>
								</div>
								<div class="multipleInput">
									<div class="input">
										<label for="day02">Day <%devForm.writeErrorSpan(["day02"])%></label>
										<select name="day02" id="day02">
											<option value="" <%devForm.writeSelected(Request.Form("day02"), "")%>>Please select</option>
											<option value="1" <%devForm.writeSelected(Request.Form("day02"), "1")%>>1</option>
											<option value="2" <%devForm.writeSelected(Request.Form("day02"), "2")%>>2</option>
										</select>
									</div>
									<div class="input">
										<label for="month02">Month <%devForm.writeErrorSpan(["month02"])%></label>
										<select name="month02" id="month02">
											<option value="" <%devForm.writeSelected(Request.Form("month02"), "")%>>Please select</option>
											<option value="1" <%devForm.writeSelected(Request.Form("month02"), "1")%>>1</option>
											<option value="2" <%devForm.writeSelected(Request.Form("month02"), "2")%>>2</option>
										</select>
									</div>
									<div class="input">
										<label for="year02">Year <%devForm.writeErrorSpan(["year02"])%></label>
										<select name="year02" id="year02">
											<option value="" <%devForm.writeSelected(Request.Form("year02"), "")%>>Please select</option>
											<option value="1" <%devForm.writeSelected(Request.Form("year02"), "1")%>>1</option>
											<option value="2" <%devForm.writeSelected(Request.Form("year02"), "2")%>>2</option>
										</select>
									</div>
								</div>
							</div>
							
							<!--Checkbox group-->
							
							<div class="field <%devForm.writeErrorClass(["searchEngine"])%>">
								<div class="indicator">
									<span class="label">Favourite search engines</span>
								</div>
								<div class="checkboxes">
									<fieldset>
										<legend><span class="legend">Search engines</span><%devForm.writeErrorSpan(["searchEngine"])%></legend>
										<div class="input">
											<input type="checkbox" name="searchEngine" id="searchEngine" value="Yahoo" <%devForm.writeChecked(Request.Form("searchEngine"), "Yahoo")%> />
											<label for="searchEngine">Yahoo</label>
										</div>
										<div class="input">
											<input type="checkbox" name="searchEngine" id="searchEngine02" value="Live" <%devForm.writeChecked(Request.Form("searchEngine"), "Live")%> />
											<label for="searchEngine02">Live search</label>
										</div>
										<div class="input">
											<input type="checkbox" name="searchEngine" id="searchEngine03" value="Google" <%devForm.writeChecked(Request.Form("searchEngine"), "Google")%> />
											<label for="searchEngine03">Google</label>
										</div>
									</fieldset>
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
					<!--include file="../../inc/code/formvalidator.asp"-->
					
					
				</div>
			</div>
			
		</div>
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
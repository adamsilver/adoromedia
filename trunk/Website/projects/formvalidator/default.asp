<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<!--#include file="../../inc/Adoro.Forms.asp"-->
<!--#include file="../../inc/Adoro.DevForm.asp"-->
<% Adoro.pageName = "formvalidator"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Form validator framework, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->	
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->	
		<!--#include file="../../inc/head_cssie.asp"-->
		<script type="text/javascript" src="../../js/Adoro/Adoro.FormValidator.js"></script>
		<script type="text/javascript" src="../../js/Adoro/Adoro.FormRules.js"></script>
		<script type="text/javascript" src="../../js/Adoro/Adoro.FieldHighlight.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){ 
				// get form to validate from DOM
				var devForm = document.getElementById("devForm");
				if(devForm === null) return;
				
				// create a new form to validate
				var myFormToValidate = new Adoro.FormValidator(devForm);
				
				// add validators for the form
				// chaining is optional
				myFormToValidate.addValidator("fullName",[{
					method: Adoro.FormRules.notEmpty,
					message: "Full name is required."
				},{
					method: Adoro.FormRules.emailAddress,
					message: "Full name for some reason should look like an email address."
				}]).addValidator("age",[{
					method: Adoro.FormRules.notEmpty,
					message: "You must fill in your age."
				}]).addValidator("terms",[{
					method: Adoro.FormRules.minChecked, 
					params: {
						minChecked: 1
					},
					message: "Terms need to be agreed."
				}]).addValidator("day01",[{
					method: Adoro.FormRules.notEmpty,
					message: "Day 1 is required."
				}]).addValidator("month01",[{
					method: Adoro.FormRules.notEmpty,
					message: "Month 1 is required."
				}]).addValidator("year01",[{
					method: Adoro.FormRules.notEmpty,
					message: "Year 1 is required."
				}]).addValidator("searchEngine",[{
					method: Adoro.FormRules.minChecked,
					params: {
						minChecked: 2
					},
					message: "You must pick at least 2 search engines."
				}]).addValidator("day02",[{
					method: Adoro.FormRules.notEmpty,
					message: "You must fill in day 02."
				}]).addValidator("month02",[{
					method: Adoro.FormRules.notEmpty,
					message: "You must fill in month 02."
				}]).addValidator("year02",[{
					method: Adoro.FormRules.notEmpty,
					message: "You must fill in year 02."
				}]).addValidator("gender",[{
					method: Adoro.FormRules.minChecked, 
					params: {
						minChecked: 1
					},
					message: "You must fill select a gender."
				}]).addValidator("friends",[{
					method: Adoro.FormRules.notEmpty,
					message: "You must choose a friend."
				}]);	
				
				// add a contextual group
				// first param is the id of the submit button in the DOM that triggers the group
				// second param is the array of field names to contextually validate
				myFormToValidate.addGroup("contextualSubmitButton", ["day01", "month01", "year01"]);
				
				// override the message for a validator - useful if you override a default from server side text etc
				// this line could then be in the markup
				myFormToValidate.setMessage("fullName", "notEmpty", "Custom is not empty message");
				
				// remove a validator - can't think why you need it yet but surely useful
				// if you pass in just the first param the whole validator will be removed
				// if you pass in ruleKey(s) then those particular rule(s) will be removed
				myFormToValidate.removeValidator("fullName", ["emailAddress"]);		
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
					<h1>Form validator</h1>
					
					<h2>About</h2>
					
					<h3>Multiple submit buttons</h3>
					<ul class="generic">
						<li>It is very highly recommended that a form has only 1 submit button unless your 
						multiple submit buttons run the same action. Useful for long forms. If you have more 
						than 1 button it causes an accessiblity problem via using the keyboard.</li>
						<li>When a user presses the enter key the form is submitted. 
						A contextual submit relies on the user clicking with the mouse.</li>
						<li>Natively in the browser, if you submit a form via the enter key and the form has multiple buttons, the form
						is submitted as if the first button in the HTML flow was clicked.</li>						
					</ul>
					
					<h3>Collaboration</h3>
					<ul class="generic">
						<li>We worked with the <a href="http://www.rnib.org.uk"><abbr title="Royal National Institute of the Blind">RNIB</abbr></a> to ensure high accessiblity and usability standards.</li>
						<li>Guidance taken from <a href="http://www.webaim.org/techniques/formvalidation/">WebAIM</a></li>
					</ul>
					
					<h3>Features</h3>
					<ul class="generic">
						<li>Can validate absolutely anything, with any custom function for any field including regex validation, 
						pattern matching, value tests, dependency matching, cross field validation, field matching - you can even
						validate a field based on its border-color or any other css property if you felt like you wanted to.</li>
						<li>Can have contextual submits (advise heaviliy against this (see above), but functionality is provided)</li>
						<li>Extremely accessible using labels and legends to give the user contextual information about an error</li>
						<li>The form can be validated with the keyboard and with a screen reader with ease.</li>
						<li>The document title is updated as well as the error summary display to inform the user of errors.</li>
						<li>Integrates with server side errors seamlessly</li>
						<li>Adding a validator is 1 line of code.</li>
						<li>You can remove a validator - a whole fields validators or a particular validator for a field if it has multiple validators.</li>
						<li>Can create as many custom validators as you wish.</li>
						<li>Custom error messages which either come from the server or set in the JavaScript only.</li>
						<li>When there is an error, the field indicator and / or input element can be highlighted with css using the error class.</li>
					</ul>					
					
					<h3>Current built-in validators</h3>
					<ul class="generic">
						<li>Not empty</li>
						<li>Is length</li>
						<li>Min checked</li>
						<li>Email address</li>
						<li>Name characters (custom regex)</li>
						<li>Phone number (allows + sign and brackets)</li>
						<li>Password (Between 6 and 12 upper or lowercase letters, and numbers)</li>
						<li>Number</li>
						<li>Alpha digit special full stop</li>
						<li>Matches - matches another fields value i.e. password confirmation made generic</li>
					</ul>					
					
					<h3>Other information</h3>
					<ul class="generic">
						<li>Uses the <a href="http://www.jquery.com">JQuery</a> JavaScript library.</li>
						<li>With regards to radio or checkbox groups, the server only sees the "name" of the field, so in order to bring focus, 
						using the error messages, the first item in the group must have an ID that is the same as the name. The proceeding radios 
						or checkboxes, have the same name, but will have a different ID (for label useage).</li>						
						<li>Some fields will need to use the legend in order to insert errors:
							<ul>
								<li>radio group</li>
								<li>checkbox group</li>
							</ul>
						</li>
						<li>Uses field indicators for all fields for several purposes.
							<ol>
								<li>It is a consistent visual representation of a field.</li>
								<li>Can be styled in many ways to cater for many design patterns.</li>
							</ol>
						</li>											
					</ul>
					
					
					<h2>Demo</h2>
					
					<% devForm.showErrors(); %>
											
					<form action="default.asp" method="post" id="devForm">
						<div class="form">
							<!--Single input-->
							<div class="field <%devForm.writeErrorClass(["fullName"])%>">
								<div class="contextualHelpType1">
									<p>This is contextual help before the form element(s).</p>
								</div>
								<div class="indicator">
									<label for="fullName">Full name <%devForm.writeErrorSpan(["fullName"])%></label>
								</div>
								<div class="singleInput">
									<input type="text" class="text" name="fullName" id="fullName" value="<%=Request.Form("fullName")%>" />
								</div>
							</div>
		
							<!--Single select-->
							<div class="field <%devForm.writeErrorClass(["age"])%>">
								<div class="indicator">
									<label for="age">Age <%devForm.writeErrorSpan(["age"])%></label>
								</div>
								<div class="singleInput">
									<select name="age" id="age">
										<option value="" <%devForm.writeSelected(Request.Form("age"), "")%> >Please select</option>
										<option value="1" <%devForm.writeSelected(Request.Form("age"), "1")%> >1</option>
										<option value="2" <%devForm.writeSelected(Request.Form("age"), "2")%> >2</option>
									</select>
								</div>
							</div>
							
							
							<!--Single checkbox-->
							<div class="field <%devForm.writeErrorClass(["terms"])%>">
								<div class="indicator">
									<span class="label">Terms</span>
								</div>
								<div class="checkboxes">
									<div class="input">
										<input type="checkbox" name="terms" id="terms" value="terms" <%devForm.writeChecked(Request.Form("terms"), "terms")%> />
										<label for="terms">Terms and conditions <%devForm.writeErrorSpan(["terms"])%></label>
									</div>
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
									</div>
									<div class="input">
										<label for="month01">Month <%devForm.writeErrorSpan(["month01"])%></label>
										<input type="text" class="text" name="month01" id="month01" value="<%=Request.Form("month01")%>" />
									</div>
									<div class="input">
										<label for="year01">Year <%devForm.writeErrorSpan(["year01"])%></label>
										<input type="text" class="text" name="year01" id="year01" value="<%=Request.Form("year01")%>" />
									</div>
									<input class="submit" type="submit" name="contextualSubmitButton" id="contextualSubmitButton" value="Validate dates only" />
								</div>
								<div class="contextualHelpType2">
									<p>This is contextual help after the form element(s).</p>
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
							
							<!--Radio group-->
							
							<div class="field <%devForm.writeErrorClass(["gender"])%>">
								<div class="indicator">
									<span class="label">Gender</span>
								</div>
								<div class="radios">
									<fieldset>
										<legend><span class="legend">Gender</span><%devForm.writeErrorSpan(["gender"])%></legend>
										<div class="input">
											<input type="radio" name="gender" id="gender" value="Male" <%devForm.writeChecked(Request.Form("gender"), "Male")%> />
											<label for="gender">Male</label>
										</div>
										<div class="input">
											<input type="radio" name="gender" id="gender02" value="Female" <%devForm.writeChecked(Request.Form("gender"), "Female")%> />
											<label for="gender02">Female</label>
										</div>
										<div class="input">
											<input type="radio" name="gender" id="gender03" value="Both" <%devForm.writeChecked(Request.Form("gender"), "Both")%> />
											<label for="gender03">Both</label>
										</div>
										<div class="input">
											<input type="radio" name="gender" id="gender04" value="Don't know" <%devForm.writeChecked(Request.Form("gender"), "Don't know")%> />
											<label for="gender04">Don't know</label>
										</div>								
									</fieldset>
								</div>
							</div>
							
							<!--Textarea-->
							
							<div class="field <%devForm.writeErrorClass(["message"])%>">
								<div class="indicator">
									<label for="message">Message <%devForm.writeErrorSpan(["message"])%></label>
								</div>
								<div class="singleInput">
									<textarea name="message" id="message" cols="30" rows="8"><%=Request.Form("message")%></textarea>
								</div>
							</div>	
							
							<!--File-->
							
							<div class="field <%devForm.writeErrorClass(["file"])%>">
								<div class="indicator">
									<label for="file">File <%devForm.writeErrorSpan(["file"])%></label>
								</div>
								<div class="singleInput">
									<input type="file" name="file" id="file" value="<%=Request.Form("file")%>" />
								</div>
							</div>									
							
							
							<!--Multiple select-->
							
							<div class="field <%devForm.writeErrorClass(["friends"])%>">
								<div class="indicator">
									<label for="friends">Friends <%devForm.writeErrorSpan(["friends"])%></label>
								</div>
								<div class="singleInput">
									<select name="friends" id="friends" size="3" multiple="multiple">
										<option value="Andy" <%devForm.writeSelected(Request.Form("friends"), "Andy")%> >Andy</option>
										<option value="Dan" <%devForm.writeSelected(Request.Form("friends"), "Dan")%> >Dan</option>
										<option value="Marvin" <%devForm.writeSelected(Request.Form("friends"), "Marvin")%> >Marvin</option>
									</select>
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
					<!--#include file="../../inc/code/formvalidator.asp"-->
					
					<h2>Creating a custom validator</h2>						
					<p>Coming soon</p>
					
				</div>
			</div>
			
		</div>
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
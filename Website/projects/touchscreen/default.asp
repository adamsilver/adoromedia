<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../inc/Adoro.asp"-->
<!--#include file="../inc/Adoro.CheckLogin.asp"-->
<% Adoro.pageName = "touchscreen"; %>
<% Adoro.siteSection = "library" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Tooltips, JavaScript user interface component library, Adoro Media Ltd</title>
		<!--#include file="../inc/head.asp"-->
		<script type="text/javascript" src="../Adoro.TtouchScreen.js"></script>
		<script type="text/javascript">
			try {
				touchScreen.inputHandler.initalFieldID = "FirstName";
			}
			catch(err) {
				
			}
		</script>
	</head>
	<body>
		<hr/>
		<form name="inputForm" id="inputForm" action="">
			<input type="hidden" id="focusedField" name="focusedField" value="" />
			First Name
			<input class="tabbable" type="text" name="FirstName" id="FirstName" onfocus="touchScreen.inputHandler.setFocusedField(this)" />
			<br/>
			Last Name
			<input class="tabbable" type="text" name="LastName" id="LastName" onfocus="touchScreen.inputHandler.setFocusedField(this)" />
			<br/>
			Phone 
			<input class="tabbable" type="text" name="Phone" id="Phone" onfocus="touchScreen.inputHandler.setFocusedField(this)" />
			<br/>
			Email 
			<input class="tabbable" type="text" name="Email" id="Email" onfocus="touchScreen.inputHandler.setFocusedField(this)" />
		</form>
		
		<hr/>

		<input type=button value="d" onclick="touchScreen.inputHandler.changeFieldValue(this)" />
		<input type=button value="e" onclick="touchScreen.inputHandler.changeFieldValue(this)" />
		<input type=button value="f" onclick="touchScreen.inputHandler.changeFieldValue(this)" />		
		<input type=button value="backspace" onclick="touchScreen.inputHandler.changeFieldValue(this)" />
		<input type=button value="space" onclick="touchScreen.inputHandler.changeFieldValue(this)" />
		<hr/>
		<input type=button value="Tab backward" onclick="touchScreen.navigator.tabBackward()" />
		<input type=button value="Tab forward" onclick="touchScreen.navigator.tabForward()" />
		<hr/>
		
		<input type=button value="Scroll up" id="scrollUp" />
		<input type=button value="Scroll down" id="scrollDown" />
		<div id="scrollArea" style="position:relative;height: 300px; width: 500px; overflow: hidden; border: 1px solid #eee;">
			<div id="clip" style="">
			
				<div style="height: 300px;">
					<a class="scrollpoint"></a>
					<div>details</div>
					<div>details</div>
					<div>details</div>
					<div>details</div>
					<div>details</div>
					<div>details</div>
					<div>details</div>
					<div>details</div>
					<div>details</div>
					<div>details</div>
					<div>details</div>
					<div>details</div>
					<div>details</div>
					<a class="scrollpoint"></a>
				</div>
				
				<div style="height: 300px;">
					<a class="scrollpoint"></a>
					<div>details2</div>
					<div>details2</div>
					<div>details2</div>
					<div>details2</div>
					<div>details2</div>
					<div>details2</div>
					<div>details2</div>
					<div>details2</div>
					<div>details2</div>
					<div>details2</div>
					<div>details2</div>
					<div>details2</div>
					<div>details2</div>
					<a class="scrollpoint"></a>		
				</div>
				
				<div style="height: 300px;">
					<a class="scrollpoint"></a>	
					<div>details3</div>
					<div>details3</div>
					<div>details3</div>
					<div>details3</div>
					<div>details3</div>
					<div>details3</div>
					<div>details3</div>
					<div>details3</div>
					<div>details3</div>
					<div>details3</div>
					<div>details3</div>
					<div>details3</div>
					<div>details3</div>
					<a class="scrollpoint"></a>	
				</div>
			</div>
			
		</div>
		
		<hr/>
	</body>
</html>

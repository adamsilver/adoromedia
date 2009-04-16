<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "checkboxdisable"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Checkbox disabler, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->
		<meta name="keywords" content="checkbox, disabler, JavaScript, jQuery, component, script, adoro, media" />
		<meta name="description" content="Checkbox disabler jQuery JavaScript component, by Adoro Media." />
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->	
		<!--#include file="../../inc/head_cssie.asp"-->
		<script type="text/javascript" src="../../js/Adoro/Adoro.CheckboxDisabler.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){
				var group01 = new Adoro.CheckboxDisabler($("input[name='searchEngine']"),2);
				var group02 = new Adoro.CheckboxDisabler($("input[name='secondGroup']"),1);
			});
		</script>	
	</head>
	<body class="projects">
		<div id="container">
			
			<div id="header">
				<!--#include file="../../inc/logo.asp"-->
				<!--#include file="../../inc/primaryNavigation.asp"-->
			</div>
			<div id="content">
				<h1>Checkbox disabler</h1>
				<h2>About</h2>
				<ul class="generic">
					<li>Create multiple instances of a checkbox group that disables remaining checkboxes,
					when a certain amount of checkboxes (configurable by you) have been checked.</li> 
					<li>They will enable again when the user unchecks the checkboxes bringing the threshold below the max size again.</li>
				</ul>
				
				<h2>Demo</h2>
				<div class="form">
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
						</div>
					</div>
				
					<div class="field">
						<div class="indicator">
							<span class="label">Second group</span>
						</div>
						<div class="checkboxes">
							<fieldset>
								<legend><span class="legend">Search engines</span></legend>
								<div class="input">
									<input type="checkbox" name="secondGroup" id="secondGroup" value="Yahoo" />
									<label for="secondGroup">1 yah</label>
								</div>
								<div class="input">
									<input type="checkbox" name="secondGroup" id="secondGroup02" value="Live" />
									<label for="secondGroup02">2 yah</label>
								</div>
								<div class="input">
									<input type="checkbox" name="secondGroup" id="secondGroup03" value="Google" />
									<label for="secondGroup03">3 yah</label>
								</div>
							</fieldset>
						</div>
					</div>		
				</div>		
			</div>
			<!--#include file="../../inc/footer.asp"-->
		</div>
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
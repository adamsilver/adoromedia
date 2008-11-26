<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "fieldmaxlength"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Field max length indicator, JavaScript user interface component library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->	
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->		
		<link rel="stylesheet" href="../../css/tooltip.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->	
		<script type="text/javascript" src="../../js/Adoro/Adoro.FieldMaxLength.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){
				var el = $('<p class="remaining"></p>')[0];
				var search = document.getElementById("search");
				if(search === null) return;
				search.parentNode.appendChild(el);
				var myFieldMax = new Adoro.FieldMaxLength(search,{
					statusIndicator: el,
					max: 50,
					beforeText: "Information: ",
					afterText: " chars remaining!"
				});
			});
			
			$(document).ready(function(){
				var el = $('<p class="remaining"></p>')[0];
				var field = document.getElementById("different");
				if(field === null) return;
				field.parentNode.appendChild(el);
				var myFieldMax = new Adoro.FieldMaxLength(field,{
					statusIndicator: el,
					max: 50,
					beforeText: "Information: ",
					afterText: " chars remaining!"
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
					<h1>Field max length indicator</h1>
					<h2>About</h2>
					<ul class="generic">
						<li>Create max length validators and indicators for associated inputs and textareas.</li>
						<li>Customise indicator output and max length of characthers.</li>
					</ul>
					
					<h2>Demo</h2>
					
					<form>
						<div class="form">
							<div class="field">
								<div class="indicator">
									<label for="search">Search</label>
								</div>
								<div class="singleInput">
									<input class="text" type="text" name="search" id="search" value="search text..." />
								</div>
							</div>
							<div class="field">
								<div class="indicator">
									<label for="different">Different</label>
								</div>
								<div class="singleInput">
									<textarea id="different" name="different"></textarea>
								</div>
							</div>						
						</div>
					</form>
					
									
				</div>
			</div>
		</div>
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
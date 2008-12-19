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
		<link rel="stylesheet" href="../../css/starrating.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->				
		<script type="text/javascript" src="../../js/Adoro/Adoro.StarRating.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){
				var myStarRating = new Adoro.StarRating($("input[name='starRating']"));
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
					<h1>Star rating</h1>
					<h2>About</h2>
					<ul class="generic">
						<li>Create multiple star rating instances.</li>
						<li>Pass in a collection of input type radio nodes.</li>
						<li>Each label related to the radio become clickable.</li>
					</ul>
					<h2>Demo</h2>
					<div class="form">
					
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
					
				</div>
			</div>
		</div>
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
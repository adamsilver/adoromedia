<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "calendar2"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Calendar2, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->	
		<meta name="keywords" content="calendar, JavaScript, jQuery, component, script, adoro, media" />
		<meta name="description" content="Calendar jQuery JavaScript component, by Adoro Media." />
		<script type="text/javascript" src="<%=Adoro.URL%>/js/JQuery/jquery-1.3.2.min.js"></script>
		<script type="text/javascript" src="<%=Adoro.URL%>/js/Adoro/Adoro.Calendar2.js"></script>
		<script type="text/javascript" src="<%=Adoro.URL%>/js/Site/Projects/Site.Projects.Calendar2.js"></script>
		<link rel="stylesheet" href="<%=Adoro.URL%>/css/Site/projects.css" type="text/css" />
	</head>
	<body class="projects">
		<div id="container">
			<h1>Calendar</h1>
			<h2>About</h2>
			<ul>
				<li>A calendar control.</li>
				<li>Currently hooks into three select fields.</li>
				<li>Uses the <a href="http://www.jquery.com">JQuery</a> JavaScript library.</li>
			</ul>
			
			<h2>Demo</h2>
			
			<div class="form">
				<div class="field cc">
					<div class="indicator">
						<span class="label">Date selection 01</span>
					</div>
					<div class="multipleInput">
						<div class="input">
							<select id="day" name="day">
								<option value="">DD</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>	
								<option value="11">11</option>
								<option value="12">12</option>
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
								<option value="19">19</option>
								<option value="20">20</option>
								<option value="21">21</option>
								<option value="22">22</option>
								<option value="23">23</option>
								<option value="24">24</option>
								<option value="25">25</option>
								<option value="26">26</option>
								<option value="27">27</option>
								<option value="28">28</option>
								<option value="29">29</option>
								<option value="30">30</option>			
								<option value="31">31</option>																				
							</select>
							<label for="day">Day</label>
						</div>
						<div class="input">
							<select id="month" name="month">
								<option value="">MM</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>		
								<option value="11">11</option>
								<option value="12">12</option>										
							</select>
							<label for="month">Month</label>
						</div>				
						<div class="input">
							<select id="year" name="year">
								<option value="">YY</option>
								<option value="2006">2006</option>
								<option value="2007">2007</option>
								<option value="2008">2008</option>
								<option value="2009">2009</option>
								<option value="2010">2010</option>
								<option value="2011">2011</option>
							</select>
							<label for="year">Year</label>
						</div>				
					</div>
				</div>
				
				<div class="field cc">
					<div class="indicator">
						<span class="label">Date selection 02</span>
					</div>
					<div class="multipleInput">
						<div class="input">
							<select id="day2" name="day">
								<option value="">DD</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>	
								<option value="11">11</option>
								<option value="12">12</option>
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
								<option value="19">19</option>
								<option value="20">20</option>
								<option value="21">21</option>
								<option value="22">22</option>
								<option value="23">23</option>
								<option value="24">24</option>
								<option value="25">25</option>
								<option value="26">26</option>
								<option value="27">27</option>
								<option value="28">28</option>
								<option value="29">29</option>
								<option value="30">30</option>			
								<option value="31">31</option>																				
							</select>
							<label for="day2">Day</label>
						</div>
						<div class="input">
							<select id="month2" name="month">
								<option value="">MM</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>		
								<option value="11">11</option>
								<option value="12">12</option>										
							</select>
							<label for="month2">Month</label>
						</div>				
						<div class="input">
							<select id="year2" name="year">
								<option value="">YY</option>
								<option value="2006">2006</option>
								<option value="2007">2007</option>
								<option value="2008">2008</option>
								<option value="2009">2009</option>
								<option value="2010">2010</option>
								<option value="2011">2011</option>
							</select>
							<label for="year2">Year</label>
						</div>			
					</div>
				</div>								
			</div>
				
		</div>		
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
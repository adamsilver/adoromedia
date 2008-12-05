<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "imagezoom"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Image zoom, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->	
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->	
		<link rel="stylesheet" href="../../css/accordian.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->
		<script type="text/javascript" src="../../js/JQuery/jquery.jqzoom.js"></script>
		<style type="text/css">
			.jqzoom {
				border:1px solid black;
				float:left;
				position:relative;
				padding:0px;
				cursor:pointer;
				}
			
			.jqzoom img {
				float:left;
				}
			
			div.zoomdiv {
				z-index: 100;
				position: absolute;
				top:0px;
				left:0px;
				width: 260px;
				height: 260px;
				background: #ffffff;
				border:1px solid #CCC;
				display:none;
				text-align: center;
				overflow: hidden;
				}
				
			div.zoomdiv img {
				z-index: 100;
				}
			
			
			div.jqZoomPup {
				z-index: 10;
				visibility: hidden;
				position: absolute;
				top:0px;
				left:0px;
				/*width: 35px;
				height: 35px;*/
				border: 1px solid #999;
				background: #fff url(../images/zoomlens.gif) 50% top  no-repeat;
				opacity: 0.5;
				-moz-opacity: 0.5;
				-khtml-opacity: 0.5;
				filter: alpha(Opacity=50);
			}			
		
		</style>
		<script type="text/javascript">
			$(document).ready(function(){ 
				$(".jqzoom").jqueryzoom({preload: 0});
			});
		</script>
	</head>
	<body class="projects">
		<div id="container">
			<div class="faux">
				<div id="controls">
					<!--#include file="../../inc/logo.asp"-->
					<!--#include file="../../inc/primaryNavigation.asp"-->
				</div>
				<div id="content">
					<h1>Image zoom</h1>
					
					<div class="jqzoom">
						<img alt="" src="http://washford.scene7.com/is/image/Washford/960484?$prod$" id="fullImage" jqimg="http://washford.scene7.com/is/image/Washford/960484?$prodzoom$"/>
					</div>
				</div>
			</div>
		</div>
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>
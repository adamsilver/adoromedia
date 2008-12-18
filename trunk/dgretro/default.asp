<!--#include file="inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="inc/Site.asp"-->
<% Site.pageName = "home"; %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>David Goodman Retro Collectables, Kensal Rise, London, England, UK</title>
		<!--#include file="inc/HeadMeta.asp"-->
		<!--#include file="inc/HeadCSS.asp"-->
		<!--#include file="inc/HeadCSSIE.asp"-->
		<!--#include file="inc/HeadJS.asp"-->
		<script type="text/javascript" src="<%=Site.URL%>/js/DG/DG.LightBox.js"></script>
	</head>
	<body>
		<div id="wrap">
			<!--#include file="inc/primaryNavigation.asp"-->
			<div id="container">
				<div class="containerInner">
					<!--#include file="inc/header.asp"-->
					
					<div id="content">
						<div class="contentInner">
							<h1>Vintage collectables in London</h1>
							<p>One of the finest selection of vintage collectables for sale in London.</p>
							
							<h2 class="dg">Take a look at a sample range below</h2>
							
							<ul class="products">
								<li><a class="lightbox" rel="example" title="" href="img/products/ceramics/1.jpg"><img src="img/products/ceramics/1s.jpg" alt="Ceramic" /></a></li>
								<li><a class="lightbox" rel="example" title="" href="img/products/glass/1.jpg"><img src="img/products/glass/1s.jpg" alt=" " /></a></li>
								<li><a class="lightbox" rel="example" title="" href="img/products/jewellery/1.jpg"><img src="img/products/jewellery/1s.jpg" alt=" " /></a></li>
								<li><a class="lightbox" rel="example" title="" href="img/products/paintings/1.jpg"><img src="img/products/paintings/1s.jpg" alt=" " /></a></li>
								<li><a class="lightbox" rel="example" title="" href="img/products/tins/1.jpg"><img src="img/products/tins/1s.jpg" alt=" " /></a></li>
								<li><a class="lightbox" rel="example" title="" href="img/products/glass/2.jpg"><img src="img/products/glass/2s.jpg" alt=" " /></a></li>			
							</ul>
							
							<h2 class="dg">Our range of collectables</h2>
							
							<ul class="generic">
								<li><a href="products.asp?productID=ceramics#panel01">Ceramics</a></li>
								<li><a href="products.asp?productID=glass#panel02">Glass</a></li>
								<li><a href="products.asp?productID=jewellery#panel03">Costume jewellery</a></li>
								<li><a href="products.asp?productID=prints#panel04">Prints and paintings</a></li>
								<li><a href="products.asp?productID=tins#panel05">Tins</a></li>
								<li><a href="products.asp?productID=handbags#panel06">Handbags (Currently getting new stock)</a></li>
							</ul>
							
							<h2 class="dg">Dealers, collectors and buyers</h2>
							
							<p>We also sell to dealers and film production companies who need retro vintage items
							as props. Other customers include interior decorators.</p>
							
							<p>Retro Collectables is run by David and Tina Goodman. Retro Collectables
							appeal to all ages and gender whether they are collectors or buying gifts
							for others.</p>
						</div>
					</div>
					<!--#include file="inc/footer.asp"-->
				</div>
			</div>
		</div>
	</body>
</html>
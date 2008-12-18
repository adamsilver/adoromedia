<!--#include file="inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="inc/Site.asp"-->
<% Site.pageName = "products"; %>
<%
	var productID = Request.QueryString("productID");
%>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Products, David Goodman Retro Collectables, Kensal Rise, London, England, UK</title>
		<!--#include file="inc/HeadMeta.asp"-->
		<!--#include file="inc/HeadCSS.asp"-->
		<!--#include file="inc/HeadCSSIE.asp"-->
		<!--#include file="inc/HeadJS.asp"-->
		<script type="text/javascript" src="<%=Site.URL%>/js/Adoro/Adoro.Accordian.js"></script>
		<script type="text/javascript" src="<%=Site.URL%>/js/DG/DG.Accordian.js"></script>
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
							<h1>Our range of products</h1>
							
							<h2 class="dg">Retro vintage collectables</h2>
							
							<p>A great selection of retro vintage collectables that will enhance your home or
							be that special gift for a loved one or valued friend.</p>
							
							<p>Please click the headings below to view the products inside. Click the product photo to view a higher resolution.</p>
							
							<div class="accordian">
								<div class="header <%=(productID == "ceramics")? "headerOn": ""%>">
									<h2>Ceramics</h2>
								</div>
								<div class="panel">
									<div class="inner">
										<ul class="products">
											<li><a class="lightbox" rel="ceramics" title="" href="img/products/ceramics/1.jpg"><img src="img/products/ceramics/1s.jpg" width="160" height="160" alt=" " /></a></li>
											<li><a class="lightbox" rel="ceramics" title="" href="img/products/ceramics/2.jpg"><img src="img/products/ceramics/2s.jpg" width="160" height="160" alt=" " /></a></li>
											<li><a class="lightbox" rel="ceramics" title="" href="img/products/ceramics/3.jpg"><img src="img/products/ceramics/3s.jpg" width="160" height="160" alt=" " /></a></li>
											<li><a class="lightbox" rel="ceramics" title="" href="img/products/ceramics/4.jpg"><img src="img/products/ceramics/4s.jpg" width="160" height="160" alt=" " /></a></li>
											<li><a class="lightbox" rel="ceramics" title="" href="img/products/ceramics/5.jpg"><img src="img/products/ceramics/5s.jpg" width="160" height="160" alt=" " /></a></li>
											<li><a class="lightbox" rel="ceramics" title="" href="img/products/ceramics/6.jpg"><img src="img/products/ceramics/6s.jpg" width="160" height="160" alt=" " /></a></li>
										</ul>
									</div>
								</div>
			
								<div class="header <%=(productID == "glass")? "headerOn": ""%>">
									<h2>Glass</h2>
								</div>
								<div class="panel">
									<div class="inner">
										<ul class="products">
											<li><a class="lightbox" rel="glass" title="" href="img/products/glass/1.jpg"><img src="img/products/glass/1s.jpg" width="160" height="160" alt=" " /></a></li>
											<li><a class="lightbox" rel="glass" title="" href="img/products/glass/2.jpg"><img src="img/products/glass/2s.jpg" width="160" height="160" alt=" " /></a></li>
											<li><a class="lightbox" rel="glass" title="" href="img/products/glass/3.jpg"><img src="img/products/glass/3s.jpg" width="160" height="160" alt=" " /></a></li>
											<li><a class="lightbox" rel="glass" title="" href="img/products/glass/4.jpg"><img src="img/products/glass/4s.jpg" width="160" height="160" alt=" " /></a></li>
											<li><a class="lightbox" rel="glass" title="" href="img/products/glass/5.jpg"><img src="img/products/glass/5s.jpg" width="160" height="160" alt=" " /></a></li>
											<li><a class="lightbox" rel="glass" title="" href="img/products/glass/6.jpg"><img src="img/products/glass/6s.jpg" width="160" height="160" alt=" " /></a></li>											
										</ul>
									</div>
								</div>
			
								<div class="header <%=(productID == "jewellery")? "headerOn": ""%>">
									<h2>Costume jewellery</h2>
								</div>
								<div class="panel">
									<div class="inner">
										<ul class="products">
											<li><a class="lightbox" rel="jewellery" title="" href="img/products/jewellery/1.jpg"><img src="img/products/jewellery/1s.jpg" width="160" height="160" alt=" " /></a></li>
											<li><a class="lightbox" rel="jewellery" title="" href="img/products/jewellery/2.jpg"><img src="img/products/jewellery/2s.jpg" width="160" height="160" alt=" " /></a></li>
											<li><a class="lightbox" rel="jewellery" title="" href="img/products/jewellery/3.jpg"><img src="img/products/jewellery/3s.jpg" width="160" height="160" alt=" " /></a></li>
											<li><a class="lightbox" rel="jewellery" title="" href="img/products/jewellery/4.jpg"><img src="img/products/jewellery/4s.jpg" width="160" height="160" alt=" " /></a></li>
											<li><a class="lightbox" rel="jewellery" title="" href="img/products/jewellery/5.jpg"><img src="img/products/jewellery/5s.jpg" width="160" height="160" alt=" " /></a></li>
											<li><a class="lightbox" rel="jewellery" title="" href="img/products/jewellery/6.jpg"><img src="img/products/jewellery/6s.jpg" width="160" height="160" alt=" " /></a></li>
										</ul>
									</div>
								</div>
								
								<div class="header <%=(productID == "prints")? "headerOn": ""%>">
									<h2>Prints and paintings</h2>
								</div>
								<div class="panel">
									<div class="inner">
										<ul class="products">
											<li><a class="lightbox" rel="paintings" title="" href="img/products/paintings/1.jpg"><img src="img/products/paintings/1s.jpg" width="160" height="160" alt=" " /></a></li>
											<li><a class="lightbox" rel="paintings" title="" href="img/products/paintings/2.jpg"><img src="img/products/paintings/2s.jpg" width="160" height="160" alt=" " /></a></li>
											<li><a class="lightbox" rel="paintings" title="" href="img/products/paintings/3.jpg"><img src="img/products/paintings/3s.jpg" width="160" height="160" alt=" " /></a></li>
											<li><a class="lightbox" rel="paintings" title="" href="img/products/paintings/4.jpg"><img src="img/products/paintings/4s.jpg" width="160" height="160" alt=" " /></a></li>											
											<li><a class="lightbox" rel="paintings" title="" href="img/products/paintings/5.jpg"><img src="img/products/paintings/5s.jpg" width="160" height="160" alt=" " /></a></li>											
										</ul>
									</div>
								</div>
								
								<div class="header <%=(productID == "tins")? "headerOn": ""%>">
									<h2>Tins</h2>
								</div>
								<div class="panel">
									<div class="inner">
										<ul class="products">
											<li><a class="lightbox" rel="tins" title="" href="img/products/tins/1.jpg"><img src="img/products/tins/1s.jpg" width="160" height="160" alt=" " /></a></li>
											<li><a class="lightbox" rel="tins" title="" href="img/products/tins/2.jpg"><img src="img/products/tins/2s.jpg" width="160" height="160" alt=" " /></a></li>
											<li><a class="lightbox" rel="tins" title="" href="img/products/tins/3.jpg"><img src="img/products/tins/3s.jpg" width="160" height="160" alt=" " /></a></li>
											<li><a class="lightbox" rel="tins" title="" href="img/products/tins/4.jpg"><img src="img/products/tins/4s.jpg" width="160" height="160" alt=" " /></a></li>
											<!--<li><a class="lightbox" rel="tins" title="" href="img/products/tins/5.jpg"><img src="img/products/tins/5s.jpg" width="160" height="160" alt=" " /></a></li>
											<li><a class="lightbox" rel="tins" title="" href="img/products/tins/6.jpg"><img src="img/products/tins/6s.jpg" width="160" height="160" alt=" " /></a></li>-->																						
										</ul>
									</div>
								</div>
								
								<div class="header <%=(productID == "handbags")? "headerOn": ""%>">
									<h2>Handbags</h2>
								</div>
								<div class="panel">
									<div class="inner">
										<p>Currently getting new stock</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!--#include file="inc/footer.asp"-->
				</div>
			</div>
		</div>
	</body>
</html>
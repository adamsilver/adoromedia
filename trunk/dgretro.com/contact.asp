<!--#include file="inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="inc/Site.asp"-->
<% Site.pageName = "contact"; %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Contact David Goodman Retro Collectables, Kensal Rise, London, England, UK</title>
		<!--#include file="inc/HeadMeta.asp"-->
		<!--#include file="inc/HeadCSS.asp"-->
		<!--#include file="inc/HeadCSSIE.asp"-->
		<!--#include file="inc/HeadJS.asp"-->
		 <script src="http://maps.google.com/maps?file=api&amp;v=2&amp;key=ABQIAAAAcCPnNaC9ucSS0iuyWMhdNhSE_asHzV_6fwx2jzKnSUwFdtP9hBTpESyKk4yKtRpdBJDrPLt7NXkTJQ" type="text/javascript"></script>

		<script type="text/javascript" src="<%=Site.URL%>/js/Adoro/Adoro.GoogleMap.js"></script>
		<script type="text/javascript" src="<%=Site.URL%>/js/DG/DG.Map.js"></script>
	</head>
	<body>
		<div id="wrap">
			<!--#include file="inc/primaryNavigation.asp"-->
			<div id="container">
				<div class="containerInner">
					<!--#include file="inc/header.asp"-->
					
					<div id="content">
						<div class="contentInner">
							<h1>Contact details</h1>
							<p>Please contact or visit us.</p>
							
							<div class="contactDetails">
								<div class="address">
									<h2 class="dg">Address</h2>
									<p class="address">81 College Road, Kensal Green, NW10 5ES</p>
								</div>
								<div class="telephone">
									<h2 class="dg">Telephone</h2>
									<p class="telephone">07947 063 505</p>
								</div>
								<div class="email">
									<h2 class="dg">Email address</h2>
									<p class="email"><a href="mailto:info@dgretro.com">info@dgretro.com</a></p>
								</div>
							</div>
							
							<h2 class="dg">Map and directions</h2>
							<div id="map">
								Map here
							</div>
			
						</div>
					</div>
					<!--#include file="inc/footer.asp"-->
				</div>
			</div>
		</div>
	</body>
</html>
<div id="primaryNavigation">
	<ul>
		<li><a href="<%=Site.URL%>/default.asp" <%if(Site.pageName === "home"){%>class="selected"<%}%>><span>Home</span></a></li>
		<li><a href="<%=Site.URL%>/products.asp" <%if(Site.pageName === "products"){%>class="selected"<%}%>><span>Products</span></a></li>		
		<li class="last"><a href="<%=Site.URL%>/contact.asp" <%if(Site.pageName === "contact"){%>class="selected"<%}%>><span>Contact</span></a></li>		
	</ul>
</div>
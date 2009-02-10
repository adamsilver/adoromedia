<div id="primaryNavigation">
	<ul>
		<li><a href="<%=Adoro.URL%>default.asp" <%if(Adoro.pageName === "home"){%>class="selected"<%}%>>Home</a></li>
		<li><a href="<%=Adoro.URL%>aboutus.asp" <%if(Adoro.pageName === "aboutus"){%>class="selected"<%}%>>About us</a></li>
		<li><a href="<%=Adoro.URL%>services.asp" <%if(Adoro.pageName === "services"){%>class="selected"<%}%>>Services</a></li>
		<li><a href="<%=Adoro.URL%>portfolio.asp" <%if(Adoro.pageName === "portfolio"){%>class="selected"<%}%>>Portfolio</a></li>
		<li><a href="<%=Adoro.URL%>projects/" <%if(Adoro.siteSection === "projects"){%>class="selected"<%}%>>Projects</a></li>
		<li><a href="<%=Adoro.URL%>blog" <%if(Adoro.pageName === "blog"){%>class="selected"<%}%>>Blog</a></li>
		<li><a href="<%=Adoro.URL%>contact.asp" <%if(Adoro.pageName === "contact"){%>class="selected"<%}%>>Contact</a></li>
	</ul>
</div>
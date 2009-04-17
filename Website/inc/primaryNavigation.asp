<div id="primaryNavigation">
	<ul>
		<li><a href="<%=Adoro.URL%>/default.asp" <%if(Adoro.pageName === "home"){%>class="selected"<%}%>>Home</a></li>
		<!--<li><a href="<%=Adoro.URL%>/aboutus.asp" <%if(Adoro.pageName === "aboutus"){%>class="selected"<%}%>>About</a></li>-->
		<li><a href="<%=Adoro.URL%>/services.asp" <%if(Adoro.pageName === "services"){%>class="selected"<%}%>>Services</a></li>
		<!--<li><a href="<%=Adoro.URL%>/faq.asp" <%if(Adoro.pageName === "faq"){%>class="selected"<%}%>>FAQ</a></li>-->
		<li><a href="<%=Adoro.URL%>/projects" <%if(Adoro.siteSection === "projects"){%>class="selected"<%}%>>Projects</a></li>
		<li class="last"><a href="<%=Adoro.URL%>/contact.asp" <%if(Adoro.pageName === "contact"){%>class="selected"<%}%>>Contact</a></li>
	</ul>
</div>

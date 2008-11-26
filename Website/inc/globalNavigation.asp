<div id="globalNavigation">
	<ul>
		<li><a href="<%=Adoro.URL%>default.asp" <%if(Adoro.siteSection === "adoro"){%>class="selected"<%}%>>Adoro</a></li>
		<li><a href="<%=Adoro.URL%>library/default.asp" <%if(Adoro.siteSection === "library"){%>class="selected"<%}%>>Library</a></li>
		<li><a href="<%=Adoro.URL%>blog/" <%if(Adoro.siteSection === "blog"){%>class="selected"<%}%>>Blog</a></li>	
		<%if(Session("Logged_In") != true) {%>
			<li><a href="<%=Adoro.URL%>login.asp" <%if(Adoro.siteSection === "login"){%>class="selected"<%}%>>Login</a></li>
		<%}else{%>
			<li><a href="<%=Adoro.URL%>logout.asp" <%if(Adoro.siteSection === "logout"){%>class="selected"<%}%>>Logout</a></li>
		<%}%>
	</ul>
</div>

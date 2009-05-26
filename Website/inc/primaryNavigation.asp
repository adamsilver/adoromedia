<div id="primaryNavigation">
	<ul>
		<li id="pnHome"><a href="<%=Adoro.URL%>/default.asp" <%if(Adoro.pageName === "home"){%>class="selected"<%}%>>Home</a></li>
		<li id="pnAbout"><a href="<%=Adoro.URL%>/about.asp" <%if(Adoro.siteSection === "about"){%>class="selected"<%}%>>About</a></li>
		<li id="pnServices"><a href="<%=Adoro.URL%>/services.asp" <%if(Adoro.siteSection === "services"){%>class="selected"<%}%>>Services</a></li>
		<li id="pnPortfolio"><a href="<%=Adoro.URL%>/portfolio.asp" <%if(Adoro.pageName === "portfolio"){%>class="selected"<%}%>>Portfolio</a></li>
		<li id="pnContact" class="last"><a href="<%=Adoro.URL%>/contact.asp" <%if(Adoro.pageName === "contact"){%>class="selected"<%}%>>Contact</a></li>
	</ul>
</div>

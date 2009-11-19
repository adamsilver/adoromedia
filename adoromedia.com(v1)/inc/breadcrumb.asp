<div id="breadcrumb">
	<p>You are here:</p>
	<ul>
		<%
			for(var i = 0; i < Adoro.breadCrumbParts.length; i++) {
				if(Adoro.breadCrumbParts[i].href && Adoro.breadCrumbParts[i].href !=="") {
					%>
						<li><a href="<%= Adoro.breadCrumbParts[i].href %>"><%=Adoro.breadCrumbParts[i].text%></a></li>
					<%
				}
				else {
					%>
						<li><strong><%=Adoro.breadCrumbParts[i].text%></strong></li>
					<%
				}
			}
		%>
	</ul>
</div>
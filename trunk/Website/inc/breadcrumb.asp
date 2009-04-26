<div id="breadcrumb">
	<p>You are here:</p>
	<ul>
		<%
			for(var i = 0; i < breadCrumbParts.length; i++) {
				if(breadCrumbParts[i].href && breadCrumbParts[i].href !=="") {
					%>
						<li><a href="<%= breadCrumbParts[i].href %>"><%=breadCrumbParts[i].text%></a></li>
					<%
				}
				else {
					%>
						<li><strong><%=breadCrumbParts[i].text%></strong></li>
					<%
				}
			}
		%>
	</ul>
</div>
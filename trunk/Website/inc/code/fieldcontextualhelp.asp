<p>Include following JS files</p>
<div class="code"><pre>
&lt;script type=&quot;text/javascript&quot; src=&quot;jquery-1.2.6.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;Adoro.FieldContextualHelp.js&quot;&gt;&lt;/script&gt;
</pre></div>

<div class="code"><pre>
&lt;script type=&quot;text/javascript&quot;&gt;
	$(document).ready(function(){ 
		var contextualHelpNodes = jQuery.makeArray($(&quot;.contextualHelp&quot;));
		
		// apply a contextual help node to the full name field
		var fullname = document.getElementById(&quot;fullName&quot;);
		new Adoro.FieldContextualHelp(fullname, contextualHelpNodes[0], {
			offsetTop: 5,
			offsetLeft: 0,
			placement:&quot;bottom&quot;
		});
		
		// applying the same contextual help node  to each of the input fields
		var day01 = document.getElementById(&quot;day01&quot;);
		var month01 = document.getElementById(&quot;month01&quot;);
		var year01 = document.getElementById(&quot;year01&quot;);
		new Adoro.FieldContextualHelp(day01,contextualHelpNodes[1], {
			offsetTop: -5,
			offsetLeft: 0,
			placement: &quot;top&quot;
		});	
		new Adoro.FieldContextualHelp(month01,contextualHelpNodes[1], {
			offsetTop: 5,
			offsetLeft: 0,
			placement: &quot;bottom&quot;
		});	
		new Adoro.FieldContextualHelp(year01,contextualHelpNodes[1], {
			offsetTop: -15,
			offsetLeft: 5,
			placement: &quot;right&quot;
		});		
		
		// applying different contextualHelp nodes to different input fields
		var day02 = document.getElementById(&quot;day02&quot;);
		var month02 = document.getElementById(&quot;month02&quot;);
		var year02 = document.getElementById(&quot;year02&quot;);
		new Adoro.FieldContextualHelp(day02,contextualHelpNodes[2], {
			offsetTop: 5,
			offsetLeft: 0,
			placement: &quot;bottom&quot;
		});	
		new Adoro.FieldContextualHelp(month02,contextualHelpNodes[3], {
			offsetTop: 5,
			offsetLeft: 0,
			placement: &quot;bottom&quot;
		});	
		new Adoro.FieldContextualHelp(year02,contextualHelpNodes[4], {
			offsetTop: 5,
			offsetLeft: 0,
			placement: &quot;bottom&quot;
		});	
		
		var checkboxes = $('[name="searchEngine"]');
		new Adoro.FieldContextualHelp(checkboxes[0], contextualHelpNodes[5], {
			offsetTop: 5,
			offsetLeft: 70,
			placement: "right"
		});
		
		new Adoro.FieldContextualHelp(checkboxes[1], contextualHelpNodes[5], {
			offsetTop: -14,
			offsetLeft: 70,
			placement: "right"
		});	
		
		new Adoro.FieldContextualHelp(checkboxes[2], contextualHelpNodes[5], {
			offsetTop: -33,
			offsetLeft: 70,
			placement: "right"
		});						
		
	});
&lt;/script&gt;
</pre></div>
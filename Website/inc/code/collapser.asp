<p>Include following JS files</p>
<div class="code"><pre>
&lt;script type=&quot;text/javascript&quot; src=&quot;jquery-1.2.6.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;Adoro.Collapser.js&quot;&gt;&lt;/script&gt;
</pre></div>

<div class="code"><pre>
&lt;script type=&quot;text/javascript&quot;&gt;
	$(document).ready(function(){ 
		var myCollapse = new Adoro.Collapser($(&quot;div#collapseMe div.panel&quot;)[0], $(&quot;div#collapseMe a.activator&quot;)[0], {
			startOpen: true,
			nodesToAddHideClassTo: [document.getElementById(&quot;collapseMe&quot;)],
			activatorInactiveHTML: &quot;Show demo&quot;,
			activatorActiveHTML: &quot;Hide demo&quot;,
			animate: true
		});
	});
&lt;/script&gt;	
</pre></div>
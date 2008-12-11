<p>Include following JS files</p>
<div class="code"><pre>
&lt;script type=&quot;text/javascript&quot; src=&quot;jquery-1.2.6.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;Adoro.Accordion.js&quot;&gt;&lt;/script&gt;
</pre></div>

<div class="code"><pre>
&lt;script type=&quot;text/javascript&quot;&gt;
	$(document).ready(function(){ 
		new Adoro.Accordion($("a.accordian1"), {animate: true});
		new Adoro.Accordion($("a.tabActivator"), {animate: false});	
	});
&lt;/script&gt;
</pre></div>
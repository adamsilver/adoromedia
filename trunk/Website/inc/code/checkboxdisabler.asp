<p>Include following JS files</p>
<div class="code"><pre>
&lt;script type=&quot;text/javascript&quot; src=&quot;jquery-1.2.6.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;Adoro.CheckboxDisabler.js&quot;&gt;&lt;/script&gt;
</pre></div>

<p>Create 2 instances</p>
<div class="code"><pre>
&lt;script type=&quot;text/javascript&quot;&gt;
	$(document).ready(function(){
		var group01 = new Adoro.CheckboxDisabler($(&quot;input[name=&#39;searchEngine&#39;]&quot;),2);
		var group02 = new Adoro.CheckboxDisabler($(&quot;input[name=&#39;secondGroup&#39;]&quot;),1);
	});
&lt;/script&gt;	
</pre></div>
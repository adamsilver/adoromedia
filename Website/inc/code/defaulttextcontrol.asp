<p>Include the Adoro.DefaultTextControl.js file</p>
<div class="code"><pre>
&lt;script type=&quot;text/javascript&quot; src=&quot;Adoro.DefaultTextControl.js&quot;&gt;&lt;/script&gt;
</pre></div>

<p>Create 2 instances</p>
<div class="code"><pre>
&lt;script type=&quot;text/javascript&quot;&gt;
	$(document).ready(function(){
		var myInputDefault1 = new Adoro.DefaultTextControl(document.getElementById(&quot;search&quot;));
		var myInputDefault2 = new Adoro.DefaultTextControl(document.getElementById(&quot;different&quot;));
	});
&lt;/script&gt;	
</pre></div>
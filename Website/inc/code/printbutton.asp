<p>Include following JS files</p>
<div class="code"><pre>
&lt;script type=&quot;text/javascript&quot; src=&quot;jquery-1.2.6.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;Adoro.PrintButton.js&quot;&gt;&lt;/script&gt;
</pre></div>

<div class="code"><pre>
&lt;script type=&quot;text/javascript&quot;&gt;
	$(document).ready(function(){
		var a = $(&#39;&lt;a href=&quot;#&quot; class=&quot;myPrintClass&quot;&gt;Print page!&lt;/a&gt;&#39;)
		$(&quot;div.printPlaceHolder p&quot;).replaceWith(a);
		var myprint = new Adoro.PrintButton(a);
	});
&lt;/script&gt;
</pre></div>
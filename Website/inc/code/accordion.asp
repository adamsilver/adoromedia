<p>Include following JS files</p>
<div class="code"><pre>
&lt;script type=&quot;text/javascript&quot; src=&quot;jquery-1.2.6.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;Adoro.Accordion.js&quot;&gt;&lt;/script&gt;
</pre></div>

<p>Create 2 accordians</p>
<div class="code"><pre>
&lt;script type=&quot;text/javascript&quot;&gt;
	$(document).ready(function(){ 
		var horizontal = new Adoro.Accordion({
			container: $(&quot;div.myHorizontalAccordian&quot;)[0], 
			activatorClass: &quot;header2&quot;,
			panelClass: &quot;panel2&quot;,					
			animationShowParams: {width: &quot;show&quot;},
			animationHideParams: {width: &quot;hide&quot;},
			animationShowSpeed: 1500,
			animationHideSpeed: 1500			
		});			
	
		var vertical = new Adoro.Accordion({
			container: $(&quot;div.accordian&quot;)[0], 
			animationShowSpeed: 300,
			animationHideSpeed: 300,
			activatorClass: &quot;header&quot;,
			panelClass: &quot;panel&quot;,
			activatorActiveClass: &quot;headerOn&quot;,
			panelActiveClass: &quot;panelOn&quot;
		});			
	});
&lt;/script&gt;
</pre></div>
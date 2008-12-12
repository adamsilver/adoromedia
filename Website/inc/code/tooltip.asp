<p>Include following JS files</p>
<div class="code"><pre>
&lt;script type=&quot;text/javascript&quot; src=&quot;jquery-1.2.6.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;jquery.bgiframe.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;Adoro.Tooltip.js&quot;&gt;&lt;/script&gt;
</pre></div>

<div class="code"><pre>
&lt;script type=&quot;text/javascript&quot;&gt;
$(document).ready(function(){
	var myTip1 = new Adoro.Tooltip($(&quot;a.tooltipAnchor&quot;)[0], &#39;&lt;div class=&quot;myTooltip&quot;&gt;This is my default tooltip with a delay&lt;/div&gt;&#39;);
	
	$(&quot;div.tooltipContainer div.tooltip&quot;).hide();
	var myTip2 = new Adoro.Tooltip($(&quot;div.tooltipContainer a.tooltipAnchor&quot;)[0], $(&quot;div.tooltipContainer div.tooltip&quot;)[0].innerHTML, {delay: 0,followMouse: true});
	
});
&lt;/script&gt;
</pre></div>
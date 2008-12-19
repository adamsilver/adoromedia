<p>Include following JS files</p>
<div class="code"><pre>
&lt;script type=&quot;text/javascript&quot; src=&quot;jquery-1.2.6.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;Adoro.FieldMaxLengthIndicator.js&quot;&gt;&lt;/script&gt;
</pre></div>

<div class="code"><pre>
		&lt;script type=&quot;text/javascript&quot;&gt;
			$(document).ready(function(){
				var el01 = $(&#39;&lt;p class=&quot;remaining&quot;&gt;&lt;/p&gt;&#39;)[0];
				var field01 = document.getElementById(&quot;search&quot;);
				if(field01 === null) return;
				field01.parentNode.appendChild(el01);
				var myFieldMax = new Adoro.FieldMaxLengthIndicator(field01,{
					statusIndicator: el01,
					max: 50,
					beforeText: &quot;Information: &quot;,
					afterText: &quot; chars remaining!&quot;
				});
				
				var el02 = $(&#39;&lt;p class=&quot;remaining&quot;&gt;&lt;/p&gt;&#39;)[0];
				var field02 = document.getElementById(&quot;different&quot;);
				if(field02 === null) return;
				field02.parentNode.appendChild(el02);
				var myFieldMax = new Adoro.FieldMaxLengthIndicator(field02,{
					statusIndicator: el02,
					max: 50,
					beforeText: &quot;Information: &quot;,
					afterText: &quot; chars remaining!&quot;
				});
			});			
		&lt;/script&gt;	
</pre></div>
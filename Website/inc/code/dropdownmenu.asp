<p>Include following JS files</p>
<div class="code"><pre>
&lt;script type=&quot;text/javascript&quot; src=&quot;jquery-1.2.6.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;jquery.bgiframe.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;Adoro.DropDownMenu.js&quot;&gt;&lt;/script&gt;
</pre></div>

<div class="code"><pre>
&lt;script type=&quot;text/javascript&quot;&gt;
	$(document).ready(function(){
		var ulNode1 = $(&quot;#dropDownMenu ul&quot;)[0] || null;
		new Adoro.DropDownMenu(ulNode1, {
			offsetLeft: -1,
			cssHideClass: &quot;off&quot;
		});
		
		var ulNode2 = $(&quot;#menu ul&quot;)[0] || null;
		new Adoro.DropDownMenu(ulNode2, {
			subMenuType: &quot;div&quot;,
			offsetTop: -1,
			offsetLeft: -3,
			cssActiveClass: &quot;hover&quot;,
			cssHideClass: &quot;off&quot;
		});
		
	});
&lt;/script&gt;
</pre></div>
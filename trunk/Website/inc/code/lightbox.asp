<p>Include following JS files</p>
<div class="code"><pre>
&lt;script type=&quot;text/javascript&quot; src=&quot;jquery-1.2.6.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;jquery.browser.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;Adoro.Dialogue.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;Adoro.Lightbox.js&quot;&gt;&lt;/script&gt;
</pre></div>

<p>Create 2 dialogue boxes, 1 which is spawned from the other 1. Each dialogue has different properties in use</p>
<div class="code"><pre>
&lt;script type=&quot;text/javascript&quot;&gt;
	$(document).ready(function(){
		// create a lightbox effect by finding all anchors with a class of lightbox
		new Adoro.Lightbox($(&quot;a.lightbox&quot;), {
			htmlBefore: &#39;&lt;div class=&quot;beforeShizzle&quot;&gt;&lt;a class=&quot;closeDialogue&quot; href=&quot;#&quot;&gt;Close the lightbox&lt;/a&gt;&lt;/div&gt;&#39;,
			htmlAfter: &#39;&lt;div class=&quot;afterShizzle&quot;&gt;Could put something after like this if you want&lt;/div&gt;&#39;,
			htmlBack: &#39;&lt;a class=&quot;back&quot; href=&quot;#&quot;&gt;Previous gallery image&lt;/a&gt;&#39;,
			htmlNext: &#39;&lt;a class=&quot;next&quot; href=&quot;#&quot;&gt;Next gallery image&lt;/a&gt;&#39;,
			htmlLoading: &#39;&lt;div id=&quot;lightboxLoading&quot;&gt;&lt;img src=&quot;../../img/loading.gif&quot; alt=&quot;Loading image&quot;/&gt;&lt;/div&gt;&#39;,
			overlayOpacity: &quot;0.78&quot;
		});
	});
&lt;/script&gt;	
</pre></div>
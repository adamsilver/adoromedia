<p>Include following JS files</p>
<div class="code"><pre>
&lt;script type=&quot;text/javascript&quot; src=&quot;jquery-1.2.6.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;jquery.browser.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;Adoro.Dialogue.js&quot;&gt;&lt;/script&gt;
</pre></div>

<p>Create 2 dialogue boxes, 1 which is spawned from the other 1. Each dialogue has different properties in use</p>
<div class="code"><pre>
&lt;script type=&quot;text/javascript&quot;&gt;
	$(document).ready(function(){
		
		$(&quot;p.lightBoxActivator a&quot;).click(function() {
		
			// could get html from ajax request etc
			var html = &#39;&#39;;
			html  += 	&#39;&lt;div id=&quot;dialogue01&quot;&gt;&#39;;
			html  += 		&#39;&lt;div class=&quot;header&quot;&gt;&#39;
			html  +=			&#39;&lt;h2&gt;Demo 01 - positioning&lt;/h2&gt;&#39;
			html  +=			&#39;&lt;a href=&quot;#&quot; class=&quot;closeDialogue&quot;&gt;Close&lt;/a&gt;&#39;;
			html  +=		&#39;&lt;/div&gt;&#39;;
			html  +=		&#39;&lt;div class=&quot;panel&quot;&gt;&#39;;
			html  +=			&#39;&lt;p&gt;{x: 100, y:150, animateOverlay: true}&lt;/p&gt;&#39;;
			html  +=			&#39;&lt;a class=&quot;new&quot; href=&quot;#&quot;&gt;Show next demo&lt;/a&gt;&#39;;
			html  +=		&#39;&lt;/div&gt;&#39;;
			html  +=	&#39;&lt;/div&gt;&#39;;
			
			Adoro.Dialogue.setHTML(html);
			Adoro.Dialogue.showDialogue({x: 100, y:150, animateOverlay: true});
			
			$(&quot;a.new&quot;).click(function(){
			
				// could get html from ajax request etc
				var html2 = &#39;&#39;;
				html2  += 	&#39;&lt;div id=&quot;dialogue02&quot;&gt;&#39;;
				html2  += 		&#39;&lt;div class=&quot;header&quot;&gt;&#39;
				html2  +=			&#39;&lt;h2&gt;Demo 02&lt;/h2&gt;&#39;
				html2  +=			&#39;&lt;a href=&quot;#&quot; class=&quot;closeDialogue&quot;&gt;Close&lt;/a&gt;&#39;;
				html2  +=		&#39;&lt;/div&gt;&#39;;
				html2  +=		&#39;&lt;div class=&quot;panel&quot;&gt;&#39;;
				html2  +=			&#39;&lt;p&gt;{animateDialogue:true, closeOnOverlayClick: false, showOverlay: true, overlayOpacity: &quot;1&quot;}&lt;/p&gt;&#39;;
				html2  +=		&#39;&lt;/div&gt;&#39;;						
				html2  +=	&#39;&lt;/div&gt;&#39;;
				
				Adoro.Dialogue.hideDialogue();
				Adoro.Dialogue.setHTML(html2);
				Adoro.Dialogue.showDialogue({animateDialogue:true, closeOnOverlayClick: false, showOverlay: true, overlayOpacity: &quot;1&quot;});
				
				return false;
			});
			
			return false;
		});
	});
&lt;/script&gt;
</pre></div>
<p>Include following JS files</p>
<div class="code"><pre>
&lt;script type=&quot;text/javascript&quot; src=&quot;jquery-1.2.6.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;jquery.easing.1.3.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;Adoro.Carousel.js&quot;&gt;&lt;/script&gt;
</pre></div>

<div class="code"><pre>
&lt;script type=&quot;text/javascript&quot;&gt;
	$(document).ready(function(){ 						
		new Adoro.Carousel(document.getElementById(&quot;carousel06&quot;),{
			offsetReveal: -35,
			isCircular: true,
			indicators: false,
			automaticDelay: 500,
			animateSpeed: 500
		});

		new Adoro.Carousel(document.getElementById(&quot;carousel02&quot;), {
			scrollCount: 2,
			isCircular: true,
			indicators: true,
			stopButton: true,
			startButton: true,
			forwardButton: true,
			backButton: true,
			automaticDirectionBackwards: false,
			animateSpeed: 1000,
			automaticDelay: 500
		});
		
		new Adoro.Carousel(document.getElementById(&quot;carousel07&quot;), {
			scrollCount: 2,
			vertical: true,
			isCircular: true,
			indicators: true,
			stopButton: true,
			startButton: true,
			forwardButton: true,
			backButton: true,
			automaticDirectionBackwards: false,
			animateSpeed: 300,
			automaticDelay: 500
		});
	});
&lt;/script&gt;
</pre></div>
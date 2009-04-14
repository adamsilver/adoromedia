var Site = Site || {};
Site.SampleWork = new (function(){
	$(document).ready(prepare);
	function prepare() {		
		new Adoro.Carousel(document.getElementById("sampleWork"), {
					scrollCount: 1,
					isCircular: false,
					indicators: false,
					stopButton: false,
					startButton: false,
					forwardButton: true,
					backButton: true,
					automaticDirectionBackwards: false,
					animateSpeed: 300,
					automaticDelay: 500
				});
	}
});
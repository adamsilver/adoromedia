module("player",{
	setup: function() {
		this.videoContainer = document.querySelector("div.video");
		this.clone = this.videoContainer.cloneNode(true);	
		this.player = new Player(this.videoContainer);
	},	
	teardown: function() {
		// do this to make sure we are dealing with fresh markup
		this.videoContainer.parentNode.replaceChild(this.clone, this.videoContainer);
		// do this to make sure we are dealing with fresh player
		this.player = null;
	}
}); 

test("The video element exists", function() {
	ok(this.player.video, "The video element exists");
});

test("The play/pause button control has been created", function(){
	expect(2);
	ok(this.player.CONTROLS.playPause, "The play/pause button exists");
	ok(this.player.video.paused, "The player should start paused");
});

// should i be testing this - i guess i can in the normal way but only if there is real src
test("When the play/pause button is clicked it will start to play the video", function(){
	$(this.player.CONTROLS.playPause).trigger("click");
	ok(!this.player.video.paused, "The video is not paused");
});

test("When the video is playing and I press the play/pause button, the video should pause", function(){
	this.player.video.play();
	$(this.player.CONTROLS.playPause).trigger("click");
	ok(this.player.video.paused, "The video should be paused");
});
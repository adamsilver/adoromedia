var Player = function(root) {
	var me = this;
	this.video = root.querySelector("video");
	
	this.CONTROLS = {};
	
	this.CONTROLS.playPause = (function(){
		var button = document.createElement("a");
		button.href = "#";
		button.innerHTML = "Play/Pause";
		
		$(button).bind("click", function(){
			if(me.video.paused) {
				me.video.play();
			}
			else {
				me.video.pause();
			}
		});
		root.appendChild(button);
		return button;
	}());
	
}
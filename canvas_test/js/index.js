var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
var audio = document.createElement('audio');
var video = document.createElement('video');

function onFrame(){
	ctx.drawImage(video,0,0,426,240);
	video.currentTime = audio.currentTime;
	requestAnimationFrame(onFrame);
}

function playVideo(){
	var i = 0;
	function ready(){
		i++;
		if(i == 2){
			audio.play();
			onFrame();
		}
	}
	video.addEventListener('canplaythrough',ready);
	audio.addEventListener('canplaythrough',ready);
	
	audio.src = video.src = "http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4";
	
	audio.load();
	video.load();
}
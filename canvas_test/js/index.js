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
	
	audio.src = video.src = "http://brightcove.vo.llnwd.net/e1/uds/pd/96980657001/96980657001_109379494001_Bird-CommonRedpoll-iStock-000006369683HD720.mp4?pubId=4005328949001&videoId=4006182806001";
	
	audio.load();
	video.load();
}

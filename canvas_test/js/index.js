
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
var myImage = new Image();
myImage.src = "http://www.conceptcarz.com/images/Citroen/2010-Citroen-Survolt-Concept-Image-01.jpg";
myImage.onload = function() 
{
  ctx.drawImage(myImage, 0, 0, canvas.width,canvas.height);	
};
var audio = document.createElement('audio');
var video = document.createElement('video');
function onFrame(){
	try{
	ctx.drawImage(video,0,0,canvas.width,canvas.height);
	video.currentTime = audio.currentTime;
	requestAnimationFrame(onFrame);
	}
	catch (err)
	{
	 return false;
	}
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

const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const timestamp = document.getElementById("timestamp");
const range = document.getElementById("range");
// const video = document.getElementById("video");



//function 
//function for toggleVideoStatus
function toggleVideoStatus(){
  if(video.paused){
      video.play();
  }
  else{
      video.pause();
  }
}

//function for updating icon of play and pause on playing and paused
function updateIcon(){
    if(video.paused){
        play.innerHTML='<i class="fa fa-play 2x"></i>'
    }
    else{
        play.innerHTML='<i class="fa fa-pause 2x"></i>'

    }
}

//function for stoping the video
function stopVideo(){
    video.currentTime = 0;
    video.pause();
    updateIcon();
}



function updateProgress(){
    range.value = (video.currentTime / video.duration) *100; 
    // to update the timestamp
    let mins = Math.floor((video.currentTime / 60));
    if(mins < 10){
        mins = '0' + String(mins);
    }
    let secs = Math.floor((video.currentTime % 60));
    if(secs < 10){
        secs = '0' + String(secs);
    }
    timestamp.innerHTML = `${mins}:${secs}`;
}

function updateProgressTime(){
     video.currentTime = (+range.value * video.duration) / 100;
}

//Events.
//events on video
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("play", updateIcon);
video.addEventListener("pause", updateIcon);
video.addEventListener("timeupdate", updateProgress);

//events on button 
play.addEventListener("click",toggleVideoStatus);

stop.addEventListener("click", stopVideo);

range.addEventListener("change",updateProgressTime);
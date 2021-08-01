const audio = document.getElementById("audio");
const image = document.getElementById("image");
const play = document.getElementById("play");
const forward = document.getElementById("forward");
const backward = document.getElementById("backward");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

const songs = [
    {
        name: "A_to_Z",
        title: "Punjabi Song",
        artist: "Karan Aujla",
    },
    {
        name: "Ek_chaturnaar",
        title: "hindi Song",
        artist: "Tough song",
    },
    {
        name: "roar",
        title: "English Song",
        artist: "Katty pery",
    }
    
]

function playSong(){
    play.classList.replace("fa-play","fa-pause");
    image.classList.add("imageAnim"); 
    isplaying = true;
    audio.play();
}

function pauseSong(){
    play.classList.replace("fa-pause","fa-play");
    image.classList.remove("imageAnim"); 
    isplaying = false;
    audio.pause();
}

let songsIndex=0;
loadSong(songs[songsIndex]);


function loadSong(songs){
     title.innerText = songs.title;
     artist.innerText = songs.artist;
     audio.src = `audio/${songs.name}.mp3`;
     image.src = `images/${songs.name}.jpg`;
}

function previousSong(){
    songsIndex = (songsIndex - 1 + songs.length) % songs.length ;
    loadSong(songs[songsIndex]);
     playSong();
}

function forwardSong(){
    songsIndex = (songsIndex + 1) % songs.length ;
    loadSong(songs[songsIndex]);
     playSong();
}

let isplaying;
play.addEventListener("click" , ()=>
    isplaying ? pauseSong() : playSong()
);

backward.addEventListener("click", previousSong);
forward.addEventListener("click", forwardSong);
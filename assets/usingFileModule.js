

let b1 =document.querySelectorAll(".link-button")[0];
let b2 =document.querySelectorAll(".link-button")[1];
var i=1,j=1;
function rand(){
    i+=1;
    return i;
}
function rand1(){
    j+=1;
    return j;
}
b1.addEventListener("click",()=>{
    if(b2.classList.contains("white")){
        b2.classList.remove("white");
        b2.children[0].children[0].classList.toggle("hidden");
    }
    b1.children[0].classList.toggle("hidden");
    b1.children[1].classList.toggle("hidden");
    b1.classList.toggle("white");
})
b2.addEventListener("click",()=>{
    if(b1.classList.contains("white")){
        // console.log(b1.children[0].children[0]);
        b1.classList.remove("white");
    }
    b2.children[0].children[0].classList.toggle("hidden");
    b1.children[1].classList.add("hidden");
    b1.children[0].classList.remove("hidden");
    b2.classList.toggle("white");
})



let my = document.getElementById("mylibrary");
my.addEventListener("mouseover",()=>{
    document.getElementById("forhover").classList.remove("hidden");
})
my.addEventListener("mouseout",()=>{
    document.getElementById("forhover").classList.add("hidden");
})

// let my1 = document.getElementById("whiteline");
// my1.addEventListener("mouseover",()=>{
//     document.getElementById("greenline").classList.remove("hidden");
// })
// my1.addEventListener("mouseout",()=>{
//     document.getElementById("greenline").classList.add("hidden");
// })

let progress = document.getElementById("progress");
let progress1 = document.getElementById("progress1");
let greenline = document.getElementById("greenline");
let audio = document.getElementsByTagName("audio")[0];
let starttime = document.getElementById("starttime");
let endtime = document.getElementById("endtime");
let barline = document.getElementById("barline")
let barline1 = document.getElementById("barline1")
let barline2 = document.getElementById("barline2")
let m1 = document.getElementsByClassName("music");
let btn2 = document.getElementById("btnplay");
let btn3 = document.getElementsByClassName("playbutton");
var  songsplaylistsListResponse;
var songsplaylistsList;
progress1.value=100;
let gradientValue1 = progress1.value + '%';
document.documentElement.style.setProperty('--range-value1', gradientValue1);
barline2.style.backgroundColor = `linear-gradient(to right, #1db954 0%, #1db954 var(--range-value1), #121212 var(--range-value1))`;

// audio.addEventListener('loadedmetadata', function() {
//     const totalMinutes = Math.floor(audio.duration / 60);
//     const totalSeconds = Math.floor(audio.duration % 60);
//     const formattedTime = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;
//     endtime.textContent = formattedTime;
//     progress.max=100;
//     let ctinperc = (audio.currentTime*100 / audio.duration ).toFixed(2)
//     progress.value=ctinperc;
    
// });

audio.addEventListener('loadedmetadata', function() {
    let totalMinutes = Math.floor(audio.duration / 60);
    let totalSeconds = Math.floor(audio.duration % 60) ;
    let formattedTime = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;
    endtime.textContent = formattedTime;
    progress.max = 100;
    let ctinperc = (audio.currentTime * 100 / audio.duration);
    progress.value = ctinperc;
});
progress.addEventListener("input",()=>{ 
    let percentage = progress.value;
    let newTime = (percentage / 100) * audio.duration;
    audio.currentTime = newTime;
    
    // Ensure that the calculated time is within the valid range
    audio.currentTime = Math.max(0, Math.min(newTime, audio.duration));
    
    let CurrtotalMinutes = Math.floor(audio.currentTime / 60);
    let CurrtotalSeconds = Math.floor(audio.currentTime % 60);
    let CurrformattedTime = `${CurrtotalMinutes}:${CurrtotalSeconds < 10 ? '0' : ''}${CurrtotalSeconds}`;
    starttime.textContent = CurrformattedTime;
    
    // Update gradient value after ensuring currentTime is within the valid range
    let gradientValue = (audio.currentTime / audio.duration) * 100 + '%';
    document.documentElement.style.setProperty('--range-value', gradientValue);
    barline.style.backgroundColor = `linear-gradient(to right, #1db954 0%, #1db954 ${gradientValue}, #121212 ${gradientValue})`;
    
})
progress1.addEventListener("input",()=>{ 
    let gradientValue1 = progress1.value + '%';
    document.documentElement.style.setProperty('--range-value1', gradientValue1);
    barline2.style.backgroundColor = `linear-gradient(to right, #1db954 0%, #1db954 var(--range-value1), #121212 var(--range-value1))`;
    audio.volume = progress1.value/100;    
    if(progress1.value==0){
        let span = document.getElementById("volume");
        let firstChild = span.firstElementChild;
        firstChild.remove()
        let svg = document.createElement("span");
        svg.innerHTML=`<svg  width="14" height="14" class="fill-white cursor-pointer" aria-label="Volume off" aria-hidden="true" id="volume-icon" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 kcUFwU"><path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"></path><path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path></svg>`
        span.append(svg);
    }
    else if(progress1.value>0&&progress1.value<=35){
        let span = document.getElementById("volume");
        let firstChild = span.firstElementChild
        firstChild.remove()
        let svg = document.createElement("span");
        svg.innerHTML=`        <svg data-encore-id="icon" width="14" height="14" class="fill-white cursor-pointer" role="presentation" aria-label="Volume low" aria-hidden="true" id="volume-icon" viewBox="0 0 16 16"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path></svg>`
        span.append(svg);
    }
    else if(progress1.value>35&&progress1.value<=70){
        let span = document.getElementById("volume");
        let firstChild = span.firstElementChild
        firstChild.remove()
        let svg = document.createElement("span");
        svg.innerHTML=`<svg data-encore-id="icon" width="14" height="14" class="fill-white cursor-pointer" role="presentation" aria-label="Volume medium" aria-hidden="true" id="volume-icon" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 kcUFwU"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z"></path></svg>`
        span.append(svg);
    }
    else{
        let span = document.getElementById("volume");
        let firstChild = span.firstElementChild;
        firstChild.remove();
        let svg = document.createElement("span");
        svg.innerHTML=`<svg width="14" height="14" class="fill-white cursor-pointer" data-encore-id="icon" role="presentation" aria-label="Volume high" aria-hidden="true" id="volume-icon" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 kcUFwU"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path><path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path></svg>`;
        span.append(svg);
    }
})

// Make sure to add an event listener to handle updates if the duration changes dynamically
audio.addEventListener('durationchange', function() {
    let totalMinutes = Math.floor(audio.duration / 60);
    let totalSeconds = Math.floor(audio.duration % 60);
    
    // Adjust totalMinutes if totalSeconds is 60
    if (totalSeconds === 60) {
        totalMinutes += 1;
        totalSeconds = 0;
    }
    
    let formattedTime = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;
    endtime.textContent = formattedTime;
});
// audio.addEventListener('durationchange', function() {
//     let totalMinutes = Math.floor(audio.duration / 60);
//     let totalSeconds = Math.floor(audio.duration % 60);
//     let formattedTime = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;
//     endtime.textContent = formattedTime;
// });
var curretPlaylist;
var currentIndexOfSongs;
async function fetchSongsWithPlaylist(playList){
    let  mp3jpegResponse = await fetch("../mp3jpegList.json");
    let  mp3jpegList= await mp3jpegResponse.json();
    let songslist=[]
    for (let ine = 0; ine < mp3jpegList.length; ine++) {
        let e  =mp3jpegList[ine]
            let e1 =e.split("/")
            if(e1[0]==playList&&e1[1].endsWith(".mp3")){
                songslist.push(e1[1])
            }
    }
    return songslist
}
async function playPause2(_element,_index,_playlistTitle,playSong){
    let songslist  = await fetchSongsWithPlaylist(_playlistTitle)
    if(_index<0){
        // await fetchPlaylistsSongs(_playlistTitle);
        _element = songslist[songslist.length-1];
        _index = songslist.length-1;
    }
    else if(_index>songslist.length-1){
        _element = songslist[0];
        _index = 0;
    }
    curretPlaylist = _playlistTitle;
    currentIndexOfSongs = _index;
    let audio1 = document.getElementsByTagName("audio")[0];
    document.getElementById("playedmusictitle").firstElementChild.textContent = _element.split(".mp3")[0];
    // console.log(_element);
    audio1.src = `Songs/${_playlistTitle}/${_element}`;
    console.log(`Songs/${_playlistTitle}/${_element}/${_index}`);
    playPause(playSong,_index);
    
}
function updatelogo(){
    for (const iterator of document.getElementsByClassName("music")) {
        if (iterator.getElementsByClassName("title")[0].textContent === document.getElementById("playedmusictitle").firstElementChild.textContent){
            iterator.querySelector(".playbutton").firstElementChild.children[0].classList.add("hidden");
            iterator.querySelector(".playbutton").firstElementChild.children[1].classList.remove("hidden");
        }
        else{
            iterator.querySelector(".playbutton").firstElementChild.children[0].classList.remove("hidden");
            iterator.querySelector(".playbutton").firstElementChild.children[1].classList.add("hidden");
        }
    }
}
function playPause(playSong,_index){
    let childs =document.getElementById("btnplay").children;
    if(childs[1].classList.contains("hidden")||playSong){
        childs[0].classList.add("hidden");
        childs[1].classList.remove("hidden");
        audio.play();
        for (const iterator of document.getElementsByClassName("music")) {
            if (iterator.getElementsByClassName("title")[0].textContent === document.getElementById("playedmusictitle").firstElementChild.textContent){
                iterator.querySelector(".playbutton").firstElementChild.children[0].classList.add("hidden");
                iterator.querySelector(".playbutton").firstElementChild.children[1].classList.remove("hidden");
            }
        }
    }
    else{
        audio.pause();
        childs[0].classList.remove("hidden");
        childs[1].classList.add("hidden");
        for (const iterator of document.getElementsByClassName("music")) {
            if (iterator.getElementsByClassName("title")[0].textContent === document.getElementById("playedmusictitle").firstElementChild.textContent){
                iterator.querySelector(".playbutton").firstElementChild.children[0].classList.remove("hidden");
                iterator.querySelector(".playbutton").firstElementChild.children[1].classList.add("hidden");
            }
        }
    }
    
    if(audio.played){
        setInterval(() => {
            let ctinperc = (audio.currentTime * 100 / audio.duration).toFixed(2);
            progress.value = ctinperc;
            let gradientValue = progress.value + '%';
            document.documentElement.style.setProperty('--range-value', gradientValue);
            barline.style.backgroundColor = `linear-gradient(to right, #1db954 0%, #1db954 var(--range-value), #121212 var(--range-value))`;
            let CurrtotalMinutes = Math.floor(audio.currentTime / 60);
            let CurrtotalSeconds = Math.floor(audio.currentTime % 60);
            let CurrformattedTime = `${CurrtotalMinutes}:${CurrtotalSeconds < 10 ? '0' : ''}${CurrtotalSeconds}`;
                starttime.textContent = CurrformattedTime;
            }, 500)
            
        }
}
btn2.addEventListener("click",()=>{
    playPause(false)
})
function getfull(){
    return document.fullscreenElement||
    document.webkitFullscreenElement||
    document.mozFullscreenElement||
    document.msFullscreenElement;
}
document.getElementById("fullScreen").addEventListener("click",()=>{
    if(getfull()){
        document.exitFullscreen();
    }
    else{
        document.documentElement.requestFullscreen().catch((e)=>{
            // console.log(e);  
        })
    }
})
document.getElementById("volume").addEventListener("click",()=>{
    let span = document.getElementById("volume");
    if(span.getAttribute("data-icon")==="unmuted"){
        span.setAttribute("data-icon","muted");
        let gradientValue1 = '0%';
        document.documentElement.style.setProperty('--range-value1', gradientValue1);
        barline2.style.backgroundColor = `linear-gradient(to right, #1db954 0%, #1db954 var(--range-value1), #121212 var(--range-value1))`;
        progress1.value=0;
        audio.volume = 0; 
        let firstChild = span.firstElementChild;
        firstChild.remove()
        let svg = document.createElement("span");
        svg.innerHTML=`<svg  width="14" height="14" class="fill-white cursor-pointer" aria-label="Volume off" aria-hidden="true" id="volume-icon" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 kcUFwU"><path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"></path><path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path></svg>`
        span.append(svg);
    }
    else{
        let gradientValue1 = '100%';
        document.documentElement.style.setProperty('--range-value1', gradientValue1);
        barline2.style.backgroundColor = `linear-gradient(to right, #1db954 0%, #1db954 var(--range-value1), #121212 var(--range-value1))`;
        progress1.value=100;
        audio.volume = progress1.value/100;  
        span.setAttribute("data-icon","unmuted");
        let firstChild = span.firstElementChild;
        firstChild.remove();
        let svg = document.createElement("span");
        svg.innerHTML=`<svg width="14" height="14" class="fill-white cursor-pointer" data-encore-id="icon" role="presentation" aria-label="Volume high" aria-hidden="true" id="volume-icon" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 kcUFwU"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path><path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path></svg>`;
        span.append(svg);
    }
})
var anchors;
var songslist=[];
var playListCoverSrc;
async function main(){
 songsplaylistsListResponse = await fetch("../songsFolderList.json");
 songsplaylistsList= await songsplaylistsListResponse.json()
    let  mp3jpegResponse = await fetch("../mp3jpegList.json");
    let mp3jpegList= await mp3jpegResponse.json()
    // let response= await a.text();
    // // console.log(response);
    // let div =  document.createElement("div")
    // div.innerHTML = response;
    // anchors =div.getElementsByTagName("a"); 
    let playlist = document.getElementsByClassName("spotifyplaylists")[0];
    let playlistDivs = document.getElementsByClassName("spotifyplaylists")[0].children;
    for (let index = 0; index < songsplaylistsList.length; index++) {
        //const element = anchors[index];
        const songCurrentPlaylist =songsplaylistsList[index];
        // if(index==0)
        //     continue;
        
        let playListCoverSrc ;
         mp3jpegList.forEach(e=>{
            let e1 =e.split("/")
        
            if(e1[0]==songCurrentPlaylist&&e1[1].endsWith(".jpeg")){
                playListCoverSrc = e1[1]
                return;
            }
        })
        // console.log(playListCoverSrc)

        playlist.innerHTML+=`
        <div class="flex flex-wrap relative over">
                    <div class="flex playCoverBox items-center  p-[20px]  flex-col bg-[rgb(24,24,24)] hover:bg-[rgb(36,36,36)] w-[17vw] h-[48vh] object-contain rounded-[10px]">
                        <button class="absolute cursor-pointer hover:scale-[1.09] bg-[#1ed760]  p-[15px] rounded-[30px] top-[45%] left-[62%] flex items-center justify-center hidden">
                            <svg data-encore-id="icon" role="img" class="fill-black w-[20px] text-center mt-[-2px] ml-[-2px] h-[20px]"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg></button>
                        <img width="160" height ="160" class="playCover shadow1 w-[13vw] h-[28vh] mb-[10px] object-contain rounded-[10px]" src="Songs/${songCurrentPlaylist}/${playListCoverSrc}">
                        <span class="flex flex-col justify-start w-[100%] ml-[9%]">
                            <p class="playlistTitle font-[Questrial] font-[600] text-left ">${songCurrentPlaylist}</p>
                            <p class="playlistDesc font-[Questrial] font-[12px] overflow-clip">Best Of ${songCurrentPlaylist} </p>
                        </span>
                    </div>
                </div>
        `
    }
    let cards = document.getElementsByClassName("spotifyplaylists")[0].children;
    for (const iterator of cards) {
        iterator.addEventListener("mouseover",()=>{
            let btn = iterator.getElementsByClassName("absolute")[0];
            btn.classList.remove("hidden");
        })
        iterator.addEventListener("mouseout",()=>{
            let btn = iterator.getElementsByClassName("absolute")[0];
            btn.classList.add("hidden");
        })
    }

    for (let index = 0; index < 5; index++) {
        let songslist = [];
        for (let i = 0; i < mp3jpegList.length; i++) {
            let e  =mp3jpegList[i]
                let e1 =e.split("/")
                if(e1[0]==songsplaylistsList[i]&&e1[1].endsWith(".mp3")){
                    songslist.push(e1[1])
                }
        }
        let button =document.getElementsByClassName("spotifyplaylists")[0].children[index+1].getElementsByTagName("button")[0]
        button.addEventListener("click",()=>{
            let parent = button.parentElement;
            let playlistTitle=parent.getElementsByClassName("playlistTitle")[0].textContent;
             fetchPlaylistsSongs(playlistTitle);
             playPause2(songslist[0],0,playlistTitle,true);
        })
        // const element = playlistDivs[index];
        // element.getElementsByClassName("playlistTitle")[0].textContent = anchors[index+1].textContent.replace("/","");
        // console.log(anchors[index].textContent);
        // element.getElementsByClassName("playlistDesc")[0].textContent= `Best Of ${anchors[index+1].textContent.replace("/","")}`;
    }
    // console.log(songsplaylistsList)
}

(async function main1(){
    await main();
})();

var anchors2;
async function fetchPlaylistsSongs(playlistTitle){
    console.log(playlistTitle);
    
    let  mp3jpegResponse = await fetch("../mp3jpegList.json");
    let  mp3jpegList= await mp3jpegResponse.json();
    songslist=[]
    for (let ine = 0; ine < mp3jpegList.length; ine++) {
        let e  =mp3jpegList[ine]
            let e1 =e.split("/")
            if(e1[0]==playlistTitle&&e1[1].endsWith(".mp3")){
                songslist.push(e1[1])
                console.log(songslist);
            }
    }
    
    // console.log(songslist)
    // let div =  document.createElement("div")
    // div.innerHTML = response;
    // anchors2 =div.getElementsByTagName("a"); 
    // for (const iterator of anchors2) {
    //     if(iterator.textContent.includes("../")||iterator.textContent.endsWith(".jpeg")){
    //         if(iterator.textContent.endsWith(".jpeg")){
    //             playListCoverSrc = iterator.textContent;
    //         }
    //         continue;
    //     }
    //     songslist.push(iterator.textContent.replace(".mp3",""));
    // }
    let ul=document.getElementById("songsplaylists");
    ul.innerHTML = "";
    for (const iterator of songslist) {
    ul.innerHTML+=`<li class="hover:bg-[#23232355] music cursor-pointer py-[17%] pl-[2%] pr-[8%] h-[5vh] rounded-[10px] flex items-center justify-between gap-[10px] ">
    <span class="flex gap-[10px] items-center">
        <span class="rounded-[7px] bg-[#292929]   px-[12px] py-[16px] inline-flex items-center justify-center">
            <svg data-encore-id="icon" class="fill-[#a7a7a7] " width="24" height="24" role="img" aria-hidden="true" data-testid="playlist" class="Svg-sc-ytk21e-0 bneLcE" viewBox="0 0 24 24"><path d="M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z"></path></svg>
        </span>
        <span class="title">${iterator.split(".mp3")[0]}</span>
    </span>
    <span class="hidden playbutton">
        <button  class="bg-[#1db954] mt-[-4px] rounded-[90px] w-[37px] h-[37px] fill-[#1f1f1f] flex items-center justify-center">
            <svg data-encore-id="icon" width="14" height="14" role="img" aria-hidden="true" viewBox="0 0 16 16" class="fill-[#000000]"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>
            <svg data-encore-id="icon" class="hidden" role="img" width="14" height="14" aria-hidden="true" viewBox="0 0 16 16"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
        </button>
    </span>
</li>`;
}
for (const iterator of document.getElementsByClassName("music")) {
    iterator.addEventListener("mouseover",()=>{
        iterator.getElementsByClassName("playbutton")[0].classList.remove("hidden");
    })
    iterator.addEventListener("mouseout",()=>{
        iterator.getElementsByClassName("playbutton")[0].classList.add("hidden");
    })
}
playPause2(songslist[0],0,playlistTitle,true);
for (let index = 0; index < btn3.length; index++) {
    const element = btn3[index];
    element.addEventListener("click",()=>{
        playPause2(songslist[index],index,playlistTitle,true);
    })   
}
}
document.getElementById("previousButton").addEventListener("click",()=>{
    playPause2(songslist[currentIndexOfSongs-1],currentIndexOfSongs-1,curretPlaylist,true)
});
document.getElementById("forwardButton").addEventListener("click",()=>{
    playPause2(songslist[currentIndexOfSongs+1],currentIndexOfSongs+1,curretPlaylist,true)
});


var count=1;
function loopChange(){
    count = count>3 ? 1 : count;
    let btn = document.getElementById("loopButton");
    let childs = btn.children;
    for (let index = 0; index < childs.length; index++) {
        const element = childs[index];
        if(count == 1){
            if(index==0||index==2)
                element.classList.add("hidden");
            else
                element.classList.remove("hidden");
            audio.loop =true;
        }
        else if(count == 2){
            if(index==0||index==1)
            element.classList.add("hidden");
            else
                element.classList.remove("hidden");
            audio.loop =true;
        }
        else if(count == 3){
            if(index==1||index==2)
            element.classList.add("hidden");
            else
                element.classList.remove("hidden");
        audio.loop =false;
        }
    }
    count+=1;
}

function hamClick(){
    if(!document.getElementById("hamBurger").classList.contains("hidden")){
        document.getElementById("hamPlaylist").classList.toggle("hidden");
        document.getElementById("hamPlaylist").classList.add("absolute");
        document.getElementById("hamPlaylist").classList.add("z-10");
    }
}
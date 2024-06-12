const music = new Audio('vande.mp3');

// create Array 

const rhymes = [
    {
        id:'1',
        rhymeName:` Wheels On The Bus <br>
        <div class="subtitle">Cocomelon</div>`,
        poster: "images/wheels.jpg"
    },
    {
        id:'2',
        rhymeName:`  Baa Baa Black Sheep <br>
        <div class="subtitle">ChuChu TV</div>`,
        poster: "images/baa.jpg"
    },
    // all object type 
    {
        id:"3",
        rhymeName: `London Bridge Is Falling Down <br><div class="subtitle"> Geethanjali Videos</div>`,
        poster: "images/london.jpg",
    },
    {
        id:"4",
        songName: `Twinkle Twinkle Little Star <br><div class="subtitle">ChuChu TV</div>`,
        poster: "images/twinkle.jpg",
    }
]

Array.from(document.getElementsByClassName('rhymeItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = rhymes[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = rhymes[i].rhymeName;
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (rhyme.paused || rhyme.currentTime <=0) {
        rhyme.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        rhyme.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('rhymeItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        rhyme.src = `audio/${index}.mp3`;
        poster_master_play.src =`images/${index}.jpg`;
        rhyme.play();
        let rhyme_title = rhymes.filter((ele)=>{
            return ele.id == index;
        })

        rhyme_title.forEach(ele =>{
            let {rhymeName} = ele;
            title.innerHTML = rhymeName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        rhyme.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('rhymeItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

rhyme.addEventListener('timeupdate',()=>{
    let rhyme_curr = rhyme.currentTime;
    let rhyme_dur = rhyme.duration;

    let min = Math.floor(rhyme_dur/60);
    let sec = Math.floor(rhyme_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(rhyme_curr/60);
    let sec1 = Math.floor(rhyme_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((rhyme.currentTime/rhyme.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    rhyme.currentTime = seek.value * rhyme.duration/100;
})

rhyme.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    rhyme.volume = vol_a/100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('rhymeItem')).length;
    }
    rhyme.src = `audio/${index}.mp3`;
    poster_master_play.src =`images/${index}.jpg`;
    rhyme.play();
    let song_title = rhymes.filter((ele)=>{
        return ele.id == index;
    })

    rhyme_title.forEach(ele =>{
        let {rhymeName} = ele;
        title.innerHTML = rhymeName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('rhymeItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('rhymeItem')).length) {
        index = 1;
        }
    rhyme.src = `audio/${index}.mp3`;
    poster_master_play.src =`images/${index}.jpg`;
    rhyme.play();
    let rhyme_title = rhymes.filter((ele)=>{
        return ele.id == index;
    })

    rhyme_title.forEach(ele =>{
        let {rhymeName} = ele;
        title.innerHTML = rhymeName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('rhymeItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_rhyme = document.getElementsByClassName('rhyme_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_rhyme.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_rhyme.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})

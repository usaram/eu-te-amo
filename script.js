/* ===========================================
                ENTRAR NO SITE
=========================================== */

const loader = document.getElementById("loader");
const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", () => {

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    },600);

});

/* ===========================================
                CONTADOR
=========================================== */

const startDate = new Date("2026-07-01T08:09:00");

function updateCounter(){

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000*60*60*24));

    const hours = Math.floor(diff/(1000*60*60))%24;

    const minutes = Math.floor(diff/(1000*60))%60;

    const seconds = Math.floor(diff/1000)%60;

    const counter = document.getElementById("loveCounter");

    if(counter){

        counter.innerHTML =
        `${days} dias<br>${hours} horas<br>${minutes} minutos<br>${seconds} segundos`;

    }

}

updateCounter();

setInterval(updateCounter,1000);

/* ===========================================
                PRESENTE
=========================================== */

const giftButton = document.getElementById("giftButton");

const giftMessage = document.getElementById("giftMessage");

if(giftButton){

giftButton.onclick = ()=>{

giftMessage.style.display="block";

giftButton.innerHTML="❤️ Eu te amo ❤️";

}

}

/* ===========================================
            CHUVA DE CORAÇÕES
=========================================== */

let raining = false;

let rainInterval;

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💖";

    heart.style.left = Math.random()*100+"vw";

    heart.style.fontSize = (10+Math.random()*12)+"px";

    heart.style.animationDuration = (4+Math.random()*4)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

const pinkButton = document.querySelector(".pinkButton");

if(pinkButton){

pinkButton.onclick = ()=>{

if(!raining){

    raining=true;

    pinkButton.innerHTML="Parar Corações ❤️";

    rainInterval=setInterval(createHeart,120);

}else{

    raining=false;

    pinkButton.innerHTML="Clique aqui ❤️";

    clearInterval(rainInterval);

}

}

}

/* ===========================================
                REVELAR
=========================================== */

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

})

});

document.querySelectorAll(".card,.timelineCard,.photoCard,.counterBox,.musicCard,.giftBox").forEach((el)=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".8s";

observer.observe(el);

});

/* ===========================================
                MENU
=========================================== */

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

const target=document.querySelector(link.getAttribute("href"));

target.scrollIntoView({

behavior:"smooth"

});

});

});
const audio = document.getElementById("audio");

const playButton = document.getElementById("playButton");

playButton.onclick = () => {

    if(audio.paused){

        audio.play();

        playButton.innerHTML="❚❚";

    }else{

        audio.pause();

        playButton.innerHTML="▶";

    }

}

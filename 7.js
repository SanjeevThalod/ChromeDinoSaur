var dino = document.getElementById('dino');
var cactus = document.getElementById('cactus');
var btn = document.getElementById('btn');
var score = document.getElementById('score');
var body = document.querySelector('body');
var fake = window.getComputedStyle(dino, "::after");
var i = 0;
var c = 0;

function jump(){
    if(dino.classList != 'jump'){
        dino.classList.add('jump');
        setTimeout(function(){
            dino.classList.remove('jump');
        },300);
    }
}

score.addEventListener('click',start);
body.addEventListener('touchstart',function(){
    if(dino.classList != 'jump'){
        dino.classList.add('jump');
        setTimeout(function(){
            dino.classList.remove('jump');
        },300);
    }
});

function start(){
    cactus.classList.add('none');
    cactus.style.left = "380px";
    cactus.classList.remove('paused');
    dino.classList.remove('paused');
    cactus.classList.remove('none');
    cactus.classList.add('move');
    btn.classList.add('hide');
    c = 0;
    i = 0;
    i++;
    check = setInterval(checkcollision,10);
}

var check;

function checkcollision(){
    if(i != 0){
        i++;
        c = Math.max(c,i);
    }
    score.innerHTML = "Score: " + c;
    let dinop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cacp = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    if(cacp >= 40 && cacp <= 50 && dinop >= 98){
        clearInterval(check);
        if(i != 0){
            c = Math.max(c,i);
            score.innerHTML = "Score: " + c;
        }
        i = 0;
        cactus.style.left = "380px";
        cactus.classList.add('paused');
        dino.classList.add('paused');
        btn.classList.remove('hide');
        cactus.classList.add('none');
        fake.style.visibility = "visible";
        btn.innerHTML = `Game Over<button onclick="start()">Start</button>`;
    }
}

document.addEventListener('keydown',function(e){
    if(e.keyCode == 32){
        jump();
    }
});

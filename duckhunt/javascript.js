document.getElementById('backgroundgrass').setAttribute('draggable', false);
document.getElementById('dog').setAttribute('draggable', false);

var duckPositionY = 50;
var duckPositionX = -140;
var duckElement = document.getElementById("duck");

var dogPosition = -140;
var dogElement = document.getElementById("dog");
var gunshot = new Audio("sounds/gunshot.mp3");
var ducksound = new Audio("sounds/duck.mp3");
var flyinterval, fallinterval;
var fallspeed;
var hitcounter = 0;
var misscounter = 0;
var flyspeed = 4;
var pause = false;

dogwalk();
function dogwalk() {
    dogwalk1 = setInterval(function () {
        if (dogPosition >= 900) {
            dogback();
        }
        dogPosition += 6;
        dogElement.style.left = dogPosition + "px";
    }, 80);
}
function dogback() {
    clearInterval(dogwalk1);
    dogElement.style.transform = "rotateY(180deg)";
    dogback1 = setInterval(function () {
        if (dogPosition <= -140) {
            dogElement.style.transform = "rotateY(0deg)";
            dogwalk();
            clearInterval(dogback1);
        }
        dogPosition -= 6;
        dogElement.style.left = dogPosition + "px";
    }, 80);
}

function startgame() {
    var startbutton = document.getElementById("startbutton");
    startbutton.style.display = "none";
    startDuckFly()
}
function startDuckFly() {
    duckElement.setAttribute("src", "images/flyingduck.gif");
    duckElement.style.zIndex = 6;
    duckPositionX = -140;
    duckPositionY = Math.floor(Math.random() * 210);
    duckElement.style.left = duckPositionX + "px";
    duckElement.style.top = duckPositionY + "px";
    
    flyinterval = setInterval(function () {
        duckPositionX += flyspeed;
        duckElement.style.left = duckPositionX + "px";
        
        if(duckPositionX == 0 || (duckPositionX > 0 && duckPositionX < 900 ==0)){
            ducksound.pause();
            ducksound.currentTime = 0;
            ducksound.play();
        }
        if(duckPositionX > 900){
            clearInterval(flyinterval);
            misscounter ++;
            updatehit();
            startDuckFly();
        }
    }, 50);
}
function playGunshot() {
    gunshot.pause();
    gunshot.currentTime = 0;
    gunshot.play();
}
function updatehit() {
    document.getElementById("hit_span").innerHTML = hitcounter;
    document.getElementById("miss_span").innerHTML = misscounter;
}
function duckshot() {
    hitcounter++;
    fallspeed = 4;
    flyspeed += 1;
    updatehit()
    playGunshot()
    clearInterval(flyinterval);
    duckElement.setAttribute("src", "images/duckshot.png");
    duckElement.style.zIndex = 0;

    setTimeout(function () {
        duckElement.setAttribute("src", "images/duckfalling.png");
        fallinterval = setInterval(function () {
            duckPositionY += fallspeed;
            duckElement.style.top = duckPositionY + "px";
            fallspeed += 2;

            if(duckPositionY > 500){
                clearInterval(fallinterval);
                startDuckFly();
            }

        }, 50);
    }, 500);
}


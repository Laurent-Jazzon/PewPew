// CANVAS
let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// TANK
let tankImg = new Image();
tankImg.src = "/assets/img/tank.svg";
let tankXPos = 350;
let tankYPos = 600;
let tankSpeed = 5;
tankImg.onload = () => {
    c.drawImage(tankImg,tankXPos,tankYPos,100,100);
}

function move(){
    tankXPos += tankSpeed;
}

// TARGET
let targetImg = new Image();
targetImg.src = "/assets/img/target.svg";
targetImg.onload = () => {
    c.drawImage(targetImg,350,300,100,100);
}

window.addEventListener("keydown", check);

function check(e){
    if (e.keyCode == 39){
        tankXPos += 5;
        console.log(tankXPos)
    } else {
        console.log(e.keyCode)
    }
}


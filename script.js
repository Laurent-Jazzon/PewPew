let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");
let tankImg = new Image();
let targetImg = new Image();
let missileImg = new Image();

// TANK COORDINATES
let tankXPos = 350;
let tankYPos = 600;
let tankSpeed = 15;

// TARGET COORDINATES
let targetXPos = mathRandX();
let targetYPos = mathRandY();

// MISSILE COORDINATES
let missileXPos = tankXPos+32;
let missileYPos = tankYPos-35;

// SHOOT
let missile = false;

function init(){
    tankImg.src = "./assets/img/tank.svg";
    targetImg.src = "./assets/img/target.svg";
    missileImg.src = "./assets/img/missile.svg";
    window.requestAnimationFrame(draw);
}
// RAND FUNCTION FOR TARGET
function mathRandX(){
    return Math.floor(Math.random()*600 +100)
}
function mathRandY(){
    return Math.floor(Math.random()*300 +50)
}

function check(e){
    if (e.keyCode == 39){
        tankXPos += tankSpeed;
        missileXPos += tankSpeed;
    } else if(e.keyCode == 37){
        tankXPos -= tankSpeed;
        missileXPos -= tankSpeed;
    } else if(e.keyCode == 32){
        missile = true;
    } else if(e.keyCode == 82){

    }
    else {
        console.log(e.keyCode)
    }
}
// SHOOT FUNCTION
function shoot(){
    // missileImg.src = "/assets/img/missile.svg"
    c.drawImage(missileImg,missileXPos,missileYPos,35,35)
    missileYPos -= 1;
    setTimeout(() => {
        requestAnimationFrame(shoot)
    }, 200);
    // contact with target
    if(missileYPos === targetYPos && ((missileXPos >= targetXPos+ 3) && (missileXPos <= targetXPos +70))){
        targetImg.src = "./assets/img/bang.svg"
        missileImg.src = ""
        missile = false;
        setTimeout(() => {
            targetImg.src = ""
        }, 500);
        setTimeout(() => {
            targetImg.src = "./assets/img/target.svg"
        }, 500);
        setTimeout(() => {
            targAppear()
        }, 500);
        c.drawImage(missileImg,missileXPos,missileYPos,35,35)
    }
}

// SPAWN TARGET FUNCTION
function targAppear(){
    c.drawImage(targetImg,targetXPos = mathRandX(), targetYPos = mathRandY() ,100,100);
}
// LOOP FUNCTION
function draw(){
    let canvas = document.querySelector("canvas");
    let c = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 800;

    // TANK
    c.drawImage(tankImg,tankXPos,tankYPos,100,100);
    window.addEventListener("keydown", check);

    // TARGET
    c.drawImage(targetImg,targetXPos,targetYPos,100,100);

    // MISSILE
    if(missile === true){
        shoot()
    }

    window.requestAnimationFrame(draw);
}

init();
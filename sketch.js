

//과제 1
// function setup() {
//     createCanvas(200, 200);
// }

// function draw() {
//     for (let y = 0; y < 200; y += 15) {
//         line(0, y, 200, y);
//     }
// }


//과제 2
// function setup() {
//     createCanvas(200, 200);
// }

// function draw() {
//     for (let w = 180; w > 0; w = w - 25) {
//         for (let a = 100; a > 0; a = a - 20) { 
//             fill(a);
//             ellipse(100, 100, w);
//         }
//     }
// }
        
//과제 2-1

// function setup() {
//     createCanvas(200, 200);
// }

// function draw() {

//     for (let a = 255; a > 0; a = a - 5) {
//         fill(0, 0, 0, a);
//     }

    
//     for (let w = 190; w > 0; w = w - 25) {
//         ellipse(100, 100, w);
//     }
// }

//과제 2-2
// let x = 100
// let y = 100

// function setup() {
//     createCanvas(200, 200);
// }

// function draw() {

//     for (let a = 255; a > 0; a = a - 5) {
//         fill(0, 0, 0, a);
//     }

    
//     for (let w = 190; w > 0; w = w - 25) {
//         ellipse(x, y, a);
//     }
// }

//과제 정답
// function setup() {
//     createCanvas(200, 200);
// }

// function draw() {
//     for (let w = width; w > 0; w -= 20) {
//         stroke(0);
//         fill(w);
//         ellipse(width / 2, height / 2, w);
//     }
// }

//예제 1 -> 오류 있으니 확인하기
// let light;
// let x = 50;
// let click = false;

// function setup() {
//     createCanvas(400, 400);
//     background(55, 155, 100);
//     noStroke();
// } 

// function draw() {
//     if (light) {
//         background(255, 255, 0);
//     } else {
//         background(55, 155, 100);
//     }

//     fill(255);
//     arc(50, 50, 50, 50, HALF_PI, TWO_PI - HALF_PI);
//     arc(50 + 100, 50, 50, 50, TWO_PI - HALF_PI, HALF_PI);
//     rect(50, 50 / 2, 100, 50);

//     fill(0);

//     ellipse(x, 50, 50);

//     if (mouseIsPressed) {
//         x = constrain(mouseX, 50, 150);
//     }

//     if ((mouseX > 50 && mouseX < 150 && mouseY > 25 && mouseY < 75) || dist(mouseX, mouseY, 50, 50) < 25 || dist(mouseX, mouseY, 150, 50) < 25) {
//         if (mouseIsPressed) {
//             if (!click) {
//                 x = constrain(mouseX, 50, 150);
//             }
//         }
//     } else {
//         if (mouseIsPressed) {
//             click = true;
//         } else {
//             click = false;
//         }
//     }

//     if (x >= 149) {
//         light = true;
//     } else {
//         light = false;
//     }
// }

// function mousePressed() {
//     click = false;
// }


//예제 1 정답
// let light;
// let x = 50;
// let click = false;

// function setup() {
//     createCanvas(400, 400);
//     background(55, 155, 100);
//     noStroke();
// }

// function draw() {
//     if (light) {
//         background(255, 255, 0);
//     } else {
//         background(55, 155, 100);
//     }

//     fill(255);
//     arc(50, 50, 50, 50, HALF_PI, TWO_PI - HALF_PI);
//     arc(50 + 100, 50, 50, 50, TWO_PI - HALF_PI, HALF_PI);
//     rect(50, 50 / 2, 100, 50);

//     fill(0);

//     ellipse(x, 50, 50);



//     if ((mouseX > 50 && mouseX < 150 && mouseY > 25 && mouseY < 75) || dist(mouseX, mouseY, 50, 50) < 25 || dist(mouseX, mouseY, 150, 50) < 25) {
//         if (mouseIsPressed) {
//             if(!click){
//                 x = constrain(mouseX, 50, 150);
//             }
//         }
//     } else {
//         if(mouseIsPressed){
//             click = true;
//         } else {
//             click = false;
//         }
//     }

//     if (x >= 149) {
//         light = true;
//     } else {
//         light = false;
//     }
// }

// function mousePressed(){
//     click = false;
// }


//예제 2
// let x = 0;
// let y = 0;
// let speed = 10;
// let state = 0;

// function setup() {
//     createCanvas(800, 800);
// }

// function draw() {
//     background(255);
//     stroke(0);
//     fill(175);
//     rect(x, y, 19, 19);

//     if (state == 0) { //state가 0일때
//         x = x + speed;
//         if (x > width - 20) { //stroke 사이즈만큼 1 더해서 20
//             x = width - 20;
//             state = 1;
//         }
//     } else if (state == 1) { //state가 1일때
//         y = y + speed;
//         if (y > height - 20) {
//             y = height - 20;
//             state = 2;
//         }
//     } else if (state == 2) {
//         x = x - speed;
//         if (x < 0) {
//             x = 0;
//             state = 3;
//         }
//     } else if (state == 3) {
//         y = y - speed;
//         if (y < 0) {
//             y = 0;
//             state = 0;
//         }
//     }
// }


//예제 3

let x = 0; //전역변수
let y = 0;
let easing = 0.01;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(3, 244, 252, 10);
    let targetX = mouseX; //draw 안에서만 사용하는
    x += (targetX - x) * easing;
    //x = x + (targetX - x) * easing

    let targetY = mouseY;
    y += (targetY - y) * easing;

    ellipse(x, y, 50, 50);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

let four = document.querySelector('.four');
let lis = four.querySelectorAll('li');

let width = canvas.width = canvas.offsetWidth;
let height = canvas.height = canvas.offsetHeight;

let r = 50;
let x = 775;
let y = 385;
let vx = 3.2;
let vy = 0;
let g = 0.2;

context.beginPath();
context.fillStyle = "white";
context.arc(x, y, r, Math.PI, Math.PI * 2);
context.fill();
context.closePath();

context.beginPath();
context.fillStyle = "black";
context.arc(x, y, r + 1, 0, Math.PI * 2);
context.stroke();
context.closePath();

context.beginPath();
context.fillStyle = "black";
context.arc(x, y, r, 0, Math.PI);
context.fill();
context.closePath();

context.beginPath();
context.fillStyle = "black";
context.arc(x - 25, y, r / 2, 0, Math.PI * 2);
context.fill();
context.closePath();

context.beginPath();
context.fillStyle = "white";
context.arc(x + 25, y, r / 2, 0, Math.PI * 2);
context.fill();
context.closePath();

context.beginPath();
context.fillStyle = "white";
context.arc(x - 25, y, r / 6, 0, Math.PI * 2);
context.fill();
context.closePath();

context.beginPath();
context.fillStyle = "black";
context.arc(x + 25, y, r / 6, 0, Math.PI * 2);
context.fill();
context.closePath();

lis[2].addEventListener('mouseout', function draw() {

    context.clearRect(0, 0, width, height);
    context.beginPath();

    vy += g;
    x += vx;
    y += vy;


    if (y >= height - r) {
        y = height - r;

        vy *= -0.6;
        vx -= 0.05;
        if (vx <= 0) {
            vx = 0;
        }
    }


    context.beginPath();
    context.fillStyle = "white";
    context.arc(x, y, r, Math.PI, Math.PI * 2);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "black";
    context.arc(x, y, r + 1, 0, Math.PI * 2);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.fillStyle = "black";
    context.arc(x, y, r, 0, Math.PI);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "black";
    context.arc(x - 25, y, r / 2, 0, Math.PI * 2);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "white";
    context.arc(x + 25, y, r / 2, 0, Math.PI * 2);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "white";
    context.arc(x - 25, y, r / 6, 0, Math.PI * 2);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "black";
    context.arc(x + 25, y, r / 6, 0, Math.PI * 2);
    context.fill();
    context.closePath();


    requestAnimationFrame(draw);
},)

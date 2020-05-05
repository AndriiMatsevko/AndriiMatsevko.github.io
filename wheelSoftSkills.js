
var canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 150);
ctx.lineTo(300, 150);
ctx.moveTo(150, 0);
ctx.lineTo(150, 300);
ctx.moveTo(150, 0);
ctx.lineTo(150, 300);
ctx.moveTo(43, 43);
ctx.lineTo(257, 257);
ctx.moveTo(257, 43);
ctx.lineTo(43, 257);
drawLine(43, 0);
ctx.fillStyle = "#f5b971";
ctx.fill();
ctx.stroke();
drawSplane()

function drawLine(x, y) {
    for (var i = 0; i < 5; i++) {
        ctx.moveTo(0 + y, 150);
        ctx.lineTo(x, 300 - x);
        ctx.lineTo(150, 300 - y);
        ctx.lineTo(300 - x, 300 - x);
        ctx.lineTo(300 - y, 150);
        ctx.lineTo(300 - x, x);
        ctx.lineTo(150, y);
        ctx.lineTo(x, x);
        ctx.lineTo(y, 150);
        x += 21;
        y += 30;
    }
}
//0-100%, 30-80%, 60-60%, 90-40%, 120-20% for x,y line
//43-100%, 64-80%, 85-60%, 106-40%, 127-20% for other line
function drawSplane() {
    ctx.beginPath();
    ctx.moveTo(0, 150); //1
    ctx.lineTo(106, 300 - 106); //2
    ctx.lineTo(150, 300 - 60); //3
    ctx.lineTo(300 - 64, 300 - 64); //4
    ctx.lineTo(300 - 120, 150); //5
    ctx.lineTo(300 - 64, 64); //6
    ctx.lineTo(150, 60); //7
    ctx.lineTo(64, 64); //8
    ctx.fillStyle = 'rgba(152, 140, 210,.9)';
    ctx.fill();
}
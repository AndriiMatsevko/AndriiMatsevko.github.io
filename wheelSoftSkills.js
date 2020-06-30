var canvas = document.getElementById("myCanvas"),
    ctx = canvas.getContext("2d");
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
    ctx.moveTo(30, 150); //1 Creative thinking
    ctx.lineTo(85, 300 - 85); //2 Pleaning
    ctx.lineTo(150, 300 - 0); //3 Accepting feedback
    ctx.lineTo(300 - 64, 300 - 64); //4 Problem-solving
    ctx.lineTo(300 - 30, 150); //5 Effective communication
    ctx.lineTo(300 - 64, 64); //6 Flexibility
    ctx.lineTo(150, 30); //7 Acting as a team player
    ctx.lineTo(43, 43); //8 Fast learner
    ctx.fillStyle = 'rgba(152, 140, 210,.9)';
    ctx.fill();
}
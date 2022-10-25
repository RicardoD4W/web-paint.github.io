
const canvas = document.querySelector('.canvas');
const dif = canvas.getBoundingClientRect();
const ctx = canvas.getContext('2d');

let painting, color, linewidth, difX, difY;

let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
            location.reload();
})


canvas.addEventListener('mousedown', (e)=>{
    difX = e.clientX - dif.left;
    difY = e.clientY - dif.top;
    painting = true;
    color = document.getElementById("color").value;
    linewidth = document.getElementById("lw").value;
});

canvas.addEventListener('mouseup', (e)=>{
    painting = false;
});


canvas.addEventListener('mousemove', (e)=>{
    if(painting){
        dibujar(difX, difY,    e.clientX - dif.left   ,    e.clientY - dif.top);
        difX =  e.clientX - dif.left;
        difY =  e.clientY - dif.top;
    }

});


const dibujar = (x1,y1,x2,y2) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = linewidth;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
}

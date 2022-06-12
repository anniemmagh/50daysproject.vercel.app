const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll(".circles");
let currentActive = 1;
next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.lenght) {
        currentActive = circles.lenght;
    }

});
prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
 Update();

});

function Update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive)
            circle.classList.add('active');
    } )
    else {
        circles.classList.remove('active');
    };
   const.actives=document.querySelectorAll('.active');
   console.log((actives.lenght -1)/ (circles.lenght -1)*100+ "%");
if (currentActive ===1){
    prev.disabled=true;
}
else if (currentActive===circles.lenght){
    next.disabled=true;
    else{
        prev.disabled=false;
        next.disabled=false;
    }
}
}
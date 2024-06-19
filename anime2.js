
/*const picArray=[
   'i2.jpg',
   'i3.jpg',
   'i4.jpg',
];

const gallery = document.querySelector('con2');
console.log(gallery);
for (let i = 0; i < images.length; i++) {
    const pic = document.querySelector('btn1');
console.log(pic);
img.src = images[i];
container.appendChild(img);

const span = document.querySelector('.con2');
console.log(span);
}*/

const span = document.querySelector('.mg');
console.log(span);

const picArray = [
    'i2.jpg',
    'i3.jpg',
    'i4.jpg',
    'i5.jpg',
    'i6.jpg',
    'i8.jpg',
    'i9.jpg',
    'i10.jpg',
    'i11.jpg'];
let a = 0;

 function nextPic(){
    span.src = picArray[a];
    a++;
    if(a>=picArray.length) {a=0;}
}

function showNext(){
    setInterval(nextPic, 2000);
}
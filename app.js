const makeRandomColor = ()=>{
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}
const buttons = document.querySelectorAll('button');
// for(let btn of buttons){
//     btn.addEventListener('click',function(){
//         btn.style.backgroundColor = makeRandomColor();
//         btn.style.fontWeight = '1000';
//         setTimeout(() => {
//         btn.style.backgroundColor = '#ffffff';
//         btn.style.fontWeight = 'inherit';
//     }, 1500);
//     })
    
// }//can write this.style... instead

// const divs = document.querySelectorAll('div');
// for(let div of divs){
//     div.addEventListener('click',function(){
//         div.style.backgroundColor = makeRandomColor();
//         div.style.fontWeight = '1000';
//     })
// }//can write this.style... instead

for(let btn of buttons){
    btn.addEventListener('click',colorize);
}//can write this.style... instead

const divs = document.querySelectorAll('div');
for(let div of divs){
    div.addEventListener('click',colorize);
    }

function colorize(){
    this.style.backgroundColor = makeRandomColor();
    this.style.fontWeight = '1000';
    setTimeout(() => {
        this.style.backgroundColor = '#ffffff';
        this.style.fontWeight = 'inherit';
    }, 1500);
}

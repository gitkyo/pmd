


const round = document.querySelector('.round');
const title = document.querySelector('.title');
let letterData = title.innerText;

document.body.style.setProperty('--title', JSON.stringify(letterData+""));

document.body.addEventListener('mousemove', (evt) => {
let x = evt.clientX;
let y = evt.clientY;

document.body.style.setProperty('--x', `${x}px`);
document.body.style.setProperty('--y', `${y}px`);
})

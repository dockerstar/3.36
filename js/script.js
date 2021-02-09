"use script";

const btn = document.querySelectorAll('button');
console.log(btn);
// console.log(btn[0].classList.item(0));
// console.log(btn[0].classList.length);
// console.log(btn[0].classList.add('red'));
// console.log(btn[0].classList.remove('blue'));

btn[1].addEventListener('click', (e) => {
    e.preventDefault();
    if( btn[2].classList.contains('red') == false){
        btn[2].classList.add('red');
    } else {
        btn[2].classList.remove('red');
    }
});
import {animatedScrollTo} from './es6-scroll-to.js';

// document.querySelector('.title').innerHTML = 'Great success!'
// document.querySelector('.text').innerHTML = 'Javascript is working!'

let once = false;
const contacts = Array.from(document.querySelectorAll('.banner__btn'));

const test = () => {
    console.log('click');
}

contacts.forEach((button) => {
    button.addEventListener('click', test());
});

const show = () => {

    if(once) {
        once = false;
        contacts.style.display = 'none';
    }
    else if(!once) {
        once = true;
        contacts.style.display = 'block';
    }
}

animatedScrollTo(500);

import {animatedScrollTo} from './es6-scroll-to.js';

// Default settings
// document.querySelector('.title').innerHTML = 'Great success!'
// document.querySelector('.text').innerHTML = 'Javascript is working!'

//get all buttons named button__btn from the page
const counter = Array.from(document.querySelectorAll('.banner__btn'));

const toggleContacts = (e) => {
    //define clicked button
    const buttonClicked = e.target;

    const contacts = buttonClicked.closest('.container').querySelector('.contacts');

    //check if contacts div is already visible
    if(!contacts.classList.contains('visible')) {

        //disable all contacts div visibility
        const allContacts = Array.from(buttonClicked.closest('main').querySelectorAll('.contacts'));
        allContacts.forEach(contact => contact.classList.remove('visible'));

        //enable visibility at contacts div from clicked button
        contacts.classList.add('visible');
    }
    else {
        //remove visibility
        contacts.classList.remove('visible');
    }

}

//add event listener too all buttons
counter.forEach( (button) => 
    button.addEventListener('click',toggleContacts)
)

animatedScrollTo(500);

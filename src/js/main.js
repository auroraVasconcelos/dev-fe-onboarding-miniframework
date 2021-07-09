// //get all buttons named button__btn from the page
// const counter = Array.from(document.querySelectorAll('.banner__btn'));
// const toggleContacts = (event) => {
//     //define clicked button
//     const buttonClicked = event.target;
//     const contactsVisibleClass = 'contacts--visible';
//     const contacts = buttonClicked.closest('.container').querySelector('.contacts');

//     if(contacts.classList.contains(contactsVisibleClass)) {
//         //remove visibility
//         return contacts.classList.remove(contactsVisibleClass);
//     }

//     //disable all contacts div visibility
//     const allContacts = Array.from(buttonClicked.closest('main').querySelectorAll('.contacts'));
//     allContacts.forEach(contact => contact.classList.remove(contactsVisibleClass));

//     //enable visibility at contacts div from clicked button
//     contacts.classList.add(contactsVisibleClass);
// }

// //add event listener too all buttons
// counter.forEach(button => button.addEventListener('click', toggleContacts));

// CUSTOM EVENT
//variaveis necessarias
const buttons = Array.from(document.querySelectorAll('.banner__btn'));
const allContacts = Array.from(document.querySelectorAll('.contacts'));
const contactsVisibleClass = 'contacts--visible';

allContacts.forEach(contact => { contact.addEventListener('toggleContactsEvent', function(toggleEvent) {

    const activeContact = toggleEvent.detail.buttonClicked;
    if(activeContact.classList.contains(contactsVisibleClass)) {
        return activeContact.classList.remove(contactsVisibleClass);
    }
    allContacts.forEach(contact => {contact.classList.remove(contactsVisibleClass)});
    activeContact.classList.add(contactsVisibleClass);
    
    })
});

buttons.forEach(button => button.addEventListener('click', function(clickEvent){
    const contactToShow = clickEvent.target.closest('.container').querySelector('.contacts');
    const toggleContacts = new CustomEvent('toggleContactsEvent', {
        detail: {
            buttonClicked: contactToShow
        }
    });
    allContacts.forEach(contact => contact.dispatchEvent(toggleContacts));
}));

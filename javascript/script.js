/*
Descrizione

Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus

Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
*/

const containerlistEl = document.getElementById('containerlist')
const buttonEl = document.getElementById('bottone')

function clearList() {
    containerlistEl.innerHTML = '';
}

function new_list_email() {
    for (let i = 0; i < 10; i++) {
        fetch('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(res => res.json())
        .then(data => {
            const { success, response } = data;
            const list_markup = document.createElement('li');
            list_markup.textContent = response;
            containerlistEl.append(list_markup);
            console.log(list_markup);
        });
    }
}

buttonEl.addEventListener('click', () => {
    clearList()
    new_list_email();
});









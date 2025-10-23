/*
Descrizione

Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus

Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
*/


// genera 10 indirizzi email
const emailList = [
    "test1@example.com",
    "test2@example.com",
    "test3@example.com",
    "test4@example.com",
    "test5@example.com",
    "test6@example.com",
    "test7@example.com",
    "test8@example.com",
    "test9@example.com",
    "test10@example.com"
]

//richiama il nodo nella dom da manipolare
const containerlistEl = document.getElementById('containerlist')

//avvia un ciclo che scorra nell'array e cicli al suo interno le email da inserire in una costante che crea i li da inserire nell'html
emailList.forEach(email => {
    const list_markup = document.createElement('li')
    list_markup.textContent = email;
    containerlistEl.append(list_markup)
    console.log(list_markup);
});





var chaine = require('./chaine')

var content = document.querySelector('#content');

content.innerHTML += `<div class="box"><span>${chaine.content}</span></div>`;

content.innerHTML += `<div class="box2"><span>${chaine.content}</span></div>`;
const btn = document.querySelector('.btn');
const list = document.querySelector('ul');
const loader = document.querySelector('.loader');

btn.addEventListener('click', fetchEmails);

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
const limit = 10;
let emails = [];


init()


function fetchEmails(){
  console.log('chiamata ad API');
  emails = [];
  loader.classList.remove('d-none');
  list.classList.add('d-none');
  list.innerHTML = '';


  for(let i = 0; i < limit; i++){
    axios.get(endpoint)
    .then(response => {
    emails.push(response.data.response);
    if(emails.length === limit) printEmailsList()
    })
  }

}

function printEmailsList(){
  loader.classList.add('d-none');
  list.classList.remove('d-none');
  emails.forEach(Element => list.innerHTML += `<li class="list-group-item list-group-item-dark">${Element}</li>`);
}

function init(){
  list.classList.add('d-none');
  loader.classList.add('d-none');
}
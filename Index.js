const input = document.querySelector('#message-input');
const output=document.querySelector('#link-input');

const {hash} = window.location;
const message=atob(hash.replace('#',''));

if(message){
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML=message;
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const encrypted = btoa(input.value);

    output.value=`${window.location}#${encrypted}`;
    //output.select();
})

document.querySelector('#copy').addEventListener('click', event => {
    output.select();
    document.execCommand('copy');
})

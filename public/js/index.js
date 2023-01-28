const about = document.querySelector('#about');
const projects = document.querySelector('#projects'); 
const resume = document.querySelector('#resume');
const contact = document.querySelector('#contact'); 

document.addEventListener('DOMContentLoaded', () => {
    
    if(location.pathname === '/Html/project.html'){
        projects.classList.add('text-white');
       }
      else if(location.pathname === '/Html/resume.html'){
        resume.classList.add('text-white');
       }   
      else if(location.pathname === '/Html/contact.html'){
        contact.classList.add('text-white');
       } 
       else{
     about.classList.add('text-white');
    }   
 
})




const hamberg = document.querySelector('#hamberg');
const menu = document.querySelector('#menu');
hamberg.addEventListener('click', () => {
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }
    else{
        menu.classList.add('hidden');
    }
}) 

 

function sendMail(){
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const message = document.getElementById('message').value.trim();
    if(name && email && message){
        var link = "mailto:olasunkanmiusman1111@gmail.com"
    + "&subject=" + encodeURIComponent(`Job Offer from ${name}`)
    + "&body=" + encodeURIComponent(document.getElementById('message').value)
;

window.location.href = link;

    }
}
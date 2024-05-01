const about = document.querySelector('#about');
const projects = document.querySelector('#projects'); 
const resume = document.querySelector('#resume');
const contact = document.querySelector('#contact'); 

document.addEventListener('DOMContentLoaded', () => {
    
    if(location.pathname.includes('project.html')){
        projects.classList.add('text-white');
       }
      else if(location.pathname.includes('resume.html')){
        resume.classList.add('text-white');
       }   
      else if(location.pathname.includes('contact.html')){
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
if(!name){
    document.getElementById('name').classList.add('border-red-900') 
}
else{
    document.getElementById('name').classList.remove('border-red-900') 
}
if(!email || !(email.includes('@')) || !(email.includes('.com'))){
    document.getElementById('email').classList.add('border-red-900')
}
else{
    document.getElementById('email').classList.remove('border-red-900') 
}
if(!message){
    document.getElementById('message').classList.add('border-red-900')
}
else{
    document.getElementById('message').classList.remove('border-red-900') 
}
    if(name && email && message){
        var link = "mailto:olasunkanmiusman1111@gmail.com"
    + "?subject=" + encodeURIComponent(`Job Offer from ${name}`)
    + "&body=" + encodeURIComponent(document.getElementById('message').value)
;

window.location.href = link;

    }
}
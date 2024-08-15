const about = document.querySelector('#about');
const projects = document.querySelector('#projects'); 
const resume = document.querySelector('#resume');
const contact = document.querySelector('#contact'); 

document.addEventListener('DOMContentLoaded', () => {
    
    if(location.pathname.includes('project')){
        projects.classList.add('text-white');
       }
      else if(location.pathname.includes('resume')){
        resume.classList.add('text-white');
       }   
      else if(location.pathname.includes('contact')){
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
// const worldXplorer = document.querySelector('#worldXplorer');

// worldXplorer.addEventListener('mouseenter', () => {
//     worldXplorer.innerHTML =  `<div>
//         <h1 class="texl-2xl my-1 animatecss animatecss-fast animatecss-backInUp">Client: Cybuds</h1>
//         <p class="animatecss animatecss-fast animatecss-backInUp">
//         WorldXplorer is proudly a unified booking platform that covers Affordable Flights, Hotels, Visa Assistance Holiday Packages, Airport Transfers, a dedicated Loyalty program and other travel essentials. 
//         </p> 
    
//         </div>`;
// });
// worldXplorer.addEventListener('mouseleave', () => {
//     worldXplorer.innerHTML = ``;
// })
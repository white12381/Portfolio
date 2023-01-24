const about = document.querySelector('#about');
const projects = document.querySelector('#projects');
const talks = document.querySelector('#talks');
const blog = document.querySelector('#blog');
const resume = document.querySelector('#resume');
const contact = document.querySelector('#contact');
const pages = document.querySelector('#pages');

document.addEventListener('DOMContentLoaded', () => {
    if(location.pathname === '/public/html/index.html'){
     about.classList.add('text-white');
    }
    if(location.pathname === '/public/html/project.html'){
        projects.classList.add('text-white');
       }    
})

const weeveProject = document.querySelector("#weeveProject");
weeveProject.addEventListener('mouseenter', () => {
    weeveProject.innerHTML =  `<div>
        <h1 class="texl-2xl my-1 animatecss animatecss-fast animatecss-backInUp">Client: WEEVE</h1>
        <p class="animatecss animatecss-fast animatecss-backInUp">
           White Electrical and Electronics Ventures known as WEEVE is an
           independent company whose main objective is to offer
           world class goods and services in Electrical and Electronics 
        </p> 
    
        </div>`;
});
weeveProject.addEventListener('mouseleave', () => {
    weeveProject.innerHTML = ``;
})

const autoproctorProject = document.querySelector('#autoproctorProject');

autoproctorProject.addEventListener('mouseenter', () => {
    autoproctorProject.innerHTML =  `<div>
        <h1 class="texl-2xl my-1 animatecss animatecss-fast animatecss-backInUp">Client: AutoProctor</h1>
        <p class="animatecss animatecss-fast animatecss-backInUp">
            This is an examination platform in which a user can log in as admin to set question or one can login 
            as student to answer questions.
        </p> 
    
        </div>`;
});
autoproctorProject.addEventListener('mouseleave', () => {
    autoproctorProject.innerHTML = ``;
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
const ReactJs = document.querySelectorAll('#ReactJs');
const VanillaJs = document.querySelectorAll('#VanillaJs');

const Vanillas = document.querySelector('#Vanillas');
const React = document.querySelector('#React');
const All = document.querySelector('#All');

Vanillas.addEventListener('click', () => {
    ReactJs.forEach((react) => {
        react.classList.add('hidden')
    });
    VanillaJs.forEach( (vanilla) => {
        vanilla.classList.remove('hidden');
    });
    Vanillas.classList.add('ProjectButtonActive');
    Vanillas.classList.remove('ProjectNotButtonActive');
    All.classList.remove('ProjectButtonActive');
    All.classList.add('ProjectNotButtonActive');
    React.classList.remove('ProjectButtonActive');
    React.classList.add('ProjectNotButtonActive');
});

React.addEventListener( 'click', () => {
    ReactJs.forEach((react) => {
        react.classList.remove('hidden')
    });
    VanillaJs.forEach( (vanilla) => {
        vanilla.classList.add('hidden');
    }); 

    React.classList.add('ProjectButtonActive');
    React.classList.remove('ProjectNotButtonActive');
    All.classList.remove('ProjectButtonActive');
    All.classList.add('ProjectNotButtonActive');
    Vanillas.classList.remove('ProjectButtonActive');
    Vanillas.classList.add('ProjectNotButtonActive');
})

All.addEventListener( 'click', () => {
    ReactJs.forEach((react) => {
        react.classList.remove('hidden')
    });
    VanillaJs.forEach( (vanilla) => {
        vanilla.classList.remove('hidden');
    });

    React.classList.add('ProjectNotButtonActive');
    React.classList.remove('ProjectButtonActive');
    All.classList.remove('ProjectNotButtonActive');
    All.classList.add('ProjectButtonActive');
    Vanillas.classList.remove('ProjectButtonActive');
    Vanillas.classList.add('ProjectNotButtonActive');
})
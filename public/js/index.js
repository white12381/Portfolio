    document.addEventListener( 'DOMContentLoaded', function () {
        new Splide( '.splide',{
            start: 1,
            perPage: 1,
            drag: 'free',
            rewind: true,
            type:'loop',
            rewindByDrag: true, 
        } ).mount();
    } );

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



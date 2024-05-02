document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide',{
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
 
const worldXplorer = document.querySelector('#worldXplorer');

worldXplorer.addEventListener('mouseenter', () => {
    worldXplorer.innerHTML =  `<div>
        <h1 class="texl-2xl my-1 animatecss animatecss-fast animatecss-backInUp">Client: Cybuds</h1>
        <p class="animatecss animatecss-fast animatecss-backInUp">
        WorldXplorer is proudly a unified booking platform that covers Affordable Flights, Hotels, Visa Assistance Holiday Packages, Airport Transfers, a dedicated Loyalty program and other travel essentials. 
        </p> 
    
        </div>`;
});
worldXplorer.addEventListener('mouseleave', () => {
    worldXplorer.innerHTML = ``;
})

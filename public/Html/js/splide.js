document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        perPage: 1,
        drag: 'free',
        rewind: true,
        type: 'loop',
        rewindByDrag: true,
    }).mount();
});

const relokonnect = document.querySelector("#relokonnect");
relokonnect.addEventListener('mouseenter', () => {
    relokonnect.innerHTML = `<div>
        <h1 class="texl-2xl my-1 animatecss animatecss-fast animatecss-backInUp">Client: Relokonnect</h1>
        <p class="animatecss animatecss-fast animatecss-backInUp">
        Relokonnect is a digital platform connecting renters with dream homes and landlords with ideal tenants. 
        </p> 
    
        </div>`;
});
relokonnect.addEventListener('mouseleave', () => {
    relokonnect.innerHTML = ``;
})


const vturecharge = document.querySelector('#vturechargeProject');

vturecharge.addEventListener('mouseenter', () => {
    vturecharge.innerHTML = `<div>
        <h1 class="texl-2xl my-1 animatecss animatecss-fast animatecss-backInUp">Client: VtuRecharge</h1>
        <p class="animatecss animatecss-fast animatecss-backInUp">
        This is a Vtu platform where clients can purchase data, airtime and utillity payments such as gotv, dstv and others
        </p> 
    
        </div>`;
});
vturecharge.addEventListener('mouseleave', () => {
    vturecharge.innerHTML = ``;
})
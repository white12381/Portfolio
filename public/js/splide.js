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


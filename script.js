$(document).ready(function() {
    var myCarousel = document.querySelector('#myCarousel')
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000,
        wrap: false
    });
    var myCollapse = document.getElementById('myCollapse')
    var bsCollapse = new bootstrap.Collapse(myCollapse, {
        toggle: false
    });
});
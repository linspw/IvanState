$('button.header-button.logo').click(function(){
    location.reload(true)
})

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({loop:true,
        center:true,
        margin:10,
        autoWidth:true,
        responsive:{
            0:{
                items:1,
                autoWidth: false
            },
            900:{
                items:1,
                autoWidth: true
            }
        },
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause:false,
        dots: true
    })
})
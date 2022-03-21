$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('#navder').addClass('sticky')
        }else{
            $('#navder').removeClass('sticky')
        }
        if(this.scrollY>500){
            $('.scrollUpBtn').addClass('show');
        }else{
            $('.scrollUpBtn').removeClass('show')
        }
    });
    // slide-up script
    $('.scrollUpBtn').click(function(){
        $('html').animate({scrollTop: 0});
    });
    // tofgele
    $("#manuBar").click(function () {
        $(".menu").toggleClass('active');
        $("#manuBar i").toggleClass('active');
    })
// typing animation script
var typad = new Typed(".typing",{
    strings:['YouTuber','Daveloper',"Blogger",'Designer', "Freelancer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
var typad = new Typed(".typing2",{
    strings:['YouTuber','Daveloper',"Blogger",'Designer', "Freelancer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})



    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive: {
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});

// var helooo = document.getElementById('helooo')
// var hell = document.getElementById('hell')
// helooo.addEventListener('click', ()=>{
//         hell.toggleClass("active")
  
  
  
    
// })


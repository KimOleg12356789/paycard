$(document).ready(function(){

  $('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


    // const burger = document.querySelector(".burger");
    // const navbar = document.querySelector(".mt-mobile");
    // const body = document.querySelector("body");
    
    // burger.addEventListener("click", () => {
    //   navbar.classList.toggle("nav-open");
    //   body.classList.toggle("body-open");
    //   burger.classList.toggle("burger-open");
    // });

    // $( document ).ready(function(){
    //   jQuery('.scroll').onePgaeNav({
    //     wrapper : '#onePgaeNav'
    //   });
    // });  

  // (function( $ ) {
  
  // $.fn.onePgaeNav = function( options ){

  //     var settings = $.extend({
  //         activeClass     : 'active',
  //         wrapper         : '',       // Nav wrapper selector for scroll effect
  //         speed           : 900,      // animation speed
  //         navStop         : 100,      // stop before top
  //         navStart        : 200,      // change class before navstart pixel

  //     }, options ),
  //     $that = $(this);

  //     $(this).on( 'click' , clickScroll );

  //     if (settings.wrapper) {
  //         $(window).on('scroll',function(){
  //             var sectionTop  = [],
  //             windowTop   = $(window).scrollTop();

  //             $that.each(function(){
  //                 var hash = $(this).attr('href'),
  //                     hashOffset = $( hash ).offset();
  //                 if (typeof hashOffset !== 'undefined' ) {
  //                     sectionTop.push( hashOffset.top);
  //                 };
  //             });

  //             $.each( sectionTop, function(index){
  //                 if ( windowTop > sectionTop[index] - settings.navStart ){
  //                     $that.removeClass(settings.activeClass)
  //                         .eq(index).addClass(settings.activeClass);
  //                 }
  //             });
  //         });
  //     };

  //     function clickScroll(event){
  //         event.preventDefault();

  //         var hash        = $(this).attr('href'),
  //             hashOffset  = $(hash).offset(),
  //             hashTop     = hashOffset.top;

  //         $('html, body').animate({
  //             scrollTop: hashTop - settings.navStop
  //         }, settings.speed);
  //     }

  // };

  // }(jQuery));


  // let triggersModal = document.querySelectorAll(".js-show-modal");
  // let modals = document.querySelectorAll(".js-modal");

  // function closeModal() {
  //   modals.forEach(modal => {
  //     if (modal.classList.contains("is-open")) {
  //       modal.classList.remove("is-open");
  //     }
  //   });
  // }


  // modals.forEach(modal => {
  //   modal.addEventListener("click", function (event) {
  //     const isOutside = !event.target.closest(".modal__inner");
  //     const isCloseButton = event.target.matches(".js-close-modal");
  //     if (isCloseButton || isOutside) {
  //       closeModal();
  //     }
  //   });
  // });

  // triggersModal.forEach((button) =>
  // button.addEventListener("click", function (e) {
  //   e.preventDefault();
  //   let modalID = this.dataset.modal;

  //   modals.forEach(function (modal) {
  //     if (modal.dataset.modal == modalID) {
  //       modal.classList.add("is-open");
  //     }
  //   });
  // }));

  


});

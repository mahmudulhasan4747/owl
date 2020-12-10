//$(document).ready(function(){
//  $(".owl-carousel").owlCarousel({
 //    // margin:10,
   //   //autoplay:true,
     // autoplayTimeout:2000,
      //loop:true,
     // autoplayHoverPause:true,
      //responsive:{
      
         // 0:{
              //items:2
          //},
          
          // 600:{
             // items:3
          //},
          
         // 1000:{
             // items:4
        //  },
          
 // }
      
 // });
//});




$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
  
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
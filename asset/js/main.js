let index = 0;
const totalWorkItem = $(".work_item").length;

$(document).ready(function(){
    // Nav Toggle
    $(".nav_toggle").click(function(){
        $(".header .nav").slideToggle();
    })
    $(".heade .nav .a").click(function(){
        if($(window).width()<768){
            $(".header .nav").slideToggle();
        }
    })

    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $(".header").addClass("fixed")
        }else{
            $(".header").removeClass("fixed")
        }
    })
    // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

    // set lightbox img max-height
    const wHeight =$(window).height();
    $(".lightbox_img").css("max-height", wHeight + "px")

    // light Box
    $(".work_item_inner").click(function(){
    index = $(this).parent(".work_item").index();
    $(".lightbox").addClass("open");
    lightboxSlideShow();
    })
    $(".lightbox .prev").click(function(){
        if(index==0){
            index = totalWorkItem-1;
        }else{
            index--;
        }
        lightboxSlideShow();
    })
    $(".lightbox .next").click(function(){
        if(index == totalWorkItem-1){
            index=0;
        }else{
            index++;
        }
        lightboxSlideShow();
    })
// Close LightBox
    $(".lightbox_close").click(function(){
        $(".lightbox").removeClass("open");
    })
// close lightbox when clicked outside imgbox
    $(".lightbox").click(function(event){
        if($(event.target).hasClass("lightbox")){
            $(this).removeClass("open");
        }
        
        })

})

function lightboxSlideShow(){
    const imgSrc = $(".work_item").eq(index).find("img").attr("data-large");
    const category = $(".work_item").eq(index).find("h4").html();
    $(".lightbox_img").attr("src", imgSrc)
    $(".lightbox_category").html(category);
    $(".lightbox_counter").html(totalWorkItem + "/" + (index  + 1))
}
  
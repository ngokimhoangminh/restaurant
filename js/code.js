
$(function(){
  
      slick_slider();

      
  });
function slick_slider()
{
  $('.tab_slick_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        dots:true,
        prevArrow:'<span class="priv_arrow"><i class="fa fa-chevron-circle-left"></i></span>',
    nextArrow:'<span class="next_arrow"><i class="fa fa-chevron-circle-right"></i></span>'
      });
  $('.slick_slide').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
         
        autoplaySpeed: 2000,
        dots:true,
        prevArrow:'<span class="priv_arrow"><i class="fa fa-chevron-circle-left"></i></span>',
    nextArrow:'<span class="next_arrow"><i class="fa fa-chevron-circle-right"></i></span>'
      });
}

///animation
var wow = new WOW(
  {
    boxClass:     'wow',      
    animateClass: 'animated',
    offset:       0,         
    mobile:       true,       
    live:         true,       
    callback:     function(box) {
     
     
    },
    scrollContainer: null 
  }
);
wow.init();

////active

 var menu=document.getElementById('nav-ul');
 function show()
 {
   menu.classList.toggle("show");
 }
 //////
 $(document).ready(function()
{
  getActive();
  getActiveTab();
});
function getActive()
{
    
    $('.menuitem').click(function()
    {
      $('.menuitem').removeClass("actives");
      $(this).addClass("actives");
    });
    
 
}
function getActiveTab()
{
    
    $('.tabitem').click(function()
    {
      $('.tabitem').removeClass("active");
      $(this).addClass("active");
    });
    
 
}
 
//Get the button:
mybutton = document.getElementById("to-top-btn");

// When the user scrolls down 60px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

$(function() {

$(document).on('click','a.page-scroll',function(event){
  var $anchor=$(this);
  $('html,body').stop().animate({
    scrollTop: ($($anchor.attr('href')).offset().top-45)
  },1500,'easeInOutExpo');
  event.preventDefault();
});
});






 $(window).scroll(function() {
    if($(this).scrollTop() > 100)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.navbar').addClass('navbar-on-scroll');
    } else {
        $('.navbar').removeClass('navbar-on-scroll');
    }
});
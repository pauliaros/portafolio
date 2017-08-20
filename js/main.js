$(document).ready(function() {

  // typing animation
  (function($) {
    $.fn.writeText = function(content) {
        var contentArray = content.split(""),
            current = 0,
            elem = this;
        setInterval(function() {
            if(current < contentArray.length) {
                elem.text(elem.text() + contentArray[current++]);
            }
        }, 60);
    };
    
  })(jQuery);

  // input text for typing animation 
  $("#holder").writeText("<DESARROLLADORA FRONT-END JR. & DISEÑADORA GRÁFICA>");

  // initialize wow.js
  new WOW().init();
    
  // Push the body and the nav over by 285px over
  var main = function() {
    $('.fa-bars').click(function() {
      $('.nav-screen').animate({
        right: "0px"
      }, 200);

      $('body').animate({
        right: "285px"
      }, 200);
    });

    // Then push them back */
    

    $('.nav-links a').click(function() {
      $('.nav-screen').animate({
        right: "-285px"
      }, 500);

      $('body').animate({
        right: "0px"
      }, 500);
    });
  };
});

//https://codepen.io/SquishyAndroid/pen/XjRPVV

jQuery(document.links).filter(function() { //this function gives all links within the document the attribute "_blank", which allows to open it in a new window
 return this.hostname != window.location.hostname;
}) .attr('target', '_blank');




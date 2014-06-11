/*
 * scripts.js
 *
 * auto-concatenated jquery, symbolset and custom alternate files
 *
 */

/*  Google Analytics  */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-19400273-14', 'aileenandmanik.com');
ga('send', 'pageview');



$('#sms input').change(function(e){
  $('#phone').toggleClass('is-shown');
  ga('send', 'event', 'signup-form', 'clicked-sms', 'displayed ');
});

$('.get-directions').click(function(e){
  var elementOffset = $('#directions').offset().top;

  e.preventDefault();

  $('html, body').animate({
    scrollTop: elementOffset
  }, 2000);
  ga('send', 'event', 'directions', 'clicked directions link', 'scrolled to section');
});

$('#directions').waypoint(function() {
  ga('send', 'event', 'scrolled', 'to footer', 'Saw Wanderlust Link');
  $('footer').addClass('is-shown');
}, {
  offset: function() {
    return $(this).height();
  }
});

if (document.cookie.indexOf('emailSubmitted=') >= 0) {
  $('#form').removeClass('is-shown');
  $('#thank-you').addClass('is-shown');
  ga('send', 'event', 're-visit', 'viewed', 'viewed Form Thank You replacement');
}

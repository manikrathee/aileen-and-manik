/*
 * scripts.js
 *
 * auto-concatenated jquery, symbolset and custom alternate files
 *
 */

//@codekit-prepend "libs/ss-social.js";

// "libs/jquery-1.10.2.js";
// "libs/ss-standard.js";

var win   = $(window);
var doc   = $(document);
var body  = $('body');
var $self = $(this);


/*  Google Analytics  */
var googleAnalyticsID = 'UA-19400273-14';

var _gaq = _gaq || [];
_gaq.push(['_setAccount', googleAnalyticsID]);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

$('#sms input').change(function(e){
  $('#phone').toggleClass('is-shown');
});

$('.get-directions').click(function(e){
  var elementOffset = $('#directions').offset().top;

  e.preventDefault();

  $('html, body').animate({
    scrollTop: elementOffset
  }, 2000);
});

$('#directions').waypoint(function() {
  $('footer').addClass('is-shown');
}, {
  offset: function() {
    return $(this).height();
  }
});



if (document.cookie.indexOf('emailSubmitted=') >= 0) {
    $('#form').removeClass('is-shown');
    $('#thank-you').addClass('is-shown');
}

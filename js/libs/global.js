/*
 * scripts.js
 *
 * auto-concatenated jquery, symbolset and custom alternate files
 *
 */



$(document).ready(function() {
  if ($(window).width() > 768) {
    $('#mapbox').attr('height','500');
  }

  $('#sms input').change(function(e){
    $('#phone').toggleClass('is-shown');
    ga('send', 'event', 'signup-form', 'clicked-sms', 'displayed Phone Number Field');
  });

  $('.add-to-calendar').click(function(){
    ga('send', 'event', 'Main', 'click', 'iCal Event');
  });

  $('.get-directions').click(function(e){
    var elementOffset = $('#directions').offset().top;

    e.preventDefault();

    $('html, body').animate({
      scrollTop: elementOffset
    }, 2000);
    ga('send', 'event', 'Main', 'Click', 'Header Directions Link');
  });

  $('#directions').waypoint(function() {
    ga('send', 'event', 'Main', 'Scrolled', 'Saw Wanderlust');
    $('footer').addClass('is-shown');
  }, {
    offset: function() {
      return $(this).height();
    }
  });

  if (document.cookie.indexOf('emailSubmitted=') >= 0) {
    $('#form').removeClass('is-shown');
    $('#thank-you').addClass('is-shown');
    ga('send', 'event', 'Main', 'Return Visit', 'viewed Form Thank You replacement');
  }

  // Waypoints
  $('#join-us, #history, #proposal, #accomodations, #venue, #registry').waypoint(function() {
    $(this).addClass('is-visible');
  }, {
    offset: function() {
      return $(this).height();
    }
  });

});

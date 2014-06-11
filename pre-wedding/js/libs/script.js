(function($, win, doc) {

  // BG Image
  $.backstretch('img/bg-4.jpg');

  // Responsive Videos
  $(".video").fitVids();

  /**
    * Called once a vimeo player is loaded and ready to receive
    * commands. You can add events and make api calls only after this
    * function has been called.
    *
    * @param String $player_id — id of the iframe element firing the event. This is
    * useful when listening to multiple videos so you can identify which one fired
    * the event.
    */
   function ready(player_id) {
       // Keep a reference to Froogaloop for this player
       var player = $f(player_id),
           playButton = document.getElementById('play'),
           playerContainer = document.getElementById('vid-container');


       /**
        * Attach event listeners.
        *
        * If you're using a javascript framework like jQuery or Mootools
        * you'll probably use their addEvent method to add the click events.
        * Here we're just using the standard W3C addEventListener method. If
        * you need IE8 support, you'll need to use attachEvent for IE8 and
        * addEventListener for everything else (or just use jQuery or MooTools).
        */

       playButton.addEventListener('click', function() {
          player.api('play');
          playerContainer.className = "is-shown";
          playButton.className = "is-hidden";
       });
   }

   window.addEventListener('load', function() {
       //Attach the ready event to the iframe
       $f(document.getElementById('video-player')).addEvent('ready', ready);
   });



  // Scale 'shade' div to cover window
  var windowHeight = $(window).innerHeight();
  function viewportScale(){
    $('.shading').css('height', windowHeight);
  }
  viewportScale();


  // Analytics
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-19400273-14']);
  _gaq.push(['_trackPageview']);
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


  // Events
  $('.video').click(function(e){
    _gaq.push(['_trackEvent', 'Videos', 'Play']);
  });

})(jQuery, window, document);


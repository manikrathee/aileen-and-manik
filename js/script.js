/*
* Symbolset
* www.symbolset.com
* Copyright © 2012 Oak Studios LLC
*
* Upload this file to your web server
* and place this before the closing </body> tag.
* <script src="webfonts/ss-social.js"></script>
*/

if (/(MSIE [7-9]\.|Opera.*Version\/(10\.[5-9]|(11|12)\.)|Chrome\/([1-9]|10)\.|Version\/[2-4][\.0-9]+ Safari\/|Version\/(4\.0\.[4-9]|4\.[1-9]|5\.0)[\.0-9]+? Mobile\/.*Safari\/|Android [1-2]\.|BlackBerry.*WebKit)/.test(navigator.userAgent) && !/(IEMobile)/.test(navigator.userAgent)) {

  var ss_set={'stack overflow':'\uF672','github octocat':'\uF671','githuboctocat':'\uF671','stackoverflow':'\uF672','google plus':'\uF613','kickstarter':'\uF681','foursquare':'\uF690','googleplus':'\uF613','instagram':'\uF641','pinterest':'\uF650','posterous':'\uF623','wordpress':'\uF621','thumbs up':'\uD83D\uDC4D','dribbble':'\uF660','facebook':'\uF610','linkedin':'\uF612','thumbsup':'\uD83D\uDC4D','google +':'\uF613','readmill':'\uF652','envelope':'\u2709','twitter':'\uF611','behance':'\uF661','dropbox':'\uF653','youtube':'\uF630','octocat':'\uF671','google+':'\uF613','approve':'\uD83D\uDC4D','spotify':'\uF6B1','last fm':'\uF6B2','blogger':'\uF622','flickr':'\uF640','tumblr':'\uF620','paypal':'\uF680','lastfm':'\uF6B2','github':'\uF670','svpply':'\uF651','email':'\u2709','skype':'\uF6A0','vimeo':'\uF631','mail':'\u2709','rdio':'\uF6B0','like':'\uD83D\uDC4D','rss':'\uE310'};

  if (typeof ss_icons !== 'object' || typeof ss_icons !== 'object') {
    var ss_icons = ss_set;
    var ss_keywords = [];
    for (var i in ss_set) { ss_keywords.push(i); };
  } else {
    for (var i in ss_set) { ss_icons[i] = ss_set[i]; ss_keywords.push(i); }
  };

  if (typeof ss_legacy !== 'function') {

    /* domready.js */
    !function(a,b){typeof module!="undefined"?module.exports=b():typeof define=="function"&&typeof define.amd=="object"?define(b):this[a]=b()}("ss_ready",function(a){function m(a){l=1;while(a=b.shift())a()}var b=[],c,d=!1,e=document,f=e.documentElement,g=f.doScroll,h="DOMContentLoaded",i="addEventListener",j="onreadystatechange",k="readyState",l=/^loade|c/.test(e[k]);return e[i]&&e[i](h,c=function(){e.removeEventListener(h,c,d),m()},d),g&&e.attachEvent(j,c=function(){/^c/.test(e[k])&&(e.detachEvent(j,c),m())}),a=g?function(c){self!=top?l?c():b.push(c):function(){try{f.doScroll("left")}catch(b){return setTimeout(function(){a(c)},50)}c()}()}:function(a){l?a():b.push(a)}})

    var ss_legacy = function(node) {

      if (!node instanceof Object) return false;

      if (node.length) {
        for (var i=0; i<node.length; i++) {
          ss_legacy(node[i]);
        }
        return;
      };

      if (node.value) {
        node.value = ss_liga(node.value);
      } else if (node.nodeValue) {
        node.nodeValue = ss_liga(node.nodeValue);
      } else if (node.innerHTML) {
        node.innerHTML = ss_liga(node.innerHTML);
      }

    };

    var ss_getElementsByClassName = function(node, classname) {
      if (document.querySelectorAll) {
        return document.querySelectorAll('.'+classname);
      }
      var a = [];
      var re = new RegExp('(^| )'+classname+'( |$)');
      var els = node.getElementsByTagName("*");
      for(var i=0,j=els.length; i<j; i++)
          if(re.test(els[i].className))a.push(els[i]);
      return a;
    };

    var ss_liga = function(that) {
      var re = new RegExp(ss_keywords.join('|').replace(/[-[\]{}()*+?.,\\^$#\s]/g, "\\$&"),"gi");
      return that.replace(re, function(v) {
        return ss_icons[v.toLowerCase()];
      });
    };

    ss_ready(function() {
      if (document.getElementsByClassName) {
        ss_legacy(document.getElementsByClassName('ss-icon'));
      } else {
        ss_legacy(ss_getElementsByClassName(document.body, 'ss-icon'));
      }
    });

  }

};
;/*
* Symbolset
* www.symbolset.com
* Copyright © 2013 Oak Studios LLC
*
* Upload this file to your web server
* and place this before the closing </body> tag.
* <script src="webfonts/ss-symbolicons-block.js"></script>
*/

if (/(MSIE [7-9]\.|Opera.*Version\/(10\.[5-9]|(11|12)\.)|Chrome\/([1-9]|10)\.|Version\/[2-4][\.0-9]+ Safari\/|Version\/(4\.0\.[4-9]|4\.[1-9]|5\.0)[\.0-9]+? Mobile\/.*Safari\/|Android ([1-2]|4\.[2-9].*Version\/4)\.|BlackBerry.*WebKit)/.test(navigator.userAgent) && !/(IEMobile)/.test(navigator.userAgent)) {

  if (/Android 4\.[2-9].*Version\/4/.test(navigator.userAgent)) {
    var ss_android = document.createElement('style');
    ss_android.innerHTML = '.ss-icon,[class^="ss-"],[class*=" ss-"],[class^="ss-"]:before,[class*=" ss-"]:before,[class^="ss-"].right:after[class*=" ss-"].right:after{text-rendering:auto!important}';
    document.body.appendChild(ss_android);
  }

  var ss_set={'wheelchair accessible':'\u267F','skull and crossbones':'\u2620','waxing crescent moon':'\uD83C\uDF12','waning crescent moon':'\uD83C\uDF18','wheelchairaccessible':'\u267F','waxing gibbous moon':'\uD83C\uDF14','waning gibbous moon':'\uD83C\uDF16','skullandcrossbones':'\u2620','screwdriver mobile':'\uEA20','screwdriver pencil':'\uF034','hammer screwdriver':'\uF035','waxingcrescentmoon':'\uD83C\uDF12','first quarter moon':'\uD83C\uDF13','waningcrescentmoon':'\uD83C\uDF18','flip horizontally':'\uE260','screwdrivermobile':'\uEA20','compact lightbulb':'\uEA85','screwdriverpencil':'\uF034','hammerscrewdriver':'\uF035','mantelpiece clock':'\uD83D\uDD70','counter clockwise':'\u2940','waxinggibbousmoon':'\uD83C\uDF14','waninggibbousmoon':'\uD83C\uDF16','last quarter moon':'\uD83C\uDF17','pencil brush pen':'\uE223','fliphorizontally':'\uE260','exclamation chat':'\uE397','charging battery':'\uEA14','compactlightbulb':'\uEA85','mantelpiececlock':'\uD83D\uDD70','counterclockwise':'\u2940','cooking utensils':'\uF151','scissors needles':'\uF1F7','firstquartermoon':'\uD83C\uDF13','flip vertically':'\uE261','touchtone phone':'\u260F','exclamationchat':'\uE397','toothless smile':'\uD83D\uDE00','delete database':'\uE7A5','chargingbattery':'\uEA14','download folder':'\uEC76','cookingutensils':'\uF151','scissorsneedles':'\uF1F7','lastquartermoon':'\uD83C\uDF17','support ribbon':'\uD83C\uDF80','pencilbrushpen':'\uE223','flipvertically':'\uE261','touchtonephone':'\u260F','satellite dish':'\uD83D\uDCE1','toothlesssmile':'\uD83D\uDE00','pound banknote':'\uD83D\uDCB7','deletedatabase':'\uE7A5','search picture':'\uE856','medium battery':'\uEA11','question frame':'\uEA94','utensils frame':'\uEA95','christmas tree':'\uD83C\uDF84','download cloud':'\uEB00','download crate':'\uEB03','downloadfolder':'\uEC76','life preserver':'\uEE11','heavy asterisk':'\u2731','graduation cap':'\uD83C\uDF93','steering wheel':'\uF313','bathroom scale':'\uF4B7','flux capacitor':'\uEAD0','navigate right':'\u25BB','supportribbon':'\uD83C\uDF80','announcements':'\uD83D\uDCE2','satellitedish':'\uD83D\uDCE1','incoming mail':'\uD83D\uDCE9','question chat':'\uE398','ellipsis chat':'\uE399','user portrait':'\uE420','swaddled baby':'\uE430','shopping cart':'\uE500','cash register':'\uE530','euro banknote':'\uD83D\uDCB6','poundbanknote':'\uD83D\uDCB7','record script':'\uE703','searchpicture':'\uE856','mediumbattery':'\uEA11','empty battery':'\uEA13','pencil mobile':'\uEA22','questionframe':'\uEA94','utensilsframe':'\uEA95','wedding rings':'\uD83D\uDC8D','christmastree':'\uD83C\uDF84','downloadcloud':'\uEB00','downloadcrate':'\uEB03','remove folder':'\uEC72','delete folder':'\uEC74','upload folder':'\uEC77','lifepreserver':'\uEE11','notifications':'\uD83D\uDD14','wrench pencil':'\uF033','heavyasterisk':'\u2731','birthday cake':'\uD83C\uDF82','chocolate bar':'\uD83C\uDF6B','graduationcap':'\uD83C\uDF93','partly cloudy':'\u26C5','crescent moon':'\uD83C\uDF19','steeringwheel':'\uF313','medical cross':'\uF4B0','bathroomscale':'\uF4B7','fluxcapacitor':'\uEAD0','navigateright':'\u25BB','navigate down':'\uF501','navigate left':'\u25C5','delete heart':'\uD83D\uDC94','ruler pencil':'\uE205','pencil brush':'\uE222','paint roller':'\uE225','rotary phone':'\u260E','announcement':'\uD83D\uDCE2','incomingmail':'\uD83D\uDCE9','questionchat':'\uE398','ellipsischat':'\uE399','userportrait':'\uE420','swaddledbaby':'\uE430','user profile':'\uE406','address book':'\uD83D\uDCD1','shoppingcart':'\uE500','shopping bag':'\uD83D\uDECD','cashregister':'\uE530','eurobanknote':'\uD83D\uDCB6','yen banknote':'\uD83D\uDCB4','recordscript':'\uE703','add database':'\uE7A2','download hdd':'\uE7B7','fast forward':'\u23E9','skip forward':'\u23ED','file cabinet':'\uD83D\uDDC4','books pencil':'\uE960','spiral bound':'\uD83D\uDDD2','mobile phone':'\uD83D\uDCF1','full battery':'\uD83D\uDD0B','emptybattery':'\uEA13','mobile tools':'\uEA20','brush mobile':'\uEA21','pencilmobile':'\uEA22','spray bottle':'\uEA8D','picnic table':'\uEAB1','flower frame':'\uEA93','weddingrings':'\uD83D\uDC8D','jackolantern':'\uD83C\uDF83','download box':'\uEB02','upload cloud':'\uEB40','upload crate':'\uEB43','rotate right':'\u21BB','removefolder':'\uEC72','deletefolder':'\uEC74','uploadfolder':'\uEC77','notification':'\uD83D\uDD14','wrenchpencil':'\uF033','tape measure':'\uF036','keyboarddown':'\uF0D1','birthdaycake':'\uD83C\uDF82','french fries':'\uD83C\uDF5F','chocolatebar':'\uD83C\uDF6B','partlycloudy':'\u26C5','partly sunny':'\u26C5','crescentmoon':'\uD83C\uDF19','trailer dump':'\uF302','medicalcross':'\uF4B0','navigatedown':'\uF501','navigateleft':'\u25C5','raised hand':'\u270B','radioactive':'\u2622','thumbs down':'\uD83D\uDC4E','deleteheart':'\uD83D\uDC94','rulerpencil':'\uE205','pencilbrush':'\uE222','paintroller':'\uE225','rotaryphone':'\u260E','tooth smile':'\uD83D\uDE03','remove user':'\uE402','delete user':'\uE404','male female':'\uD83D\uDC6B','users frame':'\uE422','symbolicons':'\uE440','happy robot':'\uE441','userprofile':'\uE406','addressbook':'\uD83D\uDCD1','shoppingbag':'\uD83D\uDECD','credit card':'\uD83D\uDCB3','dollar sign':'\u0024','yenbanknote':'\uD83D\uDCB4','floppy disk':'\uD83D\uDCBE','play script':'\uE701','stop script':'\uE702','adddatabase':'\uE7A2','network hdd':'\uE7B6','downloadhdd':'\uE7B7','photographs':'\uE851','videocamera':'\uD83D\uDCF9','fastforward':'\u23E9','skipforward':'\u23ED','filecabinet':'\uD83D\uDDC4','storage box':'\uE901','bookspencil':'\uE960','book insert':'\uE961','spiralbound':'\uD83D\uDDD2','mobilephone':'\uD83D\uDCF1','fullbattery':'\uD83D\uDD0B','mobiletools':'\uEA20','brushmobile':'\uEA21','toiletpaper':'\uEA84','spraybottle':'\uEA8D','picnictable':'\uEAB1','heart frame':'\uD83D\uDC9F','flowerframe':'\uEA93','pail shovel':'\uEAA4','downloadbox':'\uEB02','uploadcloud':'\uEB40','uploadcrate':'\uEB43','rotateright':'\u21BB','remove file':'\uEC02','delete file':'\uEC04','search file':'\uEC05','information':'\u2139','rabbit face':'\uD83D\uDC30','tapemeasure':'\uF036','alarm clock':'\u23F0','keyboard up':'\uF0D0','chicken leg':'\uD83C\uDF57','frenchfries':'\uD83C\uDF5F','partlysunny':'\u26C5','auto repair':'\uF300','trailerdump':'\uF302','hockey mask':'\uF40C','medical bag':'\uF4B1','stethoscope':'\uF4B4','navigate up':'\uF500','screenshot':'\u2316','binoculars':'\uE010','raisedhand':'\u270B','attachment':'\uD83D\uDCCE','no smoking':'\uD83D\uDEAD','disapprove':'\uD83D\uDC4E','thumbsdown':'\uD83D\uDC4E','eyedropper':'\uE200','magic wand':'\uE203','grid lines':'\uE206','discussion':'\uD83D\uDDEA','toothsmile':'\uD83D\uDE03','user group':'\uE400','removeuser':'\uE402','deleteuser':'\uE404','heart user':'\uE405','malefemale':'\uD83D\uDC6B','user frame':'\uE421','usersframe':'\uE422','happyrobot':'\uE441','creditcard':'\uD83D\uDCB3','dollarsign':'\u0024','pound sign':'\u00A3','calculator':'\uD83D\uDDA9','directions':'\uE672','floppydisk':'\uD83D\uDCBE','playscript':'\uE701','stopscript':'\uE702','hard drive':'\uE7B0','networkhdd':'\uE7B6','microphone':'\uD83C\uDFA4','headphones':'\uD83C\uDFA7','phonograph':'\uE802','music home':'\uE821','photograph':'\uD83C\uDF04','clap board':'\uD83C\uDFAC','television':'\uD83D\uDCFA','flatscreen':'\uE8C0','controller':'\uD83C\uDFAE','storagebox':'\uE901','bookinsert':'\uE961','thumbnails':'\uE9A3','cell phone':'\uD83D\uDCF1','smartphone':'\uD83D\uDCF1','cell tower':'\uD83D\uDCF6','flashlight':'\uD83D\uDD26','heartframe':'\uD83D\uDC9F','star frame':'\uEA91','tree frame':'\uEA92','easter egg':'\uEAE0','pailshovel':'\uEAA4','fuzzy dice':'\uEA87','upload box':'\uEB42','connection':'\uEB85','removefile':'\uEC02','deletefile':'\uEC04','searchfile':'\uEC05','add folder':'\uEC71','pull quote':'\u201C','typewriter':'\uED41','scale down':'\uEE05','rabbitface':'\uD83D\uDC30','maple leaf':'\uD83C\uDF41','switch off':'\uF003','brightness':'\uD83D\uDD06','alarmclock':'\u23F0','keyboardup':'\uF0D0','chickenleg':'\uD83C\uDF57','wine glass':'\uD83C\uDF77','babybottle':'\uD83C\uDF7C','sunglasses':'\uD83D\uDD76','police car':'\uD83D\uDE94','automobile':'\uD83D\uDE98','car repair':'\uF300','autorepair':'\uF300','motorcycle':'\uF303','square key':'\uF310','wheelchair':'\u267F','basketball':'\uD83C\uDFC0','hockeymask':'\uF40C','flaginhole':'\u26F3','medicalbag':'\uF4B1','microscope':'\uD83D\uDD2C','navigateup':'\uF500','crosshair':'\u2316','incognito':'\uE015','paperclip':'\uD83D\uDCCE','backspace':'\u232B','nosmoking':'\uD83D\uDEAD','stop sign':'\uE0D1','lightning':'\u2607','thumbs up':'\uD83D\uDC4D','add heart':'\uE1A2','magicwand':'\uE203','cut paste':'\uE204','clipboard':'\uD83D\uDCCB','gridlines':'\uE206','telephone':'\uD83D\uDCDE','phonebook':'\uE301','voicemail':'\u2315','megaphone':'\uD83D\uDCE2','text chat':'\uE396','ampersand':'\u0026','usergroup':'\uE400','heartuser':'\uE405','userframe':'\uE421','footsteps':'\uD83D\uDC63','euro sign':'\u20AC','poundsign':'\u00A3','money bag':'\uD83D\uDCB0','calculate':'\uD83D\uDDA9','bar chart':'\uD83D\uDCCA','pie chart':'\uE570','linechart':'\uE57A','flowchart':'\uE577','buildings':'\uD83C\uDFE2','warehouse':'\uE602','harddrive':'\uE7B0','installer':'\uE7B7','musicnote':'\u266B','musichome':'\uE821','clapboard':'\uD83C\uDFAC','film roll':'\uE8B2','play film':'\uE8B1','projector':'\uE8C1','videogame':'\uD83C\uDFAE','cartridge':'\uEA43','skip back':'\u23EE','open book':'\uD83D\uDCD6','newspaper':'\uD83D\uDCF0','cellphone':'\uD83D\uDCF1','cell bars':'\uD83D\uDCF6','celltower':'\uD83D\uDCF6','birdhouse':'\uEAB4','lightbulb':'\uD83D\uDCA1','fireplace':'\uEA82','starframe':'\uEA91','treeframe':'\uEA92','fireworks':'\uD83C\uDF86','easteregg':'\uEAE0','halloween':'\uD83C\uDF83','christmas':'\uD83C\uDF84','teddybear':'\uEAA0','headstone':'\u26FC','tombstone':'\u26FC','three die':'\u2682','fuzzydice':'\uEA87','slingshot':'\uEAA5','uploadbox':'\uEB42','documents':'\uEC00','addfolder':'\uEC71','pullquote':'\u201C','scaledown':'\uEE05','checkmark':'\u2713','bear face':'\uD83D\uDC3B','palm tree':'\uD83C\uDF34','evergreen':'\uD83C\uDF32','mapleleaf':'\uD83C\uDF41','dashboard':'\uF000','switch on':'\uF002','switchoff':'\uF003','flash off':'\uF011','hourglass':'\u23F3','stopwatch':'\u23F1','hamburger':'\uD83C\uDF54','pizza pie':'\uEFE0','wineglass':'\uD83C\uDF77','paper bag':'\uF161','snowflake':'\u2744','full moon':'\uD83C\uDF15','policecar':'\uD83D\uDE94','carrepair':'\uF300','squarekey':'\uF310','briefcase':'\uD83D\uDCBC','billiards':'\uD83C\uDFB1','telescope':'\uD83D\uDD2D','zoom out':'\uE003','unlocked':'\uD83D\uDD13','insecure':'\uD83D\uDD13','trashcan':'\uD83D\uDDD1','stopsign':'\uE0D1','keywords':'\uD83C\uDFF7','thumbsup':'\uD83D\uDC4D','addheart':'\uE1A2','favorite':'\u22C6','bullseye':'\uD83C\uDFAF','scissors':'\u2702','cutpaste':'\uE204','envelope':'\u2709','comments':'\uD83D\uDDEA','textchat':'\uE396','add user':'\uE401','contacts':'\uD83D\uDCC7','eurosign':'\u20AC','yen sign':'\u00A5','banknote':'\uD83D\uDCB5','moneybag':'\uD83D\uDCB0','barchart':'\uD83D\uDCCA','piechart':'\uE570','activity':'\uE57A','fortress':'\uD83C\uDFF0','signpost':'\uE672','location':'\uE6D0','database':'\uE7A0','playlist':'\uE820','pictures':'\uE851','filmroll':'\uE8B2','playfilm':'\uE8B1','joystick':'\uD83D\uDD79','skipback':'\u23EE','openbook':'\uD83D\uDCD6','notebook':'\uD83D\uDCD3','computer':'\uD83D\uDCBB','cellbars':'\uD83D\uDCF6','campfire':'\uD83D\uDD25','balloons':'\uD83C\uDF88','hanukkah':'\uEAE1','threedie':'\u2682','four die':'\u2683','five die':'\u2684','download':'\uEB00','transfer':'\u21C6','add file':'\uEC01','typeface':'\uED01','shredder':'\uED40','redirect':'\u21AA','contract':'\uEE01','scale up':'\uEE04','question':'\u2753','subtract':'\u002D','dog face':'\uD83D\uDC36','cat face':'\uD83D\uDC31','bearface':'\uD83D\uDC3B','elephant':'\uD83D\uDC18','palmtree':'\uD83C\uDF34','chestnut':'\uD83C\uDF30','mushroom':'\uD83C\uDF44','settings':'\u2699','controls':'\uD83C\uDF9A','switchon':'\uF002','flashoff':'\uF011','wrenches':'\uF032','calendar':'\uD83D\uDCC5','asterisk':'\u2731','pancakes':'\uF113','doughnut':'\uD83C\uDF69','pizzapie':'\uEFE0','cocktail':'\uD83C\uDF78','barbecue':'\uF142','paperbag':'\uF161','utensils':'\uD83C\uDF74','backpack':'\uD83C\uDF92','sun face':'\uD83C\uDF1E','umbrella':'\u2602','new moon':'\uD83C\uDF11','fullmoon':'\uD83C\uDF15','sailboat':'\u26F5','jerrycan':'\uF315','restroom':'\uD83D\uDEBB','elevator':'\uF380','passport':'\uF316','baseball':'\u26BE','football':'\uD83C\uDFC8','ski boot':'\uF408','dumbbell':'\uF416','exercise':'\uF414','hospital':'\u26E8','testtube':'\uF4C1','previous':'\u25C5','zoom in':'\uE002','zoomout':'\uE003','compose':'\uD83D\uDCDD','private':'\uD83D\uDD12','keyword':'\uD83C\uDFF7','new tag':'\uE101','approve':'\uD83D\uDC4D','dislike':'\uD83D\uDC4E','windows':'\uE202','crayons':'\uE242','palette':'\uD83C\uDFA8','effects':'\uE280','headset':'\uE302','podcast':'\uE311','mailbox':'\uD83D\uDCEB','inboxes':'\uE354','comment':'\uD83D\uDCAC','avatars':'\uD83D\uDC65','adduser':'\uE401','females':'\uD83D\uDC6D','present':'\uD83C\uDF81','invoice':'\uE550','yensign':'\u00A5','meeting':'\uE581','package':'\uD83D\uDCE6','lodging':'\uD83C\uDFE8','compass':'\uE671','pushpin':'\uD83D\uDCCC','airplay':'\uE800','dictate':'\uD83C\uDFA4','speaker':'\uD83D\uDD08','picture':'\uD83C\uDF04','shuffle':'\uD83D\uDD00','cabinet':'\uD83D\uDDC4','notepad':'\uE972','desktop':'\uD83D\uDCBB','display':'\uD83D\uDCBB','monitor':'\uD83D\uDCBB','battery':'\uD83D\uDD0B','laundry':'\uEA80','balloon':'\uD83C\uDF88','menorah':'\uEAE1','one die':'\u2680','two die':'\u2681','fourdie':'\u2683','fivedie':'\u2684','six die':'\u2685','refresh':'\u21BB','syncing':'\uEB82','addfile':'\uEC01','printer':'\u2399','scaleup':'\uEE04','warning':'\u26A0','caution':'\u26D4','checked':'\u2713','dogface':'\uD83D\uDC36','catface':'\uD83D\uDC31','feather':'\uE220','bouquet':'\uD83D\uDC90','diamond':'\uD83D\uDC8E','snowman':'\u2603','toggles':'\uD83C\uDF9A','toolbox':'\uF030','history':'\u2940','sausage':'\uF103','cupcake':'\uF118','growler':'\uF121','pitcher':'\uF19B','toaster':'\uF193','takeout':'\uF160','top hat':'\uD83C\uDFA9','glasses':'\uD83D\uDC53','crochet':'\uF1F5','needles':'\uF1F6','sunface':'\uD83C\uDF1E','rainbow':'\uD83C\uDF08','newmoon':'\uD83C\uDF11','trailer':'\uF301','bicycle':'\uD83D\uDEB2','parking':'\uF312','theatre':'\uD83C\uDFAD','bowling':'\uF406','paddles':'\uF407','skiboot':'\uF408','bathtub':'\uD83D\uDEC1','hot tub':'\uF411','bandage':'\uF4B2','syringe':'\uD83D\uDC89','forward':'\u27A1','search':'\uD83D\uDD0D','zoomin':'\uE002','attach':'\uD83D\uDCCE','pencil':'\u270E','locked':'\uD83D\uDD12','secure':'\uD83D\uDD12','unlock':'\uD83D\uDD13','public':'\uD83D\uDD13','target':'\u25CE','tagged':'\uD83C\uDFF7','newtag':'\uE101','trophy':'\uD83C\uDFC6','ribbon':'\uD83C\uDF80','sample':'\uE200','layers':'\uE202','stroke':'\uE241','bezier':'\uE2A0','vector':'\uE2A0','pixels':'\uE2A1','raster':'\uE2A1','outbox':'\uD83D\uDCE4','avatar':'\uD83D\uDC64','people':'\uD83D\uDC6B','dollar':'\u0024','scales':'\u2696','weight':'\uE5E5','bridge':'\uE603','school':'\uD83C\uDFEB','castle':'\uD83C\uDFF0','script':'\uE700','puzzle':'\uE710','window':'\uD83D\uDDD4','guitar':'\uD83C\uDFB8','volume':'\uD83D\uDD08','itunes':'\uE822','camera':'\uD83D\uDCF7','images':'\uE851','photos':'\uE851','videos':'\uD83D\uDCF9','gaming':'\uD83C\uDFAE','record':'\u25CF','rewind':'\u23EA','ledger':'\uD83D\uDCD2','notice':'\uE973','keypad':'\uE9A0','filter':'\uE9B0','funnel':'\uE9B0','laptop':'\uEA00','tablet':'\uEA01','iphone':'\uD83D\uDCF1','mobile':'\uD83D\uDCF1','washer':'\uEA80','toilet':'\uD83D\uDEBD','candle':'\uEAB0','framed':'\uD83D\uDDBC','easter':'\uEAE0','blocks':'\uEAA1','rattle':'\uEAA2','diaper':'\uEAA3','knight':'\u265E','onedie':'\u2680','twodie':'\u2681','sixdie':'\u2685','swords':'\u2694','upload':'\uEB40','folder':'\uD83D\uDCC1','anchor':'\uED10','action':'\uEE00','expand':'\u2922','hyphen':'\u002D','remove':'\u002D','delete':'\u2421','turtle':'\uD83D\uDC22','cactus':'\uD83C\uDF35','flower':'\u2698','switch':'\uF002','magnet':'\uF012','hammer':'\uD83D\uDD28','wrench':'\uD83D\uDD27','cheese':'\uF101','hotdog':'\uF102','burger':'\uD83C\uDF54','turkey':'\uF105','carrot':'\uF111','grapes':'\uD83C\uDF47','cookie':'\uD83C\uDF6A','coffee':'\uF120','bottle':'\uF122','kettle':'\uF19C','pepper':'\uF131','helmet':'\uF1B2','tophat':'\uD83C\uDFA9','tshirt':'\uD83D\uDC55','bikini':'\uD83D\uDC59','hanger':'\uF1A0','fabric':'\uF1F0','swatch':'\uF1F1','thread':'\uF1F3','button':'\uF1F8','zipper':'\uF1F9','planet':'\uF2A0','outlet':'\uF282','flight':'\u2708','rocket':'\uD83D\uDE80','ticket':'\uD83C\uDFAB','tennis':'\uD83C\uDFBE','soccer':'\u26BD','runner':'\uD83C\uDFC3','shower':'\uD83D\uDEBF','hottub':'\uF411','genius':'\u269B','radar':'\uE014','write':'\u270E','trash':'\uD83D\uDDD1','skull':'\uD83D\uDC80','heart':'\u2665','award':'\uE1C0','medal':'\uD83C\uDF96','badge':'\uD83D\uDCDB','crown':'\uD83D\uDC51','rules':'\uD83D\uDCCF','brush':'\uE224','phone':'\uD83D\uDCDE','email':'\u2709','inbox':'\uD83D\uDCE5','stamp':'\uE351','chats':'\uD83D\uDDEA','sleep':'\uD83D\uDCA4','smile':'\u263B','frown':'\u2639','users':'\uD83D\uDC65','males':'\uD83D\uDC6C','women':'\uD83D\uDC6D','robot':'\uE440','alien':'\uD83D\uDC7D','ghost':'\uD83D\uDC7B','store':'\uD83C\uDFEA','vault':'\uE540','price':'\u0024','pound':'\u00A3','coins':'\uE543','gavel':'\uE583','crate':'\uE5D8','fence':'\uE601','earth':'\uD83C\uDF0E','world':'\uD83C\uDF0E','globe':'\uD83C\uDF10','music':'\u266B','audio':'\u266B','sound':'\uD83D\uDD08','radio':'\uD83D\uDCFB','discs':'\uE811','image':'\uD83C\uDF04','photo':'\uD83C\uDF04','video':'\uD83D\uDCF9','pause':'\uE8A0','eject':'\u23CF','books':'\uD83D\uDCDA','heath':'\uD83D\uDCD2','album':'\uE970','dryer':'\uEA81','flame':'\uEAB2','chair':'\uEA8B','frame':'\uD83D\uDDBC','rings':'\uD83D\uDC8D','teddy':'\uEAA0','sweep':'\uEA86','broom':'\uEA86','chess':'\u265E','knife':'\uD83D\uDD2A','nodes':'\uEB85','files':'\uEC00','pages':'\uEC00','quote':'\u201C','print':'\u2399','shred':'\uED40','visit':'\uEE00','power':'\uEE10','alert':'\u26A0','minus':'\u002D','check':'\u2713','close':'\u2421','sheep':'\uD83D\uDC11','snake':'\uD83D\uDC0D','whale':'\uD83D\uDC0B','tooth':'\uEF61','quill':'\uE220','tools':'\uF031','clock':'\u23F2','timer':'\u23F1','alarm':'\u23F0','watch':'\u231A','steak':'\uF106','pizza':'\uD83C\uDF55','apple':'\uD83C\uDF4F','bread':'\uD83C\uDF5E','candy':'\uD83C\uDF6C','drink':'\uF125','apron':'\uF170','dress':'\uD83D\uDC57','weave':'\uF1F2','sunny':'\u2600','train':'\uD83D\uDE86','truck':'\uD83D\uDE9A','plane':'\u2708','hiker':'\uF410','flask':'\uF4C0','right':'\u27A1','share':'\uF601','zoom':'\uE002','hand':'\u270B','link':'\uD83D\uDD17','edit':'\u270E','lock':'\uD83D\uDD12','tags':'\uD83C\uDFF7','flag':'\u2691','like':'\uD83D\uDC4D','love':'\u2665','star':'\u22C6','crop':'\uE201','fill':'\uE240','call':'\uD83D\uDCDE','send':'\uD83D\uDD85','mail':'\u2709','chat':'\uD83D\uDCAC','talk':'\uD83D\uDCAC','user':'\uD83D\uDC64','baby':'\uD83D\uDC76','cart':'\uE500','gift':'\uD83C\uDF81','safe':'\uE540','bill':'\uE550','cost':'\u0024','euro':'\u20AC','cash':'\uD83D\uDCB5','bank':'\uD83C\uDFE6','meet':'\uE581','hook':'\uE5E4','home':'\u2302','city':'\uD83C\uDFE2','barn':'\uE604','code':'\uE780','save':'\uD83D\uDCBE','disc':'\uD83D\uDCBF','film':'\uD83C\uDF9E','play':'\u25B6','stop':'\u25A0','skip':'\u23ED','news':'\uD83D\uDCF0','grid':'\uE9A0','menu':'\uEE06','ipad':'\uEA01','cell':'\uD83D\uDCF1','door':'\uD83D\uDEAA','exit':'\uD83D\uDEAA','idea':'\uD83D\uDCA1','lamp':'\uEA8A','seat':'\uD83D\uDCBA','bomb':'\uD83D\uDCA3','sync':'\uEB82','wifi':'\uEB84','undo':'\u238C','redo':'\uF520','font':'\uED01','list':'\uED50','help':'\u2753','info':'\u2139','plus':'\u002B','fish':'\uD83D\uDC1F','bird':'\uD83D\uDC26','bone':'\uEF60','poop':'\uD83D\uDCA9','tree':'\uD83C\uDF32','leaf':'\uD83C\uDF42','ruby':'\uD83D\uDC8E','gear':'\u2699','bell':'\uD83D\uDD14','time':'\u23F2','date':'\uD83D\uDCC5','beer':'\uD83C\uDF7A','wine':'\uF123','soda':'\uF124','salt':'\uF130','oven':'\uF140','chef':'\uF172','comb':'\uF1A1','yarn':'\uF1F4','moon':'\uD83C\uDF19','plug':'\uD83D\uDD0C','taxi':'\uD83D\uDE96','bike':'\uD83D\uDEB2','boat':'\uD83D\uDEA2','helm':'\u2388','tire':'\uF311','fuel':'\u26FD','work':'\uD83D\uDCBC','golf':'\uF400','skis':'\uD83C\uDFBF','hike':'\uF410','atom':'\u269B','down':'\u2B07','left':'\u2B05','back':'\u2B05','next':'\u25BB','key':'\uD83D\uDD11','ban':'\uD83D\uDEAB','tag':'\uD83C\uDFF7','cut':'\u2702','pen':'\u2712','ink':'\uE228','rss':'\uE310','zzz':'\uD83D\uDCA4','and':'\u0026','men':'\uD83D\uDC6C','yen':'\u00A5','box':'\uD83D\uDCE6','map':'\uE673','bug':'\uD83D\uDC1B','hdd':'\uE7B0','mic':'\uD83C\uDFA4','cfl':'\uEA85','rip':'\u26FC','usb':'\uEB86','fax':'\uD83D\uDCE0','out':'\uEE00','add':'\u002B','dog':'\uD83D\uDC15','pig':'\uD83D\uDC16','poo':'\uD83D\uDCA9','gem':'\uD83D\uDC8E','cog':'\u2699','egg':'\uF100','mug':'\u2615','tea':'\uD83C\uDF75','cup':'\uF125','jug':'\uF126','pot':'\uF168','bbq':'\uF142','tie':'\uF1A2','sun':'\u2600','fan':'\uF280','car':'\uD83D\uDE98','cab':'\uD83D\uDE96','bus':'\uD83D\uDE8D','ufo':'\uF304','gas':'\u26FD','run':'\uD83C\uDFC3','dna':'\uF4C2','fx':'\uE280','tv':'\uD83D\uDCFA','za':'\uD83C\uDF55','up':'\u2B06'};

  if (typeof ss_icons !== 'object' || typeof ss_icons !== 'object') {
    var ss_icons = ss_set;
    var ss_keywords = [];
    for (var i in ss_set) { ss_keywords.push(i); };
  } else {
    for (var i in ss_set) { ss_icons[i] = ss_set[i]; ss_keywords.push(i); }
  };

  if (typeof ss_legacy !== 'function') {

    /* domready.js */
    !function(a,b){typeof module!="undefined"?module.exports=b():typeof define=="function"&&typeof define.amd=="object"?define(b):this[a]=b()}("ss_ready",function(a){function m(a){l=1;while(a=b.shift())a()}var b=[],c,d=!1,e=document,f=e.documentElement,g=f.doScroll,h="DOMContentLoaded",i="addEventListener",j="onreadystatechange",k="readyState",l=/^loade|c/.test(e[k]);return e[i]&&e[i](h,c=function(){e.removeEventListener(h,c,d),m()},d),g&&e.attachEvent(j,c=function(){/^c/.test(e[k])&&(e.detachEvent(j,c),m())}),a=g?function(c){self!=top?l?c():b.push(c):function(){try{f.doScroll("left")}catch(b){return setTimeout(function(){a(c)},50)}c()}()}:function(a){l?a():b.push(a)}})

    var ss_legacy = function(node) {

      if (!node instanceof Object) return false;

      if (node.length) {
        for (var i=0; i<node.length; i++) {
          ss_legacy(node[i]);
        }
        return;
      };

      if (node.value) {
        node.value = ss_liga(node.value);
      } else if (node.nodeValue) {
        node.nodeValue = ss_liga(node.nodeValue);
      } else if (node.innerHTML) {
        node.innerHTML = ss_liga(node.innerHTML);
      }

    };

    var ss_getElementsByClassName = function(node, classname) {
      if (document.querySelectorAll) {
        return document.querySelectorAll('.'+classname);
      }
      var a = [];
      var re = new RegExp('(^| )'+classname+'( |$)');
      var els = node.getElementsByTagName("*");
      for(var i=0,j=els.length; i<j; i++)
          if(re.test(els[i].className))a.push(els[i]);
      return a;
    };

    var ss_liga = function(that) {
      var re = new RegExp(ss_keywords.join('|').replace(/[-[\]{}()*+?.,\\^$#\s]/g, "\\$&"),"gi");
      return that.replace(re, function(v) {
        return ss_icons[v.toLowerCase()];
      });
    };

    ss_ready(function() {
      if (document.getElementsByClassName) {
        ss_legacy(document.getElementsByClassName('ss-icon'));
      } else {
        ss_legacy(ss_getElementsByClassName(document.body, 'ss-icon'));
      }
    });

  }

};
;// Generated by CoffeeScript 1.6.2
/*!
jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/


(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __slice = [].slice;

  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      return define('waypoints', ['jquery'], function($) {
        return factory($, root);
      });
    } else {
      return factory(root.jQuery, root);
    }
  })(window, function($, window) {
    var $w, Context, Waypoint, allWaypoints, contextCounter, contextKey, contexts, isTouch, jQMethods, methods, resizeEvent, scrollEvent, waypointCounter, waypointKey, wp, wps;

    $w = $(window);
    isTouch = __indexOf.call(window, 'ontouchstart') >= 0;
    allWaypoints = {
      horizontal: {},
      vertical: {}
    };
    contextCounter = 1;
    contexts = {};
    contextKey = 'waypoints-context-id';
    resizeEvent = 'resize.waypoints';
    scrollEvent = 'scroll.waypoints';
    waypointCounter = 1;
    waypointKey = 'waypoints-waypoint-ids';
    wp = 'waypoint';
    wps = 'waypoints';
    Context = (function() {
      function Context($element) {
        var _this = this;

        this.$element = $element;
        this.element = $element[0];
        this.didResize = false;
        this.didScroll = false;
        this.id = 'context' + contextCounter++;
        this.oldScroll = {
          x: $element.scrollLeft(),
          y: $element.scrollTop()
        };
        this.waypoints = {
          horizontal: {},
          vertical: {}
        };
        this.element[contextKey] = this.id;
        contexts[this.id] = this;
        $element.bind(scrollEvent, function() {
          var scrollHandler;

          if (!(_this.didScroll || isTouch)) {
            _this.didScroll = true;
            scrollHandler = function() {
              _this.doScroll();
              return _this.didScroll = false;
            };
            return window.setTimeout(scrollHandler, $[wps].settings.scrollThrottle);
          }
        });
        $element.bind(resizeEvent, function() {
          var resizeHandler;

          if (!_this.didResize) {
            _this.didResize = true;
            resizeHandler = function() {
              $[wps]('refresh');
              return _this.didResize = false;
            };
            return window.setTimeout(resizeHandler, $[wps].settings.resizeThrottle);
          }
        });
      }

      Context.prototype.doScroll = function() {
        var axes,
          _this = this;

        axes = {
          horizontal: {
            newScroll: this.$element.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: 'right',
            backward: 'left'
          },
          vertical: {
            newScroll: this.$element.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: 'down',
            backward: 'up'
          }
        };
        if (isTouch && (!axes.vertical.oldScroll || !axes.vertical.newScroll)) {
          $[wps]('refresh');
        }
        $.each(axes, function(aKey, axis) {
          var direction, isForward, triggered;

          triggered = [];
          isForward = axis.newScroll > axis.oldScroll;
          direction = isForward ? axis.forward : axis.backward;
          $.each(_this.waypoints[aKey], function(wKey, waypoint) {
            var _ref, _ref1;

            if ((axis.oldScroll < (_ref = waypoint.offset) && _ref <= axis.newScroll)) {
              return triggered.push(waypoint);
            } else if ((axis.newScroll < (_ref1 = waypoint.offset) && _ref1 <= axis.oldScroll)) {
              return triggered.push(waypoint);
            }
          });
          triggered.sort(function(a, b) {
            return a.offset - b.offset;
          });
          if (!isForward) {
            triggered.reverse();
          }
          return $.each(triggered, function(i, waypoint) {
            if (waypoint.options.continuous || i === triggered.length - 1) {
              return waypoint.trigger([direction]);
            }
          });
        });
        return this.oldScroll = {
          x: axes.horizontal.newScroll,
          y: axes.vertical.newScroll
        };
      };

      Context.prototype.refresh = function() {
        var axes, cOffset, isWin,
          _this = this;

        isWin = $.isWindow(this.element);
        cOffset = this.$element.offset();
        this.doScroll();
        axes = {
          horizontal: {
            contextOffset: isWin ? 0 : cOffset.left,
            contextScroll: isWin ? 0 : this.oldScroll.x,
            contextDimension: this.$element.width(),
            oldScroll: this.oldScroll.x,
            forward: 'right',
            backward: 'left',
            offsetProp: 'left'
          },
          vertical: {
            contextOffset: isWin ? 0 : cOffset.top,
            contextScroll: isWin ? 0 : this.oldScroll.y,
            contextDimension: isWin ? $[wps]('viewportHeight') : this.$element.height(),
            oldScroll: this.oldScroll.y,
            forward: 'down',
            backward: 'up',
            offsetProp: 'top'
          }
        };
        return $.each(axes, function(aKey, axis) {
          return $.each(_this.waypoints[aKey], function(i, waypoint) {
            var adjustment, elementOffset, oldOffset, _ref, _ref1;

            adjustment = waypoint.options.offset;
            oldOffset = waypoint.offset;
            elementOffset = $.isWindow(waypoint.element) ? 0 : waypoint.$element.offset()[axis.offsetProp];
            if ($.isFunction(adjustment)) {
              adjustment = adjustment.apply(waypoint.element);
            } else if (typeof adjustment === 'string') {
              adjustment = parseFloat(adjustment);
              if (waypoint.options.offset.indexOf('%') > -1) {
                adjustment = Math.ceil(axis.contextDimension * adjustment / 100);
              }
            }
            waypoint.offset = elementOffset - axis.contextOffset + axis.contextScroll - adjustment;
            if ((waypoint.options.onlyOnScroll && (oldOffset != null)) || !waypoint.enabled) {
              return;
            }
            if (oldOffset !== null && (oldOffset < (_ref = axis.oldScroll) && _ref <= waypoint.offset)) {
              return waypoint.trigger([axis.backward]);
            } else if (oldOffset !== null && (oldOffset > (_ref1 = axis.oldScroll) && _ref1 >= waypoint.offset)) {
              return waypoint.trigger([axis.forward]);
            } else if (oldOffset === null && axis.oldScroll >= waypoint.offset) {
              return waypoint.trigger([axis.forward]);
            }
          });
        });
      };

      Context.prototype.checkEmpty = function() {
        if ($.isEmptyObject(this.waypoints.horizontal) && $.isEmptyObject(this.waypoints.vertical)) {
          this.$element.unbind([resizeEvent, scrollEvent].join(' '));
          return delete contexts[this.id];
        }
      };

      return Context;

    })();
    Waypoint = (function() {
      function Waypoint($element, context, options) {
        var idList, _ref;

        if (options.offset === 'bottom-in-view') {
          options.offset = function() {
            var contextHeight;

            contextHeight = $[wps]('viewportHeight');
            if (!$.isWindow(context.element)) {
              contextHeight = context.$element.height();
            }
            return contextHeight - $(this).outerHeight();
          };
        }
        this.$element = $element;
        this.element = $element[0];
        this.axis = options.horizontal ? 'horizontal' : 'vertical';
        this.callback = options.handler;
        this.context = context;
        this.enabled = options.enabled;
        this.id = 'waypoints' + waypointCounter++;
        this.offset = null;
        this.options = options;
        context.waypoints[this.axis][this.id] = this;
        allWaypoints[this.axis][this.id] = this;
        idList = (_ref = this.element[waypointKey]) != null ? _ref : [];
        idList.push(this.id);
        this.element[waypointKey] = idList;
      }

      Waypoint.prototype.trigger = function(args) {
        if (!this.enabled) {
          return;
        }
        if (this.callback != null) {
          this.callback.apply(this.element, args);
        }
        if (this.options.triggerOnce) {
          return this.destroy();
        }
      };

      Waypoint.prototype.disable = function() {
        return this.enabled = false;
      };

      Waypoint.prototype.enable = function() {
        this.context.refresh();
        return this.enabled = true;
      };

      Waypoint.prototype.destroy = function() {
        delete allWaypoints[this.axis][this.id];
        delete this.context.waypoints[this.axis][this.id];
        return this.context.checkEmpty();
      };

      Waypoint.getWaypointsByElement = function(element) {
        var all, ids;

        ids = element[waypointKey];
        if (!ids) {
          return [];
        }
        all = $.extend({}, allWaypoints.horizontal, allWaypoints.vertical);
        return $.map(ids, function(id) {
          return all[id];
        });
      };

      return Waypoint;

    })();
    methods = {
      init: function(f, options) {
        var _ref;

        options = $.extend({}, $.fn[wp].defaults, options);
        if ((_ref = options.handler) == null) {
          options.handler = f;
        }
        this.each(function() {
          var $this, context, contextElement, _ref1;

          $this = $(this);
          contextElement = (_ref1 = options.context) != null ? _ref1 : $.fn[wp].defaults.context;
          if (!$.isWindow(contextElement)) {
            contextElement = $this.closest(contextElement);
          }
          contextElement = $(contextElement);
          context = contexts[contextElement[0][contextKey]];
          if (!context) {
            context = new Context(contextElement);
          }
          return new Waypoint($this, context, options);
        });
        $[wps]('refresh');
        return this;
      },
      disable: function() {
        return methods._invoke.call(this, 'disable');
      },
      enable: function() {
        return methods._invoke.call(this, 'enable');
      },
      destroy: function() {
        return methods._invoke.call(this, 'destroy');
      },
      prev: function(axis, selector) {
        return methods._traverse.call(this, axis, selector, function(stack, index, waypoints) {
          if (index > 0) {
            return stack.push(waypoints[index - 1]);
          }
        });
      },
      next: function(axis, selector) {
        return methods._traverse.call(this, axis, selector, function(stack, index, waypoints) {
          if (index < waypoints.length - 1) {
            return stack.push(waypoints[index + 1]);
          }
        });
      },
      _traverse: function(axis, selector, push) {
        var stack, waypoints;

        if (axis == null) {
          axis = 'vertical';
        }
        if (selector == null) {
          selector = window;
        }
        waypoints = jQMethods.aggregate(selector);
        stack = [];
        this.each(function() {
          var index;

          index = $.inArray(this, waypoints[axis]);
          return push(stack, index, waypoints[axis]);
        });
        return this.pushStack(stack);
      },
      _invoke: function(method) {
        this.each(function() {
          var waypoints;

          waypoints = Waypoint.getWaypointsByElement(this);
          return $.each(waypoints, function(i, waypoint) {
            waypoint[method]();
            return true;
          });
        });
        return this;
      }
    };
    $.fn[wp] = function() {
      var args, method;

      method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (methods[method]) {
        return methods[method].apply(this, args);
      } else if ($.isFunction(method)) {
        return methods.init.apply(this, arguments);
      } else if ($.isPlainObject(method)) {
        return methods.init.apply(this, [null, method]);
      } else if (!method) {
        return $.error("jQuery Waypoints needs a callback function or handler option.");
      } else {
        return $.error("The " + method + " method does not exist in jQuery Waypoints.");
      }
    };
    $.fn[wp].defaults = {
      context: window,
      continuous: true,
      enabled: true,
      horizontal: false,
      offset: 0,
      triggerOnce: false
    };
    jQMethods = {
      refresh: function() {
        return $.each(contexts, function(i, context) {
          return context.refresh();
        });
      },
      viewportHeight: function() {
        var _ref;

        return (_ref = window.innerHeight) != null ? _ref : $w.height();
      },
      aggregate: function(contextSelector) {
        var collection, waypoints, _ref;

        collection = allWaypoints;
        if (contextSelector) {
          collection = (_ref = contexts[$(contextSelector)[0][contextKey]]) != null ? _ref.waypoints : void 0;
        }
        if (!collection) {
          return [];
        }
        waypoints = {
          horizontal: [],
          vertical: []
        };
        $.each(waypoints, function(axis, arr) {
          $.each(collection[axis], function(key, waypoint) {
            return arr.push(waypoint);
          });
          arr.sort(function(a, b) {
            return a.offset - b.offset;
          });
          waypoints[axis] = $.map(arr, function(waypoint) {
            return waypoint.element;
          });
          return waypoints[axis] = $.unique(waypoints[axis]);
        });
        return waypoints;
      },
      above: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'vertical', function(context, waypoint) {
          return waypoint.offset <= context.oldScroll.y;
        });
      },
      below: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'vertical', function(context, waypoint) {
          return waypoint.offset > context.oldScroll.y;
        });
      },
      left: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'horizontal', function(context, waypoint) {
          return waypoint.offset <= context.oldScroll.x;
        });
      },
      right: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'horizontal', function(context, waypoint) {
          return waypoint.offset > context.oldScroll.x;
        });
      },
      enable: function() {
        return jQMethods._invoke('enable');
      },
      disable: function() {
        return jQMethods._invoke('disable');
      },
      destroy: function() {
        return jQMethods._invoke('destroy');
      },
      extendFn: function(methodName, f) {
        return methods[methodName] = f;
      },
      _invoke: function(method) {
        var waypoints;

        waypoints = $.extend({}, allWaypoints.vertical, allWaypoints.horizontal);
        return $.each(waypoints, function(key, waypoint) {
          waypoint[method]();
          return true;
        });
      },
      _filter: function(selector, axis, test) {
        var context, waypoints;

        context = contexts[$(selector)[0][contextKey]];
        if (!context) {
          return [];
        }
        waypoints = [];
        $.each(context.waypoints[axis], function(i, waypoint) {
          if (test(context, waypoint)) {
            return waypoints.push(waypoint);
          }
        });
        waypoints.sort(function(a, b) {
          return a.offset - b.offset;
        });
        return $.map(waypoints, function(waypoint) {
          return waypoint.element;
        });
      }
    };
    $[wps] = function() {
      var args, method;

      method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (jQMethods[method]) {
        return jQMethods[method].apply(null, args);
      } else {
        return jQMethods.aggregate.call(null, method);
      }
    };
    $[wps].settings = {
      resizeThrottle: 100,
      scrollThrottle: 30
    };
    return $w.on('load.waypoints', function() {
      return $[wps]('refresh');
    });
  });

}).call(this);
;/*
 * mailchimp.js
 *
 */


 var fnames = new Array();var ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='MMERGE3';ftypes[3]='phone';
 try {
     var jqueryLoaded=jQuery;
     jqueryLoaded=true;
 } catch(err) {
     var jqueryLoaded=false;
 }
 var head= document.getElementsByTagName('head')[0];
 if (!jqueryLoaded) {
     var script = document.createElement('script');
     script.type = 'text/javascript';
     script.src = '//ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js';
     head.appendChild(script);
     if (script.readyState && script.onload!==null){
         script.onreadystatechange= function () {
               if (this.readyState == 'complete') mce_preload_check();
         }
     }
 }

 var err_style = '';
 try{
     err_style = mc_custom_error_style;
 } catch(e){
     err_style = '#mc_embed_signup input.mce_inline_error{border-color:#6B0505;} #mc_embed_signup div.mce_inline_error{margin: 0 0 1em 0; padding: 5px 10px; background-color:#6B0505; font-weight: bold; z-index: 1; color:#fff;}';
 }
 var head= document.getElementsByTagName('head')[0];
 var style= document.createElement('style');
 style.type= 'text/css';
 if (style.styleSheet) {
   style.styleSheet.cssText = err_style;
 } else {
   style.appendChild(document.createTextNode(err_style));
 }
 head.appendChild(style);
 setTimeout('mce_preload_check();', 250);

 var mce_preload_checks = 0;
 function mce_preload_check(){
     if (mce_preload_checks>40) return;
     mce_preload_checks++;
     try {
         var jqueryLoaded=jQuery;
     } catch(err) {
         setTimeout('mce_preload_check();', 250);
         return;
     }
     var script = document.createElement('script');
     script.type = 'text/javascript';
     script.src = 'http://downloads.mailchimp.com/js/jquery.form-n-validate.js';
     head.appendChild(script);
     try {
         var validatorLoaded=jQuery("#fake-form").validate({});
     } catch(err) {
         setTimeout('mce_preload_check();', 250);
         return;
     }
     mce_init_form();
 }
 function mce_init_form(){
     jQuery(document).ready( function($) {
       var options = { errorClass: 'mce_inline_error', errorElement: 'div', onkeyup: function(){}, onfocusout:function(){}, onblur:function(){}  };
       var mce_validator = $("#mc-embedded-subscribe-form").validate(options);
       $("#mc-embedded-subscribe-form").unbind('submit');//remove the validator so we can get into beforeSubmit on the ajaxform, which then calls the validator
       options = { url: 'http://aileenandmanik.us2.list-manage.com/subscribe/post-json?u=c9b2c969c35a3d185791eba25&id=77c020e7ae&c=?', type: 'GET', dataType: 'json', contentType: "application/json; charset=utf-8",
                     beforeSubmit: function(){
                         $('#mce_tmp_error_msg').remove();
                         $('.datefield','#mc_embed_signup').each(
                             function(){
                                 var txt = 'filled';
                                 var fields = new Array();
                                 var i = 0;
                                 $(':text', this).each(
                                     function(){
                                         fields[i] = this;
                                         i++;
                                     });
                                 $(':hidden', this).each(
                                     function(){
                                         var bday = false;
                                         if (fields.length == 2){
                                             bday = true;
                                             fields[2] = {'value':1970};//trick birthdays into having years
                                         }
                                       if ( fields[0].value=='MM' && fields[1].value=='DD' && (fields[2].value=='YYYY' || (bday && fields[2].value==1970) ) ){
                                         this.value = '';
                       } else if ( fields[0].value=='' && fields[1].value=='' && (fields[2].value=='' || (bday && fields[2].value==1970) ) ){
                                         this.value = '';
                       } else {
                           if (/\[day\]/.test(fields[0].name)){
                                               this.value = fields[1].value+'/'+fields[0].value+'/'+fields[2].value;
                           } else {
                                               this.value = fields[0].value+'/'+fields[1].value+'/'+fields[2].value;
                                           }
                                       }
                                     });
                             });
                         $('.phonefield-us','#mc_embed_signup').each(
                             function(){
                                 var fields = new Array();
                                 var i = 0;
                                 $(':text', this).each(
                                     function(){
                                         fields[i] = this;
                                         i++;
                                     });
                                 $(':hidden', this).each(
                                     function(){
                                         if ( fields[0].value.length != 3 || fields[1].value.length!=3 || fields[2].value.length!=4 ){
                                         this.value = '';
                       } else {
                           this.value = 'filled';
                                       }
                                     });
                             });
                         return mce_validator.form();
                     },
                     success: mce_success_cb
                 };
       $('#mc-embedded-subscribe-form').ajaxForm(options);


     });
 }
 function mce_success_cb(resp){
     $('#mce-success-response').hide();
     $('#mce-error-response').hide();
     if (resp.result=="success"){
         $('#mce-'+resp.result+'-response').show();
         $('#mce-'+resp.result+'-response').html(resp.msg);
         $('#mc-embedded-subscribe-form').each(function(){
             this.reset();
       });
     } else {
         var index = -1;
         var msg;
         try {
             var parts = resp.msg.split(' - ',2);
             if (parts[1]==undefined){
                 msg = resp.msg;
             } else {
                 i = parseInt(parts[0]);
                 if (i.toString() == parts[0]){
                     index = parts[0];
                     msg = parts[1];
                 } else {
                     index = -1;
                     msg = resp.msg;
                 }
             }
         } catch(e){
             index = -1;
             msg = resp.msg;
         }
         try{
             if (index== -1){
                 $('#mce-'+resp.result+'-response').show();
                 $('#mce-'+resp.result+'-response').html(msg);
             } else {
                 err_id = 'mce_tmp_error_msg';
                 html = '<div id="'+err_id+'" style="'+err_style+'"> '+msg+'</div>';

                 var input_id = '#mc_embed_signup';
                 var f = $(input_id);
                 if (ftypes[index]=='address'){
                     input_id = '#mce-'+fnames[index]+'-addr1';
                     f = $(input_id).parent().parent().get(0);
                 } else if (ftypes[index]=='date'){
                     input_id = '#mce-'+fnames[index]+'-month';
                     f = $(input_id).parent().parent().get(0);
                 } else {
                     input_id = '#mce-'+fnames[index];
                     f = $().parent(input_id).get(0);
                 }
                 if (f){
                     $(f).append(html);
                     $(input_id).focus();
                 } else {
                     $('#mce-'+resp.result+'-response').show();
                     $('#mce-'+resp.result+'-response').html(msg);
                 }
             }
         } catch(e){
             $('#mce-'+resp.result+'-response').show();
             $('#mce-'+resp.result+'-response').html(msg);
         }
     }
 }

;/*
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

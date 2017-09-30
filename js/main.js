(function($) {
                //var intro_logo = $(".intro-content .logo-container");
                //var header_logo = $("header .logo-container");
                var header_logo = $("#main_content .logo-container");
                function isElementInView(element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();
 
        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
    //var navWrap = $("#main-nav-wrap");
                var navWrap = $(".navbar");
    $(window).on('scroll', function() {
 
                                // if (!isElementInView(intro_logo, true)) {
                                //            intro_logo.css("visibility", "hidden");
                                //            // header_logo.css("visibility", "initial");
                                //            header_logo.fadeIn();
                                // } else {
                                //            // header_logo.css("visibility", "hidden");
                                //            header_logo.fadeOut();
                                //            intro_logo.css("visibility", "initial");
 
                                // }
 
 
                                var y = $(window).scrollTop(),
                                    //topBar = $('header');
                                                topBar = $('nav');
    
                                //var isMobileMenu = toggleButton.is(':visible');
 
                   if (y > 1) {
                      //topBar.addClass('sticky');
                                 
                                  topBar.addClass('fixed-top');
                      navWrap.css("display", "initial");
 
                      // header_logo.addClass('logo-sticky');
                                  header_logo.css({
                                                opacity : 1,
                                                WebkitTransition : 'opacity 0.5s ease-in-out',
               MozTransition    : 'opacity 0.5s ease-in-out',
               MsTransition     : 'opacity 0.5s ease-in-out',
               OTransition      : 'opacity 0.5s ease-in-out',
               transition       : 'opacity 0.5s ease-in-out'
                                  });
 
                   }
      else {
         //topBar.removeClass('fixed-top');
         navWrap.addClass('logo-container');
 
         // header_logo.removeClass('logo-sticky');
                                  // header_logo.css("visibility", "hidden");
                                  header_logo.css({
                                                opacity : 0,
                                                WebkitTransition : 'opacity 0.3s ease-in-out',
               MozTransition    : 'opacity 0.3s ease-in-out',
               MsTransition     : 'opacity 0.3s ease-in-out',
               OTransition      : 'opacity 0.3s ease-in-out',
               transition       : 'opacity 0.3s ease-in-out'
                                  }); 
      }
   
                });
})(jQuery);
// $('.smoothscroll').on('click', function (e) {
                              
                                // e.preventDefault();
 
                                // var target = this.hash,
                // $target = $(target);
                // var offset = $target.offset().top;
                // if (this.getAttribute("data-location") === "center") {
                                // // console.log("to position at center");
                                // var elHeight = $target.height();
                                // var windowHeight = $(window).height();
                                // offset = offset - ((windowHeight / 2) - (elHeight / 2));
                // }
                // $('html, body').stop().animate({
                               // 'scrollTop': offset
               // }, 800, 'swing');
                // }); 
  
  
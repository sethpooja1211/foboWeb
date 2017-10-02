(function($) { 
      $('.smoothscroll').on('click', function (e) {                      
           e.preventDefault();
           var target = this.hash,
           $target = $(target);
           var offset = $target.offset().top;
           if (this.getAttribute("data-location") === "center") {
                          // console.log("to position at center");
                         var elHeight = $target.height();
                         var windowHeight = $(window).height();
                         offset = offset - ((windowHeight / 2) - (elHeight / 2));
           }
           $('html, body').stop(true, true).animate({
                  'scrollTop': offset
            }, 800, 'swing');
      }); 
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
        var y = $(window).scrollTop() ,
            //topBar = $('header');
            topBar = $('nav');
         if (y > 670) {
            topBar.addClass('fixed-top');
            header_logo.removeClass('bg-dark');
            header_logo.fadeIn(0.3,'slow').addClass('bg_trans');
            navWrap.css("display", "initial");
            header_logo.css({
                WebkitTransition : 'opacity 0.5s ease-in-out',
                MozTransition    : 'opacity 0.5s ease-in-out',
                MsTransition     : 'opacity 0.5s ease-in-out',
                OTransition      : 'opacity 0.5s ease-in-out',
                transition       : 'opacity 0.5s ease-in-out',

            });

         }
        else {
           navWrap.addClass('logo-container');
           header_logo.removeClass('bg_trans');
            header_logo.addClass('bg-dark');
            header_logo.css({
                  WebkitTransition : 'opacity 0.3s ease-in-out',
                  MozTransition    : 'opacity 0.3s ease-in-out',
                  MsTransition     : 'opacity 0.3s ease-in-out',
                  OTransition      : 'opacity 0.3s ease-in-out',
                  transition       : 'opacity 0.3s ease-in-out'
                  }); 
        }
  });
})(jQuery);

  
  
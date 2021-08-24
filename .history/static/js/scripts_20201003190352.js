/* Template: Juno - Multipurpose Landing Page Pack
   Author: InovatikThemes
   Created: Mar 2019
   Description: Custom JS file
*/

(function ($) {
  "use strict";

  /* Navbar Scripts */
  // jQuery to collapse the navbar on scroll
  $(window).on("scroll load", function () {
    if ($(".navbar").offset().top > 60) {
      $(".fixed-top").addClass("top-nav-collapse");
    } else {
      $(".fixed-top").removeClass("top-nav-collapse");
    }
  });
})(jQuery);

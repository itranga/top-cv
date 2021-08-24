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

  // closes the responsive menu on menu item click
  $(".navbar-nav li a").on("click", function (event) {
    if (!$(this).parent().hasClass("dropdown"))
      $(".navbar-collapse").collapse("hide");
  });
})(jQuery);

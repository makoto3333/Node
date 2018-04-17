 $(function () {
   $('#portfolio').click(function () {
     $('#product-portfolio').toggle();
   });
   $('#phpmyweb').click(function () {
     $('#product-phpmyweb').toggle();
   });
 });
 $('head').append('<style>body{display:none;}');
 $(window).on("load", function () {
   $('body').delay(600).fadeIn("slow");
 });

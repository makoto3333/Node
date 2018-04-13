 $(function () {
   $('#portfolio').click(function () {
     $('#product-portfolio').toggle();
   });
 });
 $('head').append('<style>body{display:none;}');
 $(window).on("load", function () {
   $('body').delay(600).fadeIn("slow");
 });

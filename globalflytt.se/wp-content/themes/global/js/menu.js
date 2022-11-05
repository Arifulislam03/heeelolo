$('.menu-toggle').click(function() {

  $('ul#menu-main').toggleClass('opening');
  $(this).toggleClass('open');

})

$('.menu-item-has-children').click(function() {
	 $(this).find(".sub-menu").toggleClass('opening_chiled');
	 $(this).toggleClass('opening_arrow');
})
 
window.onscroll = function() {myFunction()};
var header = document.getElementById("header");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}




 
$(document).ready(function(){
	$(".slide_to_link").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top-130;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});
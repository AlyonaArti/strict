$(document).ready(function() {
	$('.menu-btn').click(function() {
		if ($('nav').hasClass('active')) {
			$('.menu-btn').removeClass('active');
			$('nav').removeClass('active');
			$('body').removeClass('overflow');
		} else {
			$('.menu-btn').addClass('active');
			$('nav').addClass('active');
			$('body').addClass('overflow');

		}
	});
	$('.fa-angle-down').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
	        scrollTop: $('.after-banner').offset().top
	    }, 500);
	});
	$('.home').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
	        scrollTop: $('.banner').offset().top
	    }, 500);
	});
	$('.about').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
	        scrollTop: $('.after-banner').offset().top
	    }, 500);
	});
	$('.news').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
	        scrollTop: $('.galery').offset().top
	    }, 500);
	});
	$('.contact').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
	        scrollTop: $('.stay-with-us').offset().top
	    }, 500);
	});
});
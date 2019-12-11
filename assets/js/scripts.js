/* global $, alert, console*/

/* ---------------------------------------

Template Name: Mortale 
Description: Responsive HTML5 / CSS3 OnePage Portfolio-Resume Template
Version: 1.0
Author: Ahmed Beheiry

=>  Table of Content  <=

1 - Loading Page
2 - Hide Nav menu after clicking on a link
3 - Move to section onclick on navbar link
4 - Launch To Top Button when scroll
5 - Go To Top onclick on toTop Button
6 - Start Skills bars animation in About-Me Section 
7 - Start numbers animate at My Progress Section 
8 - Start Owl Carousel in Testimonials Section 
9 - Start Owl Carousel in Clients Section
10 - Scroll Reveal

--------------------------------------- */

(function($) {

	"use strict";

	/* ---------------------------------------------------
		1 - Loading Page
	----------------------------------------------------- */	
	$(window).on("load", function() {
		var loadingPage = $(".loading-page");
		loadingPage.delay(1000).fadeOut(500, function(){
			loadingPage.remove();	
		});
	});

	/* ---------------------------------------------------
		2 - Hide Nav menu after clicking on a link 
	----------------------------------------------------- */
	$(".nav a").on("click", function() {
		$("#navbar-collaps").collapse("hide");
	});

	/* ---------------------------------------------------------
		3 - Move to section onclick on navbar link 
	----------------------------------------------------- */
	var fixedNav = $('nav.navbar-fixed-top'),
		fixedHT = fixedNav.height();
	$("a.scroll-link").on("click", function(e) {
		e.preventDefault();
		var target = $($(this).attr("href")),
			navHT;
		// Making sure if the navbar is fixed on top or not
		if(fixedNav.length) {
			navHT = fixedHT;  // Fixed navbar height
		} else {
			navHT = 0;
		}
		if (target) {
			$("html, body").animate({
				scrollTop: target.offset().top - navHT + 1
			}, 1000);
		}
	});

	/* ---------------------------------------------------
		4 - Launch To Top Button when scroll 
	----------------------------------------------------- */
	var toTopButton = $("#to-top");
	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 400) {
			toTopButton.addClass("appeared");
		} else {
			toTopButton.removeClass("appeared");
		}
	});

	/* ---------------------------------------------------
		5 - Go To Top onclick on toTop Button
	----------------------------------------------------- */
	toTopButton.on("click", function() {
	$("html, body").animate({
			scrollTop: 0
		}, 1500);
	});

	/* ---------------------------------------------------
		6 - Start Skills bars animation in About-Me Section 
	----------------------------------------------------- */
	var bar = $("#skills .progress-bar");
	bar.each(function() {
		$(this).appear(function() {
			$(this).css("width", function() {
				return $(this).attr("data-width");
			}).children(".percent").css({
				'-webkit-transform': 'scale(1)',
				'-moz-transform': 'scale(1)',
				'-ms-transform': 'scale(1)',
				'-o-transform': 'scale(1)',
				'transform': 'scale(1)'
			});
		});
	});
	/* ---------------------------------------------------
		7 - Start numbers animate at My Progress Section 
	----------------------------------------------------- */
	$("#progress .progress-fact").appear(function() {
		$(".timer").countTo();
	},{accX: 0, accY: -100});

	$(document).ready(function() {
		/* ---------------------------------------------------
			8 - Start Owl Carousel in Testimonials Section 
		----------------------------------------------------- */
		$("#testimonials .owl-carousel").owlCarousel({
			animateOut: "slideOutDown",
			animateIn: "slideInUp",
			items: 1,
			margin:30,
			stagePadding:30,
			smartSpeed: 450,
			loop: true,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			nav: true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			dots: true,
			dotsEach: true
		});

		/* ---------------------------------------------------
			9 - Start Owl Carousel in Clients Section 
		----------------------------------------------------- */
		$("#clients .owl-carousel").owlCarousel({
			loop: true,
			responsiveClass: true,
			margin: 30,
			stagePadding:30,
			nav: false,
			dots: false,
			dotsEach: false,
			autoplay: true,
			autoplayTimeout: 1500,
			autoplayHoverPause: true,
			responsive: {
				0: { items: 1	},
				480: { items: 3 },
				768: { items: 4 },
				1000: { items: 6 }
			}
		});
	});
})(jQuery);

/* ---------------------------------------------------
	10 - Scroll Reveal
----------------------------------------------------- */
// default scroll reveal settings
window.sr = ScrollReveal({
	distance: '100%',
	scale: 1,
	viewFactor: 0.25,
	duration: 1000
});
sr.reveal('.scroll-reveal');
// Animate from right to left
sr.reveal('.scroll-reveal-right', {origin: 'right'});
// Animate from left to right
sr.reveal('.scroll-reveal-left', {origin: 'left'});
// Animation with delay
sr.reveal('.scroll-reveal-delay', {delay: 200});
// Animation with only fade
sr.reveal('.scroll-reveal-fade', {distance: '0'});
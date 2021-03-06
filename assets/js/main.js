$('body').addClass('is-loading');

function on_load() {
	window.setTimeout(function() {
		$('body').removeClass('is-loading');
	}, 100);
}

function on_resize() {
	document.querySelector(':root').style.setProperty('--vh', window.innerHeight/100 + 'px');
}

window.addEventListener
	? window.addEventListener("load", on_load, false)
	: window.attachEvent && window.attachEvent("onload", on_load);

window.addEventListener
	? window.addEventListener("resize", on_resize, false)
	: window.attachEvent && window.attachEvent("resize", on_resize);

on_resize();

(function($) {

	skel
		.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$banner = $('#banner'),
			$header = $('#header');

		// Mobile?
			if (skel.vars.mobile) {
				$body.addClass('is-mobile');
			} else {
				skel
					.on('-medium !medium', function() {
						$body.removeClass('is-mobile');
					})
					.on('+medium', function() {
						$body.addClass('is-mobile');
					});
			}

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly')
				.scrolly({
					speed: 1000,
					offset: $header.outerHeight()
				});

			$('.scrolly-slow')
				.scrolly({
					speed: 2000,
					offset: $header.outerHeight()
				});


		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				window.addEventListener('resize', () => { 
					$window.trigger('scroll');
				});

				$banner.scrollex({
					bottom:		$header.outerHeight() + 1,
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			}
		
		// Go Back.
			var backButtons = document.getElementsByClassName('go-back');
			for (var i = 0; i < backButtons.length; i++)
			{
				backButtons[i].addEventListener('click', function() {
					history.back();
				})
			}
	});

})(jQuery);

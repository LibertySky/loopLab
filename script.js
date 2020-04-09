// Init srollSpy
$('body').scrollspy({ target: '#main-nav' });

// Smooth scrolling
$('#main-nav a').on('click', function (event) {
	event.preventDefault();
	const hash = this.hash;
	$('html, body').animate(
		{
			scrollTop: $(hash).offset().top,
		},
		800,
		function () {
			window.location.hash = hash;
		}
	);
});

// Get the current year for the copyright with jQuery
$('#year').text(new Date().getFullYear());

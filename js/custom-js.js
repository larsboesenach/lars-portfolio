
// Input here your own custom javascript stuff ;)

$(document).ready(function() {
	$('.Logo-wrap').mouseover(function() {
		$(this).addClass('hover'),
		$('.bottombar').addClass('move');
	});

	$('.Logo-wrap').mouseout(function() {
		$(this).removeClass('hover'),
		$('.bottombar').removeClass('move');
	});
});

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

	$('.Logo-wrap').click(function() {
		$(this).addClass('clicked'),
		$('.bottombar').addClass('move-back');
	});

// - - - - - - - - -  
// - Logo effects  - 
// - - - - - - - - - 

//	botscore-1
	$('.botscore-1').mouseover(function() {
		$('.botscore-').addClass('hover-1');
	});

	$('.botscore-1').mouseout(function() {
		$('.botscore-').removeClass('hover-1');
	});

//	botscore-2
	$('.botscore-2').mouseover(function() {
		$('.botscore-').addClass('hover-2');
	});

	$('.botscore-2').mouseout(function() {
		$('.botscore-').removeClass('hover-2');
	});

//	botscore-3
	$('.botscore-3').mouseover(function() {
		$('.botscore-').addClass('hover-3');
	});

	$('.botscore-3').mouseout(function() {
		$('.botscore-').removeClass('hover-3');
	});

});
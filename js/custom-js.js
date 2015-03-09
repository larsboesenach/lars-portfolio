
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

// - - - - - - - - - - - - -
	// this js trick delays the addClass function
	$('#cheers-wrap').delay(800).queue(function(){
		$(this).toggleClass('popOut');
		$(this).dequeue();
	});


	$('#StopBuggyLogoHover').delay(1000).queue(function(){
		$(this).toggleClass('allowHover');
		$(this).dequeue();
	});
	
});

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

	$('#WhoIAm').mouseover(function() {
		$('#WhoIAm-popUp').addClass('activate');
	});

	$('#WhoIAm').mouseout(function() {
		$('#WhoIAm-popUp').removeClass('activate');
	});


	$('#WhatIDo').mouseover(function() {
		$('#WhatIDo-popUp').addClass('activate');
	});

	$('#WhatIDo').mouseout(function() {
		$('#WhatIDo-popUp').removeClass('activate');
	});

// - -

	$('#WhatIDo').mouseover(function() {
		$('#cheers-wrap').removeClass('popOut');
	});

	$('#WhatIDo').mouseout(function() {
		$('#cheers-wrap').addClass('popOut');
	});

	$('#WhoIAm').mouseover(function() {
		$('#cheers-wrap').removeClass('popOut');
	});

	$('#WhoIAm').mouseout(function() {
		$('#cheers-wrap').addClass('popOut');
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
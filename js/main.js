$(document).ready(function($) {
	$('.free_text').click(function() {
		$('.modalwrap').fadeIn();
	});	

	$('.popup-fade').click(function(e) {
		$('.modalwrap').fadeOut();
	});
});
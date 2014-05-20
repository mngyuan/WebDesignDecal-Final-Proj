$(document).ready( function() {
	$('#nav-create').click( function() {
		$('#modal-overlay').show();
	});
	$('#modal-overlay').click( function() {
		$(this).hide();
	});

	$('#modal-box').click( function(event) {
		event.stopPropagation();
	});

	$('.createbutton').click( function() {
		$('#modal-overlay').hide();
	});
});
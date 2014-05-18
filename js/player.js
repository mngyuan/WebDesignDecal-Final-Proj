$(document).ready( function() {
	$('#nav-create').click( function() {
		$('#modal-overlay').show();
	});
	$('#modal-overlay').click( function() {
		$(this).hide();
	});

	
});
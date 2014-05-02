$( document ).ready( function() {
	var rowcount = $(".songrows").children().length;
	$(".addbutton").click( function() {
		rowcount += 1;
		$(".songrows").append($('    <div class="songrow">\
			      <div class="songrow-handle"><a class="handle"></a></div>\
			      <div class="songrow-thumbnail">\
			        <div class="imagewrap">\
			          <img src="i/thumb' + rowcount + '.jpg">\
			        </div>\
			      </div>\
			      <div class="songrow-text">\
			        <div class="songrow-textwrap">\
			          <h1>video URL</h1>\
			          <input type="text" />\
			        </div>\
			      </div>\
			      <div class="songrow-delete">\
			        <div class="deletebutton"></div>\
			      </div>\
			    </div>').animate({height: '100px', opacity: 100}, 300)
			);
		$(".deletebutton").click( function() {
			$(this).closest(".songrow").animate({height: 0, opacity: 0}, 300, function() { $(this).remove() });
		});
	});

	$(".deletebutton").click( function() {
		$(this).closest(".songrow").animate({height: 0, opacity: 0}, 300, function() { $(this).remove() });
	});
});
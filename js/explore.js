$( document ).ready( function() {
	$("#carousel").hover( function() {
		$("#leftarrowwrap").show(150);
		$("#rightarrowwrap").show(150);
	}, function() {
		$("#leftarrowwrap").hide(150);
		$("#rightarrowwrap").hide(150);
	});

	var numpages = $("#carouselcontent").children().length / 6;
	var curpage = 0;
	$("#rightarrow").click( function() {
		if(curpage < numpages) {
			$("#carouselcontent").animate({marginLeft: '-=720px'}, 350);
			curpage += 1;
		}
	});
	$("#leftarrow").click( function() {
		if(curpage > 0) {
			$("#carouselcontent").animate({marginLeft: '+=720px'}, 350);
			curpage -= 1;
		}
	});

	// $(".playbutton").hover( function(event) {
	// 	$(event.target).closest(".playtriangle").removeClass("hide").addClass("show");
	// }, function() {
	// 	// $(this).closest(".playtriangle").removeClass("show").addClass("hide");
	// });

	var showButton = function() {
		$(this).children(".playbutton").animate({opacity: 100}, 25);
	};
	var hideButton = function() {
		$(this).children(".playbutton").animate({opacity: 0}, 25);
	};
	$(".top").hover(showButton, hideButton);
	$(".bottom").hover(showButton, hideButton);
});
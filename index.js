// $(function() {
// 	var animationName = 'animated shake';
// 	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
// 	$('a.dogPicture1 || a.dogPicture2 || a.dogPicture3').click(function() {
// 		$('a.dogPicture1 || a.dogPicture2 || a.dogPicture3').addClass(animationName).one(animationEnd, function() {
// 			$(this).removeClass(animationName);
// 		});

// 	});
// });

$(function() {
	var animationName = 'animated bounce';
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$('a.dogPicture1').click(function() {
		$('a.dogPicture1').addClass(animationName).one(animationEnd, function() {
			$(this).removeClass(animationName);
		});

	});
});

$(function() {
	var animationName = 'animated swing';
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$('a.dogPicture2').click(function() {
		$('a.dogPicture2').addClass(animationName).one(animationEnd, function() {
			$(this).removeClass(animationName);
		});

	});
});

$(function() {
	var animationName = 'animated shake';
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$('a.dogPicture3').click(function() {
		$('a.dogPicture3').addClass(animationName).one(animationEnd, function() {
			$(this).removeClass(animationName);
		});

	});
});


$(function() {
	var animationName = 'animated tada';
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$('a.dogPicture4').click(function() {
		$('a.dogPicture4').addClass(animationName).one(animationEnd, function() {
			$(this).removeClass(animationName);
		});

	});
});

$(function() {
	var animationName = 'animated flash';
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$('a.dogPicture5').click(function() {
		$('a.dogPicture5').addClass(animationName).one(animationEnd, function() {
			$(this).removeClass(animationName);
		});

	});
});





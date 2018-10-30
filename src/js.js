$(document).ready(function(){
	$('#menu > li > ul').css({
		'display':'none',
		'left':'auto'
	});
	$('#menu li a').click(function(){
		$('#menu ul li:last').append('<li><a href="#">Item 1</a></li>');
		if ($(this).parent().find('ul').is(':hidden'))
			 $(this).parent().find('ul').slideDown();
		else
			 $(this).parent().find('ul').slideUp();
		console.log('yikers');
	});
});


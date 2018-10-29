$(document).ready(function(){
	$('#menu > li > ul').css({
		'display':'none',
		'left':'auto'
	});
	$('#menu li a').click(function(){
		if ($(this).parent().find('ul').is(':hidden'))
			 $(this).parent().find('ul').stop(true, true).slideDown();
		else
			 $(this).parent().find('ul').stop(true, true).slideUp();
		console.log('yikers');
	});
});
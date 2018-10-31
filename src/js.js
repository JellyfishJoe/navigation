/*
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
*/

/*
//This is retarded but kinda cool
$(document).ready(function(){

	$('.depth0 li').click(function(){
		$('.depth0 li').append('<ul><li>Cool</li></ul>');
	});

});
*/

$(document).ready(function(){

	var classNames = [];

	$("li").each(function(){
		var depth = 'depth' + ($(this).parents("li").length) + 'li';
		var siblings = $(this).siblings().length;
     	$(this).addClass(depth); 
     	classNames.push(depth)
     	var siblings.
	});

	console.log(`siblings = ${siblings}`);

	console.log(classNames);

	console.log()

	$('a').click(function(){

		console.log($(this).parents('li').length - 1);

		if($(this).hasClass(classNames[0])){
			//console.log(true);
		}
		/*
		$('.depth0li').append('<ul><li>Cool</li></ul>');
		$('.depth0li ul').addClass('depth1');
		$('.depth0li ul li').addClass('depth1li');
		*/
	});

});
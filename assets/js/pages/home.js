define(['bootstrap','jquery'],function(bootstrap,$){
	//TOOLTIPS
	$('.tooltip-title').tooltip();

	//POPUP MODAL WINDOWS
	$('.modal').modal('hide');

	// HTML5 PLACEHOLDERS
	$('[placeholder]').focus(function() {
	  var input = $(this);
	  if (input.val() == input.attr('placeholder')) {
	    input.val('');
	    input.removeClass('placeholder');
	  }
	}).blur(function() {
	  var input = $(this);
	  if (input.val() == '' || input.val() == input.attr('placeholder')) {
	    input.addClass('placeholder');
	    input.val(input.attr('placeholder'));
	  }
	}).blur();

	// FORM ACTION ON SUBMIT FOR PLACEHOLDERS	
	$('form').submit(function() {
	  var flag = false;

	  $(this).find('[placeholder]').each(function() {
	    var input = $(this);	     

	    if (input.val() == input.attr('placeholder')) {	    	
	      input.val('');
	      input.attr('invalid','invalid');
	      flag = true;
	    }
	  });
	  
	  if(flag==true){
	  	return false;
	  }

	});

	// FAVOURITE BLOCK
	$(".favourite").click(function(){
		if($(this).hasClass("glyphicon-star")){
			$(this).removeClass("glyphicon-star");
			$(this).addClass("glyphicon-star-empty");
			$(this).attr("data-original-title","Mark as Favourite");
		}
		else{
			$(this).removeClass("glyphicon-star-empty");
			$(this).addClass("glyphicon-star");
			$(this).attr("data-original-title","Favourite");
		}
	});
});
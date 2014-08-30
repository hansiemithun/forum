

/*define(['jquery','bootstrap'],function($,b){
   $("#cmdLogin").click(function(){
    validate();
   });
});
*/
function userFormsToggle(){
	$(".userForm").click(function(){
		$(".userFormMain").hide("fast");
		//alert($(this).attr("id"));
		if($(this).attr("id")=="forgot"){
			$("#forgotForm").show("fast");
		}
		else{
			$("#loginForm").show("fast");
		}
	});
}

define(['jquery'],function($){
	userFormsToggle();
});

/*
*/
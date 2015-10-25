$(function(){
	//导航栏
	navFuc();	
})

//导航栏
function navFuc(){
	if($("#mainNav")){
		$("#mainNav li").hover(
		function(){
			$(this).addClass("active");
		},
		function(){
			$(this).removeClass("active");
		}
		)	
	}
}
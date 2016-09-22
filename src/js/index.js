jQuery(function($){

	//快捷入口动画部分
	//CSS实现
	
//	尖货推荐：鼠标经过内容改变透明度
	$(".con_goods").on("mouseover","a",function(){
		$(this).animate({opacity:0.7},300);
	}).on("mouseleave","a",function(){
		$(this).animate({opacity:1},200);
	})
	
	//豪车入口：如上改变透明度
	$(".con_car").on("mouseover","a",function(){
		$(this).animate({opacity:0.8},300);
	}).on("mouseleave","a",function(){
		$(this).animate({opacity:1},200);
	})
	
	
});//jQuery(function($)

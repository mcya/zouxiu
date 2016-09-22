jQuery(function($){
	
	//图片放大效果实现
	$("#big_map_yym").simpleZoom({
		zoomBox : "#zoom",
		markSize : [120, 169],
		zoomSize : [402, 536],
		zoomImg : [804, 1072]
	});
	/*
	小图div--litimg
		a--img小图
		a
		a
	大图 div--showing
	*/
	//点击小图片 切换大图片
	$("#smallPic li").on("mouseover",function(){
		//鼠标经显示dc样式
		$(this).addClass("dc");
		
		//获取当前图片路径
		var litsrc = $(this).find('img').attr('src');
		
		//改变左侧的原图的路径
		$('#zoom img').attr('src',litsrc).fadeIn(500);
		
		//右侧的图片位置
		$('#big_map_yym img').attr('src',litsrc);
		
		
	}).on("mouseleave",function(){
		
		//鼠标离开的时候移除样式
		$(this).removeClass("dc");
	});
	
	
	//$('#smallPic a').click(function(){
		//$(this).closest("li").addClass("dc").siblings("li").removeClass("dc")
        //var litsrc = $(this).children('img').attr('src');
        //$('#zoom img').attr('src',litsrc);//左侧图
        //$('#big_map_yym img').attr('src',litsrc);//右侧的图片位置
    //});
	
	
});//jQuery(function($)
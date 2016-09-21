jQuery(function($){
	//鼠标经过样式直接在CSS中更改
	//===>经过样式直接用CSS的hover
	
	//一级导航点击的时候显示的样式
	$(".navList").on("click","a",function(){
		$(this).addClass("navCheck").closest("li").siblings().find("a").removeClass("navCheck");
	});
	
	//二级导航栏的效果
	//鼠标经过的时候高亮效果和显示内容
	$(".menu_li").on("mouseover",function(){
		$(this).addClass("nav_select")
	}).on("mouseleave",function(){
		$(this).removeClass("nav_select");
	});
	//鼠标经过显示选项卡
	$(".menu_li").on("mouseover",function(){
		$(this).find(".menu_tab").attr("style","opacity: 1; ")
	}).on("mouseleave",function(){
		$(this).find(".menu_tab").attr("style","height: 0px; opacity: 0; display: none;")
	});

	
	
});//jQuery(function($)

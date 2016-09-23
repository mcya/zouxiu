
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
		$('#zoom img').attr('src',litsrc);
		
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
	

    // 查看配送流程
    $(".layer13").on("mouseover","a",function(){
    	$(this).find("i").css("display","block");
    }).on("mouseleave","a",function(){
    	$(this).find("i").css("display","none")
    })

    // 详细说明
    $(".seedet").on("mouseover",function(){
    	$(this).find("em").css("display","block");
    }).on("mouseleave",function(){
    	$(this).find("em").css("display","none")
    })

    // 点击加物品数量
    var $buynum = 1;
   	//点击加，则增加
    $(".color_s .up").on("click",function(){
    	$buynum++;
    	$(this).prev("input").attr("value",$buynum);
    	// 大于1，那么“减小”图标显示
    	if ($buynum>1) {
    		$(".color_s .down").css({
    			"background-position":"-207px -160px"
    		})
    	}
    });
    //点击就减少
    $(".color_s .down").on("click",function(){
    	$buynum--;
    	if ($buynum<=1) {
    		$buynum = 1;
    		//物品不可减少，恢复默认灰色
    		$(".color_s .down").css({
    			"background-position":"-224px -160px"
    		})
    	}
    	$(this).next("input").attr("value",$buynum);
    });

    //分期付款
    $(".money").on("mouseover","a",function(){
    	$(this).find("em").css("display","block");
    }).on("mouseleave","a",function(){
    	$(this).find("em").css("display","none")
    })
    
//  右侧点击关闭
	$("#backtop").on("click","span",function(){
		$(this).parents("div").css("display","none")
	})


    // 商品的导航
  	
    console.log( $("#container_ul").scrollTop() )

   //用户已经购买商品
    $(".user_ico").on("mouseover","a",function(){
    	$(this).find("#fce").css("display","block");
    }).on("mouseleave","a",function(){
    	$(this).find("#fce").css("display","none")
    })
    
    //cookie购物车
	
	//定义数组
	var allBuycar = [];
	
	//把这个用来存取购物商品的数组名传到函数中
	var str = getCookie("allBuycar");
	
	//如果有cookie
	if (str != "")
	{
		// 说明之前 cookie 中有商品的内容取出来转换成数组
		allBuycar = eval( str );
	}
	
	$("#buy_mycar_car").on("click",function(){
		
		//空的对象
		var obj = {}
		
		//图片路径
		var $mycar_img = $("#big_map_yym").find("img").attr("src")
		
		//商品名
		var $mycar_name = $("#buy_mycar_name").text();
		
		//颜色和颜色值
		var $mycar_color = $('#buy_mycar_color').text();
		var $mycar_colorval = $("#buy_mycar_colorValue").text();
		
		//尺码和尺码值
		var $mycar_big = $("#buy_mycar_bigsmll").text();
		var $mycar_bitval = $("#buy_mycar_bigsmllVal").text()
		
		//价格
		var $mycar_price = $("#buy_mycar_price").text()
		
		//添加到obj对象中
		obj.shopimg = $mycar_img;
		obj.shopname = $mycar_name;
		obj.shopcolor = $mycar_color;
		obj.shopcoloval = $mycar_colorval;
		obj.shopbig = $mycar_big;
		obj.shopbigval = $mycar_bitval;
		obj.shopprice = $mycar_price;
		
		//alert(obj.shopcolor)
		//压入数组
		allBuycar.push( obj );
		
		//添加到cookie
		addCookie( "allBuycar", allBuycar.toSource(), 7);
		
		//一个弹窗测试
		//alert("添加成功，华润万家祝您购物愉快")
		
	});//on("click",function
	
	//查看我的购物车、点击	立即购买 	跳转到购物车
		
	$("#buy_gobuy").on("click",function(){
		location.href = "goodsCar.html"
	})
		
});//jQuery(function($)





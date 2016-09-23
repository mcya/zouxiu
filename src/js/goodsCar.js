//购物车
//function evil(fn) {
//  var Fn = Function;  //一个变量指向Function，防止有些前端编译工具报错
//  return new Fn('return ' + fn)();
//}

jQuery(function($){
	
	//获取body
	var $tbody = ("#car_tbody")
	
	//将用于存商品信息的数组arr传入函数
	var str = getCookie("allBuycar");
	
	//取出arr对应的的值返回转换成数组
	var arr =  eval( str );
	
	//遍历文档内容，添加到页面
	$.each(arr,function(idx,item) {
		
		//创建tr在列表页生成
		var $tr = $("<tr></tr>");
		
		//选择框td1
		var $td_one = $("<td></td>");
		var $carinput = $("<input />");
		$carinput.attr("type","checkbox").addClass("car_check")
		
		//选择框压入行
		$carinput.appendTo($td_one);
		$td_one.appendTo($tr);
		
		//图片/商品信息 td2
		var $td_two = $("<td></td>");
		
		
		//商品信息P标签
		var $car_p = $("<p></p>");
		$car_p.addClass("car_info");
		
		//商品简要信息
		var $img = $("<img />");
		var $car_a = $("<a></a>");
		var $span = $("<span></span>");
		
		//商品图片
		$img.attr("src",""+item.shopimg+"");
		$img.appendTo($td_two);
		
		
		
		//添加样式
		$car_a.text(""+item.shopname+"").addClass("car_shop_name2");
		$span.text(""+item.shopcolor+item.shopcoloval+item.shopbig+item.shopbigval+"").addClass("car_shop_color");
		
		$car_a.appendTo($car_p);
		$span.appendTo($car_p);
		$car_p.appendTo($td_two);
		
		//购买价
		var $td_three = $("<td></td>");
		$td_three.text(""+item.shopprice+"");
		
		//小计
		var $td_four = $("<td></td>");
		$td_four.text(""+item.shopprice+"").css("color","#ff6633");
		
		//用于结算
		var moneymony = parseInt(item.shopprice)
		
		//数量
		var $td_five = $("<td></td>");
		var $num_p = $("<p></p>");
		var $num_span1 = $("<span></span>");
		var $num_input = $("<input type='text' value='1' />");
		var $num_span2 = $("<span></span>");
		
		//对input加一个id属性，用于算钱
		$num_input.attr("id","ymoney_input")
		
		//压入
		$num_span1.appendTo($num_p).addClass("down");
		$num_input.appendTo($num_p);
		$num_span2.appendTo($num_p).addClass("up");
		
		$num_p.appendTo($td_five);
		
		$td_five.addClass("car_num");
		
//		<td class="car_num">
//			<p>
//				<span class="down"></span><input type="text" value="1"><span class="up"></span>
//			</p>
//		</td>

		//操作
		var $ope_a1 = $("<a href='#'></a>").addClass("oprate");
		var $ope_a2 = $("<a href='#'></a>").addClass("oprate");
		var $td_six = $("<td></td>");
		
		$ope_a1.text("移至收藏夹")
		$ope_a2.text("删除");
		
		$ope_a1.appendTo($td_six);
		$ope_a2.appendTo($td_six);
		
		$td_two.appendTo($tr).addClass("car_shop");
		$td_three.appendTo($tr);
		$td_four.appendTo($tr);
		$td_five.appendTo($tr);
		$td_six.appendTo($tr);
		
		$tr.appendTo($tbody).addClass("table_con");
		
		
		
		
		
		
		
		
		
	});//获取cookie完毕
	
	
	
	 // 点击加物品数量
	    var $buy_num = 1;
	    
	   	//点击加，则增加
	    $(".up").on("click",function(){
	    	$buy_num++;
	    	$(this).prev("input").attr("value",$buy_num);
	    	// 大于1，那么“减小”图标显示
	    	if ($buy_num>1) {
	    		$(".down").css({
	    			"background-position":"-207px -160px"
	    		})
	    	}
	    	var monyall = $("#ymoney_input").val();
	    	var mmmmmmm = moneymony * $buy_num
	    	$("car_allmony").text(""+mmmmmmm+"万"+"")
	    });
	    
	    //点击就减少
	    $(".down").on("click",function(){
	    	$buy_num--;
	    	if ($buy_num<=1) {
	    		$buy_num = 1;
	    		//物品不可减少，恢复默认灰色
	    		$(".down").css({
	    			"background-position":"-224px -160px"
	    		})
	    	}
	    	$(this).next("input").attr("value",$buy_num);
	    });
    
    //点击加减钱的变化
	
	
	
	
});//jQuery(function($)

/*
<!-- 选购的内容 -->
	<tr class="table_con">
		<!-- 选择 -->
		<td class="car_check">
			<input type="checkbox">
		</td>
		<!-- 商品图片 -->
		<td class="car_shop">
			<img src="" alt="">
			<!-- 商品简要信息 -->
			<P class="car_info">
				<!-- 最终用js实现 -->
				<span class="car_shop_name1">Shengloba</span>
				<a href="#" class="car_shop_name2">女士新品休闲棉麻豹纹袖口西装外套</a>
				<span class="car_shop_color">颜色：驼色 尺码：L</span>
			</P>
		</td>
		
		<!-- 购买价 -->
		<td>11</td>
		<!-- 小计 -->
		<td>11</td>
		<!-- 数量 -->
		<td class="car_num">
			<p>
				<span class="down"></span><input type="text" value="1"><span class="up"></span>
			</p>
		</td>
		<!-- 收藏/删除 -->
		<td>11</td>
	</tr>
//*/













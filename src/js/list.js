$(function(){
			var $datalist = $('#img_datalist');
			//var pageNum = 1;

			// 全局配置
			$.ajaxSetup({
				//API地址
				url:'../data/listGir.json',
				
				//传给服务器的数据
				//data:{pageNo:pageNum},
				
				//数据类型
				dataType:'json',
				
				//成功返回
				success:function(res){
					console.log(res);
					//*
					var $ul = $('<ul/>');
					$.each(res,function(idx,item){
						if ( (idx-flag)<15 && (idx-flag)>=0 ) {
							//因为 .appendTo 最终加载到的只是他的本身，就好比上面的，最终加载到的还是img本身。 最终不能链式调用要一步一步地写
							var $a = $("<a/>");
							var $li = $("<li/>");
							var $img = $("<img/>")
							$img.attr("src",""+item.src+"").addClass("lazy");
							$img.appendTo($a);
							$a.addClass("zt_lazyload_a").appendTo($li);
							$li.addClass("zt_lazyload_li").appendTo($ul);
						}
					});
					
					$ul.addClass("zt_iteam_three")

					$datalist.append($ul);
					//*/
				}
			});

			// 页面一加载就请求服务器的数据
			$.ajax();



			//*
			var flag=-15;
			$(window).on('scroll.yym',function(){
				var scrollTop = $(window).scrollTop();

				// 懒加载：滚动《快到底部》的时候再加载
				if(scrollTop >= $(document).height() - $(window).height() - 300){
					$.ajax();
					flag+=15;
				}
			
			});
			//*/
			// 手动触发滚动事件
			$(window).trigger('scroll');
});
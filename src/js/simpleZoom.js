
//有个bug,如果改变页面宽度且不刷新,就对不准了!!

;(function($){
	$.fn.simpleZoom = function(options){
		var defs = {
			zoomBox : "#zoomBox",			//原图img的容器
			markSize : [200, 100],			//原图img本身
			zoomSize : [400, 400],			//选看区
			zoomImg : [800, 800]			//放大倍数
		};
		var opt = $.fn.extend({}, defs, options);
		return this.each(function(){
			var markBox = $(this);
			var zoomBox = $(opt.zoomBox);
			var zoom_img = $(opt.zoomBox).find("img"); 
			var markBoxSize = [markBox.width(), markBox.height(), markBox.offset().left, markBox.offset().top];
			var markSize = opt.markSize;
			var zoomSize = opt.zoomSize;
			var zoomImg = opt.zoomImg;
			var mark_ele = "<i id='mark'></i>";
			var mark_css = {position:"absolute", top:0, left:0, width:markSize[0]+"px", height:markSize[1]+"px", backgroundColor:"#000", opacity:.5, filter:"alpha(opacity=50)",  display:"none", cursor:"crosshair"};
			
			var show_w = markBoxSize[0]-markSize[0];
			var show_h = markBoxSize[1]-markSize[1];

			//created mark element and add cascading style sheets
			zoomBox.css({width:zoomSize[0]+"px", height:zoomSize[1]+"px"});
			markBox.append(mark_ele);
			$("#mark").css(mark_css);

			markBox.mouseover(function(){
				$("#mark").show();
				zoomBox.show();
			}).mouseout(function(){
				$("#mark").hide();
				zoomBox.hide();
			}).mousemove(function(e){
				var l = e.pageX-markBoxSize[2]-(markSize[0]/2);
				var t = e.pageY-markBoxSize[3]-(markSize[1]/2);
				if(l < 0){
					l = 0;
				}else if(l > show_w){
					l = show_w;
				}
				if(t < 0){
					t = 0;
				}else if(t > show_h){
					t = show_h;
				}

				$("#mark").css({left:l+"px", top:t+"px"});
				
				var z_x = -(l/show_w)*(zoomImg[0]-zoomSize[0]);
				var z_y = -(t/show_h)*(zoomImg[1]-zoomSize[1]);
				zoom_img.css({left:z_x+"px", top:z_y+"px"});
			});
		});
	}
})(jQuery);



//登录注册
jQuery(function($){
	$(".login_tab").on("click","a",function(){
		$(this).addClass("active").closest("li").siblings().find("a").removeClass("active");
		var judge = $(this).attr("xxx");
		console.log(judge)
		if( judge==1 )
		{
			$("#login").css("display","block").next("ul").css("display","none")
		}
		else{
			$("#login").css("display","none").next("ul").css("display","block")
		}
		
	});
	
//	验证码
	var $codeli = $("#codelili")
	$("#code_btn").on("click",function(){
		var $li = $("<li></li>")
		var $input = $("<input type='text' placeholder='请输入验证码' />");
		$input.addClass("form_input")
		
		var num =parseInt(Math.random()*8999+1000);
		var $codespan = $("<span></span>")
		$codespan.addClass("form_span").text(""+num+"");
		
		$input.appendTo($li);
		$codespan.appendTo($li);
		
		$li.appendTo($codeli);
		$codeli.addClass("form_lili")
		
		$input.on("blur",function(){
			if( $input!=num){
				alert("验证码不正确")
			}
		})
		
	});
	
	
	
});//jQuery(function($)


onload = function() {

	var oDiv = null;
	var oLabel = null;
	var oInput = null;
	var oSpan = null;



	oDiv = document.getElementById("dhhm");

	oLabel = oDiv.getElementsByTagName("label")[0];
	oInput = oDiv.getElementsByTagName("input")[0];

	oInput.oninput = function() {
		oSpan = this.nextElementSibling;

		var str = this.value;

		var reg = /^1[35678]\d{9}$/;
		
		//reg.test 验证这个字符串 str 是否满足正则表达式的要求
		oSpan.innerHTML = reg.test(str);
	

	}
	
	
	
	// 登录按钮
	var btnLogin = document.getElementById("btnLogin");
	
	// 7天免登陆前面的那个 checkbox
	var oCheck = document.getElementById("savePwd");

	var oUsername = document.getElementById("username");
	var oPassword = document.getElementById("password");


	var str = document.cookie;

	var obj = {};
	
	var arr = str.split("; ");
	for (var i = 0; i < arr.length; i++)
	{
		var arr2 = arr[i].split("=");

		var name = arr2[0];
		var val = arr2[1];

		// 在obj对象中添加了一个属性为 name 变量的值，然后这个属性的值是 val
		obj[name] = val;

		
	}

	console.log(obj.username);
	console.log(obj.password);
	if (obj.username && obj.password)
	{
		oUsername.value = obj.username;
		oPassword.value = obj.password;
		
		alert("登录成功！");
	}

	btnLogin.onclick = function() {

		// oCheck.checked 为 true，那么就勾选了，否则就没勾选
//		if (oCheck.checked)
//		{

			// 勾选了，才保存 cookie
			// alert(oPassword.value);
			// 取出用户名和密码
			var strUsername = oUsername.value;
			var strPassword = oPassword.value;



			// 保存到cookie 中
			var oDate = new Date();

			// 得到7天后的日期对象
			oDate.setDate(oDate.getDate() + 2);

			document.cookie = "username="+strUsername+";expires=" + oDate;

			document.cookie = "password="+strPassword+";expires=" + oDate;
		//}
	}


}








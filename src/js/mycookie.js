
// 函数名： addCookie
// 参数：
//    name:  cookie 的名字
//    val: cookie 的值
//    day: 多少天以后过期
// 返回值为空
function addCookie(name, val, day)
{
	var oDate = new Date();

	oDate.setDate(oDate.getDate() + day);
	
	document.cookie = ""+name+"="+val+";expires=" + oDate;
}

// 函数名： getCookie
// 参数：
//    name 得到的cookie 的名字
// 返回值： 如果等于"",说明没有找到，否则，就是所对应cookie 的值

// 找 cookie 名字为 username 所对应的值
// var username = getCookie("username");

function getCookie(name)
{
	// 得到cookie
	// username=老马; password=123456
	var str = document.cookie;

	// 按照 ; 分割
	var arr = str.split("; ");
	// username=老马
	// password=123456

	for (var i = 0; i < arr.length; i++)
	{
		var arr1 = arr[i].split("=");
		
		if (arr1[0] == name)
		{
			return arr1[1];
		}
	}

	// 如果一个都找不到，就返回 "";
	return "";
}

function binding(oElem, eventName, fn)
{
	// 如果绑定对象中存在 attachEvent 这个方法，
	// 说明是在IE浏览器中
	if (oElem.attachEvent)
	{
		// eventName  :  click ==> onclick
		oElem.attachEvent("on" + eventName, fn);
	}
	else
	{	
		oElem.addEventListener(eventName, fn, false);
	}
}
function test()  {  
	if(document.a.b.value.length>10){ 
		x=document.getElementById("demo")  //查找元素
x.innerHTML="不能超过50个字符";    //改变内容
		document.a.b.focus(); 
		return false; 
	} 
	if(document.a.b.value.length<1){ 
		x=document.getElementById("demo")  //查找元素
x.innerHTML="请输入公司名称";    //改变内容
		document.a.b.focus(); 
		return false; 
	} 
}




function isEmail(strEmail) { 
	if (strEmail.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)
	{
	return true;
	}
		else{
	x=document.getElementById("demo2")  //查找元素
x.innerHTML="请输入正确的邮箱地址";    //改变内容 
return false; 
		}
}





function testit(){ 
var filter=/^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/; 
alert(filter.test(txt.value)); 
x=document.getElementById("demo3")  //查找元素
x.innerHTML="请输入正确的手机号码";    //改变内容 

} 
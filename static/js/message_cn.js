/**
  jquery验证框架 默认消息汉化
*/
// (1)required:true               必输字段
// (2)remote:"check.php"          使用ajax方法调用check.php验证输入值
// (3)email:true                  必须输入正确格式的电子邮件
// (4)url:true                    必须输入正确格式的网址
// (5)date:true                   必须输入正确格式的日期 日期校验ie6出错，慎用
// (6)dateISO:true                必须输入正确格式的日期(ISO)，例如：2009-06-23，1998/01/22 只验证格式，不验证有效性
// (7)number:true                 必须输入合法的数字(负数，小数)
// (8)digits:true                 必须输入整数
// (9)creditcard:                 必须输入合法的信用卡号
// (10)equalTo:"#field"           输入值必须和#field相同
// (11)accept:                    输入拥有合法后缀名的字符串（上传文件的后缀）
// (12)maxlength:5                输入长度最多是5的字符串(汉字算一个字符)
// (13)minlength:10               输入长度最小是10的字符串(汉字算一个字符)
// (14)rangelength:[5,10]         输入长度必须介于 5 和 10 之间的字符串")(汉字算一个字符)
// (15)range:[5,10]               输入值必须介于 5 和 10 之间
// (16)max:5                      输入值不能大于5
// (17)min:10                     输入值不能小于10
jQuery.extend(jQuery.validator.messages, {
        required: "必选字段",
        remote: "请修正该字段",
        email: "请输入正确格式的电子邮件",
        url: "请输入合法的网址",
        date: "请输入合法的日期",
        dateISO: "请输入合法的日期 (ISO).",
        number: "请输入合法的数字",
        digits: "只能输入整数",
        creditcard: "请输入合法的信用卡号",
        equalTo: "请再次输入相同的值",
        accept: "请输入拥有合法后缀名的字符串",
        maxlength: jQuery.validator.format("不能超过50个字符"),
        minlength: jQuery.validator.format("请输入一个 长度最少是 {0} 的字符串"),
        rangelength: jQuery.validator.format("请输入 一个长度介于 {0} 和 {1} 之间的字符串"),
        range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
        max: jQuery.validator.format("请输入一个最大为{0} 的值"),
        min: jQuery.validator.format("请输入一个最小为{0} 的值")
});

// 手机号码验证    
//(function(){
//	jQuery.validator.addMethod("account", function(value, element) {    
//		  return this.optional(element) || (/^\d{11}$/.test(value));    
//	}, "账号长度必须为11位数字。");
//  jQuery.validator.addMethod("isMobile", function(value, element) {    
//    var length = value.length;    
//    return this.optional(element) || (length == 11 && /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value));    
//  }, "请正确填写您的手机号码。");
//})();

(function(){
	jQuery.validator.addMethod("account", function(value, element) {    
		  return this.optional(element) || (/^\w{0,50}$/.test(value));    
	}, "不能超过50个字符");
    jQuery.validator.addMethod("isMobile", function(value, element) {    
      var length = value.length;    
      return this.optional(element) || (length == 11 && /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value));    
    }, "请正确填写您的手机号码。");
})();


(function(){
	jQuery.validator.addMethod("account2", function(value, element) {    
		  return this.optional(element) || (/^\w{0,50}$/.test(value));    
	}, "不能超过50个字符");
})();

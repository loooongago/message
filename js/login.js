var loginUid = 0;
var loginUname = "";
$("#bt-login").click(function(){
var n = $("#uname");
var p  = $("#upwd");

$.ajax({
   type:"POST",
	 url:"data/user_login.php",
	 data:{uname:n.val(),upwd:p.val()},
   success:function(data){
		if(data.code<0){
			$("div.alert_msg").parent().children().removeClass('hidden');
		  $("div.alert_msg").html(data.msg);
		}else{
		  $("#login_box").modal('hide');
		  $("#msg_board").show();
		  $("#username").html("---"+n.val()+"欢迎回来");
			sessionStorage['UserLoginName'] = data.uname;
			sessionStorage['UserLoginUpwd'] = data.upwd;
            console.log(sessionStorage['UserLoginName'])
		}
	 },
	 error:function(data){
	  //console.log("响应消息失败!");
	 },
});
});

$("#bt-register").click(function(){
var n = $("#uname");
var p  = $("#upwd");
$.ajax({
   type:"POST",
	 url:"data/user_register.php",
	 data:{uname:n.val(),upwd:p.val()},
   success:function(data){
   	$("div.alert_msg").parent().children().removeClass('hidden');
		  $("div.alert_msg").html(data.msg);
	 },
	 error:function(data){
	  //console.log("响应消息失败!");
	 },
});
});
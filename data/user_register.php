<?php
//1:修改响应主体格式
header("content-type:application/json;charset=utf-8");
//2:获取参数
@$uname = $_REQUEST['uname']or die('{"code":-2,"msg":"用户名不能为空"}');
@$upwd = $_REQUEST['upwd']or die('{"code":-3,"msg":"密码不能为空"}');

//3:连接数据库设置编码
require('init.php');
//4:创建SQL
$sql = "SELECT * FROM msg_user ";
$sql .= " WHERE uname = '$uname'";
//5:抓取返回结果
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
if($row===null){
  $sql = "INSERT INTO msg_user VALUES(null,'$uname','$upwd')";
  $result = mysqli_query($conn,$sql);
  $row =["code"=>2,"msg"=>"注册成功，请登录"];
  echo json_encode($row);
}else{
	$row = ["code"=>-4,"msg"=>"用户名被占用"];
	echo json_encode($row);
}
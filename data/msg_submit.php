<?php
//1:修改响应主体格式
header("content-type:application/json;charset=utf-8");
//2:获取参数
@$msg = $_REQUEST['msg'];
@$uname=$_REQUEST['uname'];
//3:连接数据库设置编码
require('init.php');

$sql="insert into t_msg values(null,'$msg','$uname',now())";
$result = mysqli_query($conn,$sql);
$sql="select * from t_msg";
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($rows);
?>
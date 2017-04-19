<?php
//1:修改响应主体格式
header("content-type:application/json;charset=utf-8");
require('init.php');
$sql="select * from t_msg";
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($rows);
?>
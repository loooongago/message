<?php
	$name=$_REQUEST['name'];
	$age=$_REQUEST['age'];
 	$conn=mysqli_connect('127.0.0.1','root','','zlf');
 	$sql="insert into lxf values(null,'$name','$age',now())"; 
 	$result=mysqli_query($conn,$sql);
 	if($result===true){
 		echo "ok!";
 	}else{echo "no!";}
?>
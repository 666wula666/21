<?php
	//连接数据库
	//require_once('appvars.php');
	//
	header('content-type:text/html;charset=utf8');
	require_once('connectvars.php');
	$con = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
	if (mysqli_connect_errno($con)) 
	{ 
		    echo "连接 MySQL 失败: " . mysqli_connect_error(); 
	} 
?>
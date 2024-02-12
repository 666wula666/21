<?php
	include_once ("connect.php");
	$error_msg = " "; // 清空错误信息
	//if (!isset($_COOKIE['user_id'])) 
	//{ // 当用户id没有保留在cookie中时，需验证用户名和密码
	//if (isset($_POST['submit'])) 

		// 获取用户输入的数据
	$root_username = mysqli_real_escape_string($con, trim($_POST['rootname']));
	$root_password = mysqli_real_escape_string($con, trim($_POST['rootpass']));
			//
	if (!empty($root_username) && !empty($root_username)) 
	{
		//判断是否在数据库
		
		$query = "SELECT * FROM user WHERE username = 
		'$root_username' AND rootpassword = SHA('$root_password')";
		
		$data = mysqli_query($con, $query);
		if (mysqli_num_rows($data) == 1) //用户存在
		{ 
			$row = mysqli_fetch_array($data);
			header('Location: ../rootmanage.html');//跳转
				//else
					//{setcookie('username', "", time()-1);//如果没有选择自动登录就清空cookie
					//setcookie('password',  "", time()-1);
					//}
		}
		else 
		{
				echo "您的用户名或密码输入有误，请<a href=\"../login.html\">重新登录</a>！";
		}
		
			/*else {
					$error_msg = 'Sorry, you must enter your username and password to log in.';
					echo json_encode($error_msg);
			}*/
	}	
	//}
?>
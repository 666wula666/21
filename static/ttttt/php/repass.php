<?php
	include_once ("connect.php");
	$error_msg = " "; // 清空错误信息
	//if (!isset($_COOKIE['user_id'])) 
	//{ // 当用户id没有保留在cookie中时，需验证用户名和密码
	//if (isset($_POST['submit'])) 

		// 获取用户输入的数据
	$username = mysqli_real_escape_string($con, trim($_POST['username']));
	$email = mysqli_real_escape_string($con, trim($_POST['email']));
	$pass = mysqli_real_escape_string($con, trim($_POST['newpass']));
			//
	if (!empty($username) && !empty($email)) 
	{
		//判断是否在数据库
		
		$query = "SELECT * FROM user WHERE username = 
		'$username' AND email = '$email'";
		
		$data = mysqli_query($con, $query);
		if (mysqli_num_rows($data) == 1) //用户存在
		{ 
			$row = mysqli_fetch_array($data);
			$update="update user set password=(SHA('$pass')) where username='{$username}'";
			 if($sql =mysqli_query($con,$update)){
		   		  echo '<p>恭喜用户</p>',trim($username),'<p>修改密码成功, 3秒后将自动跳转......若跳转无反应<a href="../login.html">请点击</a></p>';	
				header("refresh:3;url=../login.html");//跳转
		  	}
		    else{
		      		echo "NO";
		    }
			
			// header('Location: ../repass2.html');//跳转
				//else
					//{setcookie('username', "", time()-1);//如果没有选择自动登录就清空cookie
					//setcookie('password',  "", time()-1);
					//}
		}
		else 
		{
				echo "验证失败，您的用户名或邮箱输入有误，请<a href=\"../repass.html\">重新输入</a>！";
		}
		
			/*else {
					$error_msg = 'Sorry, you must enter your username and password to log in.';
					echo json_encode($error_msg);
			}*/
	}	
	//}
?>
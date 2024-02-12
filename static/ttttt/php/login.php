<?php
	include_once ("connect.php");
	$error_msg = " "; // 清空错误信息
	//if (!isset($_COOKIE['user_id'])) 
	//{ // 当用户id没有保留在cookie中时，需验证用户名和密码
	//if (isset($_POST['submit'])) 
	//
// 获取用户输入的数据
   session_start(); 
	$user_username = mysqli_real_escape_string($con, trim($_POST['loname']));
	$user_password = mysqli_real_escape_string($con, trim($_POST['password1']));
	$autologin=isset($_POST['autologin'])?1:0; //获取是否选择了自动登录
	$rootpass='98ef16ddf6a80d792a0a807ac365b2638b3c0125';
	
	$_SESSION['name']=$user_username; 

	$rootq = "SELECT * FROM user WHERE username = 
				'$user_username' AND rootpassword = '$rootpass'";
	$root =mysqli_query($con, $rootq);
	if (!isset($_COOKIE['username'])) // 当用户名没有保留在cookie中时，需验证用户名和密码
	{
			//判断是否在数据库
				$query = "SELECT * FROM user WHERE username = 
				'$user_username' AND password = SHA('$user_password')";
				$data = mysqli_query($con, $query);

				
				if (mysqli_num_rows($data) == 1) //用户存在
				{ 
					
					if($autologin==1){        //如果用户勾选了自动登录就把用户名和加了密的密码放到cookie里面
						$pass = sha1($user_password);
						setcookie('username', $user_username, time() + (3600 * 24*7),'/');//7天
						setcookie('password',$pass, time() + (3600 * 24*7),'/');
					}
					else
					{
						setcookie('username', "", time()-1);
						//如果没有选择自动登录就清空cookie
						setcookie('password',  "", time()-1);
					}
					if(mysqli_num_rows($root) == 1)//root用户跳转后台管理系统
					{
						
						header('Location:../ask.html');//跳转
					}
					else
					{
						header('Location:../index1.html');//跳转
					}

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
	else{
		if(mysqli_num_rows($root) == 1)//root用户跳转后台管理系统
		{
					
			header('Location:../ask.html');//跳转
		}
		else
		{
			header('Location:../index1.html');//跳转
		}
	}
	//}
?>
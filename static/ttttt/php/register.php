<?php
	include_once ("connect.php");
	// 从POST得到个人简介数据 转义特殊字符
	$username = mysqli_real_escape_string($con, trim($_POST['rename']));
	$password = mysqli_real_escape_string($con, trim($_POST['password2'])); 
	//$rootpassword = mysqli_real_escape_string($con, trim($_POST['repass']));  
	$email = mysqli_real_escape_string($con, trim($_POST['email']));
	//如果文本框中的内容不为空
	if (!empty($username) && !empty($password) && !empty($email)) 
	{
				// 验证用户名是否注册过
			$query = "SELECT * FROM user WHERE username = '$username'";
			$data = mysqli_query($con, $query);
			if(mysqli_num_rows($data) == 0) 
			{// 如果用户名没有注册过，则将新数据插入数据库
				$query = "INSERT INTO user (username, password,email,join_date) VALUES ('$username', SHA('$password'), '$email',NOW())";//SHA('$password')加密, join_date加入时间
				mysqli_query($con, $query);
						
					//echo '<p>Your new account has been successfully created. You\'re now 
					//ready to log in and <a href="editprofile.php">edit your profile</a>.</p>';
				// 提示用户注册成功
				echo '<p>恭喜用户</p>',trim($_POST['rename']),'<p>注册成功, 3秒后将自动跳转......若跳转无反应<a href="../login.html">请点击</a></p>';	
				header("refresh:3;url=../login.html");//跳转
				mysqli_close($con); exit();
				}
			else 
			{ // 账号已经存在，则显示错误信息
				echo "<script type='text/javascript'>location.href='../login.html';alert('用户已存在，请重新注册！');</script>";
				header("refresh:3;url=../login.html");//跳转
				$username = "";
			}
	}
	mysqli_close($con);
	
	
?>
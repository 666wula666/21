<?php
		session_start();
		 unset($_SESSION['name']);
		setcookie('username', "", time()-1,'/');
		//如果没有选择自动登录就清空cookie
		setcookie('password',  "", time()-1,'/');
		echo "<li class='infli'>";
        echo '游客模式';
        echo "</li>";
        echo "<li>";
        echo "<li class='infli'><a href='login.html'>登录/注册</a></li>";
        session_destroy(); 
?>
<!-- 重置密码 -->
<?php
    include_once ("connect.php");
    $name=$_POST["username"];
    $pass = 'Linux1997';
    // rootpassword = SHA('$root_password')
    $update="UPDATE user SET rootpassword=(SHA('$pass')) WHERE username='{$name}'";
// update user set password='{$pass}' where username='{$name}'
    if($sql =mysqli_query($con,$update)){
        echo "OK";
    }
    else{
        echo "NO";
    }
?>
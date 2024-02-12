<!-- 重置密码 -->
<?php
    include_once ("connect.php");
    $name=$_POST["username"];
    $pass = 'abc123';
    $update="update user set password=(SHA('$pass')) where username='{$name}'";

    if($sql =mysqli_query($con,$update)){
        echo "OK";
    }
    else{
        echo "NO";
    }
?>
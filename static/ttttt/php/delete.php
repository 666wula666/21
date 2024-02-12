<!-- 删除数据库用户信息 -->
<?php
    include_once ("connect.php");

    $name=$_POST["username"];
    
    $delete="delete from user where username='{$name}'";

    if($sql =mysqli_query($con,$delete)){
        echo "OK";
    }
    else{
        echo "NO";
    }
    

?>
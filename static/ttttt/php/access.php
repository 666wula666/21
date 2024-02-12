<!-- 连接数据库，显示数据库表 -->
<?php
   include_once ("connect.php");
    
    $query = "SELECT * FROM user ";

    $sql= mysqli_query($con,$query);
    // echo "<table class='table1'>";
    
    while($sql_arr=mysqli_fetch_assoc($sql)){
        echo "<tr><td>";
        echo $sql_arr["username"];
        echo "</td><td>";
        echo $sql_arr["email"];
        echo "</td><td>";
        echo $sql_arr["password"];
        echo "</td><td>";
        if($sql_arr["rootpassword"]!='')
        {
              echo "Yes";
        }
        else
        {
            echo "No";
        }
        echo "</td><td>";
        echo "<input type='button' class='butde' value='删除用户'>";
         echo "</td><td>";
        echo "<input type='button' class='butnew' value='重置密码'>";
         echo "</td><td>";
        echo "<input type='button' class='butroot' value='添加为管理员'>";
        echo "</td></tr>";
    }
    // echo "</table>";

    echo "<script type='text/javascript' src='js/rootwork.js'></script>";
?>
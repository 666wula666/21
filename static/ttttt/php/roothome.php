<!-- 连接数据库，显示数据库表 -->
<?php
   include_once ("connect.php");
    
    $query = "SELECT * FROM user ";

    $sql= mysqli_query($con,$query);
    // echo "<table class='table1'>";
    $u=0;
    $addu=0;
    $testu=0;
    $rootu=0;

    while($sql_arr=mysqli_fetch_assoc($sql)){
        if($sql_arr["username"]!='')
        {
              $u++;
        }
        if($sql_arr["rootpassword"]!='')
        {
            $rootu++;
        }
        if($sql_arr["join_date"]==date('Y-m-d'))
        {
            $addu++;
        }
        if($sql_arr["test"]!='')
        {
            $testu++;
        }
    }
    echo '<div class="m_list m_1"><div class="m_desc"><p class="p_1">所有用户数</p><span class="sp_1">';
     echo $u;
     echo '</span> </div>   </div>';

    echo '<div class="m_list m_2"><div class="m_desc"><p class="p_2">今日新增用户</p><span class="sp_2">';
     echo $addu;
     echo '</span> </div> </div>';

    echo '<div class="m_list m_3"><div class="m_desc"><p class="p_3">管理员数</p><span class="sp_3">';
     echo $rootu;
     echo '</span> </div> </div>';

     echo '<div class="m_list m_4"><div class="m_desc"><p class="p_4">完成体验挑战用户数</p><span class="sp_4">';
     echo $testu;
     echo '</span> </div> </div>';
    // echo "</table>";

    
?>
<?php
    include_once ("connect.php");
    session_start();
    $tt='1';
    if(isset($_SESSION["name"])||isset($_COOKIE["username"])){
        if(!isset($_SESSION["name"]))
        {
            if(isset($_COOKIE["username"]))
            {
                
                $name=$_COOKIE["username"];
                echo $name;
                echo "1";
                $update="update user set test='$tt' where username='$name'";  
            }
        }
        else
        {
             
             $name=$_SESSION["name"];
             
                 echo $name;
                  echo "2";
            $update="update user set test='$tt' where username='$name'";  
        }
        
    }
     if($sql =mysqli_query($con,$update)){
        echo "OK";
    }
    else{
        echo "NO";
    }
?>
<?php
    header("Content-Type:text/html;charset=utf-8");
    session_start();
    if(isset($_SESSION["name"])||isset($_COOKIE["username"])){
        echo "<li class='infli'>";
        echo '您好, ';
        if(!isset($_SESSION["name"]))
        {
              if(isset($_COOKIE["username"]))
              {
                 echo $_COOKIE["username"];  
              }
        }
        else
        {
            echo $_SESSION["name"];  
        }
        echo "</li>";
        echo "<li>";
        echo "<li class='infli'><a href='#' class='logout'>注销</a></li>";
        echo "<script type'text/javascript' src='js/jquery-3.4.1.min.js'></script>";
        // echo "<script type'text/javascript' src='js/logout.js'></script>";
        // $('.logout').load('php/logout.php');
        echo "<script >$('.logout').click(function(){
            $('.inf').load('php/logout.php');
        });</script>";
    }
    else{
        echo "<li class='infli'>";
        echo '游客模式';
        echo "</li>";
        echo "<li>";
        echo "<li class='infli'><a href='login.html'>登录/注册</a></li>";
    }
?>
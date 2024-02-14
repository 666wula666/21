// 用户信息管理
var button = document.getElementsByClassName("butde");//删除按钮
var c = document.getElementById("table1");
console.log(button.length);
for (let i = 0; i < button.length; i++) {
    button[i].onclick = function () {
        console.log(i);
        var duser = c.rows[i].cells[0].innerHTML;
        var rright = c.rows[i].cells[3].innerHTML;
        console.log(duser);
        console.log(rright);
        if (rright == 'No') {
            if (confirm("确认删除吗？")) {
                $.ajax({
                    url: "php/delete.php",
                    data: {username: duser},
                    type: "POST",
                    datatype: "TEXT",
                    success: function (result) {
                        alert("删除成功");
                        // 重置页面
                        $("._1").css('display', 'none');//

                        $("._2").css('display', 'flex');//
                        $("#table1").load("php/access.php");
                    },
                })
            }
        } else {
            alert("该用户为管理员，若需修改root权限，请联系工作人员。");
        }
    }

}
var button2 = document.getElementsByClassName("butnew");
for (let i = 0; i < button2.length; i++) {
    button2[i].onclick = function () {
        console.log(i);
        var ruser = c.rows[i].cells[0].innerHTML;
        console.log(ruser);

        if (confirm("确认重置密码吗？")) {
            $.ajax({
                url: "php/reset.php",
                data: {username: ruser},
                type: "POST",
                datatype: "TEXT",
                success: function (result) {
                    alert("重置成功");
                    // 重置页面
                    $("._1").css('display', 'none');//

                    $("._2").css('display', 'flex');//
                    $("#table1").load("php/access.php");
                },
            })
        }
    }
}

var button3 = document.getElementsByClassName("butroot");
for (let i = 0; i < button3.length; i++) {
    button3[i].onclick = function () {
        console.log(i);
        var addroot = c.rows[i].cells[0].innerHTML;
        console.log(addroot);
        var rright = c.rows[i].cells[3].innerHTML;
        if (rright == 'No') {
            if (confirm("确认添加为管理员吗？")) {
                $.ajax({
                    url: "php/addroot.php",
                    data: {username: addroot},
                    type: "POST",
                    datatype: "TEXT",
                    success: function (result) {
                        alert("添加成功");
                        // 重置页面
                        $("._1").css('display', 'none');//
                        $("._2").css('display', 'flex');//
                        $("#table1").load("php/access.php");
                    },
                })
            }
        } else {
            alert("已经是管理员了。");
        }
    }

}
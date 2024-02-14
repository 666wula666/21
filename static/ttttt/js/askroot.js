let hp = document.getElementById("hp");//gohp按钮

let from_box = document.getElementsByClassName("from-box")[0];
let login_box = document.getElementsByClassName("login-box")[0];


var form2 = document.querySelector('[name="login-form" ]');

var username = document.querySelector('[name="rootname"]');
var password = document.querySelector('[name="rootpass"]');
//alert(username+'  '+password);
var btn1 = document.querySelector('[type="submit"]');

var loginbtn = document.getElementById("login-btn");//login按钮

//去首页按钮点击事件
hp.addEventListener("click", () => {
    window.location.href = 'index1.html';
})
//登录表单提交
form2.onsubmit = function () {
    if (username.value.trim() != "" && password.value.trim() != "") {
        return true;
    } else {
        alert('请填写完信息再登录！');
        return false;
    }

}
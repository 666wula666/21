let login = document.getElementById("login");//gologin按钮
let register = document.getElementById("register");//goregister按钮

let from_box = document.getElementsByClassName("from-box")[0];
let register_box = document.getElementsByClassName("register-box")[0];
let login_box = document.getElementsByClassName("login-box")[0];
//表单
let form1 = document.querySelector('[name="register-form" ]');
let form2 = document.querySelector('[name="login-form" ]');
//注册
let rename = document.querySelector('[name="rename"]');
let password2 = document.querySelector('[name="password2"]');
let repass = document.querySelector('[name="repass"]');
let email = document.querySelector('[name="useremail"]');
//登录
let loname = document.querySelector('[name="loname"]');
let password1 = document.querySelector('[name="password1"]');

let btn1 = document.querySelector('[type="submit"]');

form1.addEventListener('invalid', function (e) {
    e.preventDefault();
}, true);
form2.addEventListener('invalid', function (e) {
    e.preventDefault();
}, true);

//去注册按钮点击事件
register.addEventListener("click", () => {
    from_box.style.transform = "translateX(80%)";
    login_box.classList.add("hidden");
    register_box.classList.remove("hidden");
})
//去登录按钮点击事件
login.addEventListener("click", () => {
    from_box.style.transform = "translateX(0%)";
    register_box.classList.add("hidden");
    login_box.classList.remove("hidden");
})

//注册表单提交
form1.onsubmit = function () {
    if (rename.value.trim() == "" || password2.value.trim() == "" || email.value.trim() == "" || repass.value.trim() != "") {
        alert('请填写完信息再注册！');
        return false;
    }
}
//登录表单提交
form2.onsubmit = function () {
    if (loname.value.trim() == "" || password1.value.trim() == "") {

        alert('请填写完信息再登录！');
        return false;
    }
}


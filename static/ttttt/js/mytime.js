//创建计时器
function myFunction() {
    var time = new Date();
    y = time.getFullYear();
    mon = time.getMonth() + 1;
    d = time.getDate();
    var h = time.getHours();
    var ampm = h < 12 ? 'AM' : 'PM';
    if (h < 10) {
        h = '0' + h;
    } else if (h >= 12 && h < 22) {
        h = '0' + (h % 12)
    } else if (h >= 22) {
        h = h % 12;
    } else {
        h = h;
    }

    var m = time.getMinutes();
    m = m < 10 ? '0' + m : m;

    var s = time.getUTCSeconds();
    s = s < 10 ? '0' + s : s;


    var wArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    w = wArr[time.getDay()];
    //插入顶部时间
    document.getElementById("rtbox").innerHTML = y + "-" + mon + "-" + d + " " + w;
    document.getElementById("lttime").innerHTML = ampm + '  ' + h + ":" + m + ":" + s;


}

//递归调用 每秒调用一次
setInterval("myFunction()", 1000);

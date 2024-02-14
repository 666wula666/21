// 挑战页面
var sum = new Array();
var tt = 0;
$(document).ready(function () {
    var arrq = new Array();//question
    var arra = new Array();
    var arrb = new Array();
    var arrc = new Array();
    var arrd = new Array();
    var arran = new Array();//answer
    //
    var f = $(".card_wrap");
    getJSONquestions();
    var Arr = createRandom2(10, 0, 25);
    console.log(Arr);

    // 题目
    function getJSONquestions() {
        $.ajax({
            url: "js/test.json",        // 外部文件所在路径
            cache: false,
            async: false,
            dataType: "json",          // 外部文件类型
            success: function (data) {
                console.log("t");
                $.each(data, function (index, value) {
                    var q = this.q;
                    var a = this.a;
                    var b = this.b;
                    var c = this.c;
                    var d = this.d;
                    var an = this.an;
                    arrq.push(q);
                    console.log(arrq[0]);
                    arra.push(a);
                    arrb.push(b);
                    arrc.push(c);
                    arrd.push(d);
                    arran.push(an);
                });
            }
        });//ajax结束
    }

    //
    for (var i = 0; i < 10; ++i) {
        var j = i + 1;
        var cc = "card" + j;
        if (i < 3) {
            f.append("<div class='card_cont " + cc + "' id='c" + j + "'></div>");
        } else {
            f.append("<div class='card_cont' id='c" + j + "'></div>");
        }
        var ccont = $("#c" + j + "");
        ccont.append("<div class='card' id='" + j + "'></div>");
        var card = $("#" + j + "");
        var qqq = "<p class='question' id='" + i + "'><span>Q" + j + "、</span>" + arrq[Arr[i]] + "</p>\
			<ul class='select'>\
				<li><input id='q" + j + "_1' type='radio' name='r-group-" + j + "'>\
				<label for='q" + j + "_1' id='an1' >" + arra[Arr[i]] + "</label>\
				</li>\
				<li><input id='q" + j + "_2' type='radio' name='r-group-" + j + "'>\
				<label for='q" + j + "_2' id='an2' >" + arrb[Arr[i]] + "</label>\
				</li>\
				<li><input id='q" + j + "_3' type='radio' name='r-group-" + j + "'>\
				<label for='q" + j + "_3' id='an3' >" + arrc[Arr[i]] + "</label>\
				</li>\
				<li><input id='q" + j + "_4' type='radio' name='r-group-" + j + "'>\
				<label for='q" + j + "_4' id='an4' >" + arrd[Arr[i]] + "</label>\
				</li>\
			</ul>";
        if (i == 0) {
            var qq = qqq + "<div class='card_bottom'><span><b>" + j + "</b>/10</span></div>";
        } else {
            if (i < 9) {
                var qq = qqq + "<div class='card_bottom'><a class='prev'>上一题</a><span><b>" + j + "</b>/10</span></div>";
            } else {
                var qq = qqq + "<div class='card_bottom'><a class='prev'>上一题</a><a class='end'>提交</a><span><b>" + j + "</b>/10</span></div>";
            }
        }
        card.append(qq);

    }
    // 选项点击事件
    $("#an1,#an2,#an3,#an4").click(function (event) {
        /* Act on the event */
        var p = $(this).parent().parent().parent().attr('id');
        var k = p - 1;
        console.log(k);
        var t = $(this).html();
        console.log(t);
        if (t == arran[Arr[k]]) {

            sum[k] = 10;
        } else {
            sum[k] = 0;
        }
        console.log(sum[k]);
    });
    // 提交事件
    $(".end").click(function (event) {
        var ss = 0;
        console.log(sum);
        for (var i = 0; i < 10; ++i) {
            ss += sum[i];
        }
        console.log(ss);
        test();
        $('.question').html('恭喜完成挑战！');
        var cj = '<p style="font-size:32px;">您的得分为<br><span style="color:#027368;font-size:40px;font-weight:bold;margin-left:20px;">' + ss + '</span>分！</p>';
        $('.select').html(cj);
        var bt = '<a class="re">重新挑战</a>'
        $('.card_bottom').html(bt);
        // $('.card_bottom').addClass('hidden');
        // $('.question,.select,.card_bottom').addClass('hidden');
        // alert(sum);

        $(".re").click(function (event) {
            console.log("ss");
            location.reload(true);
        });
    });

    // 标记用户完成体验挑战
    function test() {

        var t = 1;
        $.ajax({
            url: "php/test.php",        // 外部文件所在路径
            cache: false,
            async: false,
            type: "POST",
            data: {tt: t},
            dataType: "TEXT",          // 外部文件类型
            success: function (data) {
                console.log("sss");

            }

        });//ajax结束
    }
});


// 生成不重复的数
function createRandom2(num, from, to) {
    var arr = [];
    var json = {};
    while (arr.length < num) {
        //产生单个随机数
        var ranNum = Math.ceil(Math.random() * (to - from)) + from;
        //通过判断json对象的索引值是否存在 来标记 是否重复
        if (!json[ranNum]) {
            json[ranNum] = 1;
            arr.push(ranNum);
        }

    }
    return arr;


}

// 动态效果
$.fn.answerSheet = function (options) {
    var defaults = {mold: 'card',};
    var opts = $.extend({}, defaults, options);
    return $(this).each(function () {
        var obj = $(this).find('.card_cont');
        var _length = obj.length,
            _b = _length - 1,
            _len = _length - 1,
            _cont = '.card_cont';
        for (var a = 1; a <= _length; a++) {
            obj.eq(_b).css({'z-index': a});
            _b -= 1;
        }
        $(this).show();
        if (opts.mold == 'card') {
            obj.find('ul li label').click(function () {
                var _idx = $(this).parents(_cont).index(),
                    _cards = obj,
                    _cardcont = $(this).parents(_cont);
                if (_idx == _len) {
                    return;
                } else {
                    setTimeout(function () {
                        _cardcont.addClass('cardn');
                        setTimeout(function () {
                            _cards.eq(_idx + 3).addClass('card3');
                            _cards.eq(_idx + 2).removeClass('card3').addClass('card2');
                            _cards.eq(_idx + 1).removeClass('card2').addClass('card1');
                            _cardcont.removeClass('card1');
                        }, 200);
                    }, 100);
                }
            });
            $('.card_bottom').find('.prev').click(function () {
                var _idx = $(this).parents(_cont).index(),
                    _cardcont = $(this).parents(_cont);
                obj.eq(_idx + 2).removeClass('card3').removeClass('cardn');
                obj.eq(_idx + 1).removeClass('card2').removeClass('cardn').addClass('card3');
                obj.eq(_idx).removeClass('card1').removeClass('cardn').addClass('card2');
                setTimeout(function () {
                    obj.eq(_idx - 1).addClass('card1').removeClass('cardn');
                }, 200);
            })
        }
    });
};
let rw = document.querySelector('.row');
let lis = rw.querySelectorAll('li');

let num = 0;
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('mouseout', function () {
        lis[i].style.backgroundColor = 'rgba(214, 215, 208, 0.5)';
    })
    lis[i].addEventListener('mousemove', function () {
        lis[i].style.backgroundColor = 'rgba(255, 255, 208, 0.5)';
    })
}
setInterval(function () {
    for (let i = 0; i < lis.length; i++) {
        lis[i].style.backgroundColor = 'rgba(214, 215, 208, 0.5)';
    }
    for (let j = 0; j < 5; j++) {
        num = Math.floor(Math.random() * 31);
        for (let i = 0; i < lis.length; i++) {

            if (num === i) {
                lis[i].style.backgroundColor = 'rgba(255, 255, 208, 0.5)';
            }
        }
    }
}, 1500)


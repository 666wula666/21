window.addEventListener('load', function () {
    let dynasty = document.querySelector('.dynasty-name');
    let crtli = document.querySelector('.current-li');
    let lis = dynasty.querySelectorAll('li');
    for (let i = 0; i < lis.length - 1; i++) {
        lis[i].addEventListener('mouseenter', function () {
            for (let j = 0; j < lis.length; j++) {
                if (i !== j) {
                    lis[j].style.backgroundColor = 'transparent';
                    lis[j].style.borderRadius = '0';
                } else {
                    lis[j].style.backgroundColor = '#c65e5e';
                    lis[j].style.borderRadius = '5px';
                }
            }

        });
        lis[i].addEventListener('mouseleave', function () {
            lis[i].style.backgroundColor = 'transparent';
            lis[i].style.borderRadius = '0';
        });
    }
    lis[15].addEventListener('mouseenter', function () {
        for (let j = 0; j < lis.length; j++) {
            if (15 !== j) {
                lis[j].style.backgroundColor = 'transparent';
                lis[j].style.borderRadius = '0';
            } else {
                lis[j].style.backgroundColor = '#c65e5e';
                lis[j].style.borderRadius = '5px';
            }
        }
    });
    lis[15].addEventListener('mouseleave', function () {
        lis[15].style.backgroundColor = 'transparent';
        lis[15].style.borderRadius = '0';
    });

    document.addEventListener('scroll', function () {
        console.log(window.pageYOffset);
        if (window.pageYOffset < 1640) {
            for (let i = 0; i < lis.length; i++) {
                lis[i].style.backgroundColor = 'transparent';
                lis[i].style.borderRadius = '0';
            }
        } else if (window.pageYOffset >= 1968 && window.pageYOffset <= 2296) {
            lis[0].style.backgroundColor = '#c65e5e';
            lis[0].style.borderRadius = '5px';
            for (let i = 0; i < lis.length; i++) {
                if (i !== 0) {
                    lis[i].style.backgroundColor = 'transparent';
                    lis[i].style.borderRadius = '0';
                }
            }
        } else if (window.pageYOffset > 2296 && window.pageYOffset <= 2512) {
            lis[1].style.backgroundColor = '#c65e5e';
            lis[1].style.borderRadius = '5px';
            for (let i = 0; i < lis.length; i++) {
                if (i !== 1) {
                    lis[i].style.backgroundColor = 'transparent';
                    lis[i].style.borderRadius = '0';
                }
            }
        } else if (window.pageYOffset > 2512 && window.pageYOffset <= 2732) {
            lis[2].style.backgroundColor = '#c65e5e';
            lis[2].style.borderRadius = '5px';
            for (let i = 0; i < lis.length; i++) {
                if (i !== 2) {
                    lis[i].style.backgroundColor = 'transparent';
                    lis[i].style.borderRadius = '0';
                }
            }
        } else if (window.pageYOffset > 2732 && window.pageYOffset <= 2842) {
            lis[3].style.backgroundColor = '##c65e5e';
            lis[3].style.borderRadius = '5px';
            for (let i = 0; i < lis.length; i++) {
                if (i !== 3) {
                    lis[i].style.backgroundColor = 'transparent';
                    lis[i].style.borderRadius = '0';
                }
            }
        } else if (window.pageYOffset > 2842 && window.pageYOffset <= 3168) {
            lis[4].style.backgroundColor = '##c65e5e';
            lis[4].style.borderRadius = '5px';
            for (let i = 0; i < lis.length; i++) {
                if (i !== 4) {
                    lis[i].style.backgroundColor = 'transparent';
                    lis[i].style.borderRadius = '0';
                }
            }
        } else if (window.pageYOffset > 3168 && window.pageYOffset <= 3716) {
            lis[5].style.backgroundColor = '#c65e5e';
            lis[5].style.borderRadius = '5px';
            for (let i = 0; i < lis.length; i++) {
                if (i !== 5) {
                    lis[i].style.backgroundColor = 'transparent';
                    lis[i].style.borderRadius = '0';
                }
            }
        } else if (window.pageYOffset > 3716 && window.pageYOffset <= 3935) {
            lis[6].style.backgroundColor = '#c65e5e';
            lis[6].style.borderRadius = '5px';
            for (let i = 0; i < lis.length; i++) {
                if (i !== 6) {
                    lis[i].style.backgroundColor = 'transparent';
                    lis[i].style.borderRadius = '0';
                }
            }
        } else if (window.pageYOffset > 3935 && window.pageYOffset <= 4044) {
            lis[7].style.backgroundColor = '#c65e5e';
            lis[7].style.borderRadius = '5px';
            for (let i = 0; i < lis.length; i++) {
                if (i !== 7) {
                    lis[i].style.backgroundColor = 'transparent';
                    lis[i].style.borderRadius = '0';
                }
            }
        } else if (window.pageYOffset > 4044 && window.pageYOffset <= 4482) {
            lis[8].style.backgroundColor = '#c65e5e';
            lis[8].style.borderRadius = '5px';
            for (let i = 0; i < lis.length; i++) {
                if (i !== 8) {
                    lis[i].style.backgroundColor = 'transparent';
                    lis[i].style.borderRadius = '0';
                }
            }
        } else if (window.pageYOffset > 4482 && window.pageYOffset <= 5138) {
            lis[9].style.backgroundColor = '#c65e5e';
            lis[9].style.borderRadius = '5px';
            for (let i = 0; i < lis.length; i++) {
                if (i !== 9) {
                    lis[i].style.backgroundColor = 'transparent';
                    lis[i].style.borderRadius = '0';
                }
            }
        } else if (window.pageYOffset > 5138 && window.pageYOffset <= 5464) {
            lis[10].style.backgroundColor = '#c65e5e';
            lis[10].style.borderRadius = '5px';
            for (let i = 0; i < lis.length; i++) {
                if (i !== 10) {
                    lis[i].style.backgroundColor = 'transparent';
                    lis[i].style.borderRadius = '0';
                }
            }
        } else if (window.pageYOffset > 5464 && window.pageYOffset <= 6012) {
            lis[11].style.backgroundColor = '#c65e5e';
            lis[11].style.borderRadius = '5px';
            for (let i = 0; i < lis.length; i++) {
                if (i !== 11) {
                    lis[i].style.backgroundColor = 'transparent';
                    lis[i].style.borderRadius = '0';
                }
            }
        } else if (window.pageYOffset > 6012 && window.pageYOffset <= 6559) {
            lis[12].style.backgroundColor = '#c65e5e';
            lis[12].style.borderRadius = '5px';
            for (let i = 0; i < lis.length; i++) {
                if (i !== 12) {
                    lis[i].style.backgroundColor = 'transparent';
                    lis[i].style.borderRadius = '0';
                }
            }
        } else if (window.pageYOffset > 6559 && window.pageYOffset <= 6888) {
            lis[13].style.backgroundColor = '#c65e5e';
            lis[13].style.borderRadius = '5px';
            for (let i = 0; i < lis.length; i++) {
                if (i !== 13) {
                    lis[i].style.backgroundColor = 'transparent';
                    lis[i].style.borderRadius = '0';
                }
            }
        } else if (window.pageYOffset > 6888) {
            lis[14].style.backgroundColor = '#c65e5e';
            lis[14].style.borderRadius = '5px';
            for (let i = 0; i < lis.length; i++) {
                if (i !== 14) {
                    lis[i].style.backgroundColor = 'transparent';
                    lis[i].style.borderRadius = '0';
                }
            }
        }
    });
});
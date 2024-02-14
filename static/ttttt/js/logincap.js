//注册提示框
// 
// -------------------------------------------------
function init() {
    var inputs = document.getElementsByTagName('input'),
        inputsLen = inputs.length,
        input,
        inputMsg,
        inputValidationMsg,
        label,
        button = document.getElementsByTagName('button')[0],
        form = document.getElementsByTagName('form')[0];

    form.addEventListener('invalid', function (e) {
        e.preventDefault();
    }, true);


    button.onclick = function () {
        inputsLen = inputs.length;

        while (inputsLen--) {
            if (inputs[inputsLen].value.length > 0) {
                return true;
            }
            next(inputs[inputsLen]).nextSibling.style.display = 'block';
        }
    }

    while (inputsLen--) {
        input = inputs[inputsLen];
        label = next(input);

        if (input.hasAttribute('data-validation-msg')) {

            inputValidationMsg = input.getAttribute('data-validation-msg');
            inputMsg = document.createElement('span');
            inputMsg.innerHTML = inputValidationMsg;


            label.parentNode.insertBefore(inputMsg, label.nextSibling);

            input.onblur = function (e) {

                e.target.classList.add('blur');
                next(e.target).nextSibling.style.display = (!this.value || this.validity.valid === false) ? 'block' : 'none';
            }
        }
    }
}

function next(elem) {
    do {
        elem = elem.nextSibling;
    }
    while (elem && elem.nodeType !== 1);
    return elem;
}

init()
var check = document.querySelectorAll('.form-login input');
var pattern = /^[a-zA-Z0-9]+([._][a-zA-Z0-9]+)*@gmail\.com$/;
check[0].onblur = function() {
    if (!pattern.test(check[0].value)) {
        check[0].classList.add('notify')
    }
    check[0].oninput = function() {
        check[0].classList.remove('notify');
    }
};
check[1].onblur = function() {
    if (check[1].value == '') {
        check[1].classList.add('notify')
    }
    check[1].oninput = function() {
        check[1].classList.remove('notify');
    }
}

function checklogin() {
    var check = document.querySelectorAll('.form-login input')
    var x = []
    for (let i = 0; i < check.length; i++) {
        x[i] = check[i].value
    }
    if (x[0] == '' || x[1] == '') {
        alert('Please fill all fields!')
    }

}
document.querySelector('.bottom-subscribe input').addEventListener('click', checklogin)
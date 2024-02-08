const form = document.getElementById('form');
const cunts = document.querySelectorAll('.required');
const span = document.querySelectorAll('.span-form');
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function setInsert(index) {
    cunts[index].style.border = '2px solid #e63636';
    span[index].style.display = 'block';
}

function removeError(index) {
    cunts[index].style.border = '';
    span[index].style.display = 'none';
}

function nameValidate() {
    if(cunts[0].value.length < 3) {
        setInsert(0);
    } else {
        removeError(0);
    }
}

function emailValidate() {
    if(!emailRegex.test(cunts[1].value)) { // Não tem Kength no !emailRegex
        setInsert(1);
    } else {
        removeError(1);
    }
}

function senhaValidate() {
    if(cunts[2].value.length < 8) {
        setInsert(2);
    } else {
        removeError(2);

    }
}

function confirmeValidate() {
    if(cunts[2].value == cunts[3].value && cunts[3].value.length >= 8) {
        removeError(3);
    } else {
        setInsert(3);
    }
}
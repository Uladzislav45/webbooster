let openModalEntry = document.querySelectorAll(".card_btn");
let showModalEntry = document.querySelectorAll(".modal");
let closeModalEntry = document.querySelectorAll(".close");

for (let i = 0; i < openModalEntry.length; i++) {
    openModalEntry[i].addEventListener("click", function (event) {
        event.preventDefault();
        showModalEntry[0].style.display = "block";
    });
};

for (let i = 0; i < closeModalEntry.length; i++) {
    closeModalEntry[i].addEventListener("click", function (event) {
        event.preventDefault();
        showModalEntry[0].style.display = "none";
    });
};


let sendMsg = document.querySelector('#form_btn');
let firstName = document.querySelector('#name');
let mobileTel = document.querySelector('#phone');
let mail = document.querySelector('#mail');
let product = document.querySelector('#product');
let msg;

sendMsg.addEventListener('click', function () {
    if (firstName.value && mobileTel.value && mail.value && product.value) {
        msg = 'Name: ' + firstName.value + ' ' + 'Tel: ' + mobileTel.value + ' ' + 'Mail: ' + mail.value + ' ' + 'Product' + product.value;
        let botLink = 'https://api.telegram.org/bot1683651810:AAHVD_shqA9F03aEcI_TYJuXwAKf-_yAB6g/sendMessage?chat_id=-483345189&text=' + msg;
        fetch(botLink);
        clearInputs();
    }
    else {
        checkInputs()
    };
});

function clearInputs() {
    let inputs = document.querySelectorAll('input');
    for (i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    };
};

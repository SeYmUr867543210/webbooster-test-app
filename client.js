let allBuyBtns = document.querySelectorAll(".buy");
let name = "Sam";
let phone = "+999999999";
let mail = "seymur2828.@mail.ru";

for (let i = 0; i < allBuyBtns.length; i++) {
    allBuyBtns[i].onclick = function(e) {
        let clickedParent = e.target.parentElement
        let modalPersonName = document.getElementById("modal_name")
        let modalPhone = document.getElementById("modal_phone")
        let modalMail = document.getElementById("modal_mail")
        let chairName = document.getElementById("modal_chairName");

        modalPersonName.innerHTML = `Имя: ${name}`;
        modalPhone.innerHTML = `Телефон: ${phone}`;
        modalMail.innerHTML = `Email: ${mail}`;
        let text = clickedParent.querySelector('.text')
        chairName.innerHTML = `Название товара:<b> ${text.innerHTML}</b>`

        modal.classList.toggle("closed");
        modalOverlay.classList.toggle("closed");
    }
}
var modal = document.querySelector("#modal"),
    modalOverlay = document.querySelector("#modal-overlay"),
    closeButton = document.querySelector("#close-button"),
    openButton = document.querySelector("#open-button");


closeButton.addEventListener("click", function() {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
});
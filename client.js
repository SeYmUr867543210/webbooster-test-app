let allBuyBtns = document.querySelectorAll(".buy");
let modelWIndowChairName = document.getElementById("chairName");

for (let i = 0; i < allBuyBtns.length; i++) {
    allBuyBtns[i].onclick = function(e) {
        let clickedParent = e.target.parentElement
        let text = clickedParent.querySelector('.text')
        modelWIndowChairName.innerHTML += text.innerHTML

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
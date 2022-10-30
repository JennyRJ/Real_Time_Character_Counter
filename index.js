const textareaE1 = document.getElementById("textarea");
const totalCountE1 = document.getElementById("total-count");
const remaningCountE1 = document.getElementById("remaining-count");

textareaE1.addEventListener("keyup", () => {
    updateCount();
});

function updateCount() {
    totalCountE1.innerText = textareaE1.value.length;
    remaningCountE1.innerText =
        textareaE1.getAttribute("maxLength") - textareaE1.value.length;
}
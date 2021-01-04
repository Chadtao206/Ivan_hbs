const inputEl = document.querySelector("#inputEl");
document.querySelector(".btn-outline-success").addEventListener("click", function () {
    console.log(inputEl.value)
    alert("YOU TYPED THIS! " + inputEl.value)
})
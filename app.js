const loginbtn = document.getElementById("login");
loginbtn.addEventListener("click", function () {

    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";

    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})
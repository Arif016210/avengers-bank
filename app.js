// Login Area Event Handler 

const loginbtn = document.getElementById("login");
loginbtn.addEventListener("click", function () {

    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";

    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
});

// Deposit Event Handler

const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function () {
    const depositAmount = document.getElementById("deposit-Amount").value;
    depositNumber = parseFloat(depositAmount);

    const courrentDeposit = document.getElementById("courrentDeposit").innerText;
    const courrentDepositNumber = parseFloat(courrentDeposit);
    const totalDeposit = depositNumber + courrentDepositNumber;
    document.getElementById("courrentDeposit").innerText = totalDeposit;
    document.getElementById("deposit-Amount").value = "";

})
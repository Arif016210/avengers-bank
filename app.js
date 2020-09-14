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
    const depositNumber = parseFloat(depositAmount);

    // const courrentDeposit = document.getElementById("courrentDeposit").innerText;
    // const courrentDepositNumber = parseFloat(courrentDeposit);
    // const totalDeposit = depositNumber + courrentDepositNumber;
    // document.getElementById("courrentDeposit").innerText = totalDeposit;

    updateSpanText("courrentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);


    document.getElementById("deposit-Amount").value = "";

})

// Withdraw Event Handler

const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click", function () {
    const withdrawAmount = document.getElementById("withdrawAmount").value;
    const withdrawNumber = parseFloat(withdrawAmount);

    // const courrentWithdraw = document.getElementById("courrentWithdraw").innerText;
    // const courrentWithdrawNumber = parseFloat(courrentWithdraw);
    // const totalWithdraw = withdrawNumber + courrentWithdrawNumber;
    // document.getElementById("courrentWithdraw").innerText = totalWithdraw;

    updateSpanText("courrentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber);



    document.getElementById("withdrawAmount").value = "";

})

function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const courrentNumber = parseFloat(current);
    const total = depositNumber + courrentNumber;
    document.getElementById(id).innerText = total;
}
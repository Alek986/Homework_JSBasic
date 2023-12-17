let withdrawalAmmount = parseInt(prompt("Enter your withdrawal amount"))
let accountBalance = 1000
function atmWithdrawal(accountBalance, withdrawalAmmount){
    if (withdrawalAmmount > accountBalance){
        console.log("Not enough money")
    }
    else if (withdrawalAmmount -= accountBalance){
        console.log(`Withdrawal successful! Remaining balance: ${????}`)
    }
}


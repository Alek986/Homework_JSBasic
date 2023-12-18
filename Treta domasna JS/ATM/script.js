let withdrawalAmmount = parseInt(prompt("Enter your withdrawal ammount"))
let accountBalance = 1000
function atmWithdrawal(accountBalance, withdrawalAmmount){
    if (withdrawalAmmount > accountBalance){
        console.log("Not enough money")
    }
    else if (withdrawalAmmount -= accountBalance){
        console.log(`Withdrawal successful! Remaining balance: ${accountBalance}`)
    }
}
let result = accountBalance - withdrawalAmmount
console.log(atmWithdrawal(accountBalance, withdrawalAmmount))

// Ne mi teknuva kako da pokaze uste kolku ammount kje ima na smetka otkako kje povlece pari "ona sto e prikazano vo 8 linija" 
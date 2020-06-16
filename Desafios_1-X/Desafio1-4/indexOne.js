const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function newTransaction(transaction){
    user.transactions.push(transaction)

    if(transaction.type === 'credit'){
        user.balance = user.balance + transaction.value
    } else{
        user.balance = user.balance - transaction.value
    }
}

function getHigherTransactionByType(type){

    let higherTransaction
    let higherValue = 0

    for (let transaction of user.transactions){
        if(transaction.type == type && transaction.value > higherValue){
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }

    return higherTransaction
}

function getAvarageTransationsValue(){
    let sum = 0
    for (let transaction of user.transactions){
        sum += transaction.value // sum = sum + transaction.value
    }

    return sum/user.transactions.length
}

function getTransactionsCount(){
    let count = {
        credit: 0,
        debit: 0,
    }
    for (let transaction of user.transactions){
        if (transaction.type == 'credit'){
            count.credit++
        } else {
            count.debit++
        }
    }

    return count
}

newTransaction({ type: 'credit', value: 50 })
newTransaction({ type: 'credit', value: 120 })
newTransaction({ type: 'debit', value: 80 })
newTransaction({ type: 'debit', value: 30 })


console.log(user.balance) // 60

console.log(getHigherTransactionByType('credit')) // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType('debit')) // { type: 'debit', value: 80 }

console.log(getAvarageTransationsValue()) // 70

console.log(getTransactionsCount()) // { credit: 2, debit: 2 }
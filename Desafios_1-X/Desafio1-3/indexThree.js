const users = [
    {
      name: "Salvio",
      recipes: [115.3, 48.7, 98.3, 14.5],
      expenses: [85.3, 13.5, 19.9]
    },
    {
      name: "Marcio",
      recipes: [24.6, 214.3, 45.3, 30.0],
      expenses: [185.3, 12.1, 120.0]
    },
    {
      name: "Lucia",
      recipes: [9.8, 120.3, 340.2, 45.3],
      expenses: [450.2, 29.9]
    }
];

function sumNumbrs(numbers) {
    let soma = 0;
    for (let number of numbers){
        soma = soma + number
    }
    
    return soma
}

function calculatesBalance(recipes, expenses){
    const sumRecipes = sumNumbrs(recipes)
    const sumExpenses = sumNumbrs(expenses)
    
    return sumRecipes - sumExpenses
}

for (let user of users){
    const balance = calculatesBalance(user.recipes , user.expenses)

    if (balance > 0){
        console.log(`${user.name} possui um saldo POSITIVO de ${balance.toFixed(2)}`) ///tFixed é um metodo para mostrar apenas dois numeros do resultado independente do qual resultado
    }else{
        console.log(`${user.name} possui um saldo NEGATIVO de ${balance.toFixed(2)}`) ///tFixed é um metodo para mostrar apenas dois numeros do resultado independente do qual resultado
    }
}

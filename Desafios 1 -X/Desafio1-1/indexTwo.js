//cálculo de aposentadoria
const person = ['Graça', 'FEMININE', 46, 29] //mudar a idade 46 para idade 60 fara com que o if seja chamado

let retirement = person[2] + person[3]

if (person[1] === 'FEMININE'){
    if (retirement >= 85) {
        console.log(`${person[0]}, por ser do sexo ${person[1]}, você poderá se aposentar!`)
    } else {
        console.log(`${person[0]}, ${person[1]}, você, infelizmente, não poderá se aposentar pois não alcançou o estabelicido pelo Governo.`)
    }
} else {
    if (retirement >= 95) {
        console.log(`${person[0]}, por ser do sexo ${person[1]}, você poderá se aposentar!`)
    } else {
        console.log(`${person[0]}, ${person[1]}, você, infelizmente, não poderá se aposentar pois não alcançou o estabelicido pelo Governo.`)
    }
}
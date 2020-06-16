//calculo de IMC
const personOne = ['Raquel', 19, 1.66, 66, 'Feninine']

let imcOne = personOne[3] / personOne[2]**2

if (imcOne >= 30) {
    console.log(`${personOne[0]}, ${personOne[4]}: você, infelizmente, está acima do peso, cuidado com a alimentação`)
} else {
    console.log(`${personOne[0]}, ${personOne[4]}: você não está acima do peso, cuidado com a aliemtnação, procure um nutricionista`)
}


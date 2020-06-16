const users = [
    { name: "Carlos", 
    tecnologias: ["HTML", "CSS"] },
    { name: "Jasmine", 
    tecnologias: ["JavaScript", "CSS"] },
    { name: "Tuane", 
    tecnologias: ["HTML", "Node.js"] }
];

for (let i = 0; i < users.length; i++){
    console.log(`${users[i].name} trabalha com ${users[i].tecnologias[0]} e com ${users[i].tecnologias[1]}`)
}

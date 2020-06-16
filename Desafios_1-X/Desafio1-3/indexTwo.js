const users = [
    { name: "Carlos", 
    tecnologias: ["HTML", "CSS"] },
    { name: "Jasmine", 
    tecnologias: ["JavaScript", "CSS"] },
    { name: "Tuane", 
    tecnologias: ["HTML", "Node.js"] }
];

for (let user of users){ //criar uma variavel variavel
    console.log(`${user.name} trabalha com ${user.tecnologias.join(' , ')}`)
}

function checkUserUseCSS(user){
       for ( let tecnologies of user.tecnologias){
           if(tecnologies == 'CSS'){
               return true
           }
        }
        return false
    }

for (let i = 0; i < users.length; i++){
    const userWorkIfCSS = checkUserUseCSS(users[i]);

    if (userWorkIfCSS){
        console.log(`O usuario ${users[i].name} trabalha com CSS`)
    }
}
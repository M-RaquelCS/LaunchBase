const user = [
    {
        name: 'Raquel',
        age: 19
    },
    {
        name: 'Thaymara',
        age: 23
    }
]

const tecnologies = [
    { 
        name: 'C++', 
        specialty: 'Desktop'
    },
    { 
        name: 'Python', 
        specialty: 'Data Science'
    },
    { 
        name: 'JavaScript', 
        specialty: 'Web/Mobile' 
    }
]

console.log(`O usuário ${user[1].name} tem ${user[1].age} anos, usa a tecnologia ${tecnologies[1].name} com especialidade em ${tecnologies[1].specialty}`)
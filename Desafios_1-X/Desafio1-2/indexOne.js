const user = {
    name: 'Raquel',
    interprise: {
        name: 'Rocketseat',
        color: 'Purple',
        focus: 'teach programming',
        address: {
            Street: 'Rua Guilherme Gembala',
            Number: 260
        }   
    }
}

console.log(` Meu nome é ${user.name}, trabalho na empresa chamada ${user.interprise.name}.
 Ela tem como cor tema o ${user.interprise.color} e o foco voltado para ${user.interprise.focus},
 localizada na ${user.interprise.address.Street}, ${user.interprise.address.Number}`)
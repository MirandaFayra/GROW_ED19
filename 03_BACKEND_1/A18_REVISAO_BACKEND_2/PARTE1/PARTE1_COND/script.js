console.log('Olá mundo')
console.log('codigo 2')

/* 
    projeto shape => 

    Se eu treinar e tomar suplementos -> vou conseguir o shape 

    Se eu não treinar => Não vou conseguir o meu shape . Vou ficar triste 

    -------

    Projeto natação => 

    Se eu fizer aula de natação e praticar -> Vou aprender a nadar e poderei tomar banho de canhoeira nas minhas viagens 

    Se eu não fizer as aulas de natação e não praticar -> Vou ficar triste, não vou aprender e vou me afogar 

    ----------

    Se clima for sol => Vai rolar o carnaScript 
    Se clima for nublado =>  Vai ter que por uma tenda para cobrir 
    Se tiver chovendo => Cancela o carnaScript

*/

// If else simples
let treino = false

if (treino){
    console.log('Parabéns , maromba!')
}else{
    console.log('Você não treinou o suficente')
}

// If else aninhado 

let peso = 60 

if (peso === 60 && treino==true ){
    console.log('O peso é igual a 60 e você treina')
} else if(peso===60  && treino==false){
    console.log('O peso é igual a 60 e você  não treina')
}else{
    console.log('Nenhuma das condições citas ')
}


// Verificação de dados 
let nome 

if(!nome){
    console.log('Insira o seu nome')
}


/*
    Se clima for sol => Vai rolar o carnaScript 
    Se clima for nublado =>  Vai ter que por uma tenda para cobrir 
    Se tiver chovendo => Cancela o carnaScript

*/

let clima = 'sol'


switch (clima) {
    case 'sol':
        console.log('teremos CarnaScript prepare o seu abadá')
    break;
       
    case 'nublado':
        console.log('teremos CarnaScript na Tendaaa prepare o seu abadá e o copão')
    break;

    case 'chovendo':
        console.log('Não teremos o Carnascript! Prepare a Netflix')
    break;
    default:
        console.log('Insira um clima válido')
    break;
}




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

/* 

EXERCICIO 1 

Uma pizzaria oferece três tamanhos de pizza:

Pequena: R$20,00
Média: R$30,00
Grande: R$40,00


Se o cliente pedir uma pizza pequena e refrigerante, o total será R$25,00..

Escreva um programa que leia o tamanho da pizza (pequena, média ou grande) e a resposta do cliente sobre o refrigerante (sim ou não). O programa deve imprimir o valor total a ser pago pelo cliente.


*/


/*

Estamos desenvolvendo o maior E-commerce da América Latina. Para isso, estamos desenvolvendo um sistema que cadastra nossos produtos e serviços , onde devemos solicitar a pessoa que está cadastrando os produtos , as seguintes informações : 


 - Id (identificador único) - Número inteiro;

- Nome do Produto ; 

- Preço do Produto (não pode ser negativo e nem menor que 20 reais) ; 

- Quantidade em Estoque (deve ser maior que 10 e par) ; 


Crie um programa que solicite a pessoa usuária cada uma das informações individualmente.

Caso a pessoa usuária não passe as informações, retorne as seguintes mensagens em tela : 


- ID =>  " Identificador não encontrado, passe um número válido " 

- Nome do Produto => "Insira um nome de produto válido "

- Preço do Produto =>  "Insira um preço de produto válido "

- Quantidade em Estoque  => "Insira uma quantidade  de produto válida para o estoque "

Após verificar cada um dos itens e ter certeza que todos foram preenchidos, precisamos verificar o valor do produto para conseguir determinar em qual categoria vai.

Se o valor do produto for par, devemos encaminhar o produto para a lista de promoção especial e mostrar na tela a seguinte informação : 

" O produto NOME_DO_PRODUTO  foi cadastrado com sucesso! Produto adicionado na nossa lista de promoções especiais "


*/



console.log('alteracao')
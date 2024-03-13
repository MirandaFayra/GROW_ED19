console.log('Olá mundo!')

//---------------- OPERADORES ---------------

/*

    > Maior que
    < Menor que
    >= Maior ou igual a
    <= Menor ou igual a
    == Igual a
    != Diferente de

*/


//---------------- IF ---------------

/* 
    if (condicao) {
    // Código a ser executado se a condição for verdadeira
    }


    if (condicao) {
        codigo para executar caso a condição seja verdadeira
    } else {
        senão, executar este código
    }
*/

/*
let chover = false

if(chover){
    //SE
    console.log(' Cai no If :nao vai pro parquinho')
}else{
    //SENAO
    console.log(' Cai no Else : Vai pro parquinho')
}
*/

//------- 

/*
let fayraComerAlface = true

if(fayraComerAlface){
    //SE
    console.log(' Cai no If : Fayra vai comer alface assado')
}else{
    //SENAO
    console.log(' Cai no Else : Fay vai comer pao de alho')
}
*/

//-------

/*
let idadeAna = 12 
let idadePedro = 38
let idadeIsa = 10 



if(idadeAna <= 14){
    console.log('Ana é crianca')
}else{
    console.log('Ana é adulto é pode trabalhar com Pedro')
}


if(idadeIsa <= 14){
    console.log('Isa é crianca')
}else{
    console.log('Isa pode trabalhar com Ana e Pedro')
}
*/ 


/*

let idadePessoaUsuaria = Number(prompt('Digite a sua idade'))
// valor do prompt = "2" => transforma "2" em 
// valor do prompt = "G" => G é igual a tipo e valor de 18 ? . Não é igual, logo vai cair no else

if(idadePessoaUsuaria >= 18){
    console.log('Já era, você pagará boleto eternamente')
}else{
    console.log('Continue brincando')
}
*/ 


/*

let resposta = prompt('Você irá viajar? Digite Sim ou Não').toLowerCase()
//Sim != sim => 

console.log(resposta)

if (resposta === 'sim') {
    console.log('Arrume as malas e boa viagem')
} else {
    console.log('Que pena, descansar é bom')
}
*/






//---------------- IF ELSE / ELSE IF ---------------

/*
    if (cond 1) {
        cai aqui se a condicao 1 for verdadeira
    } else if(cond 2){
        cai aqui se a condicao 2 for verdadeira
    }else if(cond 3){
        cai aqui se a condicao 3 for verdadeira
    }
    ...
    else{
        se nenhuma das 3 condicoes forem verdadeira cai aqui
    }

*/

/*
    toLowerCase()        |  => gold / platinum / black

    BLACK  => black      |  => Se digita qlqr outra coisa => Sistema nao entende
    black  => black      |  Nao é nenhuma dessas opt , entao vai cair no Else
    BlAcK => black       |

    PROMPT => Vazio e dou ok => retorna uma string vazia 
    PROMPT => Vazio e dou cancelar => retorna null
    
*/ 


/*


let cartao = prompt('Digite o seu cartão ( black , gold, platinum )').toLowerCase()

if(cartao === ""){
    console.log('Digite um cartao')
}else if(cartao === 'gold'){
   console.log('Você não tem desconto na sala Vip')
}else if(cartao === 'platinum'){
    console.log('Você  tem 10% desconto na sala Vip')
}else if(cartao === 'black'){
    console.log('Você  tem 100% desconto na sala Vip')
}else{
    console.log('Cartão não identificado')
}
*/ 



//---------------- OPERADORES ---------------

/*

    E  = && =>  Os dois precisam ser verdadeiros para retornar verdadeiro

    OU = || => Pelo menos um verdadeiro para retornar verdadeiro

    NEGAÇÃO = ! => Era verdadeiro vira falso, e o que era falso vira verdadeiro
    
    ! > && > || 

*/

let A = true
let B = false
let C = true 
let D = !A
let E = !B


/* 

A verdadeiro e B falso || pelo menos um precisa ser verdadeiro 

A verdeiro e C verdadeiro || pelo menos um precisa ser verdadeiro 


A verdadeiro e B falso && = falso pq no && os dois precisam ser verdadeiros 

A verdeiro e C verdadeiro && = retorna verdadeiro pq os dois são verdadeiros


*/

//console.log('1. Esse é o resultado de A && B', A && B)
//console.log('2. Esse é o resultado de A || B', A || B)
//console.log('3. Esse é o resultado de A && D', A && D)  // A = true  o D = false
//console.log('4. Esse é o resultado de A && E', A && E)  // A true  o E = true
//console.log('5. Esse é o resultado de A || E', A || E)  // A = true o E = true 
//console.log('6. Esse é o resultado de B || E', B || E) // B = falso o E = true




//---------------- SWITCH ---------------

/* 

switch (expressao) {
    case valor1:
        // Código a ser executado quando expressao é igual a valor1
    break;

    case valor2:
        // Código a ser executado quando expressao é igual a valor2
    break;

    // ... outros casos possíveis ...

    default:
    // Código a ser executado quando nenhum caso corresponde
}

*/

//let cartao = prompt('Digite o seu cartão ( black , gold, platinum )').toLowerCase()

/*
switch(cartao){
    case 'gold':
        console.log('Você não tem desconto na sala Vip')
    break;
    case 'platinum':
        console.log('Você  tem 10% desconto na sala Vip')
    break;
    case 'black':
        console.log('Você  tem 100% desconto na sala Vip')
    break;
    default:
        console.log('Cartão não identificado')
}
*/


/*
let clima = prompt('Digite o clima de hoje (nublado, chovendo, quente)').toLowerCase()

switch(clima){
    case 'nublado':
        console.log('Leve agasalho')
    break;
    case 'chovendo':
        console.log('Leve guarda-chuva')
    break;
    case 'quente':
        console.log('Leve o Protetor solar')
    break;
    default:
        console.log('Digite um clima válido, para saber o que levar')
}
*/



//let idade = Number(prompt('Digite a sua idade'))
//let salario = Number(prompt('Digite a seu salário'))

/*
    20 anos salario 10000 => tá rico 
    20 anos salario 999 => você vai ter que trabalhar bastante 
    10 anos salario 10000 => Você é criança

*/ 

/*
if( idade >= 18 && salario >= 10000){
    console.log('Tá rico')
}else if(idade >= 18 && salario < 10000){
    console.log('Você vai ter que trabalhar bastante')
}else {
    console.log('Você é criança')
}
*/





//---------------- TERNÁRIO ---------------

/* 
    (condicao) ? OQ FAZER SE FOR VERDADEIRO : OQ FAZER SE FOR FALSO
    (condicao) ? valor1 : valor; 
 */



//---------------- EX ---------------
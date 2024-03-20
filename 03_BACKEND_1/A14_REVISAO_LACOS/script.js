/*
    LAÇOS 

    Contador = variável que ajuda a percorrer o laço ( contador | i | j | k )


    Verifique e depois faça enquanto a condicao for verdadeira 

    while (condição) {
        // instruções
    }


    ///-----

    Faça pelo menos uma vez e depois verifique, continue fazendo enquanto a condicao for verdeira

    do {
        // instruções
    } while (condição);


    ///-----


     for (inicialização; condição; expressãoFinal) {
        // instruções a serem executadas repetidamente
    }

*/


/*
1. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
programa deverá calcular e mostrar:
a. A menor altura do grupo;
b. A maior altura do grupo;
*/ 


// for (inicializacao; condicao; expressao final)
// ++ = mais ele mesmo 
// numero ++ = incremento 

/*
let menorAltura = Infinity //menor que infinito é zero 
let maiorAltura = - Infinity // maior que infinito negativo 

for (let contador = 1; contador <= 3; contador++){
    
    let altura = parseFloat(prompt('Informe a altura'))

    
    //Verificacao  altura é menor que a menora altura
    if(altura < menorAltura){
        menorAltura = altura
    }

    //Verificacao  altura é maior que a maior altura
    if(altura > maiorAltura){
        maiorAltura = altura
    }
    

}
console.log(`Essa é a menor altura  ${menorAltura} e essa é a maior altura ${maiorAltura}` )
*/ 


// --------  EXERCÍCIO 1 ----------------- 

/* O fim do ano Astrológico chegou e com ele, vem a  nossa querida contagem regressiva para um novo ano astrologico. 

Pergunte para a pessoa usuária quantos dias faltam para o ano novo atrológico e imprima a seguinte frase :

"Faltam 10 dias para o ano novo astrológico. Prepare suas simpatias"

"Faltam 9 dias para o ano novo astrológico. Prepare suas simpatias"


Pergunte para a pessoa usuária => prompt('Digite quantos dias faltam para o ano novo astrologico')

- Contagem regressiva de dias 

- Pegar o dado do prompt e fazer a contagem regressiva desse dado

*/

let quantidadeDeDias = parseInt(prompt('Digite a quantidade de dias que faltam para o ano novo astrologico'))

/*
while(quantidadeDeDias !== 0){
    console.log(`Faltam ${quantidadeDeDias} dias para o ano novo astrológico. Prepare suas simpatias`)
    quantidadeDeDias --
}
*/ 

/*
do{
    console.log(`Faltam ${quantidadeDeDias} para o ano novo astrologico , prepare suas simpatias`)

    quantidadeDeDias --

}while(quantidadeDeDias > 0)

console.log(`O ano novo chegou `)
*/ 


// let quantidadeDeDias = parseInt(prompt('Digite a quantidade de dias que faltam para o ano novo astrologico'))

/*

for(let i =quantidadeDeDias; i >= 0; i--) {
    console.log ('Faltam '+ i + ' para o ano novo astrologico , prepare suas simpatias')
}
*/





//--------- EXERCICIO 2 -----------------

/* 

Você decidiu calcular quantos horas você vai praticar programação ao longo de uma semana. 

Escreva um programa que solicite ao usuário a quantidade de horas por semana, em seguida a quantidade de dias praticados . 

Calcule e imprima a quantidade total de  horas de código praticados em uma semana.

*/



//--------- EXERCICIO 3 -----------------

/*
    Crie um algoritmo que leia o valor inicial da contagem, o valor final e o incremento, mostrando em seguida todos os valores no intervalo:
    Ex: 
    Digite o primeiro Valor: 3 
    Digite o último Valor: 10 
    Digite o incremento: 2 
    Contagem: 3 5 7 9 Acabou!

*/




console.log('Olá mundo')


let salario = 1000 

/*
while(salario < 5000){
    salario += 100
    console.log(`Seu salário é ${salario}`)
}
*/

/*
    for(inicializacao; condicao para repetir; expressao final) {
        salario += 100
        console.log(`O seu salario é ${salario}`)
    }

    Salário inicial da pessoa : 

        - R$ 1000 
    
    A pessoa recebe um aumento de 100 reais: 

    A pessoa pode receber aumento até chegar no 5000 reais 

    ----

    Colocar console dentro => Imprimir todas repetiçoes 

    Colocar console fora => Imprimir o final da repetição 

*/

for(let i = 0 ; salario < 5000; i++) {
    salario += 100
    console.log(`O seu salario é ${salario}`)
}




//------------- FUNÇÕES ------------ 
console.log('Olá mundo')

/* 
    - Processar dados ;
    - Validar entradas ; 
    - Gerar saída ;
    - Controlar o fluxo de execução do programa.

*/

//-------- SINTAXE DE FUNÇÃO --------

/*
    function nomeDaFuncao(parametro1, parametro2, ...) {
        // Corpo da função
        // Pode conter uma ou mais instruções
        // Opcionalmente, pode retornar um valor usando a palavra-chave 'return'
    }


    - Parametros => Valores que passa para função quando ela é criada 

    - Retorno => Valor que a função entrega de volta ao local de onde foi chamada 

    - Argumento => Quando você passa o parametro ao chamar a função 

    - Para a função acontecer, deve ser chamada 

*/


/* 
     clica no botao
     passa o mouse por cima
     tira o mouse 
     envia os dados de um formulário 
*/

/*
function nomeDaFuncao (parametro1, parametro1){
    //o codigo execucato ao chamar a funcao 
}

nomeDaFuncao(argumento1, argumento2)

function buscarComBusaoPessoasEstudantesProChurras (bananinha){
     //o codigo execucato ao chamar a funcao 
}

function getStudents (){
    //o codigo execucato ao chamar a funcao 
}

function criarPessoaUsuaria (){

}

*/

/*
function imprimirOi (nome, idade){
    console.log('Salveeeee')
}

imprimirOi('fayra',20)
*/ 

/*
function imprimirOi (nome, idade){
    console.log('Salveeeee')
    nome = prompt('Digite o seu nome , xoven')
    idade = Number(prompt('Digite a sua idade'))
    console.log(`Bem vinde , ${nome} ! É um prazer inenarrável ter você aqui no auge dos seus ${idade}  anos`)
}

imprimirOi( )
*/ 


function verboInficnitivo (parametro){
    //corpo funcao
}

//verboInficnitivo(argumento)


//------------   FUNCÃO SEM RETORNO SEM PARAMETRO ---------
/*
     operacao simples, que não precisa armazenar esses dados 
*/

function imprimirSalve(){
    console.log('Salveeeeeee')
}

//imprimirSalve()

//------------- FUNCÃO SEM RETORNO COM PARAMETRO ----------

/* Quando o dado do parametro é relevante para o corpo da funcao  */

function imprimirNome(nome){
    console.log( `Bienvenide a nuestra ciudad ${nome}`)
}

//imprimirNome('fayra' ) // Fayra é o argumento, para o parametro nome

//------------- FUNCÃO COM RETORNO COM PARAMETRO ----------

function calcularQuadrado (lado){
    let area = lado *lado
    return area
}

const resultado = calcularQuadrado (5) //Argumento para o parametro lado

//console.log(resultado)



//------------   ESCOPO LOCAL X GLOBAL  ---------------

let passaport = 'Esse é o meu passaporte' //variável global


function irAoCarnaScript (){
    console.log(passaport)
    const rg = 'Esse é o meu rg' //varivel local
    console.log(rg)
}

//console.log(rg)

//irAoCarnaScript ( )


//-------------------- FIND INDEX -----------------

let numeros = [32,22, 18, 9, 21,6]

let buscarPosicao22= numeros.findIndex((elemento)=> elemento === 22)
let buscarPosicao9 = numeros.findIndex((numero)=> numero === 9)
let buscarPosicao42 = numeros.findIndex((numero)=> numero === 42) // Não encontrou a posiçao | não existe no array

console.log(buscarPosicao22)
console.log(buscarPosicao9)
console.log(buscarPosicao42)


//-------------------- FIND ---------------------

let encontrarMenor10 = numeros.find((numero)=> numero < 20 )
console.log(encontrarMenor10)


//-------------------- EXERCICIO --------------------

/* 

    Crie uma função chamada dobrar números , insira dois parametros que deverão ser dobrados. 

    Esta função será chamada ao abrir a página e mostrará um alerta com o resultado. Exemplo: “O dobro do número 10 é 20.”

*/



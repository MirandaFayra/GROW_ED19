//------------ ARRAYS ------------- 

/*
ARRAY => LISTA DE INFORMACOES , manipulando pelo 
index (onde o o elemento está => posição)

Array é : é uma estrutura de dados que armazena uma coleção de elementos de tal forma que cada um dos elementos possa ser identificado por, pelo menos, um índice ou uma chave. 



let arrayNumeros =[1, 3,5,68,08]

let arrayMisto = [1, 'fay', true]

let nomeDoArray = [o que vc quer armazenar , item 2, item 3 ...]


Inicia a posição 0 


let meu Array = ['Fayra','Marcele','Emanoel','Anderson',' Marcelo']

Fayra está na posição 0 
Marcele está na posição 1 
Emanoel está na posição 2
Anderson está na posição 3
Marcelo está na posição 4

let novoArray = [1, 3, 'bananinha', true]

item 1 = posicao 0  => indice 0
item 3 = posicao 1 => indice 1
item baninha = posicao 2  => indice 2
item true = posicao 3 => inidce 3

posição = onde o eleemento se encontra => índice 

nomeArray[indice_do_elemento_desejado]

novoArray[2] => bananinha
novoArray[3] => true
novoArray[1] => 3 
novoArray[0] => 1

*/

//console.log('Olá mundo!')


//console.log('Elemento na posicao 0',novoArray[0])
//console.log('Elemento na posicao 1',novoArray[1])
//console.log('Elemento na posicao 2',novoArray[2])
//console.log('Elemento na posicao 3',novoArray[3]) 
//console.log('Elemento na posicao 4',novoArray[4])
//console.log('Elemento na posicao 5',novoArray[5])

/*
    tamanho do array é a quantidade de elementos que há dentro dele 

    array vazio = tamanho dele é zero 

    quantidade elementos/ tamanho => length

    nomeDoArray.length

*/ 

let novoArray = [1, 3, 'bananinha',true, false, 'fayra'] 

//console.log('Essa é a quantidade de elementos', novoArray.length)

/* 
    Virgula dividir os elementos 

    Qtd != posicao 

    Qtd elementos => length 

    Posição => indice

    nomeArray.length  -1 => posição do último do último elemento 
*/

//         (nomeDoArray[indice])
// (selecione na minha lista  chamada nomeDoArray  [o elemento que o indice/posicao é essa])
//console.log(nomeDoArray [nomeDoArray.length -1])

// array.length => quantidade total de elementos =>  tira 1 pq o array inicia do zero 

//         (nomeDoArray[indice])
//console.log(novoArray[novoArray.length -1])

//console.log(novoArray[2])

//let arrayAlunos19 = ['Pedro', 'Alan ', 'Joana', 'Marcio', 'Cadu']

/*
     5 pessoas 
     Indice da ultima pessoa é 4 
     Indice da primeira pessoa é 0 

     Pedro => 0 
     Cadu => 4 

     arrayAlunos19.length => quantidade de elementos 
    [ arrayAlunos19.length -1 ] => posicao do ultimo 

*/


//------------ MÉTODOS -------------

/* 
    Forma de realizar operaçoes e manipular um array 

    Push => Coloca o item no final 

    Pop =>  Tira o item do final 
 
    Unshift =>  Coloca um item na frente

    Shift =>  Tira um item da frente 

    RETIRAR => array.pop() | array.shift()

    COLOCAR => array.push('colocar') | array.unshift('colocar')
*/


let arrayAlunos19 = ['Pedro', 'Alan ', 'Joana', 'Marcio', 'Cadu']

//arrayAlunos19.push('Math')
//arrayAlunos19.push('Djonathan')
//arrayAlunos19.push('Isa')

//console.log('Esse é o meu array atualizado',arrayAlunos19)

//console.log('Esse é o tamanho do meu array atualizado',arrayAlunos19.length)

//arrayAlunos19.pop()

//console.log(arrayAlunos19)

arrayAlunos19.unshift('Math')
arrayAlunos19.pop()
arrayAlunos19.unshift('Cadu')
//console.log(arrayAlunos19)
arrayAlunos19.shift()
//console.log(arrayAlunos19)

/* 
    ADICIONAR =>
        push - adicionar no final
        unshift - adicionar no inicio

    RETIRAR => 
        pop  - retirar do final
        shift - retirar do inicio

*/


//----VERIFICANDO A QUANTIDADE DE ELEMENTOS  -------------


/* 
 
Para sabermos o tamanho total de um array usamos :  array.length

Para saber o indice do último elemento de um array :  array.length - 1  (tiramos 1 pois o array inicia de zero)

*/


//---- PERCORRENDO UM ARRAY  -------------

/* 
    Podemos percorrer um array , usando o laço for usando o indice do array para acessar cada elemento individualmente 

    let meuArray = [1, 2, 3, 4, 5]


    ----- QUANDO PRECISAMOS DE INDICE --------

    for (let i = 0; i < meuArray.length; i++) {
        console.log(meuArray[i]);
    }

    ----- QUANDO NÃO PRECISAMOS DE INDICE --------

    Usamos o for of , quando não precisamos do indice, apenas dos próprios elementos. 

    for (let item of meuArray) {
        console.log(item);
    }

*/



/*

for (exp inicial ;condicao ; expressao final){}

    contador (i = indice) =>  variável que auxiliar percorrer a lista 

    let i = 0 => Iniciar percorer a lista a partir do primeiro elemento. O primeiro elemento de um array está na posicao 0

    i < meuArray.length = enquanto o indice for menor que o indice final vc realiza essa acao 

    i++ => adicionar um na posicao 
*/ 

//let meuArray = [13, 25, 30, 54, 85]



/*
for (let i = 0; i < meuArray.length; i++) {
    let numerosDobrados = meuArray[i]*2
    console.log('Esse é um elemento do  array : ',numerosDobrados)
}
*/

/*
for (let i = 0; i < meuArray.length; i++) {
    let numerosDobrados = meuArray[i]+ 10
    console.log('Esse é um elemento do  array : ',numerosDobrados)
}
*/

/*
for (let i = 0; i < meuArray.length; i++) {
    let numerosDobrados = meuArray[i]- 5
    console.log('Esse é um elemento do  array : ',numerosDobrados)
}
*/ 

/*

for (let i = 0; i < meuArray.length; i++) {
    let numerosDobrados = meuArray[i]**2
    console.log('Esse é um elemento do  array : ',numerosDobrados)
}

*/ 

/*

for (let i = 0; i < meuArray.length; i++) {
    let numerosDobrados = meuArray[i]* meuArray[i]
    console.log('Esse é um elemento do  array : ',numerosDobrados)
}
*/ 

/*

let arrayDiverso = [13, 25, 30, 54, 85, 'teste']

for (let item of arrayDiverso) {
    console.log('Esse é um item do array :',item)
}
*/





//------------- EX 1 ----------------- 

/* 
    Crie uma lista com 5 resoluções/metas de ano novo. E faça os exercícios a segui
    
    a-) Imprima a primeira resolução de ano novo da lista.

    b-) Imprima a última resolução de ano novo da lista. 

    c-) Agora imagine que você deseja fazer uma lista com várias resoluções e vc não sabe o posicionamento dos elementos.Crie um código que possa imprimir o último elemento. 

*/


let resolucaoAnoNovo = ['Perder gordura e ganhar massa magra', 'traduzir o meu linkedin para ingles', 'Ganhar e investir mais dinheiro']

//a-) 

console.log(resolucaoAnoNovo[0])


//b-)

console.log(resolucaoAnoNovo[2])


//c-)

console.log(resolucaoAnoNovo[resolucaoAnoNovo.length -1])


//d-) 

for (let i = 0; i < resolucaoAnoNovo.length; i++) {
    console.log(` Você consiguirá: ${resolucaoAnoNovo[i]}`);
}


//--- OU -------


for (const resolucao of resolucaoAnoNovo) {
    console.log(resolucao);
}




//------------- EX 2 ----------------- 

/* 
    Crie uma lista de conteúdos que serão aprendidos na formação. 


    a-) Adicione um novo conteúdo no final dessa lista . E imprima o array alterado . 

    b-) Adicione um novo conteúdo no inicio dessa lista . E imprima o array alterado . 

    c-) Retire o conteúdo no final dessa lista . E imprima o array alterado . 

    d-) Retire o conteúdo no inicio dessa lista . E imprima o array alterado .

*/


//------------- EX 3 ----------------- 

/* 
Crie um array de idades, com 8 idades e faça as seguintes operações : 

a-) O ano mudou e todas as pessoas envelheceram um ano. Imprima as novas idades 

b-) Fomos para outo planeta e a idade lá ao invés de acrescentar um ano, ela dobra. Imprima as novas idades . 

c-) Queremos saber a soma das idades . Imprima a somatória 

*/
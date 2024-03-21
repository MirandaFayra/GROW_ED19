//------------ ARRAYS ------------- 

/*
ARRAY => LISTA DE INFORMACOES , manipulando pelo 
index (onde o o elemento está => posição)

Array é : é uma estrutura de dados que armazena uma coleção de elementos de tal forma que cada um dos elementos possa ser identificado por, pelo menos, um índice ou uma chave. 

Inicia a posição 0 


let meu Array = ['Fayra','Marcele','Emanoel','Anderson',' Marcelo']

Fayra está na posição 0 
Marcele está na posição 1 
Emanoel está na posição 2
Anderson está na posição 3
Marcelo está na posição 4

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


//------------- EX 1 ----------------- 

/* 
    Crie uma lista com 5 resoluções/metas de ano novo. E faça os exercícios a segui
    
    a-) Imprima a primeira resolução de ano novo da lista.

    b-) Imprima a última resolução de ano novo da lista. 

    c-) Agora imagine que você deseja fazer uma lista com várias resoluções e vc não sabe o posicionamento dos elementos.Crie um código que possa imprimir o último elemento. 

*/


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
//----------------- OBJETO ------------- 

/* 
    - Caracteristicas

    - Armazenar valores complexos 

    - Chave e Valor 

*/


//--------------  INICIALIZANDO OBJETO -------------

//let nomeArray =[2,534,547] // => Inicia 0 indice
 
//let nomeObjeto = {} // => Chave/propriedade e valor 

//let computador ={}
//let pessoa ={}
//let carro ={}

//----------  ATRIBUINDO VALORES OBJETO -------------

/*

    Objeto computador 

    memória => 64
    armazenamento => 256 
    modelo => rbd
    processador => 7950

*/

let computador ={
    memoria : 64,
    armazenamento : 256, 
    modelo : "rbd",
    processador : 7950,
}


/*
    Objeto Pessoa ( the boss)

    nome => Marcelo Eltz 
    cpf => 000329485-22
    altura => 1.85
    peso => 70
    genero => boss

*/

let pessoa={
    nome : "Marcelo Eltz" ,
    cpf : "00032948522",
    altura : 1.85,
    peso : 70,
    genero: "boss"
}

/*
    Objeto Carro
    modelo => uno_com_escada_rebaixada
    marca => fiat
    potencia => 800000
    cor => amarelo
    qtd_portas => 2
*/


let carro ={
    modelo : "uno com escada, rebaixado",
    marca: "fiat",
    potencia : 800000 ,
    cor : "amarelo",
    qtd_portas : 2
}




//-----------------  LER OS DADOS ------------------- 

// A pessoa ${nome da pessoa}, tem um PC ${nome do PC} e o carro ${nome do Carro} 

/* 

    nome_objeto.propriedade => acessar o valor
*/
//console.log('Esse é o computador inicial',computador)
//console.log(pessoa.nome)




//------------ INSERIR NOVA PROPRIEDADE ----------------

/*
     nome_do_objeto.nova_propriedade = valor
*/

//console.log('Esse é o computador inicial',computador)

computador.cor= 'Rojo rebelde'

//console.log('Esse é o computador Vermelho',computador)

pessoa.cargo = 'O poderoso chefão'

//console.log(pessoa.cargo)

carro.modo = 'turbo'


//------------ MUDAR VALOR DE PROPRIEDADE ---------------

/* 
    nome_objeto.propriedade_mudada = valor
*/

//console.log('Esse é o computador inicial', computador.cor)

computador.cor= 'Azul Growdev'

//console.log('Esse é o computador mudado', computador.cor)


//----------  CRIAR UM OBJETO BASEADO EM OUTRO ------------

/*
spreed operator => nome_novo_objeto = {... nome_objeto_molde}

let pessoa2 ={ 
    nome : "fayra" ,
    cpf : "0003294859",
    altura : 1.65,
    peso : 65,
    genero: "teacher"
}
*/

let pessoa2 = {...pessoa}

console.log('Essa é a pessoa original',pessoa)

//console.log('Essa é a pessoa clone ',pessoa2)


//---------- INSERIR UM NOVO ELEMENTO EM UMA LISTA ---------

/* 
    Criar o clone mal do marcelo (pessoa2)
*/


pessoa2.nome = 'Evil Marcelo'
pessoa2.altura = 0.5 
pessoa2.cpf = 6666666666
pessoa2.peso = 0.2 
pessoa2.genero = 'the evil'

console.log('Essa é a pessoa clone ',pessoa2)

//---------- PERCORRENDO UMA LISTA DE OBJETOS ---------

/* 

 let nomeLista = [ ]

 nomeLista.push(o_que_add)

*/
//
let listaDeMarcelos = []
console.log(listaDeMarcelos)

/* Com o push add na lista */
listaDeMarcelos.push(pessoa)
listaDeMarcelos.push(pessoa2)
//listaDeMarcelos.pop()

console.log(listaDeMarcelos)

/* Percorri a lista e imprimi nome por nome */
let ser
for(let i = 0  ; i < listaDeMarcelos.length; i++){
     ser = listaDeMarcelos[i]
    console.log(`As pessoas são : ${ser.nome}`)

}

//------------------ EXERCICIO FIXAÇÃO --------------

/*
    Crie dois objetos contendo as seguintes propriedades e realize os itens : 

    * Nome do objeto 
    * Preco do objeto 
    * Preco após desconto
    * Insira esses objetos em uma lista de produtos 
    
    a-) Imprima a média do preço do objeto 
    b-) Imprima a média de preço após desconto 
    c-) Crie um novo produto a partir do segundo produto, com nova média e valores
    d-)Insira os 3 produtos em uma lista de produtos
    e-) Se a média de preço é menor que 50, imprimir "Estamos com desconto, acesse nosso site"
    f-) Imprima o nome todos os itens da lista de produto


*/


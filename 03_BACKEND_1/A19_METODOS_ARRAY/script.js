console.log('console.log')

//------------- ARRAY ------------- 

/*

- listas 

- lista  ordena = posicoes 

- indices => posicoes => onde elemento 

let nomeDoArray= [true , false , 123, 'bananinha', 'cuca', 'chimas'] => 6 itens - posicao ult 5
let nomeDoArray2= [true , false , 123, 'bananinha'] => 4 itens - posicao ult 3
let nomeDoArray3= [true , false ] => 2 itens - posicao ult 1

nomeDoArray.length - 1 =>  tamanho total do array - 1 => posicao final => tiramos 1 pq iniciamos do zero

true => indice 0

console.log(nomeDoArray[0]) =>acessar valor na posicao 
true  => posicao 0 => indice 0 
false => posicao 1 => indice 1 
123 => posicao 2 => indice 2 ...

quantidade total de elementos => tamanho 

let ultimoElemento = nomeDoArray[nomeDoArray.length - 1]

temos 6 itens 



-> Nao sei a posicao , o que eu to buscando => findIndex => Não encontrou elemento - 1
-> mm vermelho no pacote => filter => retornar os elementos especificos que satisfazem uma condicao => busca -> nome de usuario / email 

console.log(nomeDoArray[posicao do elemento])
tamanho do array => quantidade de elemento 
posicao ultimo elemento => tamanho do array -1 =>  nomeDoArray.length - 1


*/

//------------- PUSH  ------------- 
/*
let listaFestFood = ['X-calota', 'X-strogonoff', 'X-salada']

let batatinha ='batatinha'

//listaFestFood.push(batatinha)

console.log(listaFestFood)

listaFestFood.pop()

//console.log(listaFestFood)

let beneficiosDoColageno = ['deixa xovem','aspecto natural','procedimento não invasivo']

let mensagemFinal = 'o melhor procedimento do mundo'

beneficiosDoColageno.push(mensagemFinal)
beneficiosDoColageno.pop()

console.log(beneficiosDoColageno)
*/ 

//---------------- UNSHIFT ---------------
/*
let listaFestFood = ['X-calota', 'X-strogonoff', 'X-salada']

let batata = 'batatinha'

listaFestFood.unshift(batata)

console.log(listaFestFood)
*/ 

//---------------- SHIFT ---------------

/*
listaFestFood.shift()
console.log(listaFestFood)
*/ 


//---------------- MAP ---------------

/*
let listaDeNumeros = [1, 2, 3]

let transformarNoTriplo = listaDeNumeros .map((numero)=> numero * 3 )

console.log(transformarNoTriplo )

let burguer = ['x-tudo', 'x-calabresa', 'x-mato']

let batata = burguer.map((burg)=> burg = "batata")

console.log(batata)
*/


//---------------- FILTRO ---------------
/*
let filtrarNumeroComSeis = transformarNoTriplo.filter((numero)=> numero >3)

console.log(filtrarNumeroComSeis)
*/

let burguer = ['x-tudo', 'x-calabresa', 'x-mato']

let filtrarHamburguerVegetariano = burguer.filter((burg)=> burg == 'x-mato')
//console.log(filtrarHamburguerVegetariano)


//---------------- FIND ---------------

let listaNumerosPares = [2,4,6,8,8,10,12]

let EncontrarOito = listaNumerosPares.find((numero)=> numero===8)

//console.log(EncontrarOito)


//---------------- FINDINDEX ---------------
let acharPosiciaoDoDez = listaNumerosPares.findIndex((numero)=> numero=== 10)

//console.log(acharPosiciaoDoDez) 

//----------------- SOME ----------------- 

listaNumerosPares.some((x)=>)


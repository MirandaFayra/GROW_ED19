//---------- CONFIG BASICAS ------
import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.json())

/* 

app.METODO('endereco',(request, respose)=>{

})

resposta => status code | mensagem 
nome,preco, qtdPromocao

*/

let viagens =[]
let proximaViagem = 1


//-------- POST - CREATE ------------- 

// http://localhost:3333/viagens
app.post('/viagens',(request,response)=>{
    const nomeViagem = request.body.nomeViagem
    const precoDaViagem = Number(request.body.precoDaViagem)
    const qtdPromocao = Number(request.body.qtdPromocao)

    if(!nomeViagem){
        response.status(400).send('Passe um nome de viagem válido')
    }

    if(!precoDaViagem){
        response.status(400).send('Passe um preco da viagem válido')
    }

    if(!qtdPromocao){
        response.status(400).send('Passe uma quantidade da promocao válida')
    }

    let novaViagem ={
        id:proximaViagem,
        nomeViagem :nomeViagem,
        precoDaViagem :precoDaViagem,
        qtdPromocao:qtdPromocao
    }

    viagens.push(novaViagem)

    proximaViagem++

    response.status(201).send(`
    Viagem ${nomeViagem} criada com sucesso! 
    Preço R$ ${precoDaViagem}
    Quantidade em Promoção : ${qtdPromocao} viagens
    `)

})


//-------- GET - READ -------------

// http://localhost:3333/viagens
app.get('/viagens',(request,response)=>{

    if(viagens.length === 0){
        response.status(400).send('Não existe nenhuma viagem cadastrada. Crie uma nova viagem')
    }

    const dadosMapeados = viagens.map((viagem)=> `As viagens são : ${viagem.nomeViagem} | Preço R$ ${viagem.precoDaViagem} | Quantidade em Promoção : ${viagem.qtdPromocao}`)

    response.status(200).send(dadosMapeados)

})

//-------- UPDATE - ATUALIZAR -------------

// http://localhost:3333/viagens/:idBuscado
app.put("/viagens/:idBuscado", (request, response) => {
    const nomeDaViagem = request.body.nomeDaViagem
    const precoDaViagem = request.body.precoDaViagem
    const qtdPromocao = request.body.qtdPromocao
  
    const idBuscado = Number(request.params.idBuscado)
  
    if (!idBuscado) {
      response
        .status(400)
        .send(JSON.stringify({ Mensagem: "Favor enviar um ID válido" }))
    }
  
    const idVerificado = viagens.findIndex((viagem) => viagem.id === idBuscado)
  
    if (idVerificado === -1) {
      response
        .status(400)
        .send(JSON.stringify({ Mensagem: "Id de viagem não encontrado" }))
    }
  
    if (!nomeDaViagem) {
      response
        .status(400)
        .send(JSON.stringify({ Mensagem: "Passe o nome da viagem certo" }))
    }
  
    if (!precoDaViagem) {
      response
        .status(400)
        .send(JSON.stringify({ Mensagem: "Passe um preço válido" }))
    }
  
    if (!qtdPromocao) {
      response
        .status(400)
        .send(JSON.stringify({ Mensagem: "Passe a quantidade certa" }))
    }
  
    if (idVerificado !== -1) {
      const viagem = viagens[idVerificado]
      viagem.nomeDaViagem = nomeDaViagem
      viagem.precoDaViagem = precoDaViagem
      viagem.qtdPromocao = qtdPromocao
  
      response.status(200).send(
        JSON.stringify({
          Mensagem: `Viagem ${viagem.nomeDaViagem} atualizada com sucesso`,
          data: viagem,
        })
      )
    }
  })
  

//---------------- VERIFICAR PORTA ---------
app.listen(3333,()=> console.log('Servidor rodando na porta 3333'))
//---------- CONFIG BASICAS ------
import express from 'express'
import cors from 'cors'
import bcrypt from 'bcrypt'

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
let admins = []
let proximaAdmin = 1


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

    const dadosMapeados = viagens.map((viagem)=> `As viagens são : ${viagem.nomeViagem} | Preço R$ ${viagem.precoDaViagem} | Quantidade em Promoção : ${viagem.qtdPromocao} | Id: ${viagem.id}`)

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

//-------- DELETE - DELETAR -------------

// http://localhost:3333/viagens/:idBuscado
app.delete('/viagens/:idBuscado',(request,response)=>{
  const idBuscado = Number(request.params.idBuscado)

  if(!idBuscado){
    response
        .status(400)
        .send(JSON.stringify({ Mensagem: "Favor enviar um ID válido" }))
  }

  const posicaoDoElementoPorId = viagens.findIndex(viagem => viagem.id === idBuscado)

  if(posicaoDoElementoPorId  === -1){
    response
        .status(400)
        .send(JSON.stringify({ Mensagem: "Id não encontrado" }))
  }else{
    //Array.splice(posicao, qtd,add)
    viagens.splice(posicaoDoElementoPorId ,1)
    response
    .status(200)
    .send(JSON.stringify({ Mensagem: "Viagem deletada com sucesso" }))
  }

})


//-------- SIGNUP - CRIAR PESSOA ADM -------------

// http://localhost:3333/signup
app.post('/signup',async (request,response)=>{

  const data = request.body

  const email = data.email
  const senhaDigitada = data.senhaDigitada

  if(!email){
    response
    .status(400)
    .send(JSON.stringify({ Mensagem: "Favor inserir um email válido" }))
  }

  if(!senhaDigitada){
    response
    .status(400)
    .send(JSON.stringify({ Mensagem: "Favor inserir uma senha válida" }))
  }

  const verificarEmail = admins.find((admin)=> admin.email === email)

  if(verificarEmail){
    response
    .status(400)
    .send(JSON.stringify({ Mensagem: "Email já cadastrado no nosso banco de dados" }))
  }

  // Criptografa a senha que será digitada
  const senhaCriptografada = await bcrypt.hash(senhaDigitada,10)

  //console.log('Senha digitada',senhaDigitada)
  //console.log('Senha criptografada',senhaCriptografada)

  let novaPessoaAdministradora ={
    id : proximaAdmin,
    email : data.email, 
    senhaDigitada :senhaCriptografada
  }

  admins.push(novaPessoaAdministradora)

  proximaAdmin++

  response
    .status(201)
    .send(JSON.stringify({ Mensagem: `Pessoa administradora de email ${email}, cadastrada com sucesso!` }))

})


//-------- LOGIN - FAZER O LOGIN -------------

app.post('/login',async(request,response)=>{
  const data = request.body 

  const email = data.email 
  const senha = data.senha

  if(!email){
    response
    .status(400)
    .send(JSON.stringify({ Mensagem: "Favor inserir um email válido" }))
  }

  if(!senha){
    response
    .status(400)
    .send(JSON.stringify({ Mensagem: "Favor inserir uma senha válida" }))
  }


  const admin = admins.find(admin =>admin.email === email)

  //Login, precisa comparar a senha digitada com a criptografada. USA O COMPARE
  const senhaMatch = await bcrypt.compare(senha, admin.senhaDigitada)

  if(!senhaMatch){
    response
    .status(400)
    .send(JSON.stringify({ Mensagem: "Senha não encontrada em nosso banco.Credencial inválida" }))
  }


  response.status(200).send(JSON.stringify({ Mensagem: `Pessoa com email ${email}, foi logada com sucesso! Seja Bem-vinde!` }))

})
 

//---------------- VERIFICAR PORTA ---------
app.listen(3333,()=> console.log('Servidor rodando na porta 3333'))
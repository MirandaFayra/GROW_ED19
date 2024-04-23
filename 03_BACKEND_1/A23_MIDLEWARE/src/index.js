//---------- CONFIG BASICAS ------
import express from 'express'
import cors from 'cors'
import bcrypt from 'bcrypt'
import validarViagem from './middleware/validarViagem'
import validarUsuario from './middleware/validarUsuario'

const app = express()

app.use(cors())

app.use(express.json())

/* 

app.METODO('endereco',(req, respose)=>{

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
app.post('/viagens',(req,res)=>{
  const nomeViagem = req.body.nomeViagem
  const precoViagem = Number(req.body.precoViagem)
  const qtdPromocao = Number(req.body.qtdPromocao)

  if(!nomeViagem){
      res.status(400).send('Passe um nome de viagem válido')
  }

  if(!precoViagem){
      res.status(400).send('Passe um preco da viagem válido')
  }

  if(!qtdPromocao){
      res.status(400).send('Passe uma quantidade da promocao válida')
  }

  let novaViagem ={
      id:proximaViagem,
      nomeViagem :nomeViagem,
      precoViagem :precoViagem,
      qtdPromocao:qtdPromocao
  }

  viagens.push(novaViagem)

  proximaViagem++

  res.status(201).send(`
  Viagem ${nomeViagem} criada com sucesso! 
  Preço R$ ${precoViagem}
  Quantidade em Promoção : ${qtdPromocao} viagens
  `)

})

//-------- GET - READ -------------

// http://localhost:3333/viagens
app.get('/viagens',(req,res)=>{

    if(viagens.length === 0){
        res.status(400).send('Não existe nenhuma viagem cadastrada. Crie uma nova viagem')
    }

    const dadosMapeados = viagens.map((viagem)=> `As viagens são : ${viagem.nomeViagem} | Preço R$ ${viagem.precoViagem} | Quantidade em Promoção : ${viagem.qtdPromocao} | Id: ${viagem.id}`)

    res.status(200).send(dadosMapeados)

})

//-------- UPDATE - ATUALIZAR -------------

// http://localhost:3333/viagens/:idBuscado
app.put("/viagens/:idBuscado", (req, res) => {
  const nomeViagem = req.body.nomeViagem
  const precoViagem = req.body.precoViagem
  const qtdPromocao = req.body.qtdPromocao

  const idBuscado = Number(req.params.idBuscado)

  if (!idBuscado) {
    res
      .status(400)
      .send(JSON.stringify({ Mensagem: "Favor enviar um ID válido" }))
  }

  const idVerificado = viagens.findIndex((viagem) => viagem.id === idBuscado)

  if (idVerificado === -1) {
    res
      .status(400)
      .send(JSON.stringify({ Mensagem: "Id de viagem não encontrado" }))
  }

  if (!nomeViagem) {
    res
      .status(400)
      .send(JSON.stringify({ Mensagem: "Passe o nome da viagem certo" }))
  }

  if (!precoViagem) {
    res
      .status(400)
      .send(JSON.stringify({ Mensagem: "Passe um preço válido" }))
  }

  if (!qtdPromocao) {
    res
      .status(400)
      .send(JSON.stringify({ Mensagem: "Passe a quantidade certa" }))
  }

  if (idVerificado !== -1) {
    const viagem = viagens[idVerificado]
    viagem.nomeViagem = nomeViagem
    viagem.precoViagem = precoViagem
    viagem.qtdPromocao = qtdPromocao

    res.status(200).send(
      JSON.stringify({
        Mensagem: `Viagem ${viagem.nomeViagem} atualizada com sucesso`,
        data: viagem,
      })
    )
  }
})

//-------- DELETE - DELETAR -------------

// http://localhost:3333/viagens/:idBuscado
app.delete('/viagens/:idBuscado',(req,res)=>{
  const idBuscado = Number(req.params.idBuscado)

  if(!idBuscado){
    res
        .status(400)
        .send(JSON.stringify({ Mensagem: "Favor enviar um ID válido" }))
  }

  const posicaoDoElementoPorId = viagens.findIndex(viagem => viagem.id === idBuscado)

  if(posicaoDoElementoPorId  === -1){
    res
        .status(400)
        .send(JSON.stringify({ Mensagem: "Id não encontrado" }))
  }else{
    //Array.splice(posicao, qtd,add)
    viagens.splice(posicaoDoElementoPorId ,1)
    res
    .status(200)
    .send(JSON.stringify({ Mensagem: "Viagem deletada com sucesso" }))
  }

})


//-------- SIGNUP - CRIAR PESSOA ADM -------------

// http://localhost:3333/signup
app.post('/signup', async(req,res)=>{

  const data = req.body

  const email = data.email
  const senha = data.senha

  if(!email){
    res
    .status(400)
    .send(JSON.stringify({ Mensagem: "Favor inserir um email válido" }))
  }

  if(!senha){
    res
    .status(400)
    .send(JSON.stringify({ Mensagem: "Favor inserir uma senha válida" }))
  }

  const verificarEmail = admins.find((admin)=> admin.email === email)

  if(verificarEmail){
    res
    .status(400)
    .send(JSON.stringify({ Mensagem: "Email já cadastrado no nosso banco de dados" }))
  }

  // Criptografa a senha que será digitada
  const senhaCriptografada = await bcrypt.hash(senha,10)

  //console.log('Senha digitada',senha)
  //console.log('Senha criptografada',senhaCriptografada)

  let novaPessoaAdministradora ={
    id : proximaAdmin,
    email : data.email, 
    senha :senhaCriptografada
  }

  admins.push(novaPessoaAdministradora)

  proximaAdmin++

  res
    .status(201)
    .send(JSON.stringify({ Mensagem: `Pessoa administradora de email ${email}, cadastrada com sucesso!` }))
  
})


//-------- LOGIN - FAZER O LOGIN -------------

app.post('/login',async(req,res)=>{
  const data = req.body 

  const email = data.email 
  const senha = data.senha

  if(!email){
    res
    .status(400)
    .send(JSON.stringify({ Mensagem: "Favor inserir um email válido" }))
  }

  if(!senha){
    res
    .status(400)
    .send(JSON.stringify({ Mensagem: "Favor inserir uma senha válida" }))
  }


  const admin = admins.find(admin =>admin.email === email)

  //Login, precisa comparar a senha digitada com a criptografada. USA O COMPARE
  const senhaMatch = await bcrypt.compare(senha, admin.senha)

  if(!senhaMatch){
    res
    .status(400)
    .send(JSON.stringify({ Mensagem: "Senha não encontrada em nosso banco.Credencial inválida" }))
  }


  res.status(200).send(JSON.stringify({ Mensagem: `Pessoa com email ${email}, foi logada com sucesso! Seja Bem-vinde!` }))

})
 

//---------------- VERIFICAR PORTA ---------
app.listen(3333,()=> console.log('Servidor rodando na porta 3333'))
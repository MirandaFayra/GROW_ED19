//---------- CONFIG BASICAS ------
import express from 'express'
import cors from 'cors'
import bcrypt from 'bcrypt'
import validarViagem from './middleware/validarViagem.js'
import ValidarUsuario from './middleware/validarUsuario.js'


const app = express()

app.use(cors())

app.use(express.json())

/* 

app.METODO('endereco',(request, response)=>{

})

app.METODO('endereco',(req, res)=>{

Desestruturacao => Pegando o dado do mesmo lugar 

const data = req.body

const {par1,par2,par3} = req.body => const par1 = req.body.par1 | const par2 = req.body.par2 | const par3 = req.body.par3

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
app.post('/viagens',validarViagem ,(req,res)=>{

  const data = req.body

  let novaViagem ={
      id:proximaViagem,
      nomeViagem :data.nomeViagem,
      precoViagem :data.precoViagem,
      qtdPromocao:data.qtdPromocao
  }


  viagens.push(novaViagem)

  proximaViagem++

  res.status(201).send(`
  Viagem ${novaViagem.nomeViagem} criada com sucesso! 
  Preço R$ ${novaViagem.precoViagem}
  Quantidade em Promoção : ${novaViagem.qtdPromocao} viagens
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
app.put("/viagens/:idBuscado", validarViagem,(req, res) => {

  const data = req.body
  
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

  if (idVerificado !== -1) {
    const viagem = viagens[idVerificado]
    viagem.nomeViagem = data.nomeViagem
    viagem.precoViagem = data.precoViagem
    viagem.qtdPromocao = data.qtdPromocao

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
app.post('/signup', ValidarUsuario, async(req,res)=>{

  const data = req.body

  const verificarEmail = admins.find((admin)=> admin.email === data.email)

  if(verificarEmail){
    res
    .status(400)
    .send(JSON.stringify({ Mensagem: "Email já cadastrado no nosso banco de dados" }))
  }

  // Criptografa a senha que será digitada
  const senhaCriptografada = await bcrypt.hash(data.senha,10)

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
    .send(JSON.stringify({ Mensagem: `Pessoa administradora de email ${novaPessoaAdministradora.email}, cadastrada com sucesso!` }))
  
})


//-------- LOGIN - FAZER O LOGIN -------------

app.post('/login',ValidarUsuario,async(req,res)=>{
  const data = req.body 

  const admin = admins.find(admin =>admin.email === data.email)

  //Login, precisa comparar a senha digitada com a criptografada. USA O COMPARE
  const senhaMatch = await bcrypt.compare(data.senha, admin.senha)

  if(!senhaMatch){
    res
    .status(400)
    .send(JSON.stringify({ Mensagem: "Senha não encontrada em nosso banco.Credencial inválida" }))
  }


  res.status(200).send(JSON.stringify({ Mensagem: `Pessoa com email ${data.email}, foi logada com sucesso! Seja Bem-vinde!` }))

})
 

//---------------- VERIFICAR PORTA ---------
app.listen(3333,()=> console.log('Servidor rodando na porta 3333'))
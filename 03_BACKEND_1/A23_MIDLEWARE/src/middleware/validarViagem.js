function validarViagem(req,res,next){

    const data = req.body
    const nomeViagem = data.nomeViagem
    const precoViagem = Number(data.precoViagem)
    const qtdPromocao = Number(data.qtdPromocao)

    if(!nomeViagem){
        return res.status(400).send('Passe um nome de viagem válido')
    }

    if(!precoViagem){
        return res.status(400).send('Passe um preco da viagem válido')
    }

    if(!qtdPromocao){
        return res.status(400).send('Passe uma quantidade da promocao válida')
    }

    return next()
}

export default validarViagem
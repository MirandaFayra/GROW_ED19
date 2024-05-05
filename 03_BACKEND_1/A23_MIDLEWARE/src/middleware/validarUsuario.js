function ValidarUsuario (req, res, next) {
    const data = req.body 

    const email = data.email 
    const senha = data.senha
    
    if(!email){
        return res.status(400).send(JSON.stringify({ Mensagem: "Favor inserir um email válido" }))
    }

    if(!senha){
        return res.status(400).send(JSON.stringify({ Mensagem: "Favor inserir uma senha válida" }))
    }

    return next()
}

export default ValidarUsuario
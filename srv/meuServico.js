const { insert } = require('@sap/cds')
const cds = require('@sap/cds')
const { Estudantes } = cds.entities('sap.cap.escola')

module.exports = (srv) => {
    srv.on("READ", 'GetEstudantes', async req => {
        try {
            let filtro = req.data
            dados = await SELECT.from( Estudantes ).where(filtro)
            
            return dados
        } catch (error) {
            console.log('Erro ao ler os dados de estudantes' + error)
            throw error
        }   
    }) 
    srv.after("READ", 'GetEstudantes', data => {
        return data.map(d => {
            console.log(d)
        })
    })   
    srv.on("CREATE", "UpdateEstudantes", async (req, res) => {
        let primeiroNome = req.data.primeiro_nome
        let estudanteEmail = req.data.email

        let result = await cds
        .transaction(req)
        .run(
            UPDATE(Estudantes)
            .set({ primeiro_nome: primeiroNome })
            .where({ email: estudanteEmail })
        ).then((resolve, reject) => {
            if (typeof resolve !== 'undefined' && resolve >= 1) {
                return req.data
            } else {
                console.log("Erro ao Atualizar")
                return null
            }
        }).catch((err) =>{
            console.log("Erro ao Atualizar")
            return err
        })

        console.log(result)
        return result
    })
    srv.on("CREATE", "InsertEstudantes", async (req, res) => {
        let result = await cds
        .transaction(req)
        .run(
            INSERT.into(Estudantes)
            .entries(req.data)
        ).then((resolve, reject) => {
            if (typeof resolve !== 'undefined' && resolve >= 1) {
                return req.data
            } else {
                console.log("Nenhum dado foi inserido")
                return null
            }
        }).catch((err) =>{
            console.log("Erro ao Inserir Dados")
            return err
        })

        console.log(result)
        return result
    })

    srv.on("CREATE", "DeleteEstudantes", async (req, res) => {
        let result = await cds
        .transaction(req)
        .run(
            DELETE.from(Estudantes)
            .where({
                email: req.data.email
            })
        ).then((resolve, reject) => {
            if (typeof resolve !== 'undefined' && resolve >= 1) {
                return req.data
            } else {
                console.log("Nenhuma linha deletada")
                return null
            }
        }).catch((err) =>{
            console.log("Erro ao deletar Dados")
            return err
        })

        console.log(result)
        return result
    })
}
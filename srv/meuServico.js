const cds = require('@sap/cds')

module.exports = (srv) => {
    try {
        srv.on("READ", 'Estudantes', async req => {
            const { Estudantes } = cds.entities('sap.cap.escola')
            let dados = await SELECT.from( Estudantes )
            console.log(dados)
            return dados
        }) 
    } catch (error) {
        console.log('Erro ao ler os dados de estudantes' + error)
    }   
}
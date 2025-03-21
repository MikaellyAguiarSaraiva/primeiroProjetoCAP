const cds = require('@sap/cds')

module.exports = (srv) => {
    try {
        srv.on("READ", 'Estudantes', async req => {
            let filtro = req.data
            const { Estudantes } = cds.entities('sap.cap.escola')
            dados = await SELECT.from( Estudantes ).where(filtro)
            
            return dados
        }) 
    } catch (error) {
        console.log('Erro ao ler os dados de estudantes' + error)
    }   
}
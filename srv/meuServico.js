const cds = require('@sap/cds')

module.exports = (srv) => {
    srv.on("READ", 'Estudantes', req => {

        const { Estudantes } = cds.entities('sap.cap.escola')

        let dados = SELECT.from( Estudantes )
        console.log(dados)
        return dados
    })
}
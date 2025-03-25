using sap.cap.escola as my from '../db/Estudantes';
using from '../app/services';

service exportSRV @(path:'visualizar') {
    @readonly entity GetEstudantes as projection on my.Estudantes; 
    @updateonly entity UpdateEstudantes as projection on my.Estudantes; 
    @insertonly entity InsertEstudantes as projection on my.Estudantes; 
    @deleteonly entity DeleteEstudantes as projection on my.Estudantes; 
    entity Estudantes as projection on my.Estudantes; 
}

extend service exportSRV with {
    @readonly entity visualizar as projection on my.Estudantes {
        *,
        primeiro_nome ||' '|| ultimo_nome as nome_completo: String
    } excluding {
        data_cadastro
    }
}

//teste
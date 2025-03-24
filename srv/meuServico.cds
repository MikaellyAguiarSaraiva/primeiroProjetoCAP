using sap.cap.escola as my from '../db/Estudantes';
using from '../app/services';

service exportSRV {
    @readonly entity GetEstudantes as projection on my.Estudantes; 
    @updateonly entity UpdateEstudantes as projection on my.Estudantes; 
}
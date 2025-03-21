using sap.cap.escola as my from '../db/Estudantes';
using from '../app/services';

service exportSRV {
    //function evento (msg:String) returns String;
    @readonly entity Estudantes as projection on my.Estudantes; 
}
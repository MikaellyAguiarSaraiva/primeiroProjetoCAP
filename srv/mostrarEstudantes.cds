using sap.cap.escola as my from '../db/Estudantes';

service mostrar {

    @readonly entity Estudantes as projection on my.Estudantes;

}
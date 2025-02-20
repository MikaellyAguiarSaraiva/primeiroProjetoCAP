using sap.cap.escola as my from '../db/Estudantes';

using from '../app/services';


service mostrar {

    @readonly entity Estudantes as projection on my.Estudantes;

}
const express = require ('express'); //referencia é singleton.

module.exports = function(server){
    
    //Definir URL base para todas rotas.
    const router = express.Router();
    server.use('/api', router);
    console.log("Aqui estamos exportando o servidor");

    //Rotas de ciclo de pagamentos:
    const BillingCycle = require('../api/billingCycle/billingCycleService'); //Pegando todos métodos HTTP
    BillingCycle.register(router, '/billingCycles'); //Registrei todos WEBSERVICES dentro da URL billingCycles
}
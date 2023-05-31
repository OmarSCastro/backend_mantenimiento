const { General, GeneralSchema } = require("./general.model");
const { Economicos, EconomicosSchema } = require("./economicos.model");
const { Trabajadores, TrabajadoresSchema } = require("./trabajadores.model");



function setupModels(sequelize){

    General.init(GeneralSchema, General.config(sequelize));
    Economicos.init(EconomicosSchema, Economicos.config(sequelize));
    Trabajadores.init(TrabajadoresSchema, Trabajadores.config(sequelize));
    
    /**
     * After to do all tables, you must to define the relations
    */
    
    General.associate(sequelize.models);
    Economicos.associate(sequelize.models);
    Trabajadores.associate(sequelize.models);
   

}
module.exports = setupModels
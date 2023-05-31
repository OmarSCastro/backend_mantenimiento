const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize');
const sequelize = require('../libs/sequelize');

class generalService{
    constructor(){}

    async create(body) {
        const fecha = new Date();
        const newRegistro = {...body, "create_at":fecha};
        // const altaRegistro = await models.general.create(body);
        const altaRegistro = await models.general.create(newRegistro);
        return altaRegistro;
    };


    async update(body){
        const fecha = new Date();
        
    };  

    objeto_nuevo_registro= {
        "folio": 155,
        "economico": 100,
        "ruta": "11X",
        "tipo_mantenimiento": "correctivo",
        "descripcion_falla": "Falla en el clutch",
        "operador": 100,
        "personal_taller": 200,
        // "create_at": colocar fecha del registro
    }

    objeto_actualizacion_registro= {
        "estado": "proceso",
        "status": "disponible",
        "personal_taller_termino": 300,
        "diagnosticador": 400,
        // "update_at": colocar la fecha del registro
        // "volante": si el status es diferente a nulo, este campo va a ser igual al update_at
        // "tiempo_taller": la resta entre Volante y create
    }


    // async createAll(body){
    //     const newEconomicos = await models.economicos.bulkCreate(body.economicos);
    //     return newEconomicos;
    // };

    // async find(){

    //     console.log('****HOLASERCH****');
    //     clg

    //     // const res = await models.firma.findAll();
    //     // return res;
    // };

    // async findOne(id_firma){
    //     const firma = await models.firma.findByPk(id_firma);
    //     if (!firma) {
    //         boom.notFound('Firma no encontrada');
    //     }
    //     return firma
    // };

    // async update(id_firma, data){
    //     const firma = await this.findOne(id_firma);
    //     const res = await firma.update(data);
    //     return res
    // };

    // async delete(id_firma){
    //     const firma = await this.findOne(id_firma);
    //     await firma.destroy();
    //     return {
    //         message: 'Firma eliminada',
    //         id_firma
    //     }
    // };

}

module.exports = generalService
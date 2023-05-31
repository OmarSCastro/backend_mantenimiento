const { Model, DataTypes } = require('sequelize');

const TRABAJADORES_TABLE = 'trabajdores';

const TrabajadoresSchema = {
    credencial: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        allowNull: true,
        type: DataTypes.STRING,    
        field: "nombre"
    },
};

class Trabajadores extends Model {
    static associate(models){
        this.hasOne(models.general, {
            as: 'operadorCredencial',
            foreignKey: 'operador',
        });
        this.hasOne(models.general, {
            as: 'personalTallerCredencial',
            foreignKey: 'personal_taller',
        });
        this.hasOne(models.general, {
            as: 'personalTallerTerminoCredencial',
            foreignKey: 'personal_taller_termino',
        });
        this.hasOne(models.general, {
            as: 'diagnosticadorCredencial',
            foreignKey: 'diagnosticador',
        });
    };
    static config(sequelize){
        return {
            sequelize, 
            tableName: TRABAJADORES_TABLE,
            modelName: 'trabajadores',
            createdAt: false,
            timestamp: false,
            updatedAt: false
        };   
    };
};

module.exports = { TRABAJADORES_TABLE, TrabajadoresSchema, Trabajadores }
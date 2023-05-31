const { Model, DataTypes } = require('sequelize');

const ECONOMICOS_TABLE = 'economicos';

const EconomicosSchema = {
    numero: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    modelo: {
        allowNull: true,
        type: DataTypes.STRING,    
        field: "modelo"
    },
    kilometraje: {
        allowNull: true,
        type: DataTypes.DOUBLE,    
        field: "kilometraje"
    },
};

class Economicos extends Model {
    static associate(models){
        this.hasOne(models.general, {
            as: 'economicoRegistro',
            foreignKey: 'economico',
        });
    };
    static config(sequelize){
        return {
            sequelize, 
            tableName: ECONOMICOS_TABLE,
            modelName: 'economicos',
            createdAt: false,
            timestamp: false,
            updatedAt: false
        };   
    };
};

module.exports = { ECONOMICOS_TABLE, EconomicosSchema, Economicos }
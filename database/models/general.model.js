const { Model, DataTypes } = require('sequelize');
const { TRABAJADORES_TABLE } = require('./trabajadores.model');
const { ECONOMICOS_TABLE } = require('./economicos.model');

const GENERAL_TABLE = 'general';

const GeneralSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    folio: {
        allowNull: true,
        type: DataTypes.INTEGER,    
        field: "folio"
    },
    economico: {
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'economico',
        references: {
            model: ECONOMICOS_TABLE,   
            key: 'numero'          
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    ruta: {
        allowNull: true,
        type: DataTypes.STRING,    
        field: "ruta"
    },
    tipo_mantenimiento: {
        allowNull: true,
        type: DataTypes.STRING,    
        field: "tipo_mantenimiento"
    },
    descripcion_falla: {
        allowNull: true,
        type: DataTypes.STRING,    
        field: "descripcion_falla"
    },
    volante: {
        allowNull: true,
        type: DataTypes.DATE,    
        field: "volante"
    },
    estado: {
        allowNull: true,
        type: DataTypes.STRING,    
        field: "estado"
    },
    tiempo_taller: {
        allowNull: true,
        type: DataTypes.DATE,    
        field: "tiempo_taller"
    },
    operador: {
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'operador',
        references: {
            model: TRABAJADORES_TABLE,   
            key: 'credencial'          
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    personal_taller: {
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'personal_taller',
        references: {
            model: TRABAJADORES_TABLE,   
            key: 'credencial'          
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    personal_taller_termino: {
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'personal_taller_termino',
        references: {
            model: TRABAJADORES_TABLE,   
            key: 'credencial'          
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    diagnosticador: {
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'diagnosticador',
        references: {
            model: TRABAJADORES_TABLE,   
            key: 'credencial'          
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    status: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'status',
    },
    create_at: {
        allowNull: true,
        type: DataTypes.DATE,
        field: 'create_at',
    },
    update_at: {
        allowNull: true,
        type: DataTypes.DATE,
        field: 'update_at',
    },
    
    

    
};

class General extends Model {
    static associate(models){
        this.belongsTo(models.trabajadores, {
            as: 'operadorCredencial',
            foreignKey: 'operador',
        });
        this.belongsTo(models.trabajadores, {
            as: 'personalTallerCredencial',
            foreignKey: 'personal_taller',
        });
        this.belongsTo(models.trabajadores, {
            as: 'personalTallerTerminoCredencial',
            foreignKey: 'personal_taller_termino',
        });
        this.belongsTo(models.trabajadores, {
            as: 'diagnosticadorCredencial',
            foreignKey: 'diagnosticador',
        });
        this.belongsTo(models.economicos, {
            as: 'economicoRegistro',
            foreignKey: 'economico',
        });
    };
    static config(sequelize){
        return {
            sequelize, 
            tableName: GENERAL_TABLE,
            modelName: 'general',
            createdAt: false,
            timestamp: false,
            updatedAt: false
        };   
    };
};

module.exports = { GENERAL_TABLE, GeneralSchema, General }
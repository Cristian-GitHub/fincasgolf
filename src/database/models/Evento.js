module.exports = (sequelize, dataTypes) =>{
    
    let alias = "Evento";

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titleEvents: {
            type: dataTypes.STRING,
        },        
        textEvents: {
            type: dataTypes.TEXT,
        },
        imageEvents: {
            type: dataTypes.STRING,
        }
    }
    
    let config = {
        tableName: "eventos",
        timestamps: false
    }
    const Evento = sequelize.define (alias, cols, config);

    return Evento;
}
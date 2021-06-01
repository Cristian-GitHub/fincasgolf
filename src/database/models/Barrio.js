module.exports = (sequelize, dataTypes) =>{
    
    let alias = "Barrio";

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        textBarrio: {
            type: dataTypes.TEXT,
        },
        image01: {
            type: dataTypes.STRING,
        },       
        image02: {
            type: dataTypes.STRING,
        },       
        image03: {
            type: dataTypes.STRING,
        }       
    }
    
    let config = {
        tableName: "barrio",
        timestamps: false
    }
    const Barrio = sequelize.define (alias, cols, config);

    return Barrio;
}
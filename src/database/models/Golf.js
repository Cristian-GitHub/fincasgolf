module.exports = (sequelize, dataTypes) =>{
    
    let alias = "Golf";

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        textGolf: {
            type: dataTypes.TEXT,
        },
        textEscuelita:{
            type: dataTypes.TEXT,
        },
        textTorneos:{
            type: dataTypes.TEXT,
        },
        textNovedades:{
            type: dataTypes.TEXT,
        },        
        imageGolf: {
            type: dataTypes.STRING,
        },
        imageEscuelita:{
            type: dataTypes.STRING,
        },
        imageTorneos:{
            type: dataTypes.STRING,
        },
        imageNovedades:{
            type: dataTypes.STRING,
        }
    }
    
    let config = {
        tableName: "golf",
        timestamps: false
    }
    const Golf = sequelize.define (alias, cols, config);

    return Golf;
}
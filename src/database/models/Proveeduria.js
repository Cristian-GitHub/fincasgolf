module.exports = (sequelize, dataTypes) =>{
    
    let alias = "Proveeduria";

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imageProveeduria: {
            type: dataTypes.STRING,
        }
    }
    
    let config = {
        tableName: "proveeduria",
        timestamps: false
    }
    const Proveeduria = sequelize.define (alias, cols, config);

    return Proveeduria;
}
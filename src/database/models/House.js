module.exports = (sequelize, dataTypes) =>{
    
    let alias = "House";

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        textHouse: {
            type: dataTypes.TEXT,
        },        
        textResto: {
            type: dataTypes.TEXT,
        },
        imageHouse:{
            type: dataTypes.STRING,
        },        
        imageResto:{
            type: dataTypes.STRING,
        }
    }
    
    let config = {
        tableName: "house",
        timestamps: false
    }
    const House = sequelize.define (alias, cols, config);

    return House;
}
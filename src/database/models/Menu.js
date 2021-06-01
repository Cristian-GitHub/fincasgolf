module.exports = (sequelize, dataTypes) =>{
    
    let alias = "Menu";

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imageMenu: {
            type: dataTypes.STRING,
        }
    }
    
    let config = {
        tableName: "menu",
        timestamps: false
    }
    const Menu = sequelize.define (alias, cols, config);

    return Menu;
}
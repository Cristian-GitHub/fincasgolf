module.exports = (sequelize, dataTypes) =>{
    
    let alias = "Noticia";

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titleNoticias: {
            type: dataTypes.STRING,
        },        
        textNoticia: {
            type: dataTypes.TEXT,
        },
        imageNoticias: {
            type: dataTypes.STRING,
        }
    }
    
    let config = {
        tableName: "noticias",
        timestamps: false
    }
    const Noticia = sequelize.define (alias, cols, config);

    return Noticia;
}
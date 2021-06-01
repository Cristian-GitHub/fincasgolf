module.exports = (sequelize, dataTypes) =>{
    
    let alias = "User";

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: dataTypes.STRING,
        },
        lastName:{
            type: dataTypes.STRING,
        },
        email:{
            type: dataTypes.STRING,
        },
        password:{
            type: dataTypes.STRING,
        },
        telephoneNumber:{
            type: dataTypes.INTEGER,
        },
        roll:{
            type: dataTypes.INTEGER,
        },
        birthday:{
            type: dataTypes.DATEONLY,
        },
        age:{
            type: dataTypes.INTEGER,
        },
        homeAdress: {
            type: dataTypes.STRING,
        },
        avatar: {
            type: dataTypes.STRING,
        }
    }
    
    let config = {
        tableName: "users",
        timestamps: false
    }
    const User = sequelize.define (alias, cols, config);

    return User;
}
const Sequelize =require('sequelize')

const db = new Sequelize('shopdb', 'shopper' , 'shoppass',{
    host: 'localhost',
    dialect: 'mysql',
    pool:{
        min:0,
        max:5,
    }
})

//items require in db
// we creating a class ,User is a class,db.define require name of table
//second is collection of table has
const User = db.define('users',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name: {
        type:Sequelize.STRING,
        allowNull : false, // which means name cannot be false
    }
})

//another table
const Product = db.define('products',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name: {
        type: Sequelize.STRING,
        allowNull:false
    },
    manufacturer: Sequelize.STRING,
    price : {
        type:Sequelize.FLOAT,
        allowNull:false,
        defaultValue:0.0

    }
})

db.sync()
    .then(()=>console.log('databse has been synced'))
    .catch((err)=>console.error('error creating database'))

exports = module.exports= {
    User,Product
}




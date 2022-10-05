const mongoose = require('mongoose');

const connectDB = async () =>{
    try {
        await mongoose.connect( process.env.MONGO_URI )
        console.log("la conexión fue exitosa")
    } catch (error) {
        console.log(`No se pudo establecer la conexión con la base de datos ${error.name}: ${error.message} `)
    }
}

module.exports = connectDB
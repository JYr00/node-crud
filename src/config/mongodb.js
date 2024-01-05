const mongoose = require('mongoose');
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB', error);
    }
};

module.exports = connectDb;

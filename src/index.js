const express = require('express');

const connectDb = require('./config/mongodb');
const productRoutes = require('./routes/Product.routes');

connectDb();

const app = express();

app.use(express.json());
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

const express = require('express');
const Products = require('./data/Products');
const dotenv = require('dotenv');
const connectDatabase = require('./config/MongoDb');
const ImportData = require('./DataImport');
const productRoutes = require('./routes/ProductRoutes');
const { notFound, errorHandler } = require('./Middleware/Errors');
const userRoutes = require('./routes/UserRoutes');
const bodyParser = require('body-parser');


dotenv.config();
connectDatabase();
const app = express();


const PORT  = process.env.PORT ;

app.use(express.urlencoded());
// API
app.use('/api/import' , ImportData)
app.use('/api/products' , productRoutes)
app.use('/api/users' , userRoutes)



//ERROR HANDLING
app.use(notFound)
app.use(errorHandler)

app.get("/" , (req , res) => {
    console.log('api is running...');
    res.send('API is Running ...')

});

app.listen(PORT , console.log(`Server running port ${PORT}...`));
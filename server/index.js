const express = require('express');
const connect = require('./db')
const product = require('./routes/product')
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/products',product);

app.listen(PORT,()=>{
    console.log("server is running on port "+PORT);
})


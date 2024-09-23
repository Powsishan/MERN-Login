require('dotenv').config();
const express = require('express');
const connectDB = require('./db');
const userRoutes = require('./routes/routes');
const cors = require('cors');




const app = express();
const PORT = process.env.PORT || 4000

connectDB()

app.use(express.json());
app.use(cors());

app.use('/', userRoutes);

app.listen(PORT,() =>{
console.log(`Server is running on port ${PORT}`);
});
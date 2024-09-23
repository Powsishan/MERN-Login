require('dotenv').config();
const mongoose = require('mongoose');


const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONG_URI, {

        })
        console.log("Database Connected")
    } catch (error) {

        console.log('Database Not connected', error)
        process.exit(1);

    }


}

module.exports = connectDB
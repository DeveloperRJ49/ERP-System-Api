const config = require("../config/config");
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(
            `${process.env.MONGODB_URL}`
        );
        console.log("Connected To MongoDB");
    } catch (err) {
        console.log(err);
        return false;
    }
}
module.exports = {
    connectDB
}
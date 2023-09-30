require("dotenv").config();
const connectDB = require("./mongoDb/connect"); 

const ProductModel = require("./models/products");

const ProductJson = require("./products.json");



const start = async () => {
    try {

        await connectDB(process.env.MONGODB_URI);  // here it get connect wth mongoDb

        await ProductModel.deleteMany() // to delete all data from collection -> it is used here we want to delete the data first then save the new data

        await ProductModel.create(ProductJson);    // it add  ProductJson(products.json) data in the ProductModel(products.js) 
        console.log("success");

    } catch (error) {
        console.log(error);
    }
};

start();


// just write command in terminal nodemon productDB.js and it add that data to the mongoDB
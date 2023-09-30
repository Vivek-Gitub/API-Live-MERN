require("dotenv").config(); // it important for hide data(like password ,etc ) in app(password use in uri "mongoDB").It must we at top
const express = require("express");
const app = express();
const connectDatbase = require("./mongoDb/connect"); // here we import connect.js from mongoDB folder

const PORT = process.env.PORT || 5000;  // "process.env.PORT" it is used when we are live on server not local host 

const products_route = require("./routes/products");

app.get("/", (req, res) => {

    res.send("Hi i am live");

});


// middleware  or to set  router
app.use("/api/products", products_route); // ye jaab chalega jaab koi http;//localhost:5000/api/products


const start = async () => {
    try {
        
        // MONGODB_URI -> it is made by me in .env file that store uri of mongoDB
        await connectDatbase(process.env.MONGODB_URI); // it connect with database . for that we use async and await because mongoDB return "promises"

        app.listen(PORT , () => {
            console.log(`${PORT} Yes I am connected`);
        });

    } catch (error) {
        console.log(error);
    }
}


start();
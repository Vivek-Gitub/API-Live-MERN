// For connecting your app(website) with mongoDB check mongoose in package.json is install or not .if not so "nom i mongoose"

const mongoose = require("mongoose");

// This we get form mongoDB when we create a cluster
// uri = "mongodb+srv://mortaltechnical:yyz8izni4Lr9s5pL@thapaapiproducts.rkiblsc.mongodb.net/ThapaAPIProducts?retryWrites=true&w=majority";
// we comment above uri because it make .env file and there we use the Uri of mongoDB . which make secure



const connectDatbase = (uri) => {

    console.log(" This is MongoDB connection body called ");

    return mongoose.connect(uri, {

        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};


module.exports = connectDatbase;
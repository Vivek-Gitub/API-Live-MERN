// This we mainly define the schema and models of mongodb collection (database table)
const mongoose = require("mongoose");

// Here mongoose.schema is used for creating Schema .  On left side we write the name of files(coloum) like name ,price and on right side of ":" .
// here we in above we define type in collection (table column)
const productSchema = new mongoose.Schema({
    name: {
        type: String,                                 // Type define the data type
        required: true                                // required use used when we want this is field is must present
    },
    price : {
        type: Number,
        required: [true, "price must be provided"]           // if you do not provide requires then it print that message.
    },
    featured: {
        type: Boolean,
        default: false                           // here we define the default value
    },
    rating: {
        type: Number,
        default: 4.9
    },
    createdAt: {
        type: Date,
        default:  Date.now()                        // it give current date
    },
    company: {
        type: String,
        enum: {                                        // here we use enum because we want to enter certain values . if not it give message
            values: ["apple","samsung","dell","mi","Blackberry"],
            message: `{VALUE} is not supported`

        }
    }
});

// IMPORTANT
// Here Product is the name of the Collection(name of table)
module.exports = mongoose.model("Product", productSchema)  // NOte - name should be in Singular form . it can not be in Plural fom like Products . beacuse mangodb automatically make plural name .
// routes tell -> hame kiss kiss path pe jana hai and jaab ham waha pe jayege tooh hame kya karne hai wo haam Controller me batete hai 

const express = require("express");
const router = express.Router();

 // From that path "../controllers/products" it get Product.js file in controllers and use in this current file
const {getAllProducts, getAllProductsTesting} = require("../controllers/products")


// Now we  define your route
router.route("/").get(getAllProducts); // Yaha pe jaab koi "/" homepage of this products.js file pe jayega(Visit) tooh kya karna hai . Jaseki isme hamne "getAllProducts" function ko call kaar dia hai
router.route("/testing").get(getAllProductsTesting); 


module.exports = router;





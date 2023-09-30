
const products = require("../models/products");
const Product = require("../models/products")

const getAllProducts = async (req, res) => {
    
                            // start here
                            // in this we use regix for as we want API data name is non-case sensitive as if iphone ,Iphone, iphone10. it print all.
    const { name ,featured} = req.query;
    const queryObject = {};

    if (featured){ 
        queryObject.featured = featured;
    }

    if (name) {
        queryObject.name = { $regex: name, $options: "i"};   //--> in this we bacially get data that is non case senitive of name field.
    }

    const myData = await Product.find(queryObject);
    res.status(200).json({myData});

                            // end here

    // jo function ki body me likhte ho wahi user se server tak jata  hai
    // console.log("this is the request from user to server", req.query); 
    // const myData = await Product.find({}); // it "{}" find all data and store in constatnt variable and then we display using res.status(20).json(myData)

    const companyNameData = await Product.find({name: "iphone" }) 

     // res -> response it some data from server show on the screen
    // res.status(200).json({msg: "I am getAllProducts", statusCode: "200", data: [ "vivek patel", "police modern school"]});

    //  res.status(200).json(myData);  // -> ok now hit "http://localhost:5000/api/products/" it show all data of myData

    res.status(200).json(companyNameData);  // it show only data that has only name = "iphone" 

};

const getAllProductsTesting = async (req, res) => {

    // let here i want to get data from server(mongodb) that we save by using key- value pair means(we use req.query function)
    // we see on many website like https://localhost:3000/api/products/testing?key=value

    //  const myData = await Product.find({}); // it "{}" find all data

    //req.body, req.query and req.params are part of Express request object-> They are used by the client to send data to the server.


    // req.query -> mainly used for searching ,sorting, filtering , pagination ,etc

   // const compayNameData = await Product.find(req.query); // now you can search anything https://localhost:3000/api/products/testing?company=apple
                                                            //   https://localhost:3000/api/products/testing?name=iphone&company=apple
    //res.status(200).json(compayNameData);


                                                // Sorting example  start here

            // in reality when we type for sorting we mainly use "," like /?sort=name,price . but in implementation of code .sort() we use space.
    
    //const mySortdata = await Product.find(req.query).sort("-price");  //--> use -(minus) for decsending order like -name  
    //res.status(200).json({ mySortdata })
                                                // Sorting end here

                                                // This is also example of sorting

    // const {sort} = req.query;
    // const queryObject = {};

    // let apiData = Product.find(queryObject);

    // if(sort) { // here it true when in testing URL user type sort . same in above URL 
    //     let sortFix = sort.replace(","," ");
    //     // queryObject.sort = sortFix;
    //     apiData = apiData.sort(sortFix);
    // }

    // const mySortFixdata = await apiData
    // res.status(200).json({mySortFixdata});

                                                     // End here

                                            // select() example
    //  1)
    // const selectData = await Product.find(req.query).select("name company");

    //res.status(200).json({selectData});  // Now it give only the  data with only name field
    
    // 2)

    // const {select} = req.query;
    // const queryObject = {};
    // let apiData = Product.find(queryObject);

    // if(select){
    //     let selectFix = select.split(",").join(" ");
    //     apiData = apiData.select(selectFix);
    // }

    // const mySelectData = await apiData;
    // res.status(200).json({mySelectData});
                                                // End here

    
                                                 // Pagination start here
    const queryObject = {};
    let apiData = Product.find(queryObject)


    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;

    let skip = (page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit)

    console.log(queryObject);

    const myDataPagination = await apiData;
    res.status(200).json({myDataPagination, nbHits: myDataPagination.length}); 


};

module.exports = {getAllProducts, getAllProductsTesting};
import { products } from "./constants/product.js";
import Product from "./model/productSchema.js";

const DefaultData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);


        console.log("Data Imported Successfully");
    } catch (error) {
        console.log("Internal Error: ", error.message);
    }
}



export default DefaultData;
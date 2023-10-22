import axios from "axios";

const getProducts = async (props) => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products/category/${props}`
    );
    const products = response.data;
    return products;
  } catch (error) {
    return new Error(error).statusText;
  }
};
export default getProducts;

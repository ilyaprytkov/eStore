import { getProducts } from "@/actions/ProductsAction";
import Products from "@/components/screens/products";

const ProductsManagement = async () => {
    const products = await getProducts();

    return (
        <Products products={products}/>
    )
}

export default ProductsManagement;
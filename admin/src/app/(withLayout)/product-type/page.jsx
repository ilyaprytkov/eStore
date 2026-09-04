import ProductTypes from "@/components/screens/product-type";
import { getProductTypes } from "@/actions/productTypesAction";

const ProductTypeManagement = async () => {
    const productTypes = await getProductTypes();

    return (
        <div>
            <ProductTypes productTypes={productTypes}/>
        </div>
    )
}

export default ProductTypeManagement;
import { getUniqueProduct } from "@/actions/ProductsAction";
import { getProductTypes } from "@/actions/productTypesAction";
import EditProduct from "@/components/screens/products/edit";
import { use } from "react";

const EditProductPage = async ({searchParams, params}) => {

    const productTypes = await getProductTypes();
    const {productId} = await params;
    const product = await getUniqueProduct(parseInt(productId));

    return (
        <EditProduct
            searchParams={searchParams}
            productTypes={productTypes}
            product={product}
        />
    )
}

export default EditProductPage;
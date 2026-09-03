import { getUniqueProductType } from "@/actions/productTypesAction";
import EditProductType from "@/components/Screens/product-type/edit";

const EditProductTypePage = async ({params, searchParams}) => {
    const {productTypeId} = await params;
    const id = parseInt(productTypeId);
    const productType = await getUniqueProductType(id);

    return (
        <div>
            <EditProductType 
                searchParams={searchParams}
                productType={productType}
            />
        </div>
    )
}

export default EditProductTypePage;
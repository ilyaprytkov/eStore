import AddProducts from "@/components/screens/products/add"

const AddProductPage = ({searchParams}) => {
    return (
        <>
            <AddProducts searchParams={searchParams}/>
        </>
    )
}

export default AddProductPage;
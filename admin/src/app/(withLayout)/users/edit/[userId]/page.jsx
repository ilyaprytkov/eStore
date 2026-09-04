import EditUser from "@/components/screens/users/edit";

const EditUserPage = async ({params, searchParams}) => {
    return (
        <>
            <EditUser params={params} searchParams = {searchParams}/>
        </>
    )
}

export default EditUserPage;
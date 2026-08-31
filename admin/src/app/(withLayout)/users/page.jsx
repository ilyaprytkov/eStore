import { getUsers } from "@/actions/userActions";
import UserScreen from "@/components/Screens/users";
import Link from "next/link";

export default async function UsersPage() {

    const users = await getUsers();

    return (
        <>
            <UserScreen users={users}/>
        </>
    )
}
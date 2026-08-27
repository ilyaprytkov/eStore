import { getUsers } from "@/actions/userActions";
import { DeleteIcon, EditIcon } from "@/components/icons";
import { Button } from "@/shared/ui/button";
import Link from "next/link";

export default async function UserScreen() {
    const users = await getUsers();

    return (
        <div>
            <div className="flex justify-between">
                <h1 className="font-semibold text-2xl p-2">User Managment</h1>
                <button>
                    <Link href='/users/add'
                    className="custom-primary-btn"
                    >
                        Add User
                    </Link>
                </button>  
            </div>

            <hr className="my-5"/>

            <div className="mt-20">
                <table className="custom-table">
                    <thead className="border-y-2 border-gray-400">
                        <tr>
                            <th>Sr. No.</th>
                            <th>User Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 font-medium text-lg text-center items-center">
                        {
                            users.map((user, key)=> (
                                <tr key={key} className="items-center">
                                    <td>{key+1}</td>
                                    <td>{user.userName}</td>
                                    <td className="flex gap-x-3">
                                        <Link 
                                            href={`/users/edit/${user.id}`}
                                            className="w-fit"
                                        >
                                            <EditIcon/>
                                        </Link>
                                        <Button className="bg-transparent p-0 px-2 border-none text-red-500 shadow-none">
                                            <DeleteIcon/>
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
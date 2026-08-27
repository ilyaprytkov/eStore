import { createUser } from "@/actions/userActions";
import { View } from "@/features/view";
import {Button}  from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import Label from "@/shared/ui/label";
import { use } from "react";

export default function AddUser({searchParams}) {

    const params = use(searchParams);
    const errorMessage = params?.errorMessage;

    return(
        <div>
            <h1 className="text-3xl font-semibold p-2"> Add User </h1>

            <form 
                className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
                action={createUser}
            >
                {
                    <View.Condition if={errorMessage}>
                        <div className="col-span-2 border-red-500 rounded-xl px-5 py-3 bg-red-50 w-fit">
                            <span className="text-red-500 col-span-2 text-md my-0 font-500">{errorMessage }</span>
                        </div>
                    </View.Condition>
                }
                <div className="grid gap-2">
                    <Label required={true}>Username</Label>
                    <Input placeholder="Enter Username" name="userName"/>
                </div>
                <div className="grid gap-2">
                    <Label required={true}>User Type</Label>
                    <select className="custom-input appearance-none bg-white cursor-pointer" name="userType">
                        <option value="">Select User Type</option>
                        <option value="Super Admin">Super Admin</option>
                        <option value="Admin">Admin</option>
                        <option value="Manager">Manager</option>
                    </select>
                </div>
                <div className="grid gap-2">
                    <Label required={true}>Password</Label>
                    <Input placeholder="Example@123" name="password"/>
                </div>
                <div className="grid gap-2">
                    <Label required={true}>Confirm Password</Label>
                    <Input placeholder="Re-enter Password" name="confirmPassword"/>
                </div>
                <Button className="w-52 col-span-2 mt-2">Submit</Button>
            </form>
        </div>
    )
}
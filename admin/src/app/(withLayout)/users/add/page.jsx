import AddUser from "@/components/Screens/users/add";
import {Button}  from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import Label from "@/shared/ui/label";

export default function({searchParams}) {
    return (
        <>
            <AddUser searchParams={searchParams}/>
        </>
    )
}
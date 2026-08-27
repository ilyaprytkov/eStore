import { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/shared/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const createUser = async (formData) => {
    "use server";

    try {

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(formData.get("password"), salt);

        try {  
        const data = {
            userName : formData.get("userName"),
            userType: formData.get("userType"),
            password : formData.get("password"),
            confirmPassword : formData.get("confirmPassword")
        };

        await prisma.AdminUser.create({
            data: {
                userName : data.userName,
                userType : data.userType,
                password : hashedPassword
            }
        });
        } catch (error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError) {
                console.log("User with this name already exists");

                revalidatePath("/users", "index");
                redirect('/users'); 
            }

            throw error;
        }

        revalidatePath("/users", "index");
        redirect('/users');
    } catch {
        console.log("Creating a hash from password something went wrong");
    }
}
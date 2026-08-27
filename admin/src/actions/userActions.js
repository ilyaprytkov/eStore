"use server"; // MUST be at the very top of the file

import { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/shared/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const createUser = async (formData) => {
    const data = {
        userName: formData.get("userName"),
        userType: formData.get("userType"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword")
    };

    // 1. Validate password match on the server
    if (data.password !== data.confirmPassword) {
        return redirect(`/users/add?errorMessage=${encodeURIComponent("Passwords do not match")}`);
    }

    try {
        // 2. Check if user already exists
        const userExist = await prisma.adminUser.findUnique({
            where: {
                userName: data.userName
            }
        });

        if (userExist) {
            return redirect(`/users/add?errorMessage=${encodeURIComponent("Username already exists")}`);
        }

        // 3. Hash password and save
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(data.password, salt);

        await prisma.adminUser.create({
            data: {
                userName: data.userName,
                userType: data.userType,
                password: hashedPassword
            }
        });

        revalidatePath("/users");
    } catch (error) {
        // Rethrow redirect errors so Next.js handles navigation properly
        if (error?.digest?.startsWith("NEXT_REDIRECT")) {
            throw error;
        }

        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') { // Unique constraint violation code
                return redirect(`/users/add?errorMessage=${encodeURIComponent("Username already exists")}`);
            }
        }
        
        return redirect(`/users/add?errorMessage=${encodeURIComponent("Something went wrong")}`);
    }

    // 4. Redirect outside of the try...catch block
    redirect('/users');
};

export const getUsers = async () => {
    const users = await prisma.adminUser.findMany();

    return users;
}
"use server"

import { prisma } from "@/shared/lib/prisma"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProductType(formData) {
    const data = {
        name: formData.get("name"),
    }

    const existingProductType = await prisma.productType.findUnique({
        where: {
            name: data.name,
        }
    });

    if(!existingProductType) {

        await prisma.productType.create({
            data: {
                name: data.name,
            }
        });

    } else {
        return redirect(`/product-type/add?errorMessage=Product Type already exists.`);
    }

    revalidatePath("/product-type", "page");
    redirect("/product-type");
}
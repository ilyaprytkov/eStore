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

export async function getProductTypes() {
    const productTypes = await prisma.productType.findMany();

    return productTypes;
}

export async function getUniqueProductType(productTypeId) {
    const productType = await prisma.productType.findUnique({
        where: {
            id: parseInt(productTypeId)
        }
    });

    return productType;
}

export async function updateProductType(formData, productTypeId) {
    const data = {
        name: formData.get("name")
    };

    await prisma.productType.update({
        where: {
            id: parseInt(productTypeId)
        },
        data: {
            name: data.name
        }
    });

    revalidatePath("/product-type", "page");
    redirect("/product-type");
}

export async function deleteProductType(productTypeId) {
   await prisma.productType.delete({
        where: {
            id: productTypeId
        }
   });

   revalidatePath("/product-type", "page")
}
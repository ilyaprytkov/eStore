"use server";

import { prisma } from "@/shared/lib/prisma";
import { redirect } from "next/navigation";
import path from "node:path";
import fs from "fs";
import { writeFile } from "node:fs";
import { revalidatePath } from "next/cache";

const UPLOAD_DIR = path.resolve("public/uploads");

export async function createProduct(formData) {
    const data = {
        name : formData.get("name"),
        description : formData.get("description"),
        sellPrice : formData.get("sellPrice"),
        mrp : formData.get("mrp"),
        smallSize : formData.get("smallSize"),
        mediumSize : formData.get("mediumSize"),
        largeSize : formData.get("largeSize"),
        productTypeId : formData.get("productType"),
        isActive : formData.get("isActive"),
    };

    for(const value of Object.values(data)) {
        if(!value?.trim()) {
            return redirect(`/products/add?errorMessage=Please fill all required fields.`);
        }
    }

    const productType = await prisma.productType.findUnique({
        where : {
            id: parseInt(data.productTypeId)
        }
    })

    if(!productType) {
        return redirect(`/products/add?errorMessage=Product Type not found. Please try with different product type.`);
    }

    const totalStock = parseInt(data.smallSize) + parseInt(data.mediumSize) + parseInt(data.largeSize);
    const file = formData.get("image");
    let imagePath = "";

    if(file) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        if(!fs.existsSync(UPLOAD_DIR)) {
            fs.mkdirSync(UPLOAD_DIR);
        }
        const filename = Date.now()+path.extname(file.name);
        imagePath = `uploads/${filename}`;

        const fullPath = path.join(process.cwd(), "public", imagePath);
        await writeFile(fullPath, buffer, err => {
            if(err) {
                console.error(err);
            } else {
                console.log("image created succesfully");
            }
        });
    }

    await prisma.product.create({
        data:{
            name : data.name,
            description : data.description,
            sellPrice : parseFloat(data.sellPrice),
            mrp : parseFloat(data.mrp),
            image : imagePath,
            currentStock : totalStock,
            productTypeId : parseInt(data.productTypeId),
            isActive : data.isActive==="on"?true : false,
            smallSize : parseInt(data.smallSize),
            mediumSize : parseInt(data.mediumSize),
            largeSize : parseInt(data.largeSize)
        }
    });

    revalidatePath("/products", "page");
    redirect("/products");
}

export async function getProducts() {
    const products = await prisma.product.findMany({
        include : {
            productType : true
        }
    });

    return products;
}

export async function getUniqueProduct(productId) {
    const product = await prisma.product.findUnique({
        where:{
            id : parseInt(productId)
        },
        include : {
            productType : true
        } 
    })

    return product;
}

export async function updateProduct(productId, formData, existingImage) {
        const data = {
        name : formData.get("name"),
        description : formData.get("description"),
        sellPrice : formData.get("sellPrice"),
        mrp : formData.get("mrp"),
        smallSize : formData.get("smallSize"),
        mediumSize : formData.get("mediumSize"),
        largeSize : formData.get("largeSize"),
        productTypeId : formData.get("productType"),
        isActive : formData.get("isActive"),
    };

    for(const [key, value] of Object.entries(data)) {
        if(!value?.trim()) {
            if(key === "isActive") {
                if(value === null) {
                    data.key = "false";
                    continue;
                }
            }
            return redirect(`/products/add?errorMessage=Please fill all required fields.`);
        }
    }

    const productType = await prisma.productType.findUnique({
        where : {
            id: parseInt(data.productTypeId)
        }
    })

    if(!productType) {
        return redirect(`/products/add?errorMessage=Product Type not found. Please try with different product type.`);
    }

    const totalStock = parseInt(data.smallSize) + parseInt(data.mediumSize) + parseInt(data.largeSize);
    const file = formData.get("image");
    let imagePath = existingImage;

    if(file && file.size>0) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        if(!fs.existsSync(UPLOAD_DIR)) {
            fs.mkdirSync(UPLOAD_DIR);
        }
        const filename = Date.now()+path.extname(file.name);
        imagePath = `uploads/${filename}`;

        const fullPath = path.join(process.cwd(), "public", imagePath);
        await writeFile(fullPath, buffer, err => {
            if(err) {
                console.error(err);
            } else {
                console.log("image created succesfully");
            }
        });
    }

    await handleDeleteImage(existingImage);

    await prisma.product.update({
        where: {
            id : parseInt(productId)
        },
        data:{
            name : data.name,
            description : data.description,
            sellPrice : parseFloat(data.sellPrice),
            mrp : parseFloat(data.mrp),
            image : imagePath,
            currentStock : totalStock,
            productTypeId : parseInt(data.productTypeId),
            isActive : data.isActive==="on"?true : false,
            smallSize : parseInt(data.smallSize),
            mediumSize : parseInt(data.mediumSize),
            largeSize : parseInt(data.largeSize)
        }
    });

    revalidatePath("/products", "page");
    redirect("/products");
}

export async function deleteProduct(product) {
    handleDeleteImage(product.image);

    await prisma.product.delete({
        where: {
            id : product.id
        }
    });

    revalidatePath("/products", "page");
}

export async function handleDeleteImage(imagePath) {
    if(imagePath) {
        const existingImagePath = path.join(process.cwd(), "public", imagePath);
        if(fs.existsSync(existingImagePath)) {
            fs.unlinkSync(existingImagePath);
        }
    }
}
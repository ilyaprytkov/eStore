"use client"

import { useState } from "react";
import DeleteConformationModal from "@/components/ui/ConformationModal";
import Link from "next/link";
import { DeleteIcon, EditIcon } from "@/shared/ui/icons";
import { Button } from "@/shared/ui/button";
import { View } from "@/features/view";
import Image from "next/image";
import { cn } from "@/shared/lib/utils";

const Products = ({products}) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); 
    const [selectedProduct, setSelectedProduct] = useState();

    const handleDelete = async () => {
        await deleteUser(selectedId);
        setIsDeleteModalOpen(false);
        setSelectedId(null);
    }

    return (
         <div>
            <div className="flex justify-between">
                <h1 className="font-semibold text-2xl p-2">Products Managment</h1>
                <button>
                    <Link href='/products/add'
                    className="custom-primary-btn"
                    >
                        Add Product
                    </Link>
                </button>  
            </div>

            <hr className="my-5"/>

            <div className="mt-20">
                <table className="custom-table">
                    <thead className="border-y-2 border-gray-400">
                        <tr>
                            <th>Product</th>
                            <th>Product Type</th>
                            <th>MRP</th>
                            <th>Selling Price</th>
                            <th>Current Stock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 font-medium text-lg text-center items-center">
                        {
                            products.map((product) => (
                                <tr key={product.id}>
                                    <td className="grid grid-cols-[auto_1fr] gap-3"> 
                                        <Image
                                            src={"/" + product.image}
                                            alt={product.name}
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            className="w-20 h-20 object-cover"
                                        />
                                        <div className="flex flex-col self-center">
                                            <span>{product.name}</span>
                                            <span className="text-sm text-gray-500 truncate max-w-52">
                                                {product.description}
                                            </span>
                                        </div>
                                    </td>
                                    <td>{product.productType.name || "-"}</td>
                                    <td>{product.mpr || "0"}</td>
                                    <td>{product.sellPrice || "0"}</td>
                                    <td>{product.currentStock}</td>
                                    <td 
                                        className={cn(product.isActive ? "text-green-500" : "text-red-500")}
                                    >
                                        {product.isActive ? "Active" : "Inactive"}
                                    </td>
                                    <td>
                                        <div className="flex self-center gap-x-3">
                                            <Link 
                                                href={`/product/edit/${product.id}`}
                                                className="w-fit"
                                            >
                                                <EditIcon/>
                                            </Link>
                                            <Button 
                                                className="bg-transparent p-0 px-2 border-none text-red-500 shadow-none"
                                                onClick={()=>{
                                                    setIsDeleteModalOpen(true);
                                                    setSelectedId(product);
                                                }}
                                            >
                                                <DeleteIcon/>
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <View.Condition if={isDeleteModalOpen}>
                    <DeleteConformationModal 
                        setIsOpen={setIsDeleteModalOpen}
                        onCancel={()=>setIsDeleteModalOpen(false)}
                        handleConfirm={handleDelete}
                    />
                </View.Condition>
            </div>
        </div>
    )
};

export default Products;
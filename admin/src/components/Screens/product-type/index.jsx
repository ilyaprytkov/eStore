"use client";

import { deleteProductType } from "@/actions/productTypesAction";
import DeleteConformationModal from "@/components/ui/ConformationModal";
import { View } from "@/features/view";
import { Button } from "@/shared/ui/button";
import { DeleteIcon, EditIcon } from "@/shared/ui/icons";
import Link from "next/link";
import { useState } from "react";


const ProductTypes = ({productTypes}) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedId, setSelectedId] = useState();

    const handleDelete = async () => {
        await deleteProductType(selectedId);
        setIsDeleteModalOpen(false);
        setSelectedId(null);
    } 

    return (
        <div>
            <div className="flex justify-between">
                <h1 className="font-semibold text-2xl p-2">Product Type Managment</h1>
                <button>
                    <Link href='/product-type/add'
                    className="custom-primary-btn"
                    >
                        Add Product Type
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
                            productTypes.map((productType, key)=> (
                                <tr key={productType.id} className="items-center">
                                    <td>{key+1}</td>
                                    <td>{productType.name}</td>
                                    <td className="flex gap-x-3">
                                        <Link 
                                            href={`/product-type/edit/${productType.id}`}
                                            className="w-fit"
                                        >
                                            <EditIcon/>
                                        </Link>
                                        <Button 
                                            className="bg-transparent p-0 px-2 border-none text-red-500 shadow-none"
                                            onClick={()=>{
                                                setIsDeleteModalOpen(true);
                                                setSelectedId(productType.id);
                                            }}
                                        >
                                            <DeleteIcon/>
                                        </Button>
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
}

export default ProductTypes;
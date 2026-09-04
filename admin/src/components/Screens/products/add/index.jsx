import { View } from "@/features/view";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import Label from "@/shared/ui/label";
import { use } from "react";

const AddProducts = ({searchParams}) => {
    const {errorMessage} = use(searchParams);

    return (
         <div>
            <h1 className="text-3xl font-semibold p-2"> Add Product </h1>

            <form 
                className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
            >
                {
                    <View.Condition if={errorMessage}>
                        <div className="col-span-2 border-red-500 rounded-xl px-5 py-3 bg-red-50 w-fit">
                            <span className="text-red-500 col-span-2 text-md my-0 font-500">{errorMessage }</span>
                        </div>
                    </View.Condition>
                }
                <div className="grid gap-2">
                    <Label required={true}>Product Name</Label>
                    <Input placeholder="Enter Product Name" name="name"/>
                </div>
                <div className="grid gap-2">
                    <Label required={true}>Product Type</Label>
                    <select className="custom-input appearance-none bg-white cursor-pointer" name="productType">
                        <option value="">Select Product Type</option>
                        <option value="Kid's Clothing">Kid's Clothing</option>
                        <option value="Men's Clothing">Men's Clothing</option>
                    </select>
                </div>
                <div className="grid gap-2">
                    <Label required={true}>MRP</Label>
                    <Input placeholder="Enter MRP" name="mrp"/>
                </div>
                <div className="grid gap-2">
                    <Label required={true}>Selling Price</Label>
                    <Input 
                        type="number" 
                        placeholder="Enter Selling Price" name="sellPrice"
                    />
                </div>
                <div className="grid gap-2">
                    <Label required={true}>Image</Label>
                    <Input 
                        type="file" name="image"
                    />
                </div>
                <div className="grid gap-2">
                    <Label required={true}>Stock of Small Size</Label>
                    <Input 
                        type="number" 
                        placeholder="Enter Stock of Small Size" 
                        name="smallSize"
                    />
                </div>
                <div className="grid gap-2">
                    <Label required={true}>Stock of Medium Size</Label>
                    <Input
                        type="number"
                        placeholder="Enter Stock of Medium Size" 
                        name="mediumSize"
                    />
                </div>
                <div className="grid gap-2">
                    <Label required={true}>Stock of Large Size</Label>
                    <Input 
                        type="number"
                        placeholder="Enter Stock of Large Size" 
                        name="largeSize"/>
                </div>
                <div>
                    <Label required={true}>Product Status</Label>
                    <input type="checkbox" name="isActive"/>
                </div>
                <div className="grid col-span-2 gap-2">
                    <Label required={true}>Description</Label>
                    <textarea
                        className="custom-input h-auto"
                        name="description"
                        rows={5}
                        placeholder="Enter Product Description"
                    />
                </div>
                <Button className="w-52 col-span-2 mt-2">Submit</Button>
            </form>
        </div>
    )
}

export default AddProducts;
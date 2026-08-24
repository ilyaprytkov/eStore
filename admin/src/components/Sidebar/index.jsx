import Link from "next/link";
import Image from "next/image";
import { HomeIcon, ShoppingBagIcon, SwatchIcon, UserIcon } from "../icons";

export default function Sidebar() {
    return (
       <div className="sidebar-main">
            <div className="ml-10 pt-5">
                <h1 className="text-3xl font-bold">eStore</h1>
            </div>
            <ul className="mx-auto text-lg flex flex-col mt-15">
                {
                    [{name: "Dashbboard", path: "/", icon: <HomeIcon/>}, 
                    {name: "Users", path: "/users", icon: <UserIcon/>}, 
                    {name: "Product Type", path: "/product-types", icon: <SwatchIcon/>}, 
                    {name: "Products", path: "/products", icon: <ShoppingBagIcon/>}].map((item, key) => {
                        return (
                            <li key={key}>
                                <Link href={item.path}>
                                    <div className="sidebar-list-item">
                                        <span className="mx-2">{item.icon}</span>
                                        {item.name}
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="sidebar-usercard">
                <div className="flex flex-row m-5 mb-8">
                    <Image
                        height={50}
                        width={50}
                        src="/user.svg"
                        alt="User Avatar"
                        radius="sm"
                    />
                    <div className="m-auto text-lg">John Doe</div>
                </div>
            </div>
       </div>
    );
}
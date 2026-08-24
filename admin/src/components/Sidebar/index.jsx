import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
    return (
       <div>
            <div>
                <h1>eStore</h1>
            </div>
            <ul>
                {
                    [{name: "Dashbboard", path: "/"}, 
                    {name: "Users", path: "/users"}, 
                    {name: "Product Types", path: "/product-types"}, 
                    {name: "Products", path: "/products"}].map((item, key) => {
                        return (
                            <li key={key}>
                                <Link href={item.path}>
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                <div>
                    <Image
                        height={50}
                        width={50}
                        src="/user.svg"
                        alt="User Avatar"
                        radius="sm"
                    />
                    <div>John Doe</div>
                </div>
            </div>
       </div>
    );
}
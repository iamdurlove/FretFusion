import { Link } from "@inertiajs/react";
import React from "react";

const MenuLink = () => {
    return (
        <div className="title flex justify-center lg:justify-end space-x-5 text-sm">
            <Link href={route("home")}>Home</Link>
            <Link href={route("about")}>About</Link>
            <Link href={route("contact")}>Contact</Link>
            <Link href={route("products")}>FretFusion Products</Link>
        </div>
    );
};

export default MenuLink;

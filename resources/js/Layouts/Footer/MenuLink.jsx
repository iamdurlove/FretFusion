import { Link } from "@inertiajs/react";
import React from "react";

const MenuLink = () => {
    return (
        <div className="title flex justify-center lg:justify-end space-x-5 text-sm">
            <Link href={route("home")}>Home</Link>
            <Link href={route("about")}>About</Link>
            {/* <Link href={route("contact-us")}>Contacto</Link> */}
            <Link href={route("home")}>FretFusion</Link>
        </div>
    );
};

export default MenuLink;

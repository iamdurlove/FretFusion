import React from "react";
import { Link } from "@inertiajs/react";

const Pagination = ({ links }) => {
    return (
        <nav className="text-center mt-4">
            {links.map((link, index) => (
                <span key={index} className="p-2">
                    <Link
                        // preserveScroll
                        href={link.url || "#"}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className={
                            "inline-block py-2 px-3 rounded-lg text-black-200 text-s " +
                            (link.active ? "bg-gray-950 text-white " : " ") +
                            (!link.url
                                ? "!text-gray-450 cursor-not-allowed"
                                : "hover:bg-gray-950 hover:text-white")
                        }
                    ></Link>
                </span>
            ))}
        </nav>
    );
};

export default Pagination;

import React, { useState } from "react";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import ProfileDropdown from "./ProfileDropdown";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    const { auth } = usePage().props;
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const linksNavbar = [
        {
            route: "home",
            title: "Home",
        },
        {
            route: "products",
            title: "Our Products",
        },
        {
            route: "about",
            title: "About Us",
        },
        {
            route: "contact",
            title: "Contact",
        },
    ];

    return (
        <nav className="border-b drop-shadow-lg text-white  border-gray-100 bg-black ">
            <div className="px-20 container mx-auto ">
                <div className="grid h-16 grid-cols-3 items-center justify-between lg:h-20">
                    <div className="flex">
                        <div className="hidden lg:flex lg:gap-6 ">
                            {linksNavbar.map((item, key) => (
                                <NavLink
                                    className="active"
                                    key={key}
                                    href={route(item.route)}
                                    active={route().current(item.route)}
                                >
                                    <h1>{item.title}</h1>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Link href="/">
                            <h1 className="text-center text-4xl font-bold text-white">
                                FretFusion
                            </h1>
                        </Link>
                    </div>

                    <div className="hidden gap-1 lg:flex lg:items-center lg:justify-end ">
                        <FaUserCircle />
                        {auth.user ? (
                            <ProfileDropdown auth={auth} />
                        ) : (
                            <div className="flex gap-5">
                                <Link
                                    className="btn btn-md "
                                    href={route("login")}
                                >
                                    Login
                                </Link>
                                <Link
                                    className="btn btn-md "
                                    href={route("register")}
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>

                    <div className="-mr-2 flex items-center justify-end lg:hidden">
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    (previousState) => !previousState
                                )
                            }
                            className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={
                                        !showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={
                                        showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={
                    (showingNavigationDropdown ? "block" : "hidden") +
                    " lg:hidden"
                }
            >
                <div className="space-y-1 pt-2 pb-3">
                    {linksNavbar.map((item, key) => (
                        <ResponsiveNavLink
                            key={key}
                            href={route(item.route)}
                            active={route().current(item.route)}
                        >
                            <h1>{item.title}</h1>
                        </ResponsiveNavLink>
                    ))}
                </div>
                {auth.user && (
                    <div className="border-t border-gray-200 pt-4 pb-1">
                        <div className="px-4">
                            <h1>{auth.user.name}</h1>

                            <div>
                                <span className="font-text text-sm text-gray-500">
                                    {auth.user.email}
                                </span>
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                <h1>Salir</h1>
                            </ResponsiveNavLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

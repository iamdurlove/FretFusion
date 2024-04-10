import React from "react";
import Dropdown from "@/Components/Dropdown";
import { BsCartCheckFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import NavLink from "@/Components/NavLink";

const ProfileDropdown = ({ auth }) => {
    return (
        <div className="flex items-center gap-6">
            <div className="relative text-nowrap">
                <Dropdown>
                    <Dropdown.Trigger>
                        <span className="inline-flex ">
                            <button
                                type="button"
                                className="title inline-flex items-center border border-transparent  text-sm hover:text-gray-300 focus:outline-none"
                            >
                                {auth.user.name}
                                <FaAngleDown className="ml-1 h-4 w-4 " />
                            </button>
                        </span>
                    </Dropdown.Trigger>

                    <Dropdown.Content>
                        <Dropdown.Link href={route("dashboard")} method="get">
                            My Profile
                        </Dropdown.Link>
                        <Dropdown.Link
                            href={route("profile.edit")}
                            method="get"
                        >
                            Edit Profile
                        </Dropdown.Link>
                        <Dropdown.Link
                            href={route("logout")}
                            method="post"
                            as="button"
                        >
                            Logout
                        </Dropdown.Link>
                    </Dropdown.Content>
                </Dropdown>
            </div>
            <NavLink
                href={route("cart.index")}
                active={route().current("cart.index") ? true : false}
            >
                <div className="flex items-center ">
                    <BsCartCheckFill className="h-5 w-5 " />
                    Carts
                </div>
            </NavLink>
        </div>
    );
};

export default ProfileDropdown;

import React from "react";

import { Head, usePage } from "@inertiajs/react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
const AppLayout = ({ children, title = "" }) => {
    const isError = usePage();

    return (
        <div className="min-h-screen bg-white">
            <Head title={title} />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default AppLayout;

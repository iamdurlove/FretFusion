import React from "react";
import AppLayout from "@/Layouts/AppLayout";
import { usePage } from "@inertiajs/react";

const Home = () => {
    const { auth } = usePage().props;
    console.log(auth);
    return (
        <AppLayout title="Home">
            <div className="container mx-auto">
                <div className="flex justify-center items-center h-screen">
                    <h1 className="text-4xl font-bold text-center">
                        Welcome to FretFusion,{" "}
                        {auth.user ? auth.user.name : "Guest"}
                    </h1>
                </div>
            </div>
        </AppLayout>
    );
};

export default Home;

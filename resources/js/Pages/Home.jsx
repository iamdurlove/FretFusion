import React from "react";
import AppLayout from "@/Layouts/AppLayout";

const Home = () => {
    return (
        <AppLayout title="Home">
            <div className="container mx-auto">
                <div className="flex justify-center items-center h-screen">
                    <h1 className="text-4xl font-bold text-center">
                        Welcome to FretFusion
                    </h1>
                </div>
            </div>
        </AppLayout>
    );
};

export default Home;

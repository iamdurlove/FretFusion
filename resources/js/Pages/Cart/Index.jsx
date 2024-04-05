import AppLayout from "@/Layouts/AppLayout";
import React from "react";
import { usePage } from "@inertiajs/react";

const Index = () => {
    const { carts } = usePage().props;
    console.log(carts);
    return (
        <AppLayout title="Dashboard">
            <div className="container mx-auto">
                <div className="flex justify-center items-center h-screen"></div>
            </div>
        </AppLayout>
    );
};

export default Index;

import AppLayout from "@/Layouts/AppLayout";
import React from "react";

const Product = () => {
    return (
        <AppLayout title="Our Products">
            <div className="container mx-auto">
                <div className="flex justify-center items-center h-screen">
                    <h1 className="text-4xl font-bold text-center">
                        Our Products
                    </h1>
                </div>
            </div>
        </AppLayout>
    );
};

export default Product;

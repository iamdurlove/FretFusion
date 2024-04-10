import AppLayout from "@/Layouts/AppLayout";
import { usePage } from "@inertiajs/react";
import React from "react";

const ProductShow = () => {
    const props = usePage().props;
    const product = props.product;
    console.log(product);
    return (
        <>
            <AppLayout title="Product">
                <div className="container mx-auto">
                    <div className="flex justify-center items-center pt-10">
                        <h1 className="text-4xl font-bold text-center">
                            Product
                        </h1>
                    </div>
                </div>
            </AppLayout>
        </>
    );
};

export default ProductShow;

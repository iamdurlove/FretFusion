import AppLayout from "@/Layouts/AppLayout";
import React from "react";
import { usePage } from "@inertiajs/react";

const Product = () => {
    const { products } = usePage().props;
    console.log(products);
    return (
        <AppLayout title="Our Products">
            <div className="container mx-auto">
                <div className="flex justify-center items-center h-screen">
                    <h1 className="text-4xl font-bold text-center">
                        Our Products
                    </h1>
                </div>
            </div>

            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white p-4 shadow-md rounded-md"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />
                            <h1 className="text-lg font-bold mt-2">
                                {product.name}
                            </h1>
                            <p className="text-sm text-gray-500">
                                {product.description}
                            </p>
                            <p className="text-sm text-gray-500">
                                Price: {product.price}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
};

export default Product;

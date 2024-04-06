import AppLayout from "@/Layouts/AppLayout";
import React from "react";
import { usePage } from "@inertiajs/react";

const Index = () => {
    const { carts } = usePage().props;
    console.log(carts);
    return (
        <AppLayout title="Cart">
            <div className="container mx-auto">
                <div className="flex justify-center items-center h-screen">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h1 className="text-2xl font-bold mb-4">Cart</h1>
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="border p-2">Product</th>
                                    <th className="border p-2">Price</th>
                                    <th className="border p-2">Quantity</th>
                                    <th className="border p-2">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {carts.map((cart) => (
                                    <tr key={cart.id}>
                                        <td className="border p-2">
                                            {cart.product.name}
                                        </td>
                                        <td className="border p-2">
                                            {cart.product.price}
                                        </td>
                                        <td className="border p-2">
                                            {cart.quantity}
                                        </td>
                                        <td className="border p-2">
                                            {cart.product.price * cart.quantity}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default Index;

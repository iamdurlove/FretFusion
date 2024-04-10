import AppLayout from "@/Layouts/AppLayout";
import React from "react";
import { router, usePage } from "@inertiajs/react";

const Index = () => {
    const { carts, errors } = usePage().props;
    console.log(carts);
    console.log(errors);

    const deleteCart = (cid) => {
        return () => {
            console.log(cid);
            router.delete(`/cart/${cid}`);
        };
    };

    return (
        <AppLayout title="Cart">
            {/* {success && <div className="alert alert-success">{success}</div>} */}
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
                                    <th className="border p-2">Actions</th>
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
                                        <td className="border p-2">
                                            <button
                                                className="bg-red-500 text-white p-1 rounded"
                                                onClick={deleteCart(cart.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="mt-4">
                            <h2 className="text-xl font-bold mb-2">Checkout</h2>
                            <div className="flex justify-between items-center">
                                <span className="font-bold">Total:</span>
                                <span className="text-green-500 font-bold">
                                    $
                                    {carts.reduce(
                                        (total, cart) =>
                                            total +
                                            cart.product.price * cart.quantity,
                                        0
                                    )}
                                </span>
                            </div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default Index;

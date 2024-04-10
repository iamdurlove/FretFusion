import SingleProduct from "@/Components/SingleProduct";
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
                        <SingleProduct
                            product={product.name}
                            price={product.price}
                            description={product.description}
                            image={product.image}
                            pid={product.id}
                        />
                    </div>
                </div>
            </AppLayout>
        </>
    );
};

export default ProductShow;

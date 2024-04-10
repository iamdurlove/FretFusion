import { Link } from "@inertiajs/react";
import React from "react";

const ProductItem = ({ product, price, id, image }) => {
    return (
        <div className="max-w-2xl">
            <div className="shadow-md rounded-lg max-w-sm bg-base-100">
                <Link href={route("products.show", id)}>
                    <img
                        className="rounded-t-lg p-8"
                        src={image}
                        alt="product image"
                    />
                </Link>
                <div className="px-5 pb-5">
                    <Link href={route("products.show", id)}>
                        <h3 className="font-semibold text-xl tracking-tight mb-5 text-accent-content">
                            {product}
                        </h3>
                    </Link>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-accent-content">
                            ${price}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;

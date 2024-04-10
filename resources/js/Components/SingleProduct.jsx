import React from "react";
import QuantityInput from "./QuantityInput";
import { FaShoppingCart } from "react-icons/fa";
import { router } from "@inertiajs/react";

const SingleProduct = ({ image, product, price, description, pid }) => {
    const storeCart = (pid) => {
        return () => {
            console.log(pid);
            router.post("/cart", {
                product_id: pid,
            });
        };
    };
    return (
        <>
            <div className="grid grid-cols-2 max-w-7xl mx-auto mt-5 max-lg:grid-cols-1 max-lg:mx-5">
                <div className="product-images flex flex-col justify-center max-lg:justify-start">
                    <img
                        src={image}
                        className="w-96 text-center border border-gray-600 cursor-pointer"
                        alt={product}
                    />
                    {/* <div className="other-product-images mt-1 grid grid-cols-3 w-96 gap-y-1 gap-x-2 max-sm:grid-cols-2 max-sm:w-64">
                        {productData?.additionalImageUrls.map(
                            (imageObj, index) => (
                                <img
                                    src={`https://${imageObj}`}
                                    key={nanoid()}
                                    onClick={() => setCurrentImage(index)}
                                    alt={productData.name}
                                    className="w-32 border border-gray-600 cursor-pointer"
                                />
                            )
                        )}
                    </div> */}
                </div>
                <div className="single-product-content flex flex-col gap-y-5 max-lg:mt-2">
                    <h2 className="text-5xl max-sm:text-3xl text-accent-content">
                        {product}
                    </h2>

                    <p className="text-3xl text-error">${price}</p>
                    <div className="text-xl max-sm:text-lg text-accent-content">
                        {description}
                    </div>
                    {/* <div className="text-2xl">
                        <SelectSize
                            sizeList={productData?.availableSizes}
                            size={size}
                            setSize={setSize}
                        />
                    </div> */}
                    <div>
                        <label htmlFor="Quantity" className="sr-only">
                            Quantity
                        </label>

                        {/* <div className="flex items-center gap-1">
                            <QuantityInput quantity="1" setQuantity="2" />
                        </div> */}
                    </div>
                    <div className="flex flex-row gap-x-2 max-sm:flex-col max-sm:gap-x">
                        <button
                            onClick={storeCart(pid)}
                            className="btn bg-blue-600 hover:bg-blue-500 text-white"
                            // onClick={() => {
                            //     if (loginState) {
                            //         dispatch(addToCart(product));
                            //     } else {
                            //         toast.error(
                            //             "You must be logged in to add products to the cart"
                            //         );
                            //     }
                            // }}
                        >
                            <FaShoppingCart className="text-xl mr-1" />
                            Add to cart
                        </button>

                        {/* {product?.isInWishList ? (
                            <button
                                className="btn bg-blue-600 hover:bg-blue-500 text-white"
                                onClick={() => {
                                    if (loginState) {
                                        removeFromWishlistHandler(product);
                                    } else {
                                        toast.error(
                                            "You must be logged in to remove products from the wishlist"
                                        );
                                    }
                                }}
                            >
                                <FaHeart className="text-xl mr-1" />
                                Remove from wishlist
                            </button>
                        ) : (
                            <button
                                className="btn bg-blue-600 hover:bg-blue-500 text-white"
                                onClick={() => {
                                    if (loginState) {
                                        addToWishlistHandler(product);
                                    } else {
                                        toast.error(
                                            "You must be logged in to add products to the wishlist"
                                        );
                                    }
                                }}
                            >
                                <FaHeart className="text-xl mr-1" />
                                Add to wishlist
                            </button>
                        )} */}
                    </div>
                    <div className="other-product-info flex flex-col gap-x-2">
                        <div className="badge bg-gray-700 badge-lg font-bold text-white p-5 mt-2">
                            Brand: Brand
                        </div>
                        <div className="badge bg-gray-700 badge-lg font-bold text-white p-5 mt-2">
                            Gender: Gender
                        </div>
                        {/* <div
                            className={
                                productData?.isInStock
                                    ? "badge bg-gray-700 badge-lg font-bold text-white p-5 mt-2"
                                    : "badge bg-gray-700 badge-lg font-bold text-white p-5 mt-2"
                            }
                        >
                            In Stock: {productData?.isInStock ? "Yes" : "No"}
                        </div> */}
                        <div className="badge bg-gray-700 badge-lg font-bold text-white p-5 mt-2">
                            SKU: SKU
                        </div>
                        {/* <div className="badge bg-gray-700 badge-lg font-bold text-white p-5 mt-2">
                            Category: {productData?.category}
                        </div> */}
                        {/* <div className="badge bg-gray-700 badge-lg font-bold text-white p-5 mt-2">
                            Production Date:{" "}
                            {productData?.productionDate?.substring(0, 10)}
                        </div> */}
                    </div>
                </div>
            </div>

            {/* <SingleProductReviews rating={rating} productData={productData} /> */}
        </>
    );
};

export default SingleProduct;

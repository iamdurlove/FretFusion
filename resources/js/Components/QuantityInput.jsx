const QuantityInput = ({ quantity = 0, setQuantity }) => {
    return (
        <>
            <button
                type="button"
                className="h-10 w-10 border-gray-600 flex justify-center items-center border leading-10 text-gray-600 transition hover:opacity-75"
                onClick={() => {
                    if (quantity !== 1) {
                        setQuantity(quantity - 1);
                    }
                }}
            >
                -
            </button>

            <input
                type="number"
                id="Quantity"
                value={quantity}
                className="h-10 w-24 rounded border-gray-400 border text-xl indent-3"
                readOnly={true}
            />

            <button
                type="button"
                className="h-10 w-10 border-gray-600 flex justify-center items-center border leading-10 text-gray-600 transition hover:opacity-75"
                onClick={() => setQuantity(quantity + 1)}
            >
                +
            </button>
        </>
    );
};

export default QuantityInput;

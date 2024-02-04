const SingleCart = ({ item, setCartItems, cartItems }) => {
  const { image, name, size, price, quantity } = item || {};
  return (
    <div className="flex items-center justify-between  py-4 border-b">
      <div className="flex gap-3 items-center">
        <img width="100px" src={`/images/${image}`} alt="cartImage" />
        <div>
          <h1>{name}</h1>
          <p className="text-sm text-gray-400">
            <span>Classic</span> |{" "}
            <span>
              {size === "S"
                ? "Small"
                : size === "M"
                ? "Medium"
                : size === "L"
                ? "Large"
                : size}
            </span>
          </p>
          <h1>${price}</h1>
        </div>
      </div>
      <div className="flex justify-between gap-3 w-[30%]">
        <div className=" ">
          <input
            // onChange={(e) => setTotalQuantity(parseInt(e.target.value, 10))}
            className="w-16 rounded-md bg-grey px-3 py-2"
            type="number"
            value={quantity}
            min="1"
          />
        </div>
        <h1 className="text-xl cursor-pointer">X</h1>
      </div>
      <div>
        <h1>${price * quantity}</h1>
      </div>
    </div>
  );
};

export default SingleCart;

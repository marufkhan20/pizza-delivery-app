import { useEffect, useState } from "react";
import SingleCart from "./SingleCart";

const CartItems = () => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));

    setCart(cartData);
  }, []);

  const { items, totalPrice, totalQuantity } = cart || {};

  return (
    <div className="container w-[970px]">
      <h1 className="text-xl pt-5 pb-6">Shopping cart</h1>
      {!items?.length > 0 ? (
        <div className="flex items-center w-full justify-center rounded-xl">
          <img src="/images/empty.png" alt="" />
        </div>
      ) : (
        <div className="bg-white px-7 py-8 rounded-[10px]">
          {items?.map((item) => (
            <SingleCart
              // subtTotal={subtTotal}
              // setSubTotal={setSubTotal}
              // cartItems={cartItems}
              // setCartItems={setCartItems}
              key={item?.id}
              item={item}
            />
          ))}
          <div className="flex items-center justify-end pt-6">
            <div className="flex items-center gap-14">
              <span className="">SubTotal</span>
              <h1>${totalPrice}</h1>
            </div>
          </div>
          <div className="flex items-center justify-end pt-10">
            <button
              className="bg-primary border border-transparent  rounded-[50px] py-3 px-10 text-lg font-bold text-white hover:bg-transparent hover:text-black
            transition-all duration-200 hover:border-primary"
            >
              Order Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;

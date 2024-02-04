import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { toppings } from "../../../../data/data";
import Topping from "./Topping";

const ProductDetails = ({
  data,
  type,
  openProdeuctDetails,
  setOpenProductDetails,
}) => {
  const { id, image, name, description, metaInfo, price } = data || {};

  const [selectedToppings, setSelectedToppings] = useState([]);
  const [totalPrice, setTotalPrice] = useState(price);
  const [selectedSize, setSelectedSize] = useState("");

  // toppings filter
  const allToppings = toppings?.filter((item) => item?.productType === type);

  // handle select toppings
  const handleSelectToppings = (id) => {
    const alreadyHave = selectedToppings.includes(id);

    if (alreadyHave) {
      const updatedToppings = selectedToppings?.filter((item) => item !== id);
      setSelectedToppings(updatedToppings);
    } else {
      setSelectedToppings([...selectedToppings, id]);
    }
  };

  // calculate total price
  useEffect(() => {
    let updatedTotalPrice = price;

    selectedToppings.forEach((id) => {
      allToppings?.forEach((item) => {
        if (item?.id === id) {
          updatedTotalPrice += Number(item?.price);
        }
      });
    });

    setTotalPrice(updatedTotalPrice);
  }, [allToppings, price, selectedToppings]);

  // add to cart
  const addToCart = () => {
    // get cart from local storage
    let cart = localStorage.getItem("cart");
    cart = JSON.parse(cart) || {};

    // get all toppings
    let toppings = [];

    if (selectedToppings?.length > 0) {
      toppings = allToppings?.filter((topping) =>
        selectedToppings?.includes(topping?.id)
      );
    }

    // add to cart
    if (cart?.totalQuantity) {
      let changeSize;

      cart?.items?.forEach((item) => {
        if (item?.id === id && item?.size !== selectedSize) {
          changeSize = true;
        } else {
          changeSize = false;
        }
      });

      if (changeSize) {
        console.log("change size");
        cart = {
          items: [
            ...cart.items,
            { ...data, toppings, size: selectedSize, quantity: 1 },
          ],
          totalPrice: cart.totalPrice + Number(totalPrice),
          totalQuantity: cart.totalQuantity + 1,
        };
      } else {
        const updatedCartItems = cart?.items?.map((item) => {
          if (item?.id === id && item?.size === selectedSize) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        });

        cart = {
          ...cart,
          items: updatedCartItems,
          totalPrice: cart.totalPrice + price,
          totalQuantity: cart.totalQuantity + 1,
        };
      }
    } else {
      // prepare new cart object
      cart = {
        items: [
          {
            ...data,
            toppings,
            size: selectedSize,
            quantity: 1,
          },
        ],
        totalPrice: totalPrice,
        totalQuantity: 1,
      };
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    toast.success("Item added successfully");
  };
  return (
    <div
      className={`transition-all duration-300 ${
        openProdeuctDetails ? "opacity-100 visible" : "opacity-0 invisible"
      } fixed inset-0 bg-black/50 bg-blur flex items-center justify-center w-full h-screen`}
      onClick={() => setOpenProductDetails(false)}
    >
      <div
        className="w-[900px] bg-white rounded-[10px] grid grid-cols-2 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center w-full h-full px-5">
          <img src={`/images/${image}`} alt="pizza" />
        </div>
        <div className="bg-[#F8F8F8] py-8 px-6">
          <h4 className="text-lg mb-1">{name}</h4>
          <p>{description}</p>
          <ul className="mt-5 flex items-center gap-[10px]">
            {metaInfo?.map((item) => (
              <li
                key={item}
                onClick={() =>
                  setSelectedSize(selectedSize === item ? "" : item)
                }
                className={`px-4 py-2 flex items-center justify-center font-bold rounded-full cursor-pointer transition-all ${
                  selectedSize === item
                    ? "bg-primary text-white"
                    : "hover:bg-primary hover:text-white bg-grey"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>

          {allToppings?.length > 0 && (
            <div className="mt-10">
              <h4 className="text-lg mb-1">Extra toppings</h4>
              <div className="grid grid-cols-3 gap-[10px] mt-3">
                {allToppings?.map((topping) => (
                  <Topping
                    selected={selectedToppings?.includes(topping?.id)}
                    handleSelectToppings={handleSelectToppings}
                    key={topping?.id}
                    topping={topping}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 flex items-center justify-between gap-5">
            <h4 className="text-heading text-lg font-bold">₹{totalPrice}</h4>
            <button
              className="w-[40px] text-xl h-[40px] flex items-center justify-center font-bold bg-grey rounded-full cursor-pointer transition-all hover:bg-primary hover:text-white"
              onClick={addToCart}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

import React from "react";

const Topping = ({ selected, topping, handleSelectToppings }) => {
  const { id, name, price, image } = topping || {};
  return (
    <div
      className={`flex justify-center flex-col gap-2 bg-white rounded-[10px] items-center py-2 cursor-pointer border ${
        selected ? "border-primary" : "border-transparent"
      }`}
      onClick={() => handleSelectToppings(id)}
    >
      <div className="relative w-full flex justify-center">
        <img
          className="w-[60px] h-[60px]"
          src={`/images/${image}`}
          alt="topping"
        />

        {selected && (
          <img
            src="/images/icons/tick.svg"
            className="absolute top-0 right-2"
            alt=""
          />
        )}
      </div>
      <sapn className="text-center block">{name}</sapn>
      <h3 className="text-lg">₹{price}</h3>
    </div>
  );
};

export default Topping;

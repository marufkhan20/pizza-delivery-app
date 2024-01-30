import React, { useState } from "react";
import ProductDetails from "./ProductDetails";

const ProductItem = ({ data, type }) => {
  const { image, name, description, metaInfo, price } = data || {};
  const [openProdeuctDetails, setOpenProductDetails] = useState(false);
  return (
    <>
      <div className="bg-white rounded-[10px]">
        <div className="py-4 px-10 text-center">
          <img src={`/images/${image}`} alt="pizza" />
        </div>

        <div className="py-4 px-5">
          <h3 className="text-heading text-lg mb-2 font-bold">{name}</h3>
          <p className="text-dark">{description}</p>

          <ul className="mt-5 flex items-center gap-[10px]">
            {metaInfo?.map((item) => (
              <li
                key={item}
                className="px-4 py-2 flex items-center justify-center font-bold bg-grey rounded-full cursor-pointer transition-all hover:bg-primary hover:text-white"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center justify-between gap-5">
            <h4 className="text-heading font-bold">₹{price}</h4>
            <button
              className="w-[40px] text-xl h-[40px] flex items-center justify-center font-bold bg-grey rounded-full cursor-pointer transition-all hover:bg-primary hover:text-white"
              onClick={() => setOpenProductDetails(true)}
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* product details */}
      <ProductDetails
        openProdeuctDetails={openProdeuctDetails}
        setOpenProductDetails={setOpenProductDetails}
        data={data}
        type={type}
      />
    </>
  );
};

export default ProductItem;

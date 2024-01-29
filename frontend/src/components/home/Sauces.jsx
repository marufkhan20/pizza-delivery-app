import React from "react";
import { sauces } from "../../data/data";
import FilterController from "./FilterController";
import ProductItem from "./ProductItem";

const filterOptions = ["Vegetarian", "Non Vegetarian"];

const Sauces = () => {
  return (
    <section className="py-16" id="sauces">
      <div className="container">
        {/* filter system */}
        <FilterController activeSection="sauces" options={filterOptions} />

        {/* pizzas */}
        <div className="grid grid-cols-4 gap-6 mt-8">
          {sauces?.map((item) => (
            <ProductItem key={item?.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sauces;

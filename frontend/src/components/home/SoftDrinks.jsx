import React from "react";
import { softDrinks } from "../../data/data";
import FilterController from "./FilterController";
import ProductItem from "./ProductItem";

const filterOptions = ["Vegetarian", "Non Vegetarian"];

const SoftDrinks = () => {
  return (
    <section className="py-16" id="softdrinks">
      <div className="container">
        {/* filter system */}
        <FilterController activeSection="softDrinks" options={filterOptions} />

        {/* SoftDrinks */}
        <div className="grid grid-cols-4 gap-6 mt-8">
          {softDrinks?.map((drink) => (
            <ProductItem key={drink} data={drink} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftDrinks;

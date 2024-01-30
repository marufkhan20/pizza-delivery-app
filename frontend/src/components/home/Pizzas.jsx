import React, { useEffect, useState } from "react";
import { pizzas } from "../../data/data";
import FilterController from "./FilterController";
import ProductItem from "./ProductItem";

const filterOptions = ["Vegeterian", "Non Vegeterian"];

const Pizzas = () => {
  const [selectedOption, setSelectedOption] = useState("all");
  const [search, setSearch] = useState("");
  const [animate, setAnimate] = useState(false);

  // pizzas data
  const pizzasData = pizzas
    ?.filter((item) =>
      selectedOption === "all"
        ? true
        : item?.type?.toLowerCase()?.replace(" ", "-") ===
          selectedOption?.toLowerCase()?.replace(" ", "-")
    )
    ?.filter((item) =>
      item?.name?.toLowerCase()?.includes(search?.toLocaleLowerCase())
    );

  useEffect(() => {
    setAnimate(true);

    setTimeout(() => {
      setAnimate(false);
    }, 300);
  }, [selectedOption, search]);
  return (
    <section className="py-16" id="pizzas">
      <div className="container">
        {/* filter system */}
        <FilterController
          activeSection="pizza"
          options={filterOptions}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          setSearch={setSearch}
          search={search}
        />

        {/* pizzas */}
        <div
          className={`${
            animate ? "opacity-0" : "opacity-100"
          } grid grid-cols-4 gap-6 transition-all duration-300 mt-8`}
        >
          {pizzasData?.length > 0 &&
            pizzasData?.map((pizza) => (
              <ProductItem type="pizza" key={pizza?.id} data={pizza} />
            ))}
        </div>

        {pizzasData?.length === 0 && (
          <p className="font-medium text-lg text-center w-full">
            No Pizza Found!!
          </p>
        )}
      </div>
    </section>
  );
};

export default Pizzas;

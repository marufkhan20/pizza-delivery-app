/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { IoSearch } from "react-icons/io5";

const FilterController = ({
  activeSection = "",
  options,
  selectedOption,
  setSelectedOption,
  setSearch,
  search,
}) => {
  return (
    <div className="flex items-center justify-between gap-[30px]">
      <div className="py-[14px] px-[18px] bg-white border border-[#E0E0E0] rounded-[10px] flex items-center gap-3">
        <a
          href="#pizzas"
          className={`${
            activeSection === "pizza"
              ? "border-primary font-bold"
              : "border-transparent font-normal hover:border-primary"
          } py-1 px-7 rounded-xl border transition-all`}
        >
          Pizza
        </a>
        <a
          href="#softdrinks"
          className={`${
            activeSection === "softDrinks"
              ? "border-primary font-bold"
              : "border-transparent font-normal hover:border-primary"
          } py-1 px-7 rounded-xl border transition-all`}
        >
          Softdrinks
        </a>
        <a
          href="#sauces"
          className={`${
            activeSection === "sauces"
              ? "border-primary font-bold"
              : "border-transparent font-normal hover:border-primary"
          } py-1 px-7 rounded-xl border transition-all`}
        >
          Sauces
        </a>
      </div>

      <div className="py-[14px] px-[18px] bg-white border border-[#E0E0E0] rounded-[10px] flex items-center gap-3 w-full">
        <IoSearch />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none w-full"
        />
      </div>

      <select
        className="py-[14px] px-[18px] bg-white border border-[#E0E0E0] rounded-[10px] flex items-center gap-3 font-bold outline-none"
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option selected={selectedOption === "all"} value="all">
          All
        </option>
        {options?.map((option) => (
          <option
            selected={selectedOption === option}
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterController;

import React from "react";
import "./category.css";

import CategoryFilter from "./CategoryFilter";

import ff1 from "../../assets/fastfood.svg";
import ff2 from "../../assets/fastfood2.svg";
import ff3 from "../../assets/fastfood3.svg";
import ff4 from "../../assets/fastfood4.svg";

const Category = () => (
  <div className="category">
    <div className="title">Category</div>
    <div className="category-filter">
      <CategoryFilter img={ff1} text="Baked" />
      <CategoryFilter img={ff2} text="Sweet" />
      <CategoryFilter img={ff3} text="Hot Dish" />
      <CategoryFilter img={ff4} text="Fast Food" />
      <CategoryFilter img={ff4} text="Salad" />
    </div>
  </div>
);

export default Category;

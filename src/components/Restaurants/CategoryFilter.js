import React from "react";
import "./category-filter.css";

const CategoryFilter = ({ img, text }) => (
  <div className="option">
    <img src={img} alt="fast food" /> <span>{text}</span>
  </div>
);

export default CategoryFilter;

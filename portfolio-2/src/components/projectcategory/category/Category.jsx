import React, { useState } from "react";
import CategoryCard from "../categoryCard/CategoryCard";
import "../category.scss";
import { CategoryList } from "../../../utils/data";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categoryFiltered = CategoryList.filter((item) => (selectedCategory === "" || item.category === selectedCategory));
  return (
    <div className="category-content">
      <h5>Category Project's</h5>
      <div className="category-count">
        <span
          className={`${selectedCategory === "" ? "active" : ""}`}
          onClick={() => setSelectedCategory("")}
        >
          ALL
        </span>
        <span
          className={`${selectedCategory === "Technology" ? "active" : ""}`}
          onClick={() => setSelectedCategory("Technology")}
        >
          Technology
        </span>
        <span
          className={`${selectedCategory === "Health and Travel" ? "active" : ""}`}
          onClick={() => setSelectedCategory("Health and Travel")}
        >
          Health and Travel
        </span>
        <span
          className={`${selectedCategory === "Business" ? "active" : ""}`}
          onClick={() => setSelectedCategory("Business")}
        >
          Business
        </span>
        <span
          className={`${selectedCategory === "Personal Development and Motivation" ? "active" : ""}`}
          onClick={() =>
            setSelectedCategory("Personal Development and Motivation")
          }
        >
          Personal Development and Motivation
        </span>
        <span
          className={`${selectedCategory === "Fashion and Style" ? "active" : ""}`}
          onClick={() => setSelectedCategory("Fashion and Style")}
        >
          Fashion and Style
        </span>
      </div>
      <div className="category-wrapper">
        {categoryFiltered.map((item) => (
          <CategoryCard
            key={item.id}
            category={item.category}
            createdAt={item.createdBy}
            date={item.date}
            title={item.title}
            image={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;

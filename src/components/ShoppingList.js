import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchCategory, setSearchCategory] = useState("All")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const onSearchChange = (e) => {
    setSearchCategory(e.target.value)
  }

  const search = items.filter((item) => {
    if (searchCategory === "All") return true;

    return item.name.toLowerCase().includes(searchCategory.toLowerCase())
  });

  const itemsToDisplay = search.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm  onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} search={searchCategory}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

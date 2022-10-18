import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [formData, setFormData] = useState({
    id: uuid(),
    name: "",
    category: "Produce",
  })

  const handleOnChange =(e) => {
    const { name, value } = e.target;
    setFormData(formData => {
      return {
        ...formData,
        [name]: value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onItemFormSubmit(formData);
    console.log("submit")
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input 
          type="text" 
          name="name"
          onChange={handleOnChange}
          value={formData.name}
        />
      </label>

      <label>
        Category:
        <select 
          name="category"
          onChange={handleOnChange}
          value={formData.category}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

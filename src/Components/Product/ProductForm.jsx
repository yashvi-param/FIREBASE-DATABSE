import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addProduct,
  updateProduct,
} from "../../Features/Product/productSlice";

const ProductForm = ({ editData, setEditData }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (editData) {
      setName(editData.name);
      setPrice(editData.price);
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editData) {
      dispatch(updateProduct({ id: editData.id, name, price }));
      setEditData(null);
    } else {
      dispatch(addProduct({ name, price }));
    }

    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <button
        type="submit"
        className={editData ? "update-btn" : "add-btn"}
      >
        {editData ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default ProductForm;

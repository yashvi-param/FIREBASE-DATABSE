import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../../Features/Product/productSlice";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";

const ProductList = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const [editData, setEditData] = useState(null);

  return (
    <>
      <ProductForm editData={editData} setEditData={setEditData} />

      {products.length === 0 && (
        <p className="empty-text">No products added</p>
      )}

      {products.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
          onDelete={(id) => dispatch(deleteProduct(id))}
          onEdit={setEditData}
        />
      ))}
    </>
  );
};

export default ProductList;

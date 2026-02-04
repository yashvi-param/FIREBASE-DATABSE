import React from "react";

const ProductCard = ({ product, onDelete, onEdit }) => {
  return (
    <div className="card">
      <div>
        <strong>{product.name}</strong>
        <p>₹ {product.price}</p>
      </div>

      <div>
        <button
          className="update-btn"
          onClick={() => onEdit(product)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(product.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

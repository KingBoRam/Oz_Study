import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import './ShoppingItem.css';

function ShoppingItem({ products, handleDelete, handleEdit }) {
  return (
    <>
      <li className="item">
        <div className="info">
          <span className="expense">{products.product}</span>
          <span className="amount">{products.price}</span>
        </div>
        <div>
          <button
            className="edit-btn"
            onClick={() => {
              handleEdit(products.id);
            }}
          >
            <MdEdit />
          </button>
          <button
            className="clear-btn"
            onClick={() => {
              handleDelete(products.id);
            }}
          >
            <MdDelete />
          </button>
        </div>
      </li>
    </>
  );
}

export default ShoppingItem;

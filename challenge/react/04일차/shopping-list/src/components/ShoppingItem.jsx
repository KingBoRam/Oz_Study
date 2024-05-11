import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import './ShoppingItem.css';

function ShoppingItem() {
  return (
    <>
      <li className="item">
        <div className="info">
          <span className="expense"></span>
          <span className="amount"></span>
        </div>
        <div>
          <button className="edit-btn">
            <MdEdit />
          </button>
          <button className="clear-btn">
            <MdDelete />
          </button>
        </div>
      </li>
    </>
  );
}

export default ShoppingItem;

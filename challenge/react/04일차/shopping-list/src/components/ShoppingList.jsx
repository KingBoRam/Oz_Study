import React from 'react';
import ShoppingItem from './ShoppingItem';
import './ShoppingList.css';
import { VscClearAll } from 'react-icons/vsc';

function ShoppingList({
  products,
  setProducts,
  handleDelete,
  handleClear,
  handleEdit,
}) {
  return (
    <>
      <ul className="list-contents">
        {products.map((item) => {
          return (
            <ShoppingItem
              key={item.id}
              products={item}
              setProducts={setProducts}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            ></ShoppingItem>
          );
        })}
      </ul>
      <button className="btn" onClick={handleClear}>
        목록비우기
        <VscClearAll className="btn-icon" />
      </button>
    </>
  );
}

export default ShoppingList;

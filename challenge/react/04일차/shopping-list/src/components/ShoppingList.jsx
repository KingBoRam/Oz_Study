import React from 'react';
import ShoppingItem from './ShoppingItem';
import './ShoppingList.css';
import { VscClearAll } from 'react-icons/vsc';

function ShoppingList() {
  return (
    <>
      <ul className="list-contents">
        <ShoppingItem></ShoppingItem>
      </ul>
      <button className="btn">
        목록지우기
        <VscClearAll className="btn-icon" />
      </button>
    </>
  );
}

export default ShoppingList;

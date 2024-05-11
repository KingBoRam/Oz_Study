import React from 'react';
import './ShoppingForm.css';
import { TbSend2 } from 'react-icons/tb';

function ShoppingForm() {
  return (
    <>
      <form className="form-container">
        <div className="form-contents">
          <div className="form-content">
            <label htmlFor="product">상품</label>
            <input
              type="text"
              name="product"
              id="product"
              placeholder="예) 콜라"
              // value={product}
            ></input>
          </div>
          <div className="form-content">
            <label htmlFor="price">가격</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="예) 100"
              // value={price}
            ></input>
          </div>
        </div>
        <button type="submit" className="btn">
          추가
          <TbSend2 className="btn-icon " />
        </button>
      </form>
    </>
  );
}

export default ShoppingForm;

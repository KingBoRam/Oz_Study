import React from 'react';
import './ShoppingForm.css';
import { TbSend2 } from 'react-icons/tb';

function ShoppingForm({
  handleSubmit,
  product,
  setProduct,
  price,
  setPrice,
  edit,
}) {
  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-contents">
          <div className="form-content">
            <label htmlFor="product">상품</label>
            <input
              type="text"
              name="product"
              id="product"
              placeholder="예) 콜라"
              value={product}
              onChange={(e) => {
                setProduct(e.target.value);
              }}
            ></input>
          </div>
          <div className="form-content">
            <label htmlFor="price">가격</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="예) 100"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <button type="submit" className="btn">
          {edit ? '수정' : '제출'}
          <TbSend2 className="btn-icon " />
        </button>
      </form>
    </>
  );
}

export default ShoppingForm;

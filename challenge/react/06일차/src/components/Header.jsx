import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';
import { IoCamera } from 'react-icons/io5';

const Header = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <div
      style={{
        backgroundColor: '#f1f3f5',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <HeaderWrapper>
        <HeaderLogo
          onClick={() => {
            window.location.href = '/';
          }}
        >
          <IoCamera style={{ color: '#e03131' }} />
          <p>The Photos</p>
        </HeaderLogo>
        <HeaderInput>
          <input
            type="text"
            placeholder="이미지를 검색하세요."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch(searchText);
              }
            }}
          />
          <HeaderBtn
            onClick={() => {
              handleSearch(searchText);
            }}
          >
            <IoSearch />
          </HeaderBtn>
        </HeaderInput>
      </HeaderWrapper>
    </div>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1480px;
  height: 100%;
  justify-content: space-between;
  background-color: #f1f3f5;
  align-items: center;
  padding: 2rem 5rem;
  border-bottom: 1px solid #f1f3f5;
`;

const HeaderLogo = styled.a`
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    padding-left: 0.5rem;
    font-size: 3rem;
    font-family: 'Freesentation-9Black';
  }
  cursor: pointer;
`;

const HeaderInput = styled.div`
  border: 1px solid #dee2e6;
  width: 250px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  input {
    border: none;
    font-size: 1rem;
    outline: none;
  }
`;

const HeaderBtn = styled.button`
  border: none;
  background-color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;

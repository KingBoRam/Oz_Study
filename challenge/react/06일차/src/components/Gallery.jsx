import React from 'react';
import styled from 'styled-components';

const Gallery = ({ photos }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Container>
        <H1>Unsplash 연동 이미지 검색 페이지입니다.</H1>
        {photos.length > 0 ? (
          <ImgContainer>
            {photos.map((item) => {
              return (
                <img
                  key={item.id}
                  src={item.urls.regular}
                  alt={item.description}
                />
              );
            })}
          </ImgContainer>
        ) : (
          <FirstImg src="/images/film.png"></FirstImg>
        )}
      </Container>
    </div>
  );
};

export default Gallery;

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  img {
    width: 25rem;
    height: 25rem;
  }
`;

const FirstImg = styled.img`
  width: 30rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1480px;
  height: calc(100vh - 130px);
`;

const H1 = styled.h1`
  @font-face {
    font-family: 'iceJaram-Rg';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/iceJaram-Rg.woff2')
      format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'iceJaram-Rg';
  padding-left: 80px;
  padding-bottom: 50px;
  color: black;
  font-size: 3rem;
`;

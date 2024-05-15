import './App.css';
import Gallery from './components/Gallery';
import Header from './components/Header';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [photos, setPhotos] = useState([]);
  const handleSearch = (text) => {
    if (text !== '') {
      axios
        .get(
          `https://api.unsplash.com/search/photos?query=${text}&lang=ko&per_page=12&page=1&client_id=${
            import.meta.env.VITE_UNSPLASH_ACCESS_KEY
          }`,
        )
        .then((res) => {
          if (res.data.results.length === 0) {
            alert('입력하신 검색어를 다시 확인해주세요. 유효하지 않습니다.');
          } else {
            setPhotos(res.data.results);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert('검색어를 입력해주세요.');
    }
  };
  return (
    <>
      <Header handleSearch={handleSearch}></Header>

      <Gallery photos={photos}></Gallery>
    </>
  );
}

export default App;

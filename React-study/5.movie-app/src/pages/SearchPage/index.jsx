import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { useLocation, useNavigate } from 'react-router-dom';
import './SearchPage.css';
import { useDebounce } from '../../hooks/useDebounce';

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  const searchTerm = query.get('q');
  const deBouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (deBouncedSearchTerm) {
      fetchSearchMovie(deBouncedSearchTerm);
    }
  }, [deBouncedSearchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const response = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`,
      );
      console.log(response);
      setSearchResults(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();

  if (searchResults.length > 0) {
    return (
      <section className="search-container">
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== 'person') {
            const movieImgUrl =
              'https://image.tmdb.org/t/p/w500' + movie.backdrop_path;
            return (
              <div className="movie" key={movie.id}>
                <div
                  onClick={() => {
                    navigate(`/${movie.id}`);
                  }}
                  className="movie__column-poster"
                >
                  <img
                    src={movieImgUrl}
                    alt="movie"
                    className="movie__poster"
                  />
                </div>
              </div>
            );
          }
        })}
      </section>
    );
  } else {
    <section className="no-results">
      <div className="no-results__text">
        <p>찾고자 하는 검색어 {searchTerm}에 맞는 영화가 없습니다.</p>
      </div>
    </section>;
  }
};

export default SearchPage;

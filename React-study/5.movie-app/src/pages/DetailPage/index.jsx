import axios from '../../api/axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { imageBasePath } from '../../constant';
import './DetailPage.css';

const DetailPage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/movie/${movieId}`);
      setMovie(response.data);
    }
    fetchData();
  }, [movieId]);
  console.log(movie);
  if (!movie) {
    return null;
  }

  const summeryText = (str, num) => {
    return str?.length > num ? str.substring(0, num) + '...' : str;
  };

  return (
    <section className="search-container">
      <img
        className="movie-image"
        src={`${imageBasePath}${movie.backdrop_path}`}
        alt="detail"
      />
      <p className="search-title">{movie.original_title}</p>
      <p className="search-genres">
        {`장르 : `}
        {movie.genres.map((item) => {
          return (
            <span className="search-genre" key={item.id}>
              {item.name}
            </span>
          );
        })}
      </p>
      <p className="search-average">{`평점 : ${movie.vote_average}`}</p>
      <p className="search-summary">{`줄거리 : ${summeryText(
        movie.overview,
        200,
      )}`}</p>
    </section>
  );
};

export default DetailPage;

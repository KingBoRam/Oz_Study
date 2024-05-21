import axios from '../../api/axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { imageBasePath } from '../../constant';
import './DetailPage.css';

const DetailPage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get(`/movie/${movieId}`);
  //     setMovie(response.data);
  //   }
  //   fetchData();
  // }, [movieId]);

  const summeryText = (str, num) => {
    return str?.length > num ? str.substring(0, num) + '...' : str;
  };
  if (!movie) {
    return null;
  }
  return (
    <section className="detail-container">
      <img
        className="movie-image"
        src={`${imageBasePath}${movie.backdrop_path}`}
        alt="detail"
      />
      <p className="detail-title">{movie.original_title}</p>
      <p className="detail-genres">
        {`장르 : `}
        {movie.genres.map((item) => {
          return <span className="detail-genre">{item.name}</span>;
        })}
      </p>
      <p className="detail-average">{`평점 : ${movie.vote_average}`}</p>
      <p className="detail-summary">{`줄거리 : ${
        movie.overview === ''
          ? '등록되지 않음.'
          : summeryText(movie.overview, 200)
      }`}</p>
    </section>
  );
};

export default DetailPage;

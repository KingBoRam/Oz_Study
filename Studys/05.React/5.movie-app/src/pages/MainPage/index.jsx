import Banner from '../../components/Banner';
import styled from 'styled-components';
import Row from '../../components/Row';
import requests from '../../api/requests';

const MainPage = () => {
  return (
    <Container>
      <Banner />
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row
        title="Action Moives"
        id="Am"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      />
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);
`;
export default MainPage;

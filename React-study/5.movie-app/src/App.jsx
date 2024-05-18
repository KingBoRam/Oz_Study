import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<LoginPage />}></Route>
        <Route path="main" element={<MainPage />}></Route>
        <Route path=":movieId" element={<DetailPage />}></Route>
        <Route path="search" element={<SearchPage />}></Route>
      </Route>
    </Routes>
  );
}

const LayOut = () => {
  return (
    <>
      <Nav></Nav>
      <Outlet />
    </>
  );
};

export default App;

import './App.css';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
// import Blog from './components/Blog';
import { Suspense, lazy } from 'react';

const Blog = lazy(() => import("./components/Blog"))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='blog' element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function Layout() {
  return (
    <>
      <ul>
        <li>
          <Link to={'/'} >Home</Link>
        </li>
        <li>
          <Link to={'/about'} >About</Link>
        </li>
        <li>
          <Link to={'/blog'} >Blog</Link>
        </li>
      </ul>
      <Suspense  fallback={<h1>Loading...</h1>} >
        <Outlet />
      </Suspense>
    </>
  )
}

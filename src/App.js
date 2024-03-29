import React, {useEffect, useState} from 'react';
import './App.css';
import 'flowbite';
import Navbar from './component/Navbar';
import Head from './component/Head';
import Portfolio from './component/Portfolio';
import Experience from './component/Experience';
import Contact from './component/Contact';
import Footer from './component/Footer';
// import Playlist from './component/Playlist';
import { 
  createBrowserRouter, 
  RouterProvider, 
  Route, 
  createRoutesFromElements,
  Outlet
} from 'react-router-dom';

function BasicLayout() {
  const [progress, setProgress] = useState(0);
  useEffect(() =>{
    setProgress(100)
  }, [progress])

  return (
    <>
      <Navbar />
      {/* <Playlist /> */}
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BasicLayout />}>
      <Route index element={<Head />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="experience" element={<Experience />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
)

function App() {
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;

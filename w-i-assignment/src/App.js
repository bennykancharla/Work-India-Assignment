

// import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import TopRatedPage from './components/TopRatedPage';
import UpcomingPage from './components/UpcomingPage';
import MovieDetailPage from './components/MovieDetailPage';
import SearchedMoviePage from './components/SearchedMoviePage';
import NotFoundPage from './components/NotFoundPage'; 


import './App.css';

const  App = () =>  (
 
     <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/popular" element={<HomePage />} /> 
          <Route exact path="/top-rated" element={<TopRatedPage />} />
          <Route exact path="/upcoming" element={<UpcomingPage />} />
          <Route exact path="/movie/:id" element={<MovieDetailPage />} />
          <Route exact path="/search/:searchInput" element={<SearchedMoviePage />} />
          <Route path="*" element={<NotFoundPage/>} /> 
        </Routes>
        </>

  );


export default App;

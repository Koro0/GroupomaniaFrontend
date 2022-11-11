import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Posts from './pages/Posts';
import Connexion from './pages/Connexion';
import Header from './components/Header';
import Error from './components/Error';
import NewPost from './pages/NewPost';
import Footer from './components/Footer';
import Post from './pages/Post';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/home" element={<Posts />} />
        <Route path="/home/new_post" element={<NewPost />} />
        <Route path="/home/:id" element={<Post />} />
        <Route path="/" element={<Connexion />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

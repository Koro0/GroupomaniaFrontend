import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Connexion from './pages/Connexion';
import Header from './components/Header';
import Error from './components/Error';
import NewPost from './pages/NewPost';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/home" element={<Home />}>
          <Route path="new_post" element={<NewPost />} />
        </Route>
        <Route path="/" element={<Connexion />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.scss';
import Connexion from './pages/Connexion';
import ConnexionLogIn from './pages/Connexion/LogIn';
import ConnexionRegister from './pages/Connexion/Register';
import Header from './components/Header';
import Error from './components/Error';
import Posts from './pages/Posts';
import Post from './pages/Post';
import PostsAdd from './pages/NewPost';
import Footer from './components/Footer';
import PostsPut from './pages/UpdatePost';
import UserProfile from './pages/UserProfile';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Context from './components/Context';
function App() {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState('');
  const [token, setToken] = useState('');

  return (
    <BrowserRouter>
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs">
        <Context.Provider value={{ logged, setLogged, user, setUser, token, setToken }}>
          <Header />
          <Routes>
            <Route exact path="/home" element={<Posts />} />
            <Route path="/:id" element={<Post />} />
            <Route path="/modify_post/:id" element={<PostsPut />} />
            <Route path="/add_post" element={<PostsAdd />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/" element={<Connexion />} />
            <Route path='/login' element={<ConnexionLogIn />} />
            <Route path='/register' element={<ConnexionRegister />} />
            <Route path="/*" element={<Error />} />
          </Routes>
          <Footer />
        </Context.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Connexion from './pages/Connexion';
import LogIn from './pages/Connexion/LogIn';
import Register from './pages/Connexion/Register';
import Header from './components/Header';
import Error from './components/Error';
import Posts from './pages/Posts';
import Post from './pages/Post';
import PostsAdd from './pages/NewPost';
import Footer from './components/Footer';
import PostsPut from './pages/UpdatePost';
//import LoggedProvider from './components/Context/LoggedContext';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs">
        <Header />
        <Routes>
          <Route exact path="/home" element={<Posts />} >
            <Route path="/home/:id" element={<Post />} />
            <Route path="/home/add_post" element={<PostsAdd />} />
            <Route path="/home/modify_post" element={<PostsPut />} />
          </Route>
          <Route path="/" element={<Connexion />}>
            <Route path='/login' element={<LogIn />} />
            <Route path='/register' element={<Register />} />
          </Route>
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

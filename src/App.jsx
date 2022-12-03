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
          <Route exact path="/home" element={<Posts />} />
          <Route path="/:id" element={<Post />} />
          <Route path="/add_post" element={<PostsAdd />} />
          <Route path="/modify_post" element={<PostsPut />} />
          <Route path="/" element={<Connexion />}>
            {/* changer les routes path='/' => Login & path='/register' => Register */}
            <Route path='/login' element={<ConnexionLogIn />} />
            <Route path='/register' element={<ConnexionRegister />} />
          </Route>
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Connexion from './pages/Connexion';
import Header from './components/Header';
import Error from './components/Error';
import LogIn from './pages/Connexion/LogIn';
import Register from './pages/Connexion/Register';
import NewPost from './pages/NewPost';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route path="new_post" element={<NewPost />}></Route>
        </Route>
        <Route path="/connexion" element={<Connexion />}>
          <Route path="login" element={<LogIn />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

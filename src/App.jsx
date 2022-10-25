import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Connexion from './pages/Connexion';
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/connexion" element={<Connexion />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

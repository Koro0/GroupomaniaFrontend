import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Connexion from './pages/Connexion';
import Header from './components/Header'
import Error from './components/Error'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/connexion" element={<Connexion />}>
          <Route path="login"></Route>
        </Route>
        <Route path='/*' element={<Error />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

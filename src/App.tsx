import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Home from './components/HomeComponent/Home';
import Letters from './components/LettersComponent/Letters';
import Navbar from './components/NavbarComponent/Navbar';

function App() {
  return (
    <div className='container-fluid p-0'>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/letters' element={<Letters></Letters>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

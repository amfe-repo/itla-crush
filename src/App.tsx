import { BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import Declaration from './components/DeclarationComponent/Declaration';
import Home from './components/HomeComponent/Home';
import Letters from './components/LettersComponent/Letters';
import Login from './components/LoginComponent/Login';
import Navbar from './components/NavbarComponent/Navbar';
import Perfil from './components/PerfilComponent/Perfil';
import Register from './components/RegisterComponent/Register';

function App() {
  return (
    <div className='container-fluid p-0'>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/letters' element={<Letters></Letters>} />
          <Route path='/register' element={<Register></Register>} />
          <Route path='/login' element={<Login></Login>} />
          <Route path='/perfil' element={<Perfil></Perfil>} />
          <Route path='/your-declaration' element={<Declaration></Declaration>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

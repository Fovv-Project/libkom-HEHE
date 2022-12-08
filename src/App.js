import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './styles/baseStyles.js';
import { GlobalStyle } from "./styles/baseStyles.js";
import LandingHome from './pages/mahasiswa/LandingHome';
import ScanLoading from './pages/mahasiswa/ScanLoading';
import Scanning from './pages/mahasiswa/Scanning';
import Dashboard from './pages/admin/Dashboard';
import AbsenList from './pages/admin/AbsenList';
import Profile from './pages/mahasiswa/profile/Profile';
import Login from './pages/login/Login';
import LoginAdmin from './pages/admin/login/Login';
import Scanners from './pages/mahasiswa/scanner/Scanner';


const App = () => {
  return (
    <>
      <GlobalStyle />

      <Router>
        <Routes>
          <Route path='/' element={<LandingHome />} />
          <Route path='/login' element={<Login />} />
          <Route path='/loginAdmin' element={<LoginAdmin />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/scanner' element={<Scanners />} />
          <Route path='/scanning' element={<Scanning />} />
          <Route path='/scanload' element={<ScanLoading />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/absenlist' element={<AbsenList />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;

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
import Absensi from './pages/admin/absensi/Absensi.jsx';
import Profile from './pages/mahasiswa/Profile';
import Login from './pages/login/Login'


const App = () => {
  return (
    <>
      <GlobalStyle />

      <Router>
        <Routes>
          <Route path='/' element={<LandingHome />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/scanning' element={<Scanning />} />
          <Route path='/scanload' element={<ScanLoading />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/absensi' element={<Absensi />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;

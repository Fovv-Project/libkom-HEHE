import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingHome from './pages/mhs_pages/landingHome';
import MhsProfile from './pages/mhs_pages/mhsProfile';
import ScanLoading from './pages/mhs_pages/scanLoading';
import Scanning from './pages/mhs_pages/scanning';
import Dashboard from './pages/admin_pages/dashboard';
import AbsenList from './pages/admin_pages/absenList';
import Login from './pages/mhs_pages/login';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingHome />}  />
        <Route path='/login' element={<Login />}  />
        <Route path='/mhsProfile' element={<MhsProfile />}  />
        <Route path='/scanning' element={<Scanning />}  />
        <Route path='/scanLoad' element={<ScanLoading />}  />
        <Route path='/dashboard' element={<Dashboard />}  />
        <Route path='/absenList' element={<AbsenList />}  />
      </Routes>

      {/* <LandingHome /> */}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './mhs_pages/login';
import LandingHome from './mhs_pages/landingHome';
import MhsProfile from './mhs_pages/mhsProfile';
import ScanLoading from './mhs_pages/scanLoading';
import Scanning from './mhs_pages/scanning';
import Dashboard from './admin_pages/dashboard';
import AbsenList from './admin_pages/absenList';

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

import { Route, Routes } from 'react-router-dom';
import LandingHome from './pages/mahasiswa/LandingHome';
import ScanLoading from './pages/mahasiswa/ScanLoading';
import Scanning from './pages/mahasiswa/Scanning';
import Dashboard from './pages/admin/Dashboard';
import AbsenList from './pages/admin/AbsenList';
import Login from './pages/mahasiswa/Login';
import Profile from './pages/mahasiswa/Profile';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingHome />}  />
        <Route path='/login' element={<Login />}  />
        <Route path='/profile' element={<Profile />}  />
        <Route path='/scanning' element={<Scanning />}  />
        <Route path='/scanload' element={<ScanLoading />}  />
        <Route path='/dashboard' element={<Dashboard />}  />
        <Route path='/absenlist' element={<AbsenList />}  />
      </Routes>
    </div>
  );
}

export default App;

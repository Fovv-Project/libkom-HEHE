import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './styles/baseStyles.js';
import { GlobalStyle } from "./styles/baseStyles.js";


const App = () => {
  return (
    <>
    <GlobalStyle />

    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
    </>
    


  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../src/components/pages/login';
import RegistrationPage from '../src/components/pages/registration';
import './index.css';



function App() {
  return (
   <Router>
    <Routes>
      <Route  path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage/>}/>
      
    </Routes>
   </Router>
  );
}

export default App;


import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import ForgotPassword from './components/ForgotPassword';
import CreateAccount from './components/CreateAccount';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
}

export default App;

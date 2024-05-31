import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './pages/login'
import Home from './pages/home';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  const isAuthenticated = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return user;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        {/* <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} setEmail={setEmail} />} /> */}
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
        <Route path="/home" element={isAuthenticated() ? <Home  /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

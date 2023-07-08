import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';

function App() {
  const {currentUser} = useContext(AuthContext)
  const ProtectRoute = ({children})=>{
    if(!currentUser){
      return <Navigate to="/Login"/>
    }
    return children
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<ProtectRoute><Home /></ProtectRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

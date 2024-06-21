import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Regi from './pages/Regi';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import ProtectedRoute from './pages/ProtectedRoute';
import Profile from './pages/Profile';


function App() {
  return (

    <>
    <Router>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path="/register" element={<Regi/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/about" element={<About/>}/>
      <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
            <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
    </Routes>
    </Router>
    </>


  )
}

export default App
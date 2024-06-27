import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Home from './pages/home';
import Review from './pages/review';
import Reservation from './pages/reservation';
import Register from './pages/register';
import Login from './pages/login';

// import './App.css'

const App = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review" element={<Review />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App

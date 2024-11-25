import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Clubs from './components/Clubs';
import Profile from './components/Profile';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

function App() {
  // Mock authentication state (replace with actual auth logic)
  const isAuthenticated = false;

  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={isAuthenticated ? <Navigate to="/" /> : <Signup />} />

        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <div className="min-h-screen bg-black text-white">
                <Navbar />
                <div className="flex">
                  <Sidebar />
                  <main className="flex-1 max-w-4xl mx-auto py-8 px-4">
                    <Routes>
                      <Route path="/" element={<Feed />} />
                      <Route path="/clubs" element={<Clubs />} />
                      <Route path="/profile" element={<Profile />} />
                    </Routes>
                  </main>
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
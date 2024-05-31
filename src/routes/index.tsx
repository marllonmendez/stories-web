import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { AuthProvider } from '@/auth/authContext'
import { RequireAuth } from '@/auth/useAuth'

import Home from '@/pages/Home'
import Register from '@/pages/Register'
import Profile from '@/pages/Profile'
import Admin from '@/pages/Admin'

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<Register />} />
          <Route path="/SignIn" element={<Register />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/EditUser/:id" element={<Profile />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default AppRoutes

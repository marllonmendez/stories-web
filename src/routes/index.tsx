import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from '@/pages/Home'
import Register from '@/pages/Register'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SingUp" element={<Register />} />
        <Route path="/SingIn" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
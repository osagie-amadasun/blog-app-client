import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import HomePage from './pages/HomePage'
import AuthenticationPage from './pages/AuthenticationPage'
import AdminDashboard from './pages/AdminDashboard'
import BlogPage from './pages/BlogPage'
import CreatePost from './pages/CreatePost'

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path='/welcomeLandingPage' element={<WelcomePage />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/adminDashboard' element={<AdminDashboard />} />
            <Route path='/userAuthentication' element={<AuthenticationPage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/createPost' element={<CreatePost />} />
          </Routes>
        </Router>
    </>
  )
}

export default App

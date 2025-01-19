import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import HomePage from './pages/HomePage'
import AuthenticationPage from './pages/AuthenticationPage'
import AdminDashboard from './pages/AdminDashboard'
import CreatePost from './pages/CreatePost'
import BlogDetails from './components/BlogDetails'

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path='/welcomeLandingPage' element={<WelcomePage />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/adminDashboard' element={<AdminDashboard />} />
            <Route path='/userAuthentication' element={<AuthenticationPage />} />
            <Route path='/detailedBlog/:id' element={<BlogDetails />} />
            <Route path='/createPost' element={<CreatePost />} />
          </Routes>
        </Router>
    </>
  )
}

export default App

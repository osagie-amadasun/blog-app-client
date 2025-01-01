import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import HomePage from './pages/HomePage'
import AuthenticationPage from './pages/AuthenticationPage'
import BlogPage01 from './pages/BlogPage01'

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path='/welcomeLandingPage' element={<WelcomePage />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/userAuthentication' element={<AuthenticationPage />} />
            <Route path='blog001' element={<BlogPage01 />} />
          </Routes>
        </Router>
    </>
  )
}

export default App

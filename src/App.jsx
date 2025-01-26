import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";
import AuthenticationPage from "./pages/AuthenticationPage";
import CreatePost from "./pages/CreatePost";
import BlogDetails from "./components/BlogDetails";
import ProtectedRoute from "./components/ProtectedRoutes";
import { isAuthenticated } from "./utils/isAuthenticated";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/welcomeLandingPage" element={<WelcomePage />} />
        <Route path="/userAuthentication" element={<AuthenticationPage />} />
        <Route
          path="/"
          element={
            isAuthenticated() ? 
              <HomePage />
             :<Navigate to="/welcomeLandingPage" replace />
          }
        />
        <Route
          path="/createPost"
          element={
            <ProtectedRoute>
              <CreatePost />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detailedBlog/:id"
          element={
            <ProtectedRoute>
              <BlogDetails />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

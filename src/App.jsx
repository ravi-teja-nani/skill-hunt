import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import { Login } from "./pages/login/Login";
import { Projects } from "./pages/projects/Projects";
import SignupPage from "./pages/signup/SignUp";
import { ViewProject } from "./pages/ViewProject";
import { Profile } from "./pages/Profile";
import { ManageProjects } from "./pages/ManageProjects";
import { CreateProject } from "./pages/CreateProject";
import { ViewApplicantProfile } from "./pages/ViewApplicantProfile";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/projects"
            element={
              <ProtectedRoute>
                <Projects />
              </ProtectedRoute>
            }
          />
          <Route
            path="/view-project"
            element={
              <ProtectedRoute>
                <ViewProject />
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
          <Route
            path="/manage-projects"
            element={
              <ProtectedRoute>
                <ManageProjects />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-project"
            element={
              <ProtectedRoute>
                <CreateProject />
              </ProtectedRoute>
            }
          />
          <Route
            path="/view-applicant-profile/:applicantid"
            element={
              <ProtectedRoute>
                <ViewApplicantProfile />
              </ProtectedRoute>
            }
          />

        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

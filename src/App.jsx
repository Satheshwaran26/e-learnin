import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import ExploreCourses from "./components/ExploreCourses"; // Ensure this is imported

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar is outside Routes */}
      <HeroSection /> {/* HeroSection is also outside Routes */}
      
      <Routes>
        <Route path="/" element={<ExploreCourses />} />
        <Route path="/courses" element={<Courses showAll={true} />} />
        <Route path="/courses/:courseId" element={<Courses showAll={false} />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

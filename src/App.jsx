import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { LanguageProvider } from "./context/LanguageContext";
import DirectorValve from "./components/DirectorValve";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import CourseContent from "./components/CourseContent";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import "./styles/AnimatedBackground.css";

function AppContent() {
  const location = useLocation();
  const isValvePage =
    location.pathname === "/" || location.pathname === "/Landing-page-KD/";

  return (
    <div className="App">
      {!isValvePage && <AnimatedBackground />}
      {!isValvePage && <Navbar />}
      <main>
        <Routes>
          <Route
            path="/main"
            element={
              <>
                <Hero />
                <VideoSection />
                <CourseContent />
                <Footer />
              </>
            }
          />
          <Route path="/" element={<DirectorValve />} />
        </Routes>
      </main>
    </div>
  );
}

const App = () => {
  return (
    <Router basename="/Landing-page-KD">
      <AuthProvider>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;

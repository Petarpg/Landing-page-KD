import React, { useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import CourseContent from "./components/CourseContent";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <AnimatedBackground />
          <div className="side-decoration left"></div>
          <div className="side-decoration right"></div>
          <Navbar />
          <Hero />
          <VideoSection />
          <CourseContent />
          <Footer />
          <div className="stars-container">
            {/* Morning light effects are added via CSS pseudo-elements */}
            
            {/* Sun */}
            <div className="sun"></div>
            
            {/* Moon */}
            <div className="moon"></div>
            
            {/* Light beams */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="light-beam" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDelay: `${Math.random() * 4}s`
              }} />
            ))}
            
            {/* Shimmering stars */}
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className="star" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }} />
            ))}
            
            {/* Planets */}
            <div className="planet planet-1"></div>
            <div className="planet planet-2"></div>
            <div className="planet planet-3"></div>
            
            {/* Rockets */}
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rocket" style={{
                animationDelay: `${i * 2}s`
              }} />
            ))}
            
            {/* Meteorites */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="meteorite" style={{
                left: `${Math.random() * 100}%`,
                '--duration': `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 5}s`
              }} />
            ))}

            {/* Flying Devices */}
            <div className="flying-device camera" style={{
              left: '15%',
              top: '40%',
              animationDelay: '0s'
            }}></div>
            
            <div className="flying-device microphone" style={{
              left: '70%',
              top: '60%',
              animationDelay: '2s'
            }}></div>
            
            <div className="flying-device laptop" style={{
              left: '45%',
              top: '30%',
              animationDelay: '4s'
            }}></div>

            {/* Animated Text Elements */}
            <div className="animated-text content">Content</div>
            <div className="animated-text vlogs">Vlogs</div>
            <div className="animated-text video-editing">Video Editing</div>
            <div className="animated-text monetization">Monetization</div>

            {/* Flags */}
            <div className="flag american" style={{
              left: '20%',
              top: '20%'
            }}></div>
            
            <div className="flag bulgarian" style={{
              left: '60%',
              top: '40%'
            }}></div>
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;

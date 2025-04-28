import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "../styles/VideoSection.css";

const VideoSection = () => {
  const { t } = useLanguage();

  const handleSignupClick = () => {
    window.open('https://whop.com/viral-video-social-media/', '_blank');
  };

  return (
    <section className="video-section" id="video">
      <div className="container">
        <div className="section-content">
          <div className="eyebrow-options">
            <span className="eyebrow-text">{t("watchAndLearn")}</span>
          </div>
          <h2 className="main-title">{t("welcomeToCommunity")}</h2>
          <div className="video-container">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/x0MW7Fm_gP8?si=n3VxmJI-C_65lpnH"
              title={t("youtubeVideoTitle")}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <button 
            className="signup-button"
            onClick={handleSignupClick}
          >
            {t("signupNow")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

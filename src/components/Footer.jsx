import React from "react";
import rvsLogo from "../assets/Images/RVS.png";
import tiktokIcon from "../assets/Icons/TikTok.png";

function Footer() {
  return (
    <footer className="footer-section" id="footer">
      <div className="footer-content">
        <h2>За Нас</h2>
        <p className="about-text">
        Reel Vision не е просто платформа.
        Създадохме я като система – за хора, които искат да печелят от уменията си в дигиталния свят.
        </p>
        <p className="about-text">
        🎯 Нашата мисия:
          Да дадем ясен път и реални инструменти за:
        </p>
        <p className="about-text">
        Създаване на съдържание, което привлича
        </p>
        <p className="about-text">
        Превръщане на умения в доход
        </p>
        <p className="about-text">
        Изграждане на личен бранд с доверие
        </p>
        <p className="about-text">
        Не обещаваме успех за 7 дни.
        </p>
        <p className="about-text">
        Обещаваме ти подкрепа, структура и резултати, ако вложиш действия и време.
        </p>
        <div className="footer">
          <p className="footer-text">Свържете се с мен чрез:</p>
          <div className="social-icons">
            <a
              href="https://www.tiktok.com/@krasenusa"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tiktokIcon} alt="TikTok" className="social-icon" />
            </a>
            <a
              href="https://www.facebook.com/krasen.diqnov/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/src/assets/Icons/Facebook.png"
                alt="Facebook"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.instagram.com/krasenveselinov?igsh=dW1jYnRleTMzOTI3"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/src/assets/Icons/Instagram.png"
                alt="Instagram"
                className="social-icon"
              />
            </a>
            <a
              href="https://youtube.com/@kraskatamomche?si=sPA1xxazlPHxl3BQ"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/src/assets/Icons/YouTube.png"
                alt="YouTube"
                className="social-icon"
              />
            </a>
            <a
              href="https://discord.gg/dxbFjTA9"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/src/assets/Icons/discord.png"
                alt="Discord"
                className="social-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

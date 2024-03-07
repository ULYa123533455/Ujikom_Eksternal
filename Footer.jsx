import React from 'react';
import { FaYoutube, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-list">
          <div className="footer-item">
            <MdEmail className="footer-icon" />
            <a>ulyaismi7809@gmail.com</a>
          </div>
          <div className="footer-item">
            <FaYoutube className="footer-icon" />
            <a href="h">https://www.youtube.com/channel/UCIyAFhxFOLeRQnShivnifxw</a>
          </div>
          <div className="footer-item">
            <FaGithub className="footer-icon" />
            <a href="https://github.com/ULYa123533455">GitHub</a>
            
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; ULYA ISMI AMHAL</p>
        </div>
        <div className="footer-line"></div>
      </div>
    </footer>
  );
};

export default Footer;

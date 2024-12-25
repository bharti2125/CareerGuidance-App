import React from "react";

function Footer() {
  return (
    <footer className="footer-container">
      <a href="/" className="footer-logo pt-5 mt-3">
        <img
          src="./images/DALL·E 2024-12-09 23.28.47 - A sleek and modern logo for 'My Career Guidance'. The logo should feature a circular design with a graduation cap, an upward arrow symbolizing progres.webp"
          alt="My Career Guidance Logo"
        />
      </a>
      <div className="footer-social justify-content-center border-bottom pb-3 mb-3">
        <a href="#">
          <img
            src="images/2021_Facebook_icon.svg.webp"
            alt="Facebook"
            width={40}
          />
        </a>
        <a href="#">
          <img src="images/Logo_of_Twitter.svg.png" alt="Twitter" width={40} />
        </a>
        <a href="#">
          <img
            src="images/Instagram_logo_2016.svg.webp"
            alt="Instagram"
            width={40}
          />
        </a>
        <a href="#">
          <img src="images/174857.png" alt="LinkedIn" width={40} />
        </a>
      </div>
      <p className="footer-copyright text-center pb-3 mb-3">
        &copy; 2024,
        <span> My Career Guidance App. All Rights Reserved.</span>
      </p>
    </footer>
  );
}

export default Footer;

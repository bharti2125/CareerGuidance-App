import React from "react";

function Location() {
    return(
        <div className="contact-page">
      {/* Header Section */}
      <h1>
        Contact Us: 
        <br />
        <span>Get in touch with us</span>
      </h1>

      {/* Info Section */}
      <div className="contact-info">
        <div className="info-card mt-5">
          <i className="fas fa-phone"></i>
          <h2>Call to ask any question</h2>
          <p>+91-9999900000</p>
        </div>
        <div className="info-card mt-5">
          <i className="fas fa-envelope"></i>
          <h2>Email us</h2>
          <p>example@123.com</p>
        </div>
        <div className="info-card mt-5">
          <i className="fas fa-map-marker-alt"></i>
          <h2>Visit our office</h2>
          <p>Noida, Uttar Pradesh</p>
        </div>
      </div>

      {/* Contact Form and Map Section */}
      <div className="contact-content">
        <div className="contact-form">
          <h2>Contact Form:</h2>
          <form>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>
            <div className="form-group">
              <label>Email ID</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" placeholder="Enter your phone number" />
            </div>
            <div className="form-group">
              <label>Leave a Message</label>
              <textarea placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

        <div className="map">
          <h2>Find Us:</h2>
          <iframe
            src="https://www.google.com/maps?q=noida,+uttar+pradesh&output=embed"
            width="100%"
            height="500"
            // style={{ border: "2px solid black" }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map Location"
          ></iframe>
        </div>
      </div>
    </div>
    );
}

export default Location;
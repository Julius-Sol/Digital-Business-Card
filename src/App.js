import React from "react";
import TitleSection from "./component/TitleSection.js";
import Information from "./component/Information.js";
import Footer from "./component/Footer";
import profile from "./images/profile.png";

function App() {
  return (
    <div className="main">
      <img className="profile" src={profile} alt="Profile Picture" />
      <TitleSection />
      <div className="button-container">
        <button className="email-button">Email</button>
      </div>
      <Information
        heading="About"
        content="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
      />
      <Information heading="Intrests" content="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic." />
      <Footer />
    </div>
  );
}

export default App;
